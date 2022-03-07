import React from 'react';

const repeat = (cols) => {
    let template = "";
    for(let i = 0; i < cols; i++) template += "1fr ";
    return template.trimEnd();
}

export default function Row({children, cols = 12}) {
    return (
        <div style={{display: "grid", gridTemplateColumns: repeat(cols)}}>
            {children}
        </div>
    )
}