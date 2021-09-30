import React, { useContext, useRef, useEffect } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import SimpleContext from "./../contentApi/SimpleContext";

const AddTodo = () => {
  const context = useContext(SimpleContext);
  const Ref = useRef(null);
  useEffect(() => {
    Ref.current.focus();
  }, []);
  return (
    <Row>
      <Col lg={{ span: 2, offset: 1 }}>
        <Form>
          <Form.Group>
            <Form.Control
              onChange={(e) => context.handlerValueSelect(e)}
              as={"select"}
            >
              <option value="all">
                All
              </option>
              <option value="completed">Completed</option>
              <option value="unCompleted">UnCompleted</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col lg={6}>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="d-flex">
            <Button type="submit" onClick={context.handlerAddTodo}>
              <i className="fa fa-plus"></i>
            </Button>
            <Form.Control
              style={{ textAlign: "left" }}
              ref={Ref}
              placeholder="...Add Work"
              type="text"
              value={context.todo}
              onChange={context.valTodo}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default AddTodo;
