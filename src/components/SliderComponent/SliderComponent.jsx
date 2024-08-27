import React from 'react';
import { Sidebar, Menu, MenuItem,  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import Home from '../../assets/home.svg';
import Profile from '../../assets/Profile.svg';
import Payment from '../../assets/Ticket.svg';
import Document from '../../assets/Document.svg';
import Logout from '../../assets/Logout red.svg';




function SliderComponent() {
  return (
    <div
      className="d-flex align-items-center"
      style={{ position: 'fixed', height: '100%' }}
    >
      <Sidebar>
        <Menu  style={{backgroundColor:""}}>
            <Link className='fw-bold' style={{textDecoration:'none',color:"gray"}} ><MenuItem> <img className='p-2' src={Home} alt="" /> Home</MenuItem></Link>
          <MenuItem>  <img className='p-2' src={Profile} alt="" />Profile</MenuItem>
          <MenuItem> <img className='p-2' src={Payment} alt="" />Payment</MenuItem>
          <MenuItem><img className='p-2' src={Document} alt="" />Courses</MenuItem>
          
          <MenuItem className=''> <img className='p-2' src={Logout} alt="" /> Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SliderComponent;
