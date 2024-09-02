import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import Home from '../../assets/Home.svg';
import Profile from '../../assets/Profile.svg';
import Payment from '../../assets/Payment.svg';
import Document from '../../assets/Document.svg';
import Logout from '../../assets/Logout.svg';
import Calling from '../../assets/Calling.svg';
import menu from '../../assets/menu.svg';

function SliderComponent() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div style={{ position: 'absolute', top: '0', left: '0' }}>
      <Sidebar collapsed={collapse} style={{ position: 'relative' }}>
        <Menu className="d-flex ms-2" style={{ marginTop: '80px' }}>
          <Link
            onClick={() => {
              setCollapse(!collapse);
            }}
            className="d-lg-none"
            style={{ marginTop: '100px' }}
          >
            <img src={menu} alt="" />
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: 'none', color: 'gray' }}
            to={'/'}
          >
            <MenuItem>
              {' '}
              <img className="p-2" src={Home} alt="" /> Home
            </MenuItem>
          </Link>
          <Link
            to={'/profile'}
            className="fw-bold"
            style={{ textDecoration: 'none', color: 'gray' }}
          >
            <MenuItem>
              {' '}
              <img className="p-2" src={Profile} alt="" />
              Profile
            </MenuItem>
          </Link>
          <Link
            to={'/payment'}
            className="fw-bold"
            style={{ textDecoration: 'none', color: 'gray' }}
          >
            <MenuItem>
              {' '}
              <img className="p-2" src={Payment} alt="" />
              Payment
            </MenuItem>
          </Link>
          <Link
            to={'/courses'}
            className="fw-bold"
            style={{ textDecoration: 'none', color: 'gray' }}
          >
            <MenuItem>
              <img className="p-2" src={Document} alt="" />
              Courses
            </MenuItem>
          </Link>
          <Link
            to={'/contactus'}
            className="fw-bold"
            style={{ textDecoration: 'none', color: 'gray' }}
          >
            <MenuItem>
              <img className="p-2" src={Calling} alt="" />
              Contact us
            </MenuItem>
          </Link>
          <MenuItem
            className="fw-bold"
            style={{
              textDecoration: 'none',
              color: 'gray',
            }}
          >
            {' '}
            <img className="p-2" src={Logout} alt="" /> Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SliderComponent;
