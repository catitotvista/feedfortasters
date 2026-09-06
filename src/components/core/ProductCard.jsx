import React from 'react';
import { Badge } from './Badge.jsx';
import { IconButton } from './IconButton.jsx';

export function ProductCard({ image, name, script, meta, price, badge, onSelect, saved = false, onSave, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', cursor: onSelect ? 'pointer' : undefined, ...style }}
      {...rest}
    >
      <div style={{ position: 'relative', borderRadius: 'var(--radius-image)', overflow: 'hidden', background: 'var(--ff-parchment-200)', aspectRatio: '4 / 5' }}>
        {image ? <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform var(--duration-slow) var(--ease-soft)', transform: hover ? 'scale(1.035)' : 'scale(1)' }} /> : null}
        {badge ? <div style={{ position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)' }}><Badge tone="crimson">{badge}</Badge></div> : null}
        {onSave ? <div style={{ position: 'absolute', top: 'var(--space-2)', right: 'var(--space-2)' }}><IconButton icon={saved ? 'heart' : 'heart'} label="Guardar" variant="onCrimson" size="sm" onClick={(e) => { e.stopPropagation(); onSave(e); }} /></div> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-4)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-h3)', lineHeight: 1.15, margin: 0, color: 'var(--text-heading)' }}>{name}</h3>
          {price ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{price}</span> : null}
        </div>
        {script ? <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-script-xs)', lineHeight: 1.1, color: 'var(--text-subtitle)', margin: 0 }}>{script}</p> : null}
        {meta ? <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0 }}>{meta}</p> : null}
      </div>
    </article>
  );
}
