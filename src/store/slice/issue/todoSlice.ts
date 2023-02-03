import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const todoSliceType = "slice/todo";

export interface TodoData {
  id: number;
  title: string;
  context: string;
}

export interface ITodoState {
  todoData: TodoData[];
}

const initialState: ITodoState = {
  todoData: [
    { id: 0, title: "test1", context: "테스트1" },
    { id: 1, title: "test2", context: "테스트2" },
    { id: 2, title: "test3", context: "테스트3" },
  ],
};

const todoSlice = createSlice({
  name: todoSliceType,
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TodoData[]>) {
      state.todoData = action.payload;
    },
  },
});

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
