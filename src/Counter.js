import React from 'react';

function Counter({ value, onIncrement }) {
  return (
    <div>
      <p>Counter value: {value}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Counter;