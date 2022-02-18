import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestOrder, requestProductDetail } from '../thunk/userProduct'
import { useNavigate, useParams } from 'react-router'
import { Card, Button } from 'react-bootstrap'

function ProductDetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams()
  const product = useSelector((state) => state.getProducts.product)
  const productdetail = useSelector((state) => state.getProducts.productdetail)


  useEffect(() => {
    dispatch(requestOrder())
  }, [])

  useEffect(() => {
    dispatch(requestProductDetail(id))
    product.map((item) => {
      if (item.id === id) {
        setData([...data, item])
      }
    })
  }, [data])

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/buynow')
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <Card style={{ width: '18rem', color: 'black' }}>
        {productdetail && productdetail.map((item) => (
          <>
            <Card.Img variant="top" src={item.image_url} />
            <Card.Body>
              <Card.Title> Title: {item.title}</Card.Title>
              <Card.Text> Description: {item.description}</Card.Text>
              <Card.Text> Price : {item.price}</Card.Text>
              <Card.Text> stock : {item.stock}</Card.Text>
              <Card.Text> sku : {item.sku}</Card.Text>
            </Card.Body>
            <Button className="btn btn-warning" onClick={handleClick} >buy now</Button>
          </>
        ))}
      </Card>
    </div>
  )
}

export default ProductDetails;
