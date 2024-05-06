import React, { useState, useEffect } from 'react';

const ReverseString = () => {
  const [input, setInput] = useState('');
  const [reversedStrings, setReversedStrings] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (input.length > 0) {
        setInput(prevInput => {
          const lastChar = prevInput.charAt(prevInput.length - 1);
          const newInput = lastChar + prevInput.slice(0, -1);
          setReversedStrings(prevReversedStrings => [...prevReversedStrings, newInput]);
          return newInput;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setReversedStrings([]);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <ul>
        {reversedStrings.map((string, index) => (
          <li key={index}>{string}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReverseString;
