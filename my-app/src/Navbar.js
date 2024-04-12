import React from 'react'
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
    <Link to ="/">Home</Link>
    <Link to ="/profile">Profile</Link>
    <Link to ="/contact">contact</Link>

  
    </div>
  )
}

export default Navbar