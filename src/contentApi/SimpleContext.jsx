import { createContext } from "react";
const vd = () => {};
const SimpleContext = createContext({
  todos: [],
  todo: "",
  isCheck: false,
  completed: [],
  setCompleted: vd,
  setIsCheck: vd,
  setTodos: vd,
  valTodo: vd,
  setTodo: vd,
  handlerAddTodo: vd,
  handlerRemoveTodo: vd,
  handlerCheckTodo: vd,
  handlerValueSelect: vd,
  filterHandler: vd,
  valEditTodo: vd,
});

export default SimpleContext;
