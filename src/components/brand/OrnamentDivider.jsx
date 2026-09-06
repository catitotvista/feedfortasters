import React from 'react';

export function OrnamentDivider({ tone = 'camel', basePath = '/', style, ...rest }) {
  const color = tone === 'crimson' ? 'var(--ff-crimson-600)' : tone === 'parchment' ? 'var(--ff-parchment-300)' : 'var(--ff-camel-500)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', ...style }} {...rest}>
      <span style={{ flex: 1, height: 1, background: color, opacity: 0.6 }} />
      <img src={(basePath || '') + 'assets/logos/monogram.svg'} alt="" aria-hidden="true" style={{ height: 20, width: 'auto', opacity: tone === 'camel' ? 0.75 : 1 }} />
      <span style={{ flex: 1, height: 1, background: color, opacity: 0.6 }} />
    </div>
  );
}
