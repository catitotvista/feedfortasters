import React from 'react';

export function Monogram({ size = 64, ground = 'none', basePath = import.meta.env.BASE_URL, style, ...rest }) {
  const grounds = {
    none: { background: 'transparent', padding: 0, borderRadius: 0, border: 'none' },
    crimson: { background: 'var(--ff-crimson-600)', padding: size * 0.22, borderRadius: '999px', border: 'none' },
    parchment: { background: 'var(--ff-parchment-100)', padding: size * 0.22, borderRadius: '999px', border: 'none' },
    outline: { background: 'transparent', padding: size * 0.22, borderRadius: '999px', border: '1.5px solid var(--border-camel)' }
  };
  const g = grounds[ground] || grounds.none;
  const invert = ground === 'crimson';
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'content-box', width: size, height: size, ...g, ...style }}
      {...rest}
    >
      <img
        src={(basePath || '') + 'assets/logos/monogram.svg'}
        alt="Feed for Tasters monogram"
        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: invert ? 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(180%) hue-rotate(4deg) brightness(103%)' : undefined }}
      />
    </span>
  );
}
