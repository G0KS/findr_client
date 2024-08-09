import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/f.png';
import RegImg from '../../assets/login.svg';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section
      className="d-flex justify-content-center align-items-center loginSection"
      style={{ height: '90vh' }}
    >
      <div className="d-flex justify-content-center align-items-center  rounded-4 p-4 shadow-lg bg-white mx-4">
        <div
          className="signupCard row"
          style={{ maxWidth: '40rem' }}
        >
          <div className="col-lg-6">
            <div style={{ height: '70px', width: '70px' }}>
              <img src={Logo} style={{ height: '100%' }} alt="" />
            </div>
            <div className="title">
              <h4>Create Findr account</h4>
              <p style={{ fontSize: '13px' }}>
                Provide all the details to create your account. Already have an
                account?{' '}
                <a
                  role="button"
                  onClick={() => navigate('/login')}
                  style={{ color: '#0F6990' }}
                  className="fw-bold"
                >
                  Login to Findr
                </a>
                <br />
                View Findr&#39;s{' '}
                <a
                  role="button"
                  onClick={() => navigate('/signup')}
                  style={{ color: '#0F6990' }}
                  className="fw-bold"
                >
                  Terms and conditions
                </a>{' '}
                and{' '}
                <a
                  role="button"
                  onClick={() => navigate('/signup')}
                  style={{ color: '#0F6990' }}
                  className="fw-bold"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="regImg d-none d-lg-block">
              <img src={RegImg} alt="regImg" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="loginBody">
              <form className="d-flex flex-column justify-content-between">
                <label
                  htmlFor="name"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Name
                </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    id="name"
                    type="text"
                    placeholder='Full Name'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <label
                  htmlFor="phone"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Phone Number
                </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    id="phone"
                    type="text"
                    placeholder='Phone Number'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <label
                  htmlFor="email"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Email
                </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    id="email"
                    type="text"
                    placeholder='Email Id'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <label
                  htmlFor="address"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Address
                </label>
                <div className="input-group input-group-sm mb-3">
                  <textarea
                    id="address"
                    type="textarea"
                    placeholder='Address'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <label
                  htmlFor="password"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Password
                </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1"
                  style={{ fontSize: '12px' }}
                >
                  Confirm Password
                </label>
                <div className="input-group input-group-sm mb-3">
                  <input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
                <div className="d-flex mb-3">
                  <input
                    type="checkbox"
                    name=""
                    id="showPassword"
                    className="me-2 btn"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label style={{ fontSize: '12px' }}>Show Password</label>
                </div>

                <button
                  className="btn text-light"
                  style={{ backgroundColor: '#0F6990' }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
