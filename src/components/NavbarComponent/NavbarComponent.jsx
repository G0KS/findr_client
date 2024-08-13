
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo3.png';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        className="d-flex justify-content-between px-5"
        style={{
          position: 'fixed',
          width: '100%',
          backdropFilter: 'blur(5px)',
          zIndex: '9999',
        }}
      >
        <Navbar.Brand>
          <img
            src={Logo}
            width="100"
            alt="React Bootstrap logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            role="button"
          />
        </Navbar.Brand>

        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
          className="btn text-light"
          style={{ backgroundColor: '#0F6990' }}
        >
          Login{' '}
        </Button>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
