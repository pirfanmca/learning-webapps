import React, { useEffect, useState } from 'react'

function UseEffectExample3() {
    const [x, setX] = useState(0);

    useEffect(()=>{
        document.addEventListener('mousemove', callFunction);
        return () =>  document.removeEventListener('mousemove', callFunction);
    })

    function callFunction(event){
        setX(event.clientX)
    }
  return (
    <div>
        Client X Value  {x}
    </div>
  )
}

export default UseEffectExample3