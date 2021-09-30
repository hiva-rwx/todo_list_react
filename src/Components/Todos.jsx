import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import SimpleContext from "../contentApi/SimpleContext";
import Todo from "./Todo";

const Todos = () => {
  const { completed } = useContext(SimpleContext);
  return (
    <Row className="mt-3">
      {completed.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Row>
  );
};

export default Todos;
