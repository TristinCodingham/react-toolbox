import React from 'react';

export default function Align({children, align}) {
    return (
        <div style={{alignItems: align}}>
            {children}
        </div>
    )
}