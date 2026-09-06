import React from 'react';

export function Switch({ label, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', gap: 'var(--space-3)', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 42, height: 24, borderRadius: '999px', background: checked ? 'var(--ff-crimson-600)' : 'var(--ff-parchment-300)', position: 'relative', transition: 'var(--transition-control)', flex: '0 0 auto' }}>
        <span style={{ position: 'absolute', top: 3, left: checked ? 21 : 3, width: 18, height: 18, borderRadius: '999px', background: 'var(--ff-white)', boxShadow: 'var(--shadow-xs)', transition: 'left var(--duration-fast) var(--ease-standard)' }} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
