import React, { useState } from 'react';

export default function StateInput() {
    const [input, setInput] = useState("");
    const onChange = e => {
        const newInput = e.target.value;
        setInput(newInput);
    }
    return (
        <div>
            <input type="text" placeholder="Type something.." onChange={onChange} />
            {input}
        </div>
    )
}
