import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IState {
  todos: Array<ITodo>
}

export interface ITodo {
  id: string,
  text: string,
  completed: boolean
}

const initialState: IState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state: IState, action: any) {
        state.todos.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false
        })
    },
    removeTodo(state: IState, action: any) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state: IState, action: any) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    }
  }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;// не нужно вручную создавать actions

export default todoSlice.reducer;//редюсеры