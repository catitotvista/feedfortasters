import React from 'react';

export function PatternPanel({ children, ground = 'parchment', scale = 320, opacity = 0.18, radius = 'var(--radius-card)', basePath = '/', style, ...rest }) {
  const grounds = { parchment: 'var(--ff-parchment-100)', crimson: 'var(--ff-crimson-600)', onyx: 'var(--ff-onyx)', white: 'var(--ff-white)' };
  const invert = ground === 'crimson' || ground === 'onyx';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: grounds[ground] || grounds.parchment, borderRadius: radius, ...style }} {...rest}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${(basePath || '') + 'assets/patterns/pattern-repeat.svg'})`,
          backgroundSize: scale + 'px auto',
          backgroundRepeat: 'repeat',
          opacity,
          filter: invert ? 'brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(180%) hue-rotate(4deg) brightness(103%)' : undefined,
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
