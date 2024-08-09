import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/f.png';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="d-flex justify-content-center align-items-center bg-body-tertiary"
      style={{ height: '90vh' }}
    >
      <div
        className="loginCard rounded-4 p-4 shadow-lg"
        style={{ width: '22rem', height: '30rem' }}
      >
        <div style={{ height: '70px', width: '70px' }}>
          <img src={Logo} style={{ height: '100%' }} alt="" />
        </div>
        <div className="title">
          <h4>Login to Findr</h4>
          <p style={{ fontSize: '13px' }}>
            Enter your email below to login to your account
          </p>
        </div>
        <div className="loginBody">
          <form className="d-flex flex-column justify-content-between">
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
            <p className="text-center mt-5" style={{ fontSize: '12px' }}>
              Dont have an account?{' '}
              <a
                role="button"
                onClick={() => navigate('/signup')}
                style={{ color: '#0F6990' }}
                className='fw-bold'
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
