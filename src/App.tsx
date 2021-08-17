import { useSelector, useDispatch } from "react-redux";
import { selectCounter, selectInput, AppDispatch } from "./redux/store";
import { increment, decrement, update } from "./redux/userSlice";

import { Todo } from "./Todos";
import "./App.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector(selectCounter);
  const inputValue = useSelector(selectInput);

  return (
    <div className="app">
      <div className="counter">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <span className="count">{counter}</span>
        <button
          className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
      </div>
      <div className="form mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => dispatch(update(e.target.value))}
        />
        <h2>{inputValue}</h2>
      </div>
      <Todo />
    </div>
  );
}

export default App;
