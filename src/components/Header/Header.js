import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleClick from "../../images/double-tick.png";
import notes from "../../images/notes.png";
import plusImage from "../../images/plus.png";
import {
  addTask,
  allCompleted,
  clearCompleted,
} from "../../redux/todos/action";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const valueChanges = (e) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!input){
      alert("Please mention the task")
      return
    }
    dispatch(addTask(input));
    setInput("");
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => handleOnSubmit(e)}
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
          <img src={notes} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            value={input}
            onChange={valueChanges}
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            onClick={() => dispatch(allCompleted())}
            className="flex space-x-1 cursor-pointer"
          >
            <img className="w-4 h-4" src={doubleClick} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li
            onClick={() => dispatch(clearCompleted())}
            className="cursor-pointer"
          >
            Clear completed
          </li>
        </ul>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default Header;
