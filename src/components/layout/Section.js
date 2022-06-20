import React from 'react';

export default function Section({ children, margin }) {
  return <section style={{ margin: `${margin} 0` }}>{children}</section>;
}
