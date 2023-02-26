import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  REMOVETODO,
  TOGGLETODO,
} from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADDTODO,
    payload: task,
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
