import React from 'react';

export function Card({ children, tone = 'parchment', padding = 'var(--space-6)', interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    parchment: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-hairline)' },
    white: { background: 'var(--ff-white)', color: 'var(--text-body)', border: '1px solid var(--border-hairline)' },
    crimson: { background: 'var(--ff-crimson-600)', color: 'var(--text-on-crimson)', border: '1px solid var(--ff-crimson-600)' },
    onyx: { background: 'var(--ff-onyx)', color: 'var(--text-on-onyx)', border: '1px solid var(--ff-onyx)' },
    outline: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-camel)' }
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-card)', padding, transition: 'var(--transition-control)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(var(--lift-y))' : 'none',
        cursor: interactive ? 'pointer' : undefined,
        ...tones[tone], ...style
      }}
      {...rest}
    >{children}</div>
  );
}
