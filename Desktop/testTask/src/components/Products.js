import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestProduct } from '../thunk/userProduct'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Products() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.getProducts.product)

  useEffect(() => {
    dispatch(requestProduct())
    //react-hooks/exhaustive-deps
  }, [])

  return (
    <div>

      <Card style={{ width: '18rem' }}>
        {product.map((item,index) => (
          <>
            <Link style={{ color: 'black' }} to={`/productdetail/${item.id}`} key={index}>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body >
                <Card.Title> Title: {item.title}</Card.Title>
                <Card.Text> Description: {item.description}</Card.Text>
              </Card.Body>
            </Link> <br /> <br />
          </>
        ))}
      </Card>
    </div>
  )
}

export default Products

