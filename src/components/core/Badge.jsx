import React from 'react';

const tones = {
  crimson: { background: 'var(--ff-crimson-600)', color: 'var(--ff-parchment-100)' },
  camel: { background: 'var(--ff-camel-500)', color: 'var(--ff-onyx)' },
  parchment: { background: 'var(--ff-parchment-200)', color: 'var(--ff-ink-800)' },
  onyx: { background: 'var(--ff-onyx)', color: 'var(--ff-parchment-100)' },
  success: { background: 'var(--status-success-soft)', color: 'var(--status-success)' },
  warning: { background: 'var(--status-warning-soft)', color: 'var(--status-warning)' }
};

export function Badge({ children, tone = 'crimson', style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', lineHeight: 1.2,
        ...tones[tone], ...style
      }}
      {...rest}
    >{children}</span>
  );
}
