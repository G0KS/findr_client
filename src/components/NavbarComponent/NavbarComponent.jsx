import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo3.png';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              role="button"
            />
          </Navbar.Brand>
        </Container>

        <Form inline>
          <Row className="container">
            <Col xs="auto"></Col>
            <Col xs="auto">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                className="btn btn-light"
              >
                Login{' '}
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
