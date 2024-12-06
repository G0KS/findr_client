import { useEffect, useState } from "react";
import LogoS from "../../assets/F2.png";

import coursebg from "../../assets/coursebg.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFrappeGetDoc } from "frappe-react-sdk";

function Courses({ setShow, setSidebarShow }) {
   setShow(true);
   setSidebarShow(true);
   const [userData, setUserData] = useState({});
   const navigate = useNavigate();

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { data } = useFrappeGetDoc("Student", c_id);

   const getUserData = () => {
      setUserData(data);
   };

   useEffect(() => {
      if (name) getUserData();
      else {
         toast.warning("Please login");
         navigate("/login");
      }
   }, [data]);

   return (
      <div className="d-flex">
         <div className="d-none d-lg-block" style={{ width: "380px" }}></div>
         <div className="container" style={{ paddingBlock: "80px" }}>
            <div className="shapeParent d-flex align-items-center mb-5">
               <div className="shape "></div>
               <h2 className="m-0 ms-3">Courses</h2>
            </div>
            {data?.course_fee == 1 ? (
               <div className="d-flex flex-wrap gap-4">
                  {data.course_list?.map((course) => (
                     <div className="courseCard shadow" key={course.name}>
                        <div className="courseImgContainer">
                           <img className="courseLogo" src={LogoS} alt="" />
                        </div>

                        <div className="p-3">
                           <h5
                              className="text-center p-1 fw-bolder"
                              style={{ color: "#0F6990" }}
                           >
                              {course.course_name.toUpperCase()}
                           </h5>
                           <div className="p-3">
                              <p>
                                 <span
                                    className="fw-bolder"
                                    style={{ color: "#0f6990" }}
                                 >
                                    University :
                                 </span>{" "}
                                 {course.university}
                              </p>
                              <p>
                                 <span
                                    className="fw-bolder"
                                    style={{ color: "#0f6990" }}
                                 >
                                    Country :
                                 </span>{" "}
                                 {course.country}
                              </p>
                              <p>
                                 <span
                                    className="fw-bolder"
                                    style={{ color: "#0f6990" }}
                                 >
                                    Scholarship :
                                 </span>{" "}
                                 {course.scholarship}
                              </p>
                              <p>
                                 <span
                                    className="fw-bolder"
                                    style={{ color: "#0f6990" }}
                                 >
                                    Deadline :
                                 </span>{" "}
                                 {course.deadline}
                              </p>
                           </div>
                           <button className="btnNew btn2 ">Apply Now</button>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="d-flex flex-wrap justify-content-evenly gap-4">
                  {data?.registration_fee === 1 ? (
                     data.course_list?.length > 0 ? (
                        <div className="d-flex flex-column align-items-center w-100">
                           <div
                              className="d-flex justify-content-center align-items-center"
                              style={{ width: "60%" }}
                           >
                              <img
                                 style={{ width: "100%" }}
                                 src={coursebg}
                                 alt=""
                              />
                           </div>
                           <div className="">
                              <p
                                 className="fw-bold text-center mt-5"
                                 style={{ fontSize: "22px" }}
                              >
                                 Exciting News! Course List Updated. Pay fees to
                                 access.
                              </p>
                           </div>
                           <button
                              className="text-light mt-4 rounded paymentBtn"
                              onClick={() => navigate("/payment")}
                           >
                              Go to Payment
                           </button>
                        </div>
                     ) : (
                        <div className="d-flex flex-column align-items-center">
                           <div
                              className="d-flex justify-content-center align-items-center"
                              style={{ width: "60%" }}
                           >
                              <img
                                 style={{ width: "100%" }}
                                 src={coursebg}
                                 alt=""
                              />
                           </div>
                           <div className="">
                              <p
                                 className="fw-bold text-center"
                                 style={{ fontSize: "22px" }}
                              >
                                 Our expert analysis team is currently examining
                                 your data in depth to identify the most fitting
                                 course designed specifically for your
                                 educational and career goals.
                              </p>
                           </div>
                        </div>
                     )
                  ) : (
                     <div className="d-flex flex-column align-items-center">
                        <div
                           className="d-flex justify-content-center align-items-center w-100"
                           style={{ width: "60%" }}
                        >
                           <img
                              style={{ width: "100%" }}
                              src={coursebg}
                              alt=""
                           />
                        </div>

                        <div className="">
                           <p
                              className="fw-bold text-center mt-5"
                              style={{ fontSize: "22px" }}
                           >
                              <span
                                 className=""
                                 style={{
                                    color: "#0F6990",
                                    fontSize: "30px",
                                 }}
                              >
                                 Take the First Step{" "}
                              </span>
                              <br /> Pay Registration Fee and Begin Your Study
                              Abroad Adventure
                           </p>
                        </div>
                        <button
                           className="text-light mt-4 rounded paymentBtn"
                           onClick={() => navigate("/payment")}
                        >
                           Go to Payment
                        </button>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

export default Courses;
