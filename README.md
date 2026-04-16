# Eventos Metropolitanos

Aplicacion Laravel 13 + React (Vite) para gestion y documentacion de eventos.

## Requisitos

- PHP 8.3+
- Composer 2+
- Node.js 20+
- npm 10+

## Instalacion inicial

```bash
composer setup
```

Este comando:
- instala dependencias PHP
- crea `.env` si no existe
- genera la key de Laravel
- ejecuta migraciones
- instala dependencias de frontend
- compila assets

## Desarrollo (un solo comando)

```bash
composer dev
```

Levanta en paralelo:
- Laravel server: http://127.0.0.1:8000
- Queue listener
- Vite dev server

## Rutas principales

- http://127.0.0.1:8000/
- http://127.0.0.1:8000/documentacion
- http://127.0.0.1:8000/caso-estudio

## Validacion rapida

```bash
npm run build
php artisan test
```

## Notas

- La app esta configurada como SPA: cualquier ruta web devuelve la vista `app`.
- Si usas Herd, tambien puedes abrir `APP_URL` configurada en tu `.env`.
