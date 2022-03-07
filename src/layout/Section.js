import React from 'react'

export default function Section({children, margin}) {
    return (
        <div style={{margin: `${margin} 0`}}>
            {children}
        </div>
    )
}
