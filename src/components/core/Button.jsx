import React from 'react';

const base = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
  fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)', letterSpacing: '0.04em',
  border: '1px solid transparent', borderRadius: 'var(--radius-control)', cursor: 'pointer',
  transition: 'var(--transition-control)', textDecoration: 'none', whiteSpace: 'nowrap', lineHeight: 1
};

const sizes = {
  sm: { padding: '9px 18px', fontSize: 'var(--text-xs)' },
  md: { padding: '13px 26px', fontSize: 'var(--text-sm)' },
  lg: { padding: '17px 34px', fontSize: 'var(--text-md)' }
};

const variants = {
  primary: { background: 'var(--action-primary)', color: 'var(--text-on-crimson)', borderColor: 'var(--action-primary)' },
  secondary: { background: 'transparent', color: 'var(--ff-crimson-600)', borderColor: 'var(--ff-crimson-600)' },
  ghost: { background: 'transparent', color: 'var(--text-body)', borderColor: 'transparent' },
  onCrimson: { background: 'var(--ff-parchment-100)', color: 'var(--ff-crimson-700)', borderColor: 'var(--ff-parchment-100)' },
  camel: { background: 'var(--ff-camel-500)', color: 'var(--ff-onyx)', borderColor: 'var(--ff-camel-500)' },
  crimsonOutline: { background: 'var(--ff-crimson-600)', color: 'var(--ff-parchment-100)', borderColor: 'var(--ff-parchment-100)' }
};

const hovers = {
  primary: { background: 'var(--action-primary-hover)', borderColor: 'var(--action-primary-hover)' },
  secondary: { background: 'var(--action-secondary-hover)' },
  ghost: { background: 'var(--action-secondary-hover)', color: 'var(--ff-crimson-700)' },
  onCrimson: { background: 'var(--ff-white)', borderColor: 'var(--ff-white)' },
  camel: { background: 'var(--ff-camel-600)', borderColor: 'var(--ff-camel-600)' },
  crimsonOutline: { background: 'var(--ff-crimson-700)' }
};

export function Button({ children, variant = 'primary', size = 'md', iconLeft, iconRight, disabled = false, block = false, as = 'button', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      disabled={as === 'button' ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base, ...sizes[size], ...variants[variant],
        ...(hover && !disabled ? hovers[variant] : null),
        width: block ? '100%' : undefined,
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      {...rest}
    >
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
