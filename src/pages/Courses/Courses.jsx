import React, { useEffect, useState } from 'react';

import chevronright from '../../assets/chevron-right.svg';
import coursebg from '../../assets/coursebg.svg';
import { getCandidate } from '../../api/allApi';
import { Link, useNavigate } from 'react-router-dom';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { toast } from 'react-toastify';

function Courses({ setShow }) {
  setShow(true);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const name = JSON.parse(localStorage.getItem('findrData'))?.name;

  const getUserData = async () => {
    const candidateData = await getCandidate(name);
    setUserData(candidateData.data.data);
  };

  useEffect(() => {
    if (name) getUserData();
    else {
      toast.warning('Please login');
      navigate('/login');
    }
  }, []);

  return (
    <div className="d-lg-flex ">
      <div className="d-none d-lg-block">
        <SliderComponent />
      </div>
      <div className="container" style={{ paddingBlock: '80px' }}>
        <div className="shapeParent d-flex align-items-center mb-4">
          <div className="shape "></div>
          <h2 className="m-0 ms-3">Courses</h2>
        </div>
        {userData.course_fee == 1 ? (
          <div
            className="d-flex flex-wrap justify-content-evenly gap-4"
            style={{ height: '100vh' }}
          >
            {userData.course_list?.map((course) => (
              <div
                className="row shadow "
                key={course.name}
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
                  <div className="mt-3" style={{ height: '100%' }}>
                    <p className="fs-3" style={{ color: 'white' }}>
                      {course.course_name.toUpperCase()}
                    </p>
                    <p className="fs-5" style={{ color: 'white' }}>
                      {course.university}
                    </p>
                  </div>
                </div>
                <div className="col-7" style={{ height: '100%' }}>
                  <div className="mt-3">
                    <p className="fw-bold" style={{ fontSize: '18px' }}>
                      {course.country}
                    </p>
                    <p className="fw-bold" style={{ fontSize: '18px' }}>
                      {course.scholarship}
                    </p>
                    <p
                      className="fw-bold"
                      style={{ fontSize: '18px', color: 'red' }}
                    >
                      {course.deadline}
                    </p>
                    <div
                      className="d-flex justify-content-end"
                      style={{ backgroundColor: '' }}
                    >
                      <Link
                        to={course.course_link}
                        target="blank"
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
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-wrap justify-content-evenly gap-4"
            style={{ height: '100vh' }}
          >
            {userData.registration_fee === 1 ? (
              userData.course_list?.length > 0 ? (
                <div className="">
                  <div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: '100%', height: '20rem' }}
                    >
                      <img style={{ width: '100%' }} src={coursebg} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <p
                      className="fw-bold text-center mt-5"
                      style={{ fontSize: '22px' }}
                    >
                      Exciting News! Course List Updated. Pay fees to access.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: '100%', height: '20rem' }}
                    >
                      <img style={{ width: '100%' }} src={coursebg} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <p
                      className="fw-bold text-center mt-5"
                      style={{ fontSize: '22px' }}
                    >
                      Our expert analysis team is currently examining your data
                      in depth to identify the most fitting course designed
                      specifically for your educational and career goals.
                    </p>
                  </div>
                </div>
              )
            ) : (
              <div className="p-3">
                <div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: '100%', height: '20rem' }}
                  >
                    <img style={{ width: '100%' }} src={coursebg} alt="" />
                  </div>
                </div>
                <div className="">
                  <p
                    className="fw-bold text-center mt-5"
                    style={{ fontSize: '22px' }}
                  >
                    <span className='' style={{ color: '#0F6990', fontSize:'30px' }}>
                      Take the First Step{' '}
                    </span>
                    <br /> Pay Registration Fee and Begin Your Study Abroad
                    Adventure
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
