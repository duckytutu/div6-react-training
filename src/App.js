import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useMemo } from 'react';

let c = 123;

function App() {
  const [numberA, setNumberA] = useState(1);
  const [numberB, setNumberB] = useState(2);
  const [show, setShow] = useState(true);

  useEffect(() => {
    alert('Page loaded');
  }, []) // Array dependencies (điều kiện để chạy lại logic trong useEffect)

  const total = useMemo(() => {
    return numberA + numberB
  }, [numberA, numberB]) // Array dependencies (điều kiện để chạy lại logic trong useMemo)
  
  const test = () => {
    setNumberA(123);
    setNumberB(456);
  }

  const toggleImage = () => {
    setShow(!show);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => toggleImage()}>{ show ? "Hide" : "Show" } image</button>
        { show ? <img src={logo} className="App-logo" alt="logo" /> : null }
        <span>{ numberA }</span>
        <span>{ numberB }</span>
        <span>{ c }</span>
        <span>{ total }</span>

        <button onClick={() => test()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
