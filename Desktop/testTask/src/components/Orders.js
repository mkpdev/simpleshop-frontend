import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { requestOrder, requestOrderProduct } from '../thunk/userProduct'


function Orders() {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.getOrders.orderDetail)

  useEffect(() => {
    dispatch(requestOrderProduct())
  },[])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>userId</th>
            <th>order_total</th>
            <th>status</th>
          </tr>
        </thead>
      {order.length && order.map((item, index)=> (
        <tbody key={index}>
          <tr>
            <td>{item.user_id}</td>
            <td>{item.order_total}</td>
            <td>{item.status}</td>
          </tr>
        </tbody>
))}
      </Table>
    </div>
  )
}

export default Orders