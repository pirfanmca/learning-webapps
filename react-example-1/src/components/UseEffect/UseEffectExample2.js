import React, { useEffect, useState } from "react";
import CounterCustomHooks from "./CounterCustomHooks";

function UseEffectExample2() {
  const [count, increment, decrement] = CounterCustomHooks();
  const [data, setData] = useState(null); // []
  // const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("only one time");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <p> UseEffectExample2 Component using Custom hooks</p>
      <p>Counter Value :- {count}</p>
      <div>
        <button style={{ padding: "10px", marginRight:'10px' }} onClick={increment}>
          Increment
        </button>
        <button style={{ padding: "10px" }} onClick={decrement}>
          Decrement
        </button>
      </div>
      <div>
        <p>API Response</p>
        {data && (
          <div>
            <div>ID: {data.id} </div>
            <div>Title: {data.title}</div>
            <div>Complete {JSON.stringify(data.completed)}</div>
          </div>
        )}
      </div>
      {/* <button onClick={() => setCount(count+1)}>Increment</button> */}
    </div>
  );
}

export default UseEffectExample2;
