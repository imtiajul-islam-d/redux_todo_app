import { selectColor } from "../action";

const updateTodoColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(selectColor(todo?.id, todo?.color));
  };
};
export default updateTodoColor;