import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button.jsx';
import { Icon } from '../components/core/Icon.jsx';
import { SectionHeading } from '../components/core/SectionHeading.jsx';
import { ProductCard } from '../components/core/ProductCard.jsx';
import { Card } from '../components/core/Card.jsx';
import { ScriptQuote } from '../components/brand/ScriptQuote.jsx';
import { PatternPanel } from '../components/brand/PatternPanel.jsx';
import { OrnamentDivider } from '../components/brand/OrnamentDivider.jsx';
import { CAKES } from '../data/cakes.js';
import { asset } from '../lib/asset.js';

function Hero() {
  const navigate = useNavigate();
  return (
    <section style={{ background: 'var(--gradient-crimson-vignette)', color: 'var(--ff-parchment-100)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'clamp(48px,7vw,92px) var(--gutter-inline) 0', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-10)', alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', paddingBottom: 'clamp(40px,6vw,88px)' }}>
          <span className="ff-eyebrow" style={{ color: 'var(--ff-camel-300)' }}>Barranquilla · por encargo</span>
          <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-display-xl)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', color: 'var(--ff-parchment-100)', margin: 0 }}>
            Un cake que se<br />parece a ella
          </h1>
          <ScriptQuote size="md" tone="parchment" quotes={false} align="left" style={{ maxWidth: 420 }}>hecho para esa persona</ScriptQuote>
          <p style={{ maxWidth: '46ch', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-body)', opacity: .9 }}>
            Diseñamos cada torta alrededor de una historia: la persona, la ocasión, el chiste interno que solo ustedes entienden.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Button variant="onCrimson" size="lg" onClick={() => navigate('/catalogo')} iconRight={<Icon name="arrow-right" size={17} />}>Ver el catálogo</Button>
            <Button variant="ghost" size="lg" style={{ color: 'var(--ff-parchment-100)' }} onClick={() => navigate('/pedido')}>Cuéntanos tu idea</Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <img src={asset('/assets/photos/raspberry-cake-cropped.png')} alt="Raspberry Velvet" style={{ width: '100%', maxWidth: 520, display: 'block' }} />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['Cumpleaños', 'Bodas', 'Baby shower', 'Aniversarios', 'Solo porque sí', 'Corporativos'];
  return (
    <div style={{ background: 'var(--ff-crimson-900)', color: 'var(--ff-parchment-100)', padding: '14px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 'var(--space-10)', justifyContent: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase' }}>
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

function Featured() {
  const navigate = useNavigate();
  return (
    <section style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter-inline)', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
        <SectionHeading eyebrow="El catálogo" title="Cakes con nombre propio" script="cada uno tiene su historia" />
        <Button variant="secondary" onClick={() => navigate('/catalogo')}>Verlos todos</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 'var(--space-8)' }}>
        {CAKES.map((c) => <ProductCard key={c.id} {...c} onSelect={() => navigate('/producto')} />)}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['message-circle', 'Nos cuentas', 'La persona, la fecha, los colores, la anécdota.'],
    ['pencil-line', 'Lo diseñamos', 'Te mandamos un boceto y ajustamos hasta que sea ella.'],
    ['cake', 'Lo horneamos', 'Tres días antes empezamos. Bizcocho fresco, buttercream del día.'],
  ];
  return (
    <PatternPanel ground="crimson" scale={340} opacity={0.16} radius="0px">
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--section-y) var(--gutter-inline)', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
        <SectionHeading eyebrow="Cómo trabajamos" title="Tres pasos, ningún formulario eterno" tone="parchment" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 'var(--space-6)' }}>
          {steps.map(([icon, t, d], i) => (
            <Card key={t} tone="parchment" padding="var(--space-6)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Icon name={icon} size={22} color="var(--ff-crimson-600)" />
                <span className="ff-eyebrow">0{i + 1}</span>
                <h3 style={{ fontSize: 'var(--text-h3)' }}>{t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PatternPanel>
  );
}

function Testimonial() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: 'var(--section-y) var(--gutter-inline)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', textAlign: 'center' }}>
      <OrnamentDivider style={{ width: '100%' }} />
      <ScriptQuote size="lg" tone="crimson">Lloré antes de partirlo</ScriptQuote>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', maxWidth: '52ch' }}>
        Le pusieron el perrito, el color de su cuarto y la frase que le dice su mamá. No parecía una torta comprada.
      </p>
      <span className="ff-eyebrow">Valentina · cumpleaños de Emilia</span>
      <OrnamentDivider style={{ width: '100%' }} />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Featured />
      <Process />
      <Testimonial />
    </>
  );
}
