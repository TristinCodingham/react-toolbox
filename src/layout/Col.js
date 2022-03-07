import React from 'react';

export default function Col({children, span}) {
    return (
        <div style={{gridColumn: `span ${span}`}}>
            {children}
        </div>
    )
}