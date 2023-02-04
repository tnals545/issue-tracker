import styled from "styled-components";
import DragAndDrop from "@/components/DragAndDrop";

const Done = () => {
  return (
    <DoneContainer>
      Done
      <DragAndDrop issueType="done" />
    </DoneContainer>
  );
};

const DoneContainer = styled.div``;

export default Done;
