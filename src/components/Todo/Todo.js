import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {/* <!-- todo --> */}
        {todos?.map((todo) => (
          <TodoItem todo={todo} key={todo?.id} />
        ))}
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default Todo;
