'use client'

import { useState, useEffect, ChangeEvent } from 'react';

const Math = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (inputValue !== '') {
      setResult(inputValue * 250);
    } else {
      setResult(0);
    }
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value === '' ? '' : parseFloat(value));
  };

  return (
    <div>
      <h1 className="text-4xl">how much did you make today?</h1>
      <input type="number" value={inputValue} onChange={handleInputChange} />  
      { inputValue !== '' &&
        <>
          &nbsp;a day
          <h2 className="text-2xl">is {inputValue < 0 ? `-$${-result}` : `$${result}`} a year</h2>
          <p>if there are 250 trading days a year </p>
        </>
      }
    </div>
  );
};

export default Math;