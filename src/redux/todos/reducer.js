import { ADDTODO, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, REMOVETODO, TOGGLETODO } from "./actionTypes";
import { initialState } from "./initialState";

const nextTodo = (todos) => {
  const maxId = todos.reduce((maxid, todo) => Math.max(todo.id, maxid), -1);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: nextTodo(state),
          text: action.task
        },
      ];
    case TOGGLETODO: 
      return state.map(todo => {
        if(todo.id !== action.payload){
            return todo
        }
        return {
            ...todo,
            completed: !todo.completed
        }
      })
    case COLORSELECTED:
        const {todoId, color} = action.payload;
        return state.map(todo => {
            if(todo.id !== todoId){
                return todo
            }
            return {
                ...todo,
                color: color
            }
        })
    case REMOVETODO:
        return state.filter(todo => todo.id !== action.payload)
    case ALLCOMPLETED:
        return state.map(todo => {
            return {
                ...todo,
                completed: true
            }
        })
    case CLEARCOMPLETED:
        return state.filter(todo => !todo.completed)
    default:
      return state;
  }
};

export default todoReducer;
