import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../../../redux-toolkit-comparison/src/type.d';
import { v1 as uuid } from 'uuid';

export const initialState: Todo[] = [
  {
    id: uuid(),
    desc: 'Wash my face',
    isComplete: false,
  },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
      ) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false,
        },
      }),
    },
    removeTodo: (state, { payload }: PayloadAction<{ id: string }>) => {
      const todoToRemoveIndx = state.findIndex(
        (todo) => todo.id === payload.id
      );

      if (todoToRemoveIndx !== -1) {
        state.splice(todoToRemoveIndx, 1);
      }
    },
    toggleTodo: (
      state,
      { payload }: PayloadAction<{ id: string; isComplete: boolean }>
    ) => {
      const todoToToggle = state.find((todo) => todo.id === payload.id);

      if (todoToToggle) {
        todoToToggle.isComplete = payload.isComplete;
      }
    },
    dragTodo: (state, { payload }: PayloadAction<{ todos: Todo[] }>) => {
      console.log('ORIGINAL STATE', state);
      state = payload.todos;
      // const todoToToggle = state.find((todo) => todo.id === payload.id);

      // if (todoToToggle) {
      //   todoToToggle.isComplete = payload.isComplete;
      // }
    },
  },
});

export const {
  addTodo: addTodoActionCreator,
  removeTodo: removeTodoActionCreator,
  toggleTodo: toggleTodoActionCreator,
  dragTodo: dragTodoActionCreator,
} = todosSlice.actions;

export default todosSlice.reducer;
