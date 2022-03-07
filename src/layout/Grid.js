import React from 'react'

export default function gGid({children, flow}) {
    return (
        <div style={{display: "grid", gridAutoFlow: flow}}>
            {children}
        </div>
    )
}
