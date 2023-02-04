import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface IssueData {
  id: number;
  title: string;
  context: string;
}

export interface IissueState {
  todo: IssueData[];
  inProgress: IssueData[];
  done: IssueData[];
}

const initialState: IissueState = {
  todo: [
    { id: 0, title: "todo1", context: "할일1" },
    { id: 1, title: "todo2", context: "할일2" },
    { id: 2, title: "todo3", context: "할일3" },
  ],
  inProgress: [
    { id: 3, title: "in progress1", context: "진행중1" },
    { id: 4, title: "in progress2", context: "진행중2" },
    { id: 5, title: "in progress3", context: "진행중3" },
  ],
  done: [
    { id: 6, title: "done1", context: "끝남1" },
    { id: 7, title: "done2", context: "끝남2" },
    { id: 8, title: "done3", context: "끝남3" },
  ],
};

const issueSlice = createSlice({
  name: "slice/issue",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<IssueData[]>) {
      state.todo = action.payload;
    },
    setInProgress(state, action: PayloadAction<IssueData[]>) {
      state.inProgress = action.payload;
    },
    setDone(state, action: PayloadAction<IssueData[]>) {
      state.done = action.payload;
    },
  },
});

export const { setTodos, setInProgress, setDone } = issueSlice.actions;
export default issueSlice.reducer;
