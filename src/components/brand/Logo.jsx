import React from 'react';

const SOURCES = {
  horizontal: 'assets/logos/logo-horizontal.svg',
  logotipo: 'assets/logos/logotipo.svg',
  monogram: 'assets/logos/monogram.svg',
  'monogram-badge': 'assets/logos/monogram-badge-red.svg',
  'monogram-badge-beige': 'assets/logos/monogram-badge-beige.svg',
  'monogram-crimson-on-pearl': 'assets/logos/monogram-crimson-on-pearl.svg',
  'monogram-pearl-on-crimson': 'assets/logos/monogram-pearl-on-crimson.svg'
};

export function Logo({ variant = 'horizontal', height = 48, basePath = import.meta.env.BASE_URL, tone, style, ...rest }) {
  const src = (basePath || '') + (SOURCES[variant] || SOURCES.horizontal);
  const filter = tone === 'parchment'
    ? 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(180%) hue-rotate(4deg) brightness(103%)'
    : tone === 'onyx' ? 'brightness(0)' : undefined;
  return (
    <img
      src={src}
      alt="Feed for Tasters"
      style={{ height: typeof height === 'number' ? height + 'px' : height, width: 'auto', display: 'block', filter, ...style }}
      {...rest}
    />
  );
}
