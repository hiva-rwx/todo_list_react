import React, { useContext, useState, useCallback } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import SimpleContext from "../contentApi/SimpleContext";

const Todo = ({ todo }) => {
  const [showInputEdit, setShowInputEdit] = useState(false);

  const { handlerRemoveTodo, handlerCheckTodo, valEditTodo } =
    useContext(SimpleContext);

  const inputEditTodo = useCallback(() => {
    return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          value={todo.todo}
          onChange={(e) => valEditTodo(e, todo.id)}
        />
      </Form>
    );
  },[todo.id, todo.todo, valEditTodo])

  const handleEditTodo = useCallback(() => {
    setShowInputEdit(!showInputEdit);
  }, [showInputEdit]);

  return (
    <Col lg={{ span: 6, offset: 3 }} xs={{ span: 9, offset: 2 }}>
      <Card className="mt-2 mb-1" bg={"secondary "} text={"light"}>
        <Card.Body
          className={`d-flex justify-content-between align-items-center ${
            todo.isCheck ? "isCheck" : "isNotCheck"
          }`}
        >
          {showInputEdit ? inputEditTodo() : todo.todo}
          <div>
            <Button
              onClick={() => handlerRemoveTodo(todo.id)}
              size={"sm"}
              variant={"danger"}
            >
              <i className="fa fa-trash"></i>
            </Button>
            <Button
              onClick={() => handleEditTodo()}
              size={"sm"}
              variant={"warning"}
            >
              <i className="fa fa-edit"></i>
            </Button>
            <Button
              onClick={() => handlerCheckTodo(todo.id)}
              size={"sm"}
              variant={"success"}
            >
              <i className="fa fa-check"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Todo;
