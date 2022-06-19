import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete } from "../redux/todoSlice";
import { FC } from 'react';// FC -функцирн компонент !!
import { useAppDispatch } from "../redux/redux-hook";
import styles from '../app.module.css';



interface ItemProps {
  id: string,
  text: string,
  completed: boolean
}

const TodoItem: FC<ItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className={styles.delete} onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li >
  )
}

export default TodoItem