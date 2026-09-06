# Feed for Tasters — sitio web

Sitio de marketing de Feed for Tasters (cakes personalizados, Barranquilla), construido con React + Vite + React Router a partir del design system de la marca (tokens, tipografía, componentes y assets reales — sin recrear nada a mano).

## Páginas

- `/` — Inicio: hero con viñeta crimson, marquee de ocasiones, catálogo destacado, proceso de tres pasos, testimonio.
- `/catalogo` — Catálogo con tabs por ocasión y filtros de sabor.
- `/producto` — Detalle de The Raspberry Velvet.
- `/pedido` — Formulario de encargo con confirmación.
- `/nosotras` — Historia del taller.

## Estructura

- `src/tokens/` — tokens de marca (color, tipografía, espaciado, radios, sombra, movimiento) copiados 1:1 del design system.
- `src/components/` — primitivos de UI (`brand/`, `core/`, `forms/`, `feedback/`, `navigation/`), portados sin cambios del design system.
- `src/layout/` — header y footer del sitio.
- `src/pages/` — las 5 pantallas.
- `public/assets/` — logos, patrones, marcos y fotografía de producto.

## Desarrollo

```
npm install
npm run dev
```

## Tipografía

Familias de licencia libre, servidas desde Google Fonts (`tokens/fonts.css`) — sin costo de licencia y con el juego de caracteres Latin Extended completo (á é í ó ú ñ de fábrica):

| Uso | Familia | Antes |
|---|---|---|
| Títulos (`--font-display`) | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Tartuffo |
| Cuerpo (`--font-body`) | [Jost](https://fonts.google.com/specimen/Jost) | Noyh |
| Quotes (`--font-script`) | [Sacramento](https://fonts.google.com/specimen/Sacramento) | Loverine |
