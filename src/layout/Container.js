import React from 'react'

export default function Container({children, padding}) {
    return (
        <div style={{padding: `0 ${padding}`}}>
            {children}
        </div>
    )
}
