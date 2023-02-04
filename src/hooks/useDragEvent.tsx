import { useAppDispatch, useAppSelector } from "@/hooks/useAppStore";
import type { RootStates } from "@/store/rootReducer";
import {
  type IssueData,
  setTodos,
  setInProgress,
  setDone,
} from "@/store/slice/issue/issueSlice";
import { useRef } from "react";

const useDragEvent = (issueType: string) => {
  const clickElId = useRef(0);
  const interSectElId = useRef(0);
  const lastLeaveTarget = useRef<HTMLElement>();

  const issueData = useAppSelector((state: RootStates) => {
    if (issueType === "todo") return state.issue.todo;
    if (issueType === "in-progress") return state.issue.inProgress;
    if (issueType === "done") return state.issue.done;

    return [];
  });
  const dispatch = useAppDispatch();

  const getElementIndex = (id: number): number => {
    return issueData.findIndex((issue) => issue.id === id);
  };

  const setDragItemId = {
    grabItem: (id: number): void => {
      clickElId.current = getElementIndex(id);
    },
    interSectItem: (id: number): void => {
      interSectElId.current = getElementIndex(id);
    },
  };

  // sort Data
  const sortStateData = (): IssueData[] => {
    const updateData = [...issueData];
    const clickedItemData = updateData[clickElId.current];
    updateData.splice(clickElId.current, 1);
    updateData.splice(interSectElId.current, 0, clickedItemData);
    return updateData;
  };
  const switchData = (): void => {
    if (issueType === "todo") dispatch(setTodos(sortStateData()));
    if (issueType === "in-progress") dispatch(setInProgress(sortStateData()));
    if (issueType === "done") dispatch(setDone(sortStateData()));
  };

  // handle drag event
  const onDragStart = (e: React.DragEvent<HTMLElement>): void => {
    e.dataTransfer.effectAllowed = "move";

    const { id } = e.currentTarget;
    setDragItemId.grabItem(Number(id));
  };
  const onDragEnd = (e: React.DragEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;

    target.classList.remove("move_up");
    target.classList.remove("move_down");

    if (lastLeaveTarget.current) {
      lastLeaveTarget.current!.classList.remove("move_up");
      lastLeaveTarget.current!.classList.remove("move_down");
    }

    switchData();
  };
  const onDragEnter = (e: React.DragEvent<HTMLElement>): void => {
    const { id } = e.currentTarget;
    const target = e.target as HTMLElement;
    const moveClassName = moveUpAndDownClassName();

    if (lastLeaveTarget.current)
      lastLeaveTarget.current!.classList.remove("move_down");

    setDragItemId.interSectItem(Number(id));

    if (clickElId.current !== interSectElId.current && moveClassName) {
      target.classList.add(moveClassName);
    }

    lastLeaveTarget.current = target;
  };
  const onDragLeave = (e: React.DragEvent<HTMLElement>): void => {
    const target = e.target as HTMLElement;
    target.classList.remove("move_up", "move_down");
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const moveUpAndDownClassName = (): string => {
    if (clickElId.current! < interSectElId.current!) return "move_up";
    if (clickElId.current! > interSectElId.current!) return "move_down";
    return "";
  };

  return {
    issueData,
    lastLeaveTarget,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
  };
};

export default useDragEvent;
