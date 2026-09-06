import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, script, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-6)' }} {...rest}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(22,22,22,.52)', backdropFilter: 'blur(3px)' }} />
      <div role="dialog" aria-modal="true" style={{ position: 'relative', width: '100%', maxWidth: width, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-hairline)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', ...style }}>
        {onClose ? <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)' }}><IconButton icon="x" label="Cerrar" variant="ghost" size="sm" onClick={onClose} /></div> : null}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {title ? <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-h2)', margin: 0, color: 'var(--text-heading)', paddingRight: 32 }}>{title}</h2> : null}
          {script ? <p style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--text-script-sm)', color: 'var(--ff-crimson-600)', margin: 0, lineHeight: 1 }}>{script}</p> : null}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-body)' }}>{children}</div>
        {footer ? <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', flexWrap: 'wrap' }}>{footer}</div> : null}
      </div>
    </div>
  );
}
