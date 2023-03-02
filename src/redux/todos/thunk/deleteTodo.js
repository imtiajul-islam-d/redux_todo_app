import { deleteTask } from "../action";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE"
    });
    dispatch(deleteTask(todoId));
  };
};
export default deleteTodo;