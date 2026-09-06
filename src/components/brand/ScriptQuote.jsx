import React from 'react';

export function ScriptQuote({ children, size = 'md', tone = 'crimson', quotes = true, rotate = 0, align = 'center', style, ...rest }) {
  const sizes = { sm: 'var(--text-script-sm)', md: 'var(--text-script-md)', lg: 'var(--text-script-lg)' };
  const tones = { crimson: 'var(--ff-crimson-600)', parchment: 'var(--ff-parchment-100)', onyx: 'var(--ff-onyx)', camel: 'var(--ff-camel-500)' };
  const color = tones[tone] || tones.crimson;
  return (
    <p
      style={{
        fontFamily: 'var(--font-script)',
        fontSize: sizes[size] || sizes.md,
        lineHeight: 1.05,
        textAlign: align,
        margin: 0,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        color,
        ...style
      }}
      {...rest}
    >
      {quotes ? '\u201C' : ''}{children}{quotes ? '\u201D' : ''}
    </p>
  );
}
