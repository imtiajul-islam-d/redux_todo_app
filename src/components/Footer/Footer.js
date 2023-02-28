import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, filterColorChanged } from "../../redux/filters/action";

const todoRemaining = (no_of_todo) => {
  switch (no_of_todo) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${no_of_todo} tasks`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);
  const { status, colors } = filter;
  const taskLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{todoRemaining(taskLeft)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={(e) => dispatch(changeStatus(e.target.innerText))}
            className={`cursor-pointer ${status === "All" && "font-bold"}`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={(e) => dispatch(changeStatus(e.target.innerText))}
            className={`cursor-pointer ${
              status === "Incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={(e) => dispatch(changeStatus(e.target.innerText))}
            className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            onClick={() => {
              if (!colors.includes("green")) {
                dispatch(filterColorChanged("green", "added"));
              } else {
                dispatch(filterColorChanged("green", "removed"));
              }
            }}
            className={`h-3 w-3 border-2 border-green-500 ${
              colors.includes("green") && "bg-green-500"
            } md:hover:bg-green-500 rounded-full cursor-pointer`}
          ></li>
          <li
            onClick={() => {
              if (!colors.includes("red")) {
                dispatch(filterColorChanged("red", "added"));
              } else {
                dispatch(filterColorChanged("red", "removed"));
              }
            }}
            className={`h-3 w-3 border-2 border-red-500 ${
              colors.includes("red") && "bg-red-500"
            } md:hover:bg-red-500 rounded-full cursor-pointer`}
          ></li>
          <li
            onClick={() => {
              if (!colors.includes("yellow")) {
                dispatch(filterColorChanged("yellow", "added"));
              } else {
                dispatch(filterColorChanged("yellow", "removed"));
              }
            }}
            className={`h-3 w-3 border-2 ${
              colors.includes("yellow") && "bg-yellow-500"
            } border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer`}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
