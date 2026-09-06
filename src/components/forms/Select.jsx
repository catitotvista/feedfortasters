import React from 'react';
import { Icon } from '../core/Icon.jsx';

const inputStyleSel = (focus, error) => ({
  width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
  color: 'var(--text-body)', background: 'var(--ff-white)', padding: '13px 16px',
  border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--ff-camel-500)' : 'var(--border-hairline)'),
  borderRadius: 'var(--radius-sm)', outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'var(--transition-control)'
});

function FieldSel({ label, hint, error, required, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-body)' }}>
      {label ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)' }}>{label}{required ? <span style={{ color: 'var(--ff-crimson-600)' }}> *</span> : null}</span> : null}
      {children}
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--status-danger)' }}>{error}</span> : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{hint}</span> : null}
    </label>
  );
}

export function Select({ label, hint, error, required, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <FieldSel label={label} hint={hint} error={error} required={required}>
      <span style={{ position: 'relative', display: 'block' }}>
        <select onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...inputStyleSel(focus, error), appearance: 'none', paddingRight: 44, ...style }} {...rest}>
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={18} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
      </span>
    </FieldSel>
  );
}
