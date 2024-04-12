import React from 'react'
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      Navbar
    <Link to ="/">Home</Link>
    <Link to ="/menu">Menu</Link>
    <Link to ="/contact">contact</Link>

  
    </div>
  )
}

export default Navbar
