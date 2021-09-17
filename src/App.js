import './App.css';
// import HomePage from './HomePage';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchPetList } from './store/todoSlice';
import { useEffect } from 'react';

function App() {
  const list = useSelector(state => state.todo.list)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPetList)
  }, []) 

  const addNewTodo = () => {
    const newTodo = { id: Date.now(), title: `Do task ${Date.now()}`, done: false};
    dispatch(addTodo(newTodo));
  }

  return (
    <div className="App">
      {/* <HomePage /> */}
      { JSON.stringify(list) }
      <button onClick={() => addNewTodo()}>Add todo</button>
    </div>
  );
}

export default App;
