import React, { useCallback, useContext } from "react";
import { Alert } from "react-bootstrap";
import SimpleContetxt from "./../contentApi/SimpleContext";
const Header = () => {
  const context = useContext(SimpleContetxt);
  const { todos } = context;
  const bgColorNumber = useCallback(() => {
    let bgNumber = "";
    if (todos.length >= 3) bgNumber = "success";
    if (todos.length <= 2) bgNumber = "warning";
    if (todos.length <= 1) bgNumber = "danger";
    return bgNumber;
  },[todos.length])

  return (
    <Alert variant={"success"} className="w-100 d-flex justify-content-center">
      <div
        className={`rounded-circle border-5 bg-${bgColorNumber()} px-2 d-flex align-items-center`}
      >
        <b className={"text-light"}>{todos.length}</b>
      </div>
      <h3 className={"px-2"}>Todo List</h3>
    </Alert>
  );
};

export default Header;
