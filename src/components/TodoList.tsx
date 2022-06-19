import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import TodoItem from './TodoItem';



const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul>
      {
        todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            {...todo} />
        )
      )}
    </ul>
  )
}

export default TodoList;