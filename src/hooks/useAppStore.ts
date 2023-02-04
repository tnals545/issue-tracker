import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import type { RootState } from "../store/rootReducer";
import type { AppDispatch } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
