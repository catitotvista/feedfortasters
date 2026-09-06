import React from 'react';
import { Icon } from './Icon.jsx';

const sizes = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon = 'heart', label, variant = 'ghost', size = 'md', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: { background: hover ? 'var(--action-secondary-hover)' : 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--action-secondary-hover)' : 'transparent', color: 'var(--ff-crimson-600)', border: '1px solid var(--border-hairline)' },
    solid: { background: hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', color: 'var(--text-on-crimson)', border: '1px solid transparent' },
    onCrimson: { background: hover ? 'rgba(242,239,232,.22)' : 'rgba(242,239,232,.12)', color: 'var(--ff-parchment-100)', border: '1px solid rgba(242,239,232,.35)' }
  };
  return (
    <button
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-pill)', cursor: 'pointer', transition: 'var(--transition-control)', ...variants[variant], ...style }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} />
    </button>
  );
}
