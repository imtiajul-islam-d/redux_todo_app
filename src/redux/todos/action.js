import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  FETCH_TODOS,
  REMOVETODO,
  TOGGLETODO,
} from "./actionTypes";

export const fetchInitialTodos = (task) => {
  return {
    type: FETCH_TODOS,
    payload: task
  }
}
export const addTask = (todo) => {
  return {
    type: ADDTODO,
    payload: todo,
  };
};
export const toggleTask = (taskId) => {
  return {
    type: TOGGLETODO,
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: REMOVETODO,
    payload: taskId,
  };
};

export const selectColor = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
