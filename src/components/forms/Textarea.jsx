import React from 'react';

const inputStyleTa = (focus, error) => ({
  width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
  color: 'var(--text-body)', background: 'var(--ff-white)', padding: '13px 16px',
  border: '1px solid ' + (error ? 'var(--status-danger)' : focus ? 'var(--ff-camel-500)' : 'var(--border-hairline)'),
  borderRadius: 'var(--radius-sm)', outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'var(--transition-control)'
});

function FieldTa({ label, hint, error, required, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-body)' }}>
      {label ? <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)' }}>{label}{required ? <span style={{ color: 'var(--ff-crimson-600)' }}> *</span> : null}</span> : null}
      {children}
      {error ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--status-danger)' }}>{error}</span> : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{hint}</span> : null}
    </label>
  );
}

export function Textarea({ label, hint, error, required, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <FieldTa label={label} hint={hint} error={error} required={required}>
      <textarea rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...inputStyleTa(focus, error), resize: 'vertical', lineHeight: 'var(--leading-body)', ...style }} {...rest} />
    </FieldTa>
  );
}
