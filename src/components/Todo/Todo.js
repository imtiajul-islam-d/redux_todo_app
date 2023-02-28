import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);
  let content;

  switch (filter?.status) {
    case "Incomplete":
      const incomplete = todos?.filter((todo) => !todo?.completed);
      content = incomplete?.map((todo) => (
        <TodoItem todo={todo} key={todo?.id} />
      ));
      break;
    case "Complete":
      const complete = todos?.filter((todo) => todo.completed);
      content = complete?.map((todo) => <TodoItem key={todo.id} todo={todo} />);
      break;
    default:
      content = todos?.map((todo) => <TodoItem todo={todo} key={todo?.id} />);
  }
  // colors filter
  if (filter.colors.length > 0) {
    const colorFilter = todos?.filter((todo) =>
      filter?.colors.includes(todo?.color)
    );
    content = colorFilter?.map((todo) => (
      <TodoItem key={todo?.id} todo={todo} />
    ));
  }
  console.log(content);
  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {content}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default Todo;
