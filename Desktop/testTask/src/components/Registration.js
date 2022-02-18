
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { setUser } from "../actions";
import { requestUser } from "../thunk/userRequest";
import { useNavigate } from "react-router";

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userdetail = useSelector((state) => state.registration.userdetail)
  const response = useSelector((state) => state.registration.response)

  const handelChangeInput = (e) => {
    dispatch(setUser({ ...userdetail, [e.target.name]: (e.target.name === "contact" ? parseInt(e.target.value) : e.target.value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestUser(userdetail))
    if (response === true) {
      navigate('/login')
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/login")
  }

  return (
    <div>
      <h1 className="align-items-end">User page...</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >First Name</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="first_name" value={userdetail.first_name} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Last Name</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="last_name" value={userdetail.last_name} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Email</Form.Label>
          <Col sm="6">
            <Form.Control type="email" name="email" value={userdetail.email} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Password</Form.Label>
          <Col sm="6">
            <Form.Control type="password" name="password" value={userdetail.password} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >confirm password</Form.Label>
          <Col sm="6">
            <Form.Control type="password" name="password_confirmation" value={userdetail.password_confirmation} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Button type="submit" varient="success">signUp</Button> {"  "}
        <Button type="logout" varient="danger" onClick={handleClick}>signIn</Button>
      </Form>
    </div>
  )
}

export default Registration;