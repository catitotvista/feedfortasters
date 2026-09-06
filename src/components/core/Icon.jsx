import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.462.0/icons/';

export function Icon({ name = 'heart', size = 20, color = 'currentColor', strokeWidth, style, ...rest }) {
  const url = `url("${CDN}${name}.svg")`;
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block', width: size, height: size, flex: '0 0 auto',
        backgroundColor: color,
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskPosition: 'center', maskPosition: 'center',
        ...style
      }}
      {...rest}
    />
  );
}
