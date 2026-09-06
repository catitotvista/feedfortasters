import React from 'react';

export function Radio({ label, description, checked = false, name, value, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontFamily: 'var(--font-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, flex: '0 0 auto', marginTop: 2, borderRadius: '999px', border: '1px solid ' + (checked ? 'var(--ff-crimson-600)' : 'var(--border-hairline)'), background: 'var(--ff-white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-control)' }}>
        {checked ? <span style={{ width: 10, height: 10, borderRadius: '999px', background: 'var(--ff-crimson-600)' }} /> : null}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{label}</span>
        {description ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{description}</span> : null}
      </span>
    </label>
  );
}
