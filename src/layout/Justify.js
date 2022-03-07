import React from 'react'

export default function Justify({children, justify}) {
    return (
        <div style={{justifyContent: justify}}>
            {children}
        </div>
    )
}
