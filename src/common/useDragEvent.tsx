import { useAppDispatch, useAppSelector } from "@/store/hooks/useAppStore";
import { RootStates } from "@/store/rootReducer";
import { type TodoData, setTodos } from "@/store/slice/issue/todoSlice";
import { useRef } from "react";

const useDragEvent = () => {
  const clickElId = useRef(0);
  const interSectElId = useRef(0);

  const todoData = useAppSelector((state: RootStates) => state.todo.todoData);
  const dispatch = useAppDispatch();

  const getElementIndex = (id: number): number => {
    return todoData.findIndex((todo) => todo.id === id);
  };

  const setDragItemId = {
    grabItem: (id: number): void => {
      clickElId.current = getElementIndex(id);
    },
    interSectItem: (id: number): void => {
      interSectElId.current = getElementIndex(id);
    },
  };

  const sortStateData = (): TodoData[] => {
    const updateData = [...todoData];
    const clickedItemData = updateData[clickElId.current];
    updateData.splice(clickElId.current, 1);
    updateData.splice(interSectElId.current, 0, clickedItemData);
    return updateData;
  };
  const switchData = (): void => {
    dispatch(setTodos(sortStateData()));
  };

  const onDragStart = (e: React.DragEvent<HTMLElement>): void => {
    e.dataTransfer.effectAllowed = "move";

    const { id } = e.currentTarget;
    setDragItemId.grabItem(Number(id));
  };

  const onDragEnd = (e: React.DragEvent<HTMLElement>): void => {
    console.log("onDragEnd");
    switchData();
  };

  const onDragEnter = (e: React.DragEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    setDragItemId.interSectItem(Number(id));
  };

  const onDragLeave = (e: React.DragEvent<HTMLElement>): void => {
    console.log("onDragLeave");
    console.log(e);
  };

  const onDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log("onDragOver");
  };

  return {
    todoData,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
  };
};

export default useDragEvent;
