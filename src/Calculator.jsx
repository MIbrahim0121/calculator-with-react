import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');

  function append(e) {
    setValue(value + e.target.innerHTML); 
  }

  function ac() {
    setValue(''); 
  }

  function clr() {
    setValue(value.slice(0, -1)); 
  }

  function evaluate() {
    try {
      setValue(eval(value)); 
    } catch {
      setValue('Error'); 
    }
  }

  return (
    <div className="calculator">
      
      <div className="box">
        <input
          type="text"
          id="display"
          placeholder="0"
          disabled
          value={value}
        />
      </div>
      <div className="buttons">
        <button className="a" onClick={ac}>AC</button>
        <button onClick={clr}>CLR</button>
        <button onClick={append}>%</button>
        <button className="op" onClick={append}>*</button>
        <button className="a" onClick={append}>7</button>
        <button onClick={append}>8</button>
        <button onClick={append}>9</button>
        <button className="op" onClick={append}>/</button>
        <button className="a" onClick={append}>4</button>
        <button onClick={append}>5</button>
        <button onClick={append}>6</button>
        <button className="op" onClick={append}>-</button>
        <button className="a" onClick={append}>1</button>
        <button onClick={append}>2</button>
        <button onClick={append}>3</button>
        <button className="op" onClick={append}>+</button>
        <button className="a" onClick={append}>00</button>
        <button onClick={append}>0</button>
        <button onClick={append}>.</button>
        <button className="eql" onClick={evaluate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
