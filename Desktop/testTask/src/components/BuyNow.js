import React from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { buyNow } from '../actions';
import { requestuserAddress } from '../thunk/userProduct';

function BuyNow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useraddress = useSelector((state) => state.buyNow.addresses)
  const order = useSelector((state) => state.getOrders.order)
  const user_id = order[0].user_id
  const order_total = order[0].order_total


  const handelChangeInput = (e) => {
    dispatch(buyNow({ ...useraddress, [e.target.name]: e.target.value }))
  }
  // setTimeout(function () {
  //   window.location.reload(1);
  // }, 20000);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestuserAddress(useraddress, user_id, order_total))
    alert("your order will be paid at 2 minutes")
    navigate("/orders")
  }

  return (
    <div>
      <h1>BuyNow</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >Address</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="address" value={useraddress.address} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >pincode</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="pincode" value={useraddress.pincode} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >country</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="country" value={useraddress.country} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >city</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="city" value={useraddress.city} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label >state</Form.Label>
          <Col sm="6">
            <Form.Control type="text" name="state" value={useraddress.state} onChange={handelChangeInput} />
          </Col>
        </Form.Group>
        <Button type="logout" varient="danger" >saveAddress</Button>

      </Form>

    </div>
  )
}

export default BuyNow