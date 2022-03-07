import React from 'react'

export default function Padding({children, padding}) {
    return (
        <div style={{padding: padding}}>
            {children}
        </div>
    )
}
