import React from 'react';

export function Tag({ children, selected = false, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '8px 16px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1,
        transition: 'var(--transition-control)',
        background: selected ? 'var(--ff-crimson-600)' : hover ? 'var(--action-secondary-hover)' : 'transparent',
        color: selected ? 'var(--text-on-crimson)' : 'var(--text-body)',
        border: '1px solid ' + (selected ? 'var(--ff-crimson-600)' : 'var(--border-hairline)'),
        ...style
      }}
      {...rest}
    >
      {children}
      {onRemove ? <span onClick={(e) => { e.stopPropagation(); onRemove(e); }} style={{ opacity: 0.7, fontSize: 14 }}>×</span> : null}
    </span>
  );
}
