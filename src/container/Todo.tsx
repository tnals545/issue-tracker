import styled from "styled-components";
import DragAndDrop from "@/components/DragAndDrop";

const Todo = () => {
  return (
    <TodoContainer>
      Todo
      <DragAndDrop issueType="todo" />
    </TodoContainer>
  );
};

const TodoContainer = styled.div``;

export default Todo;
