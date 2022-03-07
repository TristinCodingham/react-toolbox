import React, { useState } from 'react'

export default function StateButton() {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    return (
        <div className="app">
            <button onClick={decrement}>Decrement</button> 
            {counter} 
            <button onClick={increment}>Increment</button>
        </div>
    )
}
