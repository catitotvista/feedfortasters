import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/core/Icon.jsx';
import { asset } from '../lib/asset.js';

export function SiteFooter() {
  return (
    <footer style={{ background: 'var(--ff-crimson-900)', color: 'var(--ff-parchment-100)' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-16) var(--gutter-inline)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <img src={asset('/assets/logos/logo-horizontal.svg')} alt="Feed for Tasters" style={{ height: 34, width: 'auto', filter: 'brightness(0) invert(1)', opacity: .92 }} />
          <p style={{ fontSize: 'var(--text-sm)', opacity: .7, maxWidth: '34ch' }}>Cakes personalizados y repostería artesanal. Barranquilla, Colombia.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-camel-300)' }}>Explorar</span>
          <Link to="/catalogo" style={{ color: 'var(--ff-parchment-100)', borderBottom: 'none', opacity: .8 }}>Catálogo</Link>
          <Link to="/pedido" style={{ color: 'var(--ff-parchment-100)', borderBottom: 'none', opacity: .8 }}>Encargar</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-sm)' }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-camel-300)' }}>Escríbenos</span>
          <span style={{ opacity: .8, display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="instagram" size={16} /> @feedfortasters</span>
          <span style={{ opacity: .8, display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="message-circle" size={16} /> +57 320 543 7772</span>
        </div>
      </div>
    </footer>
  );
}
