import { AnyAction, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import type { ITodoState } from "./slice/issue/todoSlice";
import todoReducer from "./slice/issue/todoSlice";

export interface RootStates {
  todo: ITodoState;
}

export const rootReducer = (state: RootStates, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        todo: todoReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
