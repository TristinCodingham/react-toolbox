import React from 'react'

export default function Spacer({children, height}) {
    return (
        <div style={{height: height}}>
            {children}
        </div>
    )
}
