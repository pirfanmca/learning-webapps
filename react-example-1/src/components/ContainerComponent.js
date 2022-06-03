import React, { useState } from 'react'
import UseEffectExample3 from './UseEffectExample3';

function ContainerComponent() {
    const [toggle, setToggle]= useState(false);
  return (
    <div>
        {toggle && <UseEffectExample3/>}
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default ContainerComponent