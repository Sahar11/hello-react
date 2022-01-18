import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}> {props.text} </button>
  );
};

const Application = () => {

  const [name, setName] = useState('');
  const handleInput = (event) => setName(event.target.value);
  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input placeholder='Type your name' value={name} onChange={handleInput} />
      <Button text="reset" reset={reset} />
      {name && <h1>Hello {name}</h1>}
      {!name && ""}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
