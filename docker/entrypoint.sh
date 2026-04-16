#!/bin/ash
set -e

# Generate APP_KEY if not set
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

# Run migrations
php artisan migrate --force

# Start services
mkdir -p /run/supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
