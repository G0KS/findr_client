import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { getCandidate } from "../../api/allApi";
import { Link, useNavigate } from "react-router-dom";

function Courses({ setShow, setSliderShow }) {
   setShow(true);
   setSliderShow(true);
   const [userData, setUserData] = useState({});
   const navigate = useNavigate()

   const name = JSON.parse(localStorage.getItem("findrData")).name;

   const getUserData = async () => {
      let data = await getCandidate(name);
      setUserData(data.data.data);
   };

   useEffect(() => {
      getUserData();
   }, []);

   return (
      <div
         style={{
            paddingTop: "100px",
            paddingLeft: "250px",
            backgroundColor: "lightblue",
         }}
      >
         <Container>
            <div
               className="d-flex"
               style={{
                  marginBottom: "50px",
                  position: "relative",
               }}
            >
               <div className="shape d-flex align-items-start mt-1"></div>
               <h2 className="fs-2 p-2">Courses</h2>
            </div>
            <Row className="gap-3 mb-5">
               <Col className="d-flex flex-wrap justify-content-center align-items-center gap-3 ">
                  {userData.course_list?.map((course) => (
                     <Card style={{ width: "35rem" }}>
                        <Card.Body className="p-4 d-flex align-items-center justify-content-center flex-column ">
                           <Card.Title>Course: {course.course_name}</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted mt-2  ">
                           University: {course.university}
                           </Card.Subtitle>
                           <Card.Text className="">Country: {course.country}</Card.Text>
                           <Card.Text className="">Scholarship: {course.scholarship}</Card.Text>
                           <Card.Text className="" style={{ color: "red" }}>Deadline: {course.deadline}</Card.Text>
                           
                           <Link
                              className="btn text-light "
                              style={{ backgroundColor: "#0F6990" }}
                              to={course.course_link}
                              target="blank"
                           >
                              Course Link
                           </Link>
                        </Card.Body>
                     </Card>
                  ))}
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default Courses;
