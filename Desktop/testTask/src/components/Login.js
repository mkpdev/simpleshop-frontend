import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserLogin } from '../actions';
import { requestLoginUser } from '../thunk/userRequest';
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loginDetails = useSelector((state) => state.login.userloginDetail)
  const res = useSelector((state) => state.login.res)

  const handelChangeInput = (e) => {
    dispatch(setUserLogin({ ...loginDetails, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestLoginUser(loginDetails));
    if (res === true) {
      navigate('/dashboard')
    }
  }
  return (
    <div>
      <h1>login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Email</Form.Label>
          <Col sm="6">
            <Form.Control type="email" name="email" value={loginDetails.email} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Password</Form.Label>
          <Col sm="6">
            <Form.Control type="password" name="password" value={loginDetails.password} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Button type="submit" varient="success">signIn</Button> {"  "}
      </Form>
    </div>
  )
}

export default Login