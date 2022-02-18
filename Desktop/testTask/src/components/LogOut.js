import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function LogOut() {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/');
  }

  return (
    <div>
      <Button type="submit" varient="success" onClick={handleClick}> LogOut</Button>
    </div>
  )
}

export default LogOut