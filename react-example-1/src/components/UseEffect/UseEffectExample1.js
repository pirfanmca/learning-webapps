import React, {useEffect, useState} from 'react';
// 16.8 - hooks 

function UseEffectExample1({age}) {
    const [count, setCount] = useState(0);
    const [name, setName]= useState('');

    useEffect(()=>{
        console.log("count useEffect");
        document.title = `${count} times clicked`
    },[count])

    useEffect(()=>{
        console.log("name useEffect", age);
        document.title = `${name} displayed`
    },[name,age])

    // useEffect(()=>{
    //     console.log("age useEffect");
    // },[age])
  
  return (
    <div>
        Count: {count}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectExample1