import React from "react";
import { Nav, Col } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <Col lg={{ span: 6, offset: 3 }}>
      <Nav
        variant="pills"
        className="text-center d-flex justify-content-center mb-4"
      >
        <Nav.Item>
          <NavLink to="/" className="nav-link" exact activeClassName="active">
            Tasks
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/about" className="nav-link">
            Dev
          </NavLink>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default withRouter(Navbar);
