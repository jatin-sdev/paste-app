import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="Navbar">
      <div className='NavbarElements'>
        <NavLink to="/">Home</NavLink>
      </div>

      <div className='NavbarElements'>
        <NavLink to="/pastes">Pastes</NavLink>
      </div>
    </div>
  );
}

export default Navbar