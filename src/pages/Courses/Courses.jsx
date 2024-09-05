import React from 'react';
import { Link } from 'react-router-dom';
import chevronright from '../../assets/chevron-right.svg';

function Courses({ setShow }) {
  setShow(true);
  // setSliderShow(true);
  return (
    <div className="container" style={{ paddingBlock: '150px',paddingLeft:'180px' }}>
      <div className="shapeParent d-flex align-items-center mb-4">
        <div className="shape "></div>
        <h2 className='m-0 ms-3'>Courses</h2>
      </div>
      <div className="d-flex flex-wrap gap-3 justify-content-between p-3 ">
        <div
          className="row shadow "
          style={{
            borderRadius: '10px',
            height: '200px',
            width: '550px',
          }}
        >
          <div
            className="col-5 "
            style={{
              backgroundColor: '#0F6990',
              borderRadius: '10px 0 0 10px',
            }}
          >
            <div
              className=" justify-content-center align-items-center mt-3"
              style={{ height: '100%' }}
            >
              <p className="fs-3" style={{ color: 'white' }}>
                Coures Name
              </p>
              <p className="fs-5" style={{ color: 'white' }}>
                University
              </p>
            </div>
          </div>
          <div
            className="col-7   justify-content-center align-items-center  "
            style={{ height: '100%' }}
          >
            <div className="mt-3">
              <p className="fw-bold" style={{ fontSize: '18px' }}>
                Country
              </p>
              <p className="fw-bold" style={{ fontSize: '18px' }}>
                Scholarship
              </p>
              <p className="fw-bold" style={{ fontSize: '18px', color: 'red' }}>
                Deadine
              </p>
              <div
                className="d-flex justify-content-end"
                style={{ backgroundColor: '' }}
              >
                <Link
                  to={'/signup'}
                  className="d-flex align-items-center fw-bold"
                  style={{
                    color: '#0F6990',
                    width: '140px',
                    textDecoration: 'none',
                    fontSize: '18px',
                  }}
                >
                  Apply Now
                  <img
                    className="ms-1"
                    style={{ height: '100%' }}
                    src={chevronright}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row shadow "
          style={{
            borderRadius: '10px',
            height: '200px',
            width: '550px',
          }}
        >
          <div
            className="col-5 "
            style={{
              backgroundColor: '#0F6990',
              borderRadius: '10px 0 0 10px',
            }}
          >
            <div
              className=" justify-content-center align-items-center mt-3"
              style={{ height: '100%' }}
            >
              <p className="fs-3" style={{ color: 'white' }}>
                Coures Name
              </p>
              <p className="fs-5" style={{ color: 'white' }}>
              University
              </p>
            </div>
          </div>
          <div
            className="col-7   justify-content-center align-items-center  "
            style={{ height: '100%' }}
          >
            <div className="mt-3">
              <p className="fw-bold" style={{ fontSize: '18px' }}>
                Country
              </p>
              <p className="fw-bold" style={{ fontSize: '18px' }}>
                Scholarship
              </p>
              <p className="fw-bold" style={{ fontSize: '18px', color: 'red' }}>
                Deadine
              </p>

              <div
                className="d-flex justify-content-end"
                style={{ backgroundColor: '' }}
              >
                <Link
                  to={'/signup'}
                  className="d-flex align-items-center fw-bold"
                  style={{
                    color: '#0F6990',
                    width: '140px',
                    textDecoration: 'none',
                    fontSize: '18px',
                  }}
                >
                  Apply Now
                  <img
                    className="ms-1"
                    style={{ height: '100%' }}
                    src={chevronright}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
