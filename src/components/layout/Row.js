import React from 'react';

export default function Row({children, cols = 12}) {
    return (
        <div style={{display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`}}>
            {children}
        </div>
    )
}