import { useSelector, useDispatch } from 'react-redux'
import { selectCounter, selectInput, AppDispatch } from './redux/store'
import { increment, decrement, update } from './redux/userSlice'
import { fetchTodos } from './redux/thunkSlice'
import { Todo } from './Todos'
import './App.css'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector(selectCounter)
  const inputValue = useSelector(selectInput)

  return (
    <div className="app">
      <div className="counter">
        <button className="plus" onClick={() => dispatch(increment())}>++</button>
        <span className="count">{counter}</span>
        <button className="minus" onClick={() => dispatch(decrement())}>--</button>
      </div>
      <div className="inputdiv">   
        <input className="input" type='text' placeholder="start typing" value={inputValue} onChange={(e) => dispatch(update(e.target.value))} />
        <h2>{inputValue}</h2>
      </div> 
      <hr />
      <button onClick={() => dispatch(fetchTodos())}>fetch todos</button>
      <Todo />
    </div>
  );
}

export default App;
