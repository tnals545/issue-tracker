import useDragEvent from "@/common/useDragEvent";

const DragAndDrop = () => {
  const { todoData, setDragItemId, onDragStart, onDragEnd } = useDragEvent();

  return (
    <>
      {todoData.map((todo) => {
        return (
          <div
            key={todo.id}
            // onDragOver={(e) => handleDragOver(e, "over")}
            // onDragEnter={(e) => handleDragEnter(e, "enter")}
            // onDragLeave={(e) => handleDrag(e, "leave")}
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
