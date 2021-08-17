import { useSelector, useDispatch } from "react-redux";
import { selectTodos, selectStatus, selectError } from "./redux/store";
import { fetchTodos } from "./redux/thunkSlice";

export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  if (status === "loading") return <p>Loading... </p>;

  if (status === "done") {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary m-4"
            onClick={() => dispatch(fetchTodos())}
          >
            refetch
          </button>
        </div>
        <div>
          <ul className="list-group">
            {todos.map((el) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={el.id}
              >
                <div className="ms-2 me-auto">{el.title}</div>
                <span
                  className={`badge ${
                    el.completed === true ? "bg-success" : "bg-warning"
                  } 'rounded-pill pd-2`}
                >
                  {el.completed === true ? "done" : "in progress"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <button
      type="button"
      className="btn btn-primary m-4"
      onClick={() => dispatch(fetchTodos())}
    >
      fetch todos
    </button>
  );
};
