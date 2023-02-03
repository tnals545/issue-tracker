import useDragEvent from "@/common/useDragEvent";
import { useAppSelector } from "@/store/hooks/useAppStore";
import type { RootStates } from "@/store/rootReducer";

const DragAndDrop = () => {
  const todoData = useAppSelector((state: RootStates) => state.todo.todoData);
  const { onDragStart, onDragEnd, onDragEnter, onDragLeave, onDragOver } =
    useDragEvent();

  return (
    <>
      {todoData.map((todo) => {
        return (
          <div
            key={todo.id}
            id={`${todo.id}`}
            onDragOver={(e) => onDragOver(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragLeave={(e) => onDragLeave(e)}
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e)}
            draggable // 요소를 드래깅 가능하게 해주는 속성
          >
            {todo.title}
          </div>
        );
      })}
    </>
  );
};

export default DragAndDrop;
