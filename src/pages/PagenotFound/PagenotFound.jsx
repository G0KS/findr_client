import React from 'react';
import pagenotfound from '../../assets/pagenotfound.gif';
import { Link } from 'react-router-dom';

function PagenotFound({ setShow }) {
  setShow(true);

  return (
    <section
      className="container d-flex align-items-center justify-content-center "
      style={{ height: '100vh' }}
    >
      <div
        className="d-flex align-items-center justify-content-center flex-colujmn"
        style={{ width: '100%' }}
      >
        <div style={{ maxWidth: '1000px',backgroundColor:'lightblue' }} className="">
          {' '}
          <img style={{ width: '100%' }} src={pagenotfound} alt="" />
        </div>
        <h3 className="p-3">Look like you're lost!</h3>
        <Link
          to={'/'}
          className="btn"
          style={{
            backgroundColor: '#0F6990',
            color: '#ffff',
            width: '100px',
            // height: '18px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          Home
        </Link>
      </div>
    </section>
  );
}

export default PagenotFound;
