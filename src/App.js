import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useMemo } from 'react';

let c = 123;

function App() {
  const [numberA, setNumberA] = useState(1);
  const [numberB, setNumberB] = useState(2);
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Do task 1', done: false},
    { id: 2, title: 'Do task 2', done: true},
    { id: 3, title: 'Do task 3', done: false},
  ])
  const [newTodo, setNewTodo] = useState({ id: "", title: "New todo", done: false})

  useEffect(() => {
    // alert('Page loaded');
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


  const onTitleChange = (event) => {
    // Spread operator doc: https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj
    setNewTodo({...newTodo, title: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, newTodo])
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

        <ul>
        {todos.map((item, index) => {
          return <li key={`todo-${index}`}>{ item.title } - { item.done ? "Done" : "Not done" }</li>
        })}
        </ul>

        <input type="text" value={newTodo.title} onChange={onTitleChange}/>
        <button onClick={addTodo}>Add</button>

      </header>
    </div>
  );
}

export default App;
