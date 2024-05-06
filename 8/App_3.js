import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [primeNumbers, setPrimeNumbers] = useState([2]);
  const [currentNumber, setCurrentNumber] = useState(3);

  useEffect(() => {
    const isPrime = num => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const interval = setInterval(() => {
      if (isPrime(currentNumber)) {
        setPrimeNumbers(prevNumbers => [...prevNumbers, currentNumber]);
      }
      setCurrentNumber(prevNumber => prevNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentNumber]);

  return (
    <div>
      <h1>Prime Numbers:</h1>
      <ul>
        {primeNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
