import React from "react";
import CounterCustomHooks from "./CounterCustomHooks";

function Counter() {
  const [count, increment, decrement] = CounterCustomHooks();
  return (
    <div>
      <p> Counter Component using Custom hooks</p>
      <p>Counter Value :- {count}</p>
      <div>
        <button
          style={{ padding: "10px", marginRight: "10px" }}
          onClick={increment}
        >
          Increment
        </button>
        <button style={{ padding: "10px" }} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
