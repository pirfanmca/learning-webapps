import React, { useState } from 'react'

function CounterCustomHooks() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

 return [count, increment, decrement];
}

export default CounterCustomHooks