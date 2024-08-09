import React, { useState } from 'react';

function CityInput({ setCity }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default CityInput;
