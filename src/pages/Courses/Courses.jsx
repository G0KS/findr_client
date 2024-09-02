import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import link from '../../assets/link.svg';

function Courses({ setShow, setSliderShow }) {
  setShow(true);
  setSliderShow(true);
  return (
    <Container>
      <div
        className="d-flex"
        style={{
          paddingTop: '100px',
          marginBottom: '50px',
          position: 'relative',
        }}
      >
        <div
          className="shape d-flex align-items-start mt-1"
          style={{ position: 'absolute', left: '248px' }}
        ></div>
        <h2
          className="fs-2 p-2"
          style={{ position: 'absolute', left: '254px', top: '90px' }}
        >
          Courses
        </h2>
      </div>
      <Row className="gap-3">
        <Col className="d-none d-lg-block"></Col>
        <Col className="d-flex justify-content-center align-items-center   ">
          <Card style={{ width: '30rem' }}>
            <Card.Body className="p-4 d-flex align-items-center justify-content-center flex-column ">
              <Card.Title>Course name </Card.Title>
              <Card.Subtitle className="mb-2 text-muted mt-2  ">
                University
              </Card.Subtitle>
              <Card.Text className="">country</Card.Text>
              <Card.Text className="">scholarship:</Card.Text>
              <Card.Text>
                <Card.Text className="" style={{color:'red'}}>deadline</Card.Text>
              </Card.Text>
              <Button
                className="btn text-light "
                style={{ backgroundColor: '#0F6990' }}
              >
                Course Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center ">
          <Card style={{ width: '30rem' }}>
            <Card.Body className="p-4 d-flex align-items-center justify-content-center flex-column">
              <Card.Title>Course name </Card.Title>
              <Card.Subtitle className="mb-2 text-muted mt-2  ">
                University
              </Card.Subtitle>
              <Card.Text className="">country</Card.Text>
              <Card.Text>
                <Card.Text className="">scholarship:</Card.Text>
              </Card.Text>
              <Card.Text className="" style={{color:'red'}}>deadline</Card.Text>
              <Button
                className="btn text-light "
                style={{ backgroundColor: '#0F6990' }}
              >
                Course Link
                {/* <img className='ms-1' style={{width:"25px"}} src={link} alt="" /> */}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Courses;
