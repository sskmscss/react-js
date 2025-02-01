import React from 'react';

export default function Printer(props) {
  // You can't do props.name = "Initial"; (this would throw an error)
  
  // Instead, you can modify the value locally (without affecting the prop)
  const handleNameChange = () => {
    const newName = 'Updated Name from Child'; // Modify locally
    props.updateName(newName); // Notify the parent to update its state
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Child's Name (from props): {props.name}</p>
      <button onClick={handleNameChange}>Update Name from Child</button>
    </div>
  );
}
