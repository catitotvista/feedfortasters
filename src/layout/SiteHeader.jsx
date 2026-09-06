import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../components/brand/Logo.jsx';
import { Button } from '../components/core/Button.jsx';
import { Icon } from '../components/core/Icon.jsx';

const links = [
  ['/catalogo', 'Catálogo'],
  ['/nosotras', 'Nosotras'],
];

export function SiteHeader() {
  const navigate = useNavigate();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(242,239,232,.88)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '18px var(--gutter-inline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link to="/" style={{ borderBottom: 'none', display: 'flex' }}>
          <Logo variant="horizontal" height={30} />
        </Link>
        <nav style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontSize: 'var(--text-sm)',
                letterSpacing: '.02em',
                borderBottom: '1px solid ' + (isActive ? 'var(--ff-crimson-600)' : 'transparent'),
                color: isActive ? 'var(--ff-crimson-600)' : 'var(--text-body)',
                paddingBottom: 2,
              })}
            >
              {label}
            </NavLink>
          ))}
          <Button size="sm" variant="secondary" iconLeft={<Icon name="message-circle" size={15} />} onClick={() => navigate('/pedido')}>
            Escríbenos
          </Button>
        </nav>
      </div>
    </header>
  );
}
