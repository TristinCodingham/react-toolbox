import React from 'react'

export default function Margin({children, margin}) {
    return (
        <div style={{margin: margin}}>
            {children}
        </div>
    )
}
