import React from 'react'
import { Outlet } from 'react-router-dom'

const JodsLayout = () => {
  return (
    <div>
      <h2>Jobs Openings</h2>
      <p>List of Jobs Opening in  our Company</p>
      <Outlet/>
    </div>
  )
}

export default JodsLayout
