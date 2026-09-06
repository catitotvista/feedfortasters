# Feed for Tasters — sitio web

Sitio de marketing de Feed for Tasters (cakes personalizados, Barranquilla), construido con React + Vite + React Router a partir del design system de la marca (tokens, tipografía autohospedada, componentes y assets reales — sin recrear nada a mano).

## Páginas

- `/` — Inicio: hero con viñeta crimson, marquee de ocasiones, catálogo destacado, proceso de tres pasos, testimonio.
- `/catalogo` — Catálogo con tabs por ocasión y filtros de sabor.
- `/producto` — Detalle de The Raspberry Velvet.
- `/pedido` — Formulario de encargo con confirmación.
- `/nosotras` — Historia del taller.

## Estructura

- `src/tokens/` — tokens de marca (color, tipografía, espaciado, radios, sombra, movimiento) copiados 1:1 del design system.
- `src/fonts/` — Tartuffo, Noyh y Loverine autohospedadas.
- `src/components/` — primitivos de UI (`brand/`, `core/`, `forms/`, `feedback/`, `navigation/`), portados sin cambios del design system.
- `src/layout/` — header y footer del sitio.
- `src/pages/` — las 5 pantallas.
- `public/assets/` — logos, patrones, marcos y fotografía de producto.

## Desarrollo

```
npm install
npm run dev
```

## Nota sobre las fuentes

Tartuffo (Trial) y Noyh (DEMO) no incluyen á é í ó ú ñ — el stack cae a Playfair Display / Jost (Google Fonts) para esos glifos. Cuando lleguen los OTF licenciados con juego de caracteres completo, basta con reemplazar los archivos en `src/fonts/` con el mismo nombre.
