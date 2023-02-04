import styled from "styled-components";
import DragAndDrop from "@/components/DragAndDrop";

const InProgress = () => {
  return (
    <InProgressContainer>
      InProgress
      <DragAndDrop issueType="in-progress" />
    </InProgressContainer>
  );
};

const InProgressContainer = styled.div``;

export default InProgress;
