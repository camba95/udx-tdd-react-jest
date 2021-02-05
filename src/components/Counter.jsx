import React from 'react';

const Counter = () => {
  return (
    <div data-test="component-counter">
      <h1 data-test="counter-display">
        The counter is currently
      </h1>
      <button data-test="increment-button">
        Increment counter
      </button>
    </div>
  )
};

export default Counter;
