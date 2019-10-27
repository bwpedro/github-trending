import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {
  return (
    <ul className='right'>
      <li onClick={handleDashboard}><NavLink to='/search'>Search Programming Language</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>TOPi</NavLink></li>
    </ul>
  )
}

function handleDashboard () {
  window.location.href = "/search";
}

export default Links;