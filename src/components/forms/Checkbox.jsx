import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontFamily: 'var(--font-body)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 20, height: 20, flex: '0 0 auto', marginTop: 2, borderRadius: 'var(--radius-xs)', border: '1px solid ' + (checked ? 'var(--ff-crimson-600)' : 'var(--border-hairline)'), background: checked ? 'var(--ff-crimson-600)' : 'var(--ff-white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-control)' }}>
        {checked ? <Icon name="check" size={14} color="var(--ff-parchment-100)" /> : null}
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{label}</span>
        {description ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{description}</span> : null}
      </span>
    </label>
  );
}
