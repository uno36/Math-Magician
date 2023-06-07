/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import calculate from '../logic/calculate.js';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    let newDisplayValue = newData.next || newData.total || '0';
    if (buttonName !== '=' && newData.operation) {
      newDisplayValue = newData.total
        ? `${newData.total} ${newData.operation} ${newData.next || ''}`
        : `${newData.next || ''} ${newData.operation}`;
    }

    setDisplayValue(newDisplayValue);
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{displayValue}</span>
      </div>
      <div className="functional-buttons">
        <button type="button" onClick={() => handleButtonClick('AC')}>
          AC
        </button>
        <button type="button" onClick={() => handleButtonClick('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => handleButtonClick('%')}>
          %
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={() => handleButtonClick('÷')}
        >
          ÷
        </button>
        <button type="button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button type="button" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button type="button" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={() => handleButtonClick('x')}
        >
          x
        </button>
        <button type="button" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button type="button" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button type="button" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        <button type="button" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button type="button" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button type="button" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        <button
          type="button"
          className="grid-item"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button type="button" onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
