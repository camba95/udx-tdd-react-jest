import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-counter">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
      <button data-test="decrease-button" onClick={() => setCount(count - 1)}>
        Decrease counter
      </button>
    </div>
  )
};

export default Counter;
