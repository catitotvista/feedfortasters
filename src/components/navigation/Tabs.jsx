import React from 'react';

export function Tabs({ items = [], value, onChange, style, ...rest }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-hairline)', ...style }} {...rest}>
      {items.map((it) => {
        const id = typeof it === 'string' ? it : it.value;
        const text = typeof it === 'string' ? it : it.label;
        const active = id === value;
        return (
          <button key={id} role="tab" aria-selected={active} onClick={() => onChange && onChange(id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', letterSpacing: '0.02em', color: active ? 'var(--ff-crimson-600)' : 'var(--text-muted)', borderBottom: '1.5px solid ' + (active ? 'var(--ff-crimson-600)' : 'transparent'), marginBottom: -1, transition: 'var(--transition-control)' }}>
            {text}
          </button>
        );
      })}
    </div>
  );
}
