# Build stage
FROM node:20-alpine AS assets
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM php:8.3-fpm-alpine

# Install system dependencies
RUN apk add --no-cache \
    curl \
    nginx \
    supervisor \
    sqlite \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    freetype-dev \
    && rm -rf /var/cache/apk/*

# Install PHP extensions
RUN docker-php-ext-install \
    pdo \
    pdo_sqlite \
    gd \
    && docker-php-ext-enable pdo pdo_sqlite gd

# Set working directory
WORKDIR /app

# Copy application files
COPY --chown=nobody:nobody . .

# Copy built assets from assets stage
COPY --from=assets --chown=nobody:nobody /app/public/build ./public/build

# Install composer dependencies
COPY --chown=nobody:nobody composer.json composer.lock ./
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer && \
    composer install --no-dev --no-interaction --prefer-dist

# Create necessary directories
RUN mkdir -p storage/logs storage/framework/cache storage/framework/sessions && \
    chmod -R 775 storage bootstrap/cache

# Copy Nginx config
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy Supervisor config
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy entrypoint script
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port
EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
