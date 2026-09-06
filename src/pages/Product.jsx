import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button.jsx';
import { Badge } from '../components/core/Badge.jsx';
import { Icon } from '../components/core/Icon.jsx';
import { Card } from '../components/core/Card.jsx';
import { ScriptQuote } from '../components/brand/ScriptQuote.jsx';
import { OrnamentDivider } from '../components/brand/OrnamentDivider.jsx';
import { Select } from '../components/forms/Select.jsx';
import { Radio } from '../components/forms/Radio.jsx';
import { useToast } from '../context/ToastContext.jsx';
import { asset } from '../lib/asset.js';

export default function Product() {
  const navigate = useNavigate();
  const notify = useToast();
  const [size, setSize] = React.useState('Media libra');
  const [entrega, setEntrega] = React.useState('taller');

  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-16) var(--gutter-inline)', display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)', gap: 'var(--space-16)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ borderRadius: 'var(--radius-image)', overflow: 'hidden', background: 'var(--gradient-crimson-vignette)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', boxShadow: 'var(--shadow-photo)' }}>
          <img src={asset('/assets/photos/raspberry-cake-cropped.png')} alt="The Raspberry Velvet" style={{ width: '100%', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-3)' }}>
          {['raspberry-cake.png', 'raspberry-cake-side.png', 'raspberry-cake-side-cropped.png'].map((p, i) => (
            <div key={p} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '1', border: i === 0 ? '1.5px solid var(--ff-crimson-600)' : '1px solid var(--border-hairline)' }}>
              <img src={asset('/assets/photos/' + p)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}><Badge tone="crimson">Nuevo</Badge><Badge tone="parchment">Por encargo</Badge></div>
        <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-display-lg)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)', margin: 0 }}>The Raspberry Velvet</h1>
        <ScriptQuote size="md" align="left">love at first bite</ScriptQuote>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', maxWidth: '46ch' }}>
          Bizcocho de terciopelo rojo, buttercream de vainilla francesa batido lento y frambuesas frescas encima. El que más pedimos que se repita.
        </p>
        <OrnamentDivider />
        <Select label="Tamaño" value={size} onChange={(e) => setSize(e.target.value)} options={['Cuarto de libra', 'Media libra', 'Una libra', 'Dos pisos']} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Entrega</span>
          <Radio name="entrega" label="Recogen en el taller" description="Alto Prado, Barranquilla" checked={entrega === 'taller'} onChange={() => setEntrega('taller')} />
          <Radio name="entrega" label="Domicilio" description="Dentro de Barranquilla · $18.000" checked={entrega === 'dom'} onChange={() => setEntrega('dom')} />
        </div>
        <Card tone="outline" padding="var(--space-4)">
          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            <Icon name="clock" size={18} color="var(--ff-camel-600)" />
            Pedimos tres días de anticipación. Para dos pisos, una semana.
          </div>
        </Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-h2)' }}>$180.000</span>
          <Button size="lg" onClick={() => navigate('/pedido')}>Cuéntanos tu idea</Button>
          <Button size="lg" variant="ghost" onClick={() => notify('Guardado en tus favoritos')} iconLeft={<Icon name="heart" size={17} />}>Guardar</Button>
        </div>
      </div>
    </div>
  );
}
