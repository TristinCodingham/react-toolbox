import React from 'react';

export default function Grid({ children, direction, align, justify }) {
  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: direction,
        alignItems: align,
        justifyContent: justify,
        height: 'inherit',
      }}
    >
      {children}
    </div>
  );
}
