import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
let nextTodoId = 0;
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const newTodo = {
          text: action.payload.text.text,
          completed: false,
        };

        axios.post('http://localhost:5000/todos', newTodo);
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } };
      },
    },
    fetchTodos(state, action) {
      let res = axios.get('http://localhost:5000/todos');
      state.todos = [...res.data];
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, fetchTodos } = todosSlice.actions;

export default todosSlice.reducer;
