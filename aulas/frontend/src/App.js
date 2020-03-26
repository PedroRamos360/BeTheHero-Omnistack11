import React, { useState } from 'react';

// useState => para renderizar os elementos em tela quando que uma váriavel for alterada

import Header from './Header';

// JSX => JS + XML

function App() {
  const [counter, setCounter] = useState(0); // counter => valor, setCounter => função para alterar counter

  function increment() {
    setCounter(counter + 1);

    console.log(counter);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
