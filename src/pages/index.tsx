import Done from "@/components/container/Done";
import InProgress from "@/components/container/InProgress";
import Todo from "@/components/container/Todo";

const Main = () => {
  return (
    <>
      <Todo />
      <InProgress />
      <Done />
    </>
  );
};

export default Main;
