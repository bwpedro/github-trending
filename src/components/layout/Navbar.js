import React from 'react';
import logo from '../../github.png';
import Links from './Links';

const Navbar = () => {
  return (
    <nav className="nav-color">
      <div className="container">
        <ul className='left'>
          <img src={logo} onClick={handleDashboard} className="App-logo" alt="logo" />
        </ul>
        <ul className='brand-logo'>Github - Most starred repositories</ul>
        <Links/>
      </div>
    </nav>
  )
}

function handleDashboard () {
  window.location.href = "/";
}

export default Navbar;