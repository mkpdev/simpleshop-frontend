import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Dashboard() {
  const token = useSelector((state) => state.token.token)

  return (
    <div>
      {!token ? (
        <>
          <Link to="/">Registration</Link>
          <Link to="/login">login</Link>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/regions">Regions</Nav.Link>
                  <Nav.Link href="/products">Products</Nav.Link>
                  <Nav.Link href="/orders">Orders</Nav.Link>
                  <Nav.Link href="/logOut">LogOut</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
      <h2 className="text-center"> Welcome to Dashboard!!!!!</h2>
    </div>
  )
}

export default Dashboard