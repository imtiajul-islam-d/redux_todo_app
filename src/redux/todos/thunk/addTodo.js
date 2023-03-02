import { addTask } from "../action";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todos = await response.json();
      
        dispatch(addTask(todos.text));
    }
}
export default addTodo