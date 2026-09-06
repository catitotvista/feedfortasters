import React from 'react';
import { Icon } from '../core/Icon.jsx';

const tones = {
  neutral: { background: 'var(--ff-onyx)', color: 'var(--ff-parchment-100)', icon: 'sparkles' },
  success: { background: 'var(--status-success)', color: 'var(--ff-parchment-100)', icon: 'check' },
  warning: { background: 'var(--status-warning)', color: 'var(--ff-onyx)', icon: 'triangle-alert' },
  danger: { background: 'var(--ff-crimson-600)', color: 'var(--ff-parchment-100)', icon: 'info' }
};

export function Toast({ children, tone = 'neutral', onDismiss, style, ...rest }) {
  const t = tones[tone] || tones.neutral;
  return (
    <div role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', padding: '13px 18px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', background: t.background, color: t.color, ...style }} {...rest}>
      <Icon name={t.icon} size={17} />
      <span>{children}</span>
      {onDismiss ? <span onClick={onDismiss} style={{ cursor: 'pointer', opacity: 0.7, paddingLeft: 4 }}>×</span> : null}
    </div>
  );
}
