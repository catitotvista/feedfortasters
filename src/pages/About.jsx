import React from 'react';
import { SectionHeading } from '../components/core/SectionHeading.jsx';
import { Card } from '../components/core/Card.jsx';
import { Icon } from '../components/core/Icon.jsx';
import { ScriptQuote } from '../components/brand/ScriptQuote.jsx';
import { PatternPanel } from '../components/brand/PatternPanel.jsx';

export default function About() {
  return (
    <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: 'var(--space-16) var(--gutter-inline)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-12)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <SectionHeading eyebrow="Nosotras" title="Un taller pequeño en Barranquilla" script="y muchas ganas de que te guste" />
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', maxWidth: '48ch' }}>
            Horneamos por encargo, en cantidades pequeñas, porque cada cake se diseña alrededor de una persona. No tenemos vitrina ni catálogo infinito: tenemos tiempo para pensar el tuyo.
          </p>
          <ScriptQuote size="md" align="left" quotes={false}>hecho especialmente para esa persona</ScriptQuote>
        </div>
        <div style={{ borderRadius: 'var(--radius-image)', overflow: 'hidden', boxShadow: 'var(--shadow-photo)' }}>
          <img src="/assets/photos/raspberry-cake-side.png" alt="Taller" style={{ width: '100%', display: 'block' }} />
        </div>
      </div>
      <PatternPanel ground="parchment" scale={300} opacity={0.14}>
        <div style={{ padding: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 'var(--space-6)' }}>
          {[['heart', 'Por encargo', 'Nada se hornea antes de que exista una historia detrás.'], ['sparkles', 'Detalle a detalle', 'El color exacto, la letra, la frase que solo ustedes entienden.'], ['map-pin', 'Barranquilla', 'Recoges en el taller o te lo llevamos.']].map(([i, t, d]) => (
            <Card key={t} tone="white" padding="var(--space-6)">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Icon name={i} size={22} color="var(--ff-crimson-600)" />
                <h3 style={{ fontSize: 'var(--text-h3)' }}>{t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{d}</p>
              </div>
            </Card>
          ))}
        </div>
      </PatternPanel>
    </div>
  );
}
