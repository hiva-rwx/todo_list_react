import React, { useState, useEffect, useCallback } from "react";
import SimpleContext from "./contentApi/SimpleContext";

const GlobalState = (probs) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [status, setStatus] = useState("all");
  const [completed, setCompleted] = useState([]);

  const filterHandler = useCallback(() => {
    switch (status) {
      case "completed":
        setCompleted(todos.filter((todo) => todo.isCheck === true));
        break;

      case "unCompleted":
        setCompleted(todos.filter((todo) => todo.isCheck === false));
        break;

      default:
        setCompleted(todos);
    }
  }, [status, todos]);

  const getLocal = useCallback(() => {
    const getTodos = localStorage.getItem("todos");
    if (getTodos) {
      const todos = JSON.parse(getTodos);
      setTodos(todos);
    }
  }, []);

  const saveLocal = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filterHandler();
  }, [filterHandler, status, todos]);

  useEffect(() => {
    getLocal();
  }, [getLocal]);

  useEffect(() => {
    saveLocal();
  }, [todos, isCheck, saveLocal]);

  const handlerAddTodo = useCallback(() => {
    const todoList = [...todos];
    if (!todo) {
      alert("Please Enter Work !!!");
      return;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 1000) + new Date().getTime(),
      todo: todo,
      isCheck: isCheck,
    };
    todoList.unshift(newTodo);
    setTodo("");
    setTodos(todoList);
  }, [isCheck, todo, todos]);

  const valTodo = (e) => {
    setTodo(e.target.value);
  };

  const handlerRemoveTodo = useCallback(
    (id) => {
      const todoList = [...todos];
      const filter = todoList.filter((todo) => id !== todo.id);
      setTodos(filter);
    },
    [todos]
  );

  const handlerCheckTodo = useCallback(
    (id) => {
      const todoList = [...todos];
      const findIndex = todoList.findIndex((todo) => todo.id === id);
      const item = todoList[findIndex];
      item.isCheck = !item.isCheck;
      setTodos(todoList);
    },
    [todos]
  );

  const handlerValueSelect = useCallback((e) => {
    const optionVal = e.target.value;
    setStatus(optionVal);
  }, []);

  // const handleEditTodo = useCallback(
  //   // (id) => {
  //   //   const todoIndex = todos.find((i) => i.id === id);
  //   //   if (todoIndex) {
  //   //     setShowInputEdit(!showInputEdit);
  //   //   }
  //   // },
  //   // [showInputEdit, todos]
  // );

  const valEditTodo = useCallback(
    (e, id) => {
      const todosCopy = [...todos];
      const todoIndex = todosCopy.findIndex((i) => i.id === id);
      const todo = todosCopy[todoIndex];
      todo.todo = e.target.value;
      todosCopy[todoIndex] = todo;
      setTodos(todosCopy);
    },
    [todos]
  );

  return (
    <SimpleContext.Provider
      value={{
        todos,
        todo,
        isCheck,
        completed,
        // showInputEdit,
        setCompleted,
        valTodo,
        setIsCheck,
        setTodos,
        setTodo,
        handlerAddTodo,
        handlerRemoveTodo,
        handlerCheckTodo,
        handlerValueSelect,
        filterHandler,
        // handleEditTodo,
        // setShowInputEdit,
        valEditTodo,
      }}
    >
      {probs.children}
    </SimpleContext.Provider>
  );
};

export default GlobalState;
