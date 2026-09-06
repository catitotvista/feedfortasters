import React from 'react';

export function SectionHeading({ eyebrow, title, script, align = 'left', tone = 'onyx', style, ...rest }) {
  const color = tone === 'parchment' ? 'var(--ff-parchment-100)' : 'var(--text-heading)';
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }} {...rest}>
      {eyebrow ? <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: tone === 'parchment' ? 'var(--ff-camel-300)' : 'var(--text-camel)' }}>{eyebrow}</span> : null}
      <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-display-lg)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)', fontWeight: 'var(--weight-regular)', color, margin: 0 }}>{title}</h2>
      {script ? <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-script-sm)', lineHeight: 1.05, color: tone === 'parchment' ? 'var(--ff-parchment-100)' : 'var(--text-subtitle)', margin: 0 }}>{script}</p> : null}
    </header>
  );
}
