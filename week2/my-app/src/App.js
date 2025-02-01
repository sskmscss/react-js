import React, { useState } from 'react';
import Printer from './Printer';
import Counter from './Counter';

export default function App() {
  const [name, setName] = useState('Initial Name'); // Parent state for name
  const [count, setCount] = useState(0); // Parent state for count

  // Function to update count in the parent component
  const updateCountFromChild = (newCount) => {
    setCount(newCount); // Update the count in parent state
  };

  // Function to update name in the parent component
  const updateNameFromChild = (newName) => {
    setName(newName); // Update the name in parent state
  };

  return (
    <div>
      <h1>Passing and Updating props.name from Parent to Child</h1>
      <Printer name={name} updateName={updateNameFromChild} />
      <Counter count={count} onCounterChange={updateCountFromChild} />
      <h2>Parent received name: {name}</h2>
      <h2>Parent count received: {count}</h2>
    </div>
  );
}
