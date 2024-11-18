import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

const navigate= useNavigate();

  return (
    <div>
      <h2>404 : Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
<br />
      <button onClick={()=>navigate('/')}>Go to Homepage </button>

    </div>
  )
}

export default NotFound
