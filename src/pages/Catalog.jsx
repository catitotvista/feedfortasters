import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/core/SectionHeading.jsx';
import { Tabs } from '../components/navigation/Tabs.jsx';
import { Tag } from '../components/core/Tag.jsx';
import { ProductCard } from '../components/core/ProductCard.jsx';
import { CAKES } from '../data/cakes.js';

export default function Catalog() {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState('Todos');
  const [flavours, setFlavours] = React.useState(['Frambuesa']);
  const toggle = (f) => setFlavours((v) => (v.includes(f) ? v.filter((x) => x !== f) : [...v, f]));
  const all = [...CAKES, ...CAKES.map((c) => ({ ...c, id: c.id + '-b', badge: undefined }))];

  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-16) var(--gutter-inline)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <SectionHeading eyebrow="Todo lo que horneamos" title="El catálogo" script="y lo que aún no está aquí, también lo hacemos" />
      <Tabs items={['Todos', 'Cumpleaños', 'Bodas', 'Baby shower', 'Corporativos']} value={tab} onChange={setTab} />
      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
        {['Frambuesa', 'Chocolate', 'Red velvet', 'Vainilla', 'Limón'].map((f) => (
          <Tag key={f} selected={flavours.includes(f)} onClick={() => toggle(f)}>{f}</Tag>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 'var(--space-8)' }}>
        {all.map((c) => <ProductCard key={c.id} {...c} onSelect={() => navigate('/producto')} />)}
      </div>
    </div>
  );
}
