import React from 'react';

export default function Button(props) {
  return (
    <button
      style={{
        ...props?.style,
        padding: props?.padding || '5px 20px',
        border: props?.border || 'thin solid #ccc',
        borderRadius: props?.radius || '5px',
        backgroundColor: props?.bg || '#fff',
        width: props?.width || 'auto',
        cursor: props?.cursor || 'pointer',
      }}
      {...props}
    >
      {props?.children}
    </button>
  );
}
