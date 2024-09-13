import React, { useEffect, useState } from "react";

import chevronright from "../../assets/chevron-right.svg";
import { getCandidate } from "../../api/allApi";
import { Link, useNavigate } from "react-router-dom";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

function Courses({ setShow }) {
   setShow(true);
   const [userData, setUserData] = useState({});
   const navigate = useNavigate();

   const name = JSON.parse(localStorage.getItem("findrData")).name;

   const getUserData = async () => {
      let data = await getCandidate(name);
      setUserData(data.data.data);
   };

   useEffect(() => {
      getUserData();
   }, []);

   return (
      <div className="d-lg-flex">
         <div className="d-none d-lg-block"><SliderComponent /></div>
         <div
            className="container mx-5"
            style={{ paddingBlock: "80px" }}
         >
            <div className="shapeParent d-flex align-items-center mb-4">
               <div className="shape "></div>
               <h2 className="m-0 ms-3">Courses</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly gap-4" style={{ height: "100vh"}}>
               <div
                  className="row shadow "
                  style={{
                     borderRadius: "10px",
                     height: "200px",
                     width: "550px",
                  }}
               >
                  <div
                     className="col-5 "
                     style={{
                        backgroundColor: "#0F6990",
                        borderRadius: "10px 0 0 10px",
                     }}
                  >
                     <div className="mt-3" style={{ height: "100%" }}>
                        <p className="fs-3" style={{ color: "white" }}>
                           Coures Name
                        </p>
                        <p className="fs-5" style={{ color: "white" }}>
                           University
                        </p>
                     </div>
                  </div>
                  <div className="col-7" style={{ height: "100%" }}>
                     <div className="mt-3">
                        <p className="fw-bold" style={{ fontSize: "18px" }}>
                           Country
                        </p>
                        <p className="fw-bold" style={{ fontSize: "18px" }}>
                           Scholarship
                        </p>
                        <p
                           className="fw-bold"
                           style={{ fontSize: "18px", color: "red" }}
                        >
                           Deadine
                        </p>
                        <div
                           className="d-flex justify-content-end"
                           style={{ backgroundColor: "" }}
                        >
                           <Link
                              to="link"
                              className="d-flex align-items-center fw-bold"
                              style={{
                                 color: "#0F6990",
                                 width: "140px",
                                 textDecoration: "none",
                                 fontSize: "18px",
                              }}
                           >
                              Apply Now
                              <img
                                 className="ms-1"
                                 style={{ height: "100%" }}
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
      </div>
   );
}

export default Courses;
