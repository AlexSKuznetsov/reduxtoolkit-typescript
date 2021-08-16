import {useSelector} from 'react-redux'
import { selectTodos, selectStatus, selectError } from './redux/store'

export const Todo = () => {
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  if (status === 'loading') return <p>Loading... </p>

  if (status === 'done') {
    return (
      <div>
        <ul>
        {todos.map(el => (
          <li key={el.id}>{el.title }</li>
        ))}
          </ul>
      </div>
    )
  }
  if (error) return <p>{error}</p>
  
  return null
}
