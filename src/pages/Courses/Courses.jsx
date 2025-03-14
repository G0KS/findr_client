import { useEffect, useState } from "react";
import LogoS from "../../assets/F2.png";
import paymemtImg from "../../assets/paymentimg.svg";
import paymemtImg2 from "../../assets/paymentimg2.svg";
import Consultant from "../../assets/Consultant.svg";
import Consultantown from "../../assets/Consultantown.svg";

import tick from "../../assets/tick.svg";

import coursebg from "../../assets/coursebg.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFrappeGetDoc, useFrappeUpdateDoc } from "frappe-react-sdk";
import ReactCardFlip from "react-card-flip";

function Courses({ setShow, setSidebarShow }) {
   document.title = "Courses | Findr";
   setShow(true);
   setSidebarShow(true);
   const [userData, setUserData] = useState({});
   const navigate = useNavigate();
   const [showFindrCard, setShowFindrCard] = useState(false);
   const [consultancyChoosed, setConsultancyChoosed] = useState(false);
   const [consultancyPreference, setConsultancyPreference] = useState({});

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { data, isLoading } = useFrappeGetDoc("Student", c_id);
   const { updateDoc } = useFrappeUpdateDoc();

   const districts = [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
   ];

   const getUserData = () => {
      if (!isLoading) {
         if (data.profile_updated == 1) {
            setUserData(data);
            if (data.consultancy_opted == 1) {
               setConsultancyChoosed(true);
            }
         } else {
            toast.warning("Complete your profile to continue");
            navigate("/profile/update");
         }
      }
   };

   const getFormData = (e) => {
      const { name, value } = e.target;
      setConsultancyPreference({ ...consultancyPreference, [name]: value });
   };

   const handleSubmit = () => {
      const {
         preferred_location,
         consultancy_name,
         consultancy_address,
         consultancy_number,
      } = consultancyPreference;

      if (
         (consultancy_address == "") |
         (preferred_location == "") |
         (consultancy_name == "") |
         (consultancy_number == "")
      ) {
         toast.warn("Fill the required details");
      } else {
         updateDoc("Student", c_id, {
            consultancy_address,
            preferred_location,
            consultancy_name,
            consultancy_number,
            consultancy_opted: 1,
         })
            .then(() => {
               toast.success("Your request has been recieved");
               setConsultancyChoosed(true);
            })
            .catch((err) => {
               console.error(err);
               toast.warn("Some internal error. Please try later");
            });
      }
   };

   useEffect(() => {
      if (name) {
         getUserData();
      } else {
         toast.warning("Please login");
         navigate("/login");
      }
   }, [data]);

   const [flipped, setFlipped] = useState({});

   const handleFlip = (index) => {
      setFlipped((prevState) => (prevState === index ? null : index));
   };
   
   return (
      <>
         <div className="d-flex">
            <div className="d-none d-lg-block" style={{ width: "380px" }}></div>
            <div className="container" style={{ paddingBlock: "80px" }}>
               <div className="shapeParent d-flex align-items-center mb-5">
                  <div className="shape "></div>
                  <h2 className="m-0 ms-3">Courses</h2>
               </div>
               {isLoading ? (
                  "Loading"
               ) : (
                  <>
                     {data.consultancy_opted == 1 || data.course_fee == 1 ? (
                        <div className="d-flex flex-wrap gap-4">
                           {data.course_list?.map((course, index) => (
                              <>
                                 <ReactCardFlip
                                    isFlipped={flipped === index}
                                    flipDirection="vertical"
                                 >
                                    <div className="cardFront">
                                       <div className="courseCard shadow">
                                          <div className="courseImgContainer">
                                             <img
                                                className="courseLogo"
                                                src={LogoS}
                                                alt=""
                                             />
                                          </div>

                                          <div className="p-3">
                                             <h5
                                                className="text-center p-1 fw-bolder"
                                                style={{ color: "#0F6990" }}
                                             >
                                                {course.course_name.toUpperCase()}
                                             </h5>
                                             <div className="p-2">
                                                <p>
                                                   <span
                                                      className="fw-bolder"
                                                      style={{
                                                         color: "#0f6990",
                                                      }}
                                                   >
                                                      University :
                                                   </span>{" "}
                                                   {course.university}
                                                </p>
                                                {course.tution_fee && (
                                                   <p>
                                                      <span
                                                         className="fw-bolder"
                                                         style={{
                                                            color: "#0f6990",
                                                         }}
                                                      >
                                                         Tution Fee :
                                                      </span>{" "}
                                                      {course.tution_fee}
                                                   </p>
                                                )}
                                                <p>
                                                   <span
                                                      className="fw-bolder"
                                                      style={{
                                                         color: "#0f6990",
                                                      }}
                                                   >
                                                      Country :
                                                   </span>{" "}
                                                   {course.country}
                                                </p>
                                                {course.scholarship && (
                                                   <p>
                                                      <span
                                                         className="fw-bolder"
                                                         style={{
                                                            color: "#0f6990",
                                                         }}
                                                      >
                                                         Scholarship :
                                                      </span>{" "}
                                                      {course.scholarship}
                                                   </p>
                                                )}
                                                {course.scholarship_deadline && (
                                                   <p>
                                                      <span
                                                         className="fw-bolder"
                                                         style={{
                                                            color: "#0f6990",
                                                         }}
                                                      >
                                                         Scholarship Deadline:
                                                      </span>{" "}
                                                      {
                                                         course.scholarship_deadline
                                                      }
                                                   </p>
                                                )}
                                                <p>
                                                   <span
                                                      className="fw-bolder"
                                                      style={{
                                                         color: "#0f6990",
                                                      }}
                                                   >
                                                      Course Deadline :
                                                   </span>{" "}
                                                   {course.course_deadline}
                                                </p>
                                             </div>
                                          </div>
                                          {data.course_fee == 1 && (
                                             <div
                                                style={{
                                                   position: "absolute",
                                                   right: "10px",
                                                   bottom: "10px",
                                                }}
                                             >
                                                <button
                                                   className="btnNew btn2"
                                                   onClick={() =>
                                                      handleFlip(index)
                                                   }
                                                >
                                                   Apply Now
                                                </button>
                                             </div>
                                          )}
                                       </div>
                                    </div>

                                    <div className="cardBack">
                                       <div className="courseCard shadow">
                                          <div className="courseImgContainer">
                                             <img
                                                className="courseLogo"
                                                src={LogoS}
                                                alt=""
                                             />
                                          </div>

                                          <div className="p-3">
                                             <div>
                                                <p
                                                   className="fw-bolder text-center pt-1"
                                                   style={{
                                                      color: "#0F6990",
                                                      fontSize: "18px",
                                                   }}
                                                >
                                                   {course.course_name.toUpperCase()}
                                                </p>
                                             </div>
                                             <div className="d-flex justify-content-center">
                                                <button
                                                   className="btnNew btn2"
                                                   onClick={() => {
                                                      window.open(
                                                         course.course_link,
                                                         " _blank"
                                                      );
                                                   }}
                                                >
                                                   Direct Link
                                                </button>
                                             </div>
                                             <div className="p-2">
                                                {course.scholarship && (
                                                   <>
                                                      <p
                                                         className="fw-bolder  pt-1"
                                                         style={{
                                                            color: "#0F6990",
                                                            fontSize: "17px",
                                                         }}
                                                      >
                                                         Scholarship Links{" "}
                                                         <i
                                                            className="fa-solid fa-link"
                                                            style={{
                                                               fontSize: "15px",
                                                            }}
                                                         ></i>
                                                      </p>

                                                      <div className="  mb-2 ">
                                                         <button
                                                            onClick={() =>
                                                               window.open(
                                                                  course.scholarship_link,
                                                                  "_blank"
                                                               )
                                                            }
                                                            className=" scholarship_btn p-2 btn fw-bold fw-bolder borderStyle"
                                                         >
                                                            <p
                                                               className="mb-0"
                                                               style={{
                                                                  fontSize:
                                                                     "15px",
                                                               }}
                                                            >
                                                               {
                                                                  course.scholarship
                                                               }
                                                            </p>
                                                         </button>
                                                      </div>
                                                   </>
                                                )}
                                                {course.scholarship_2 && (
                                                   <div className="  mb-2 ">
                                                      <button
                                                         onClick={() =>
                                                            window.open(
                                                               course.scholarship_2_link,
                                                               "_blank"
                                                            )
                                                         }
                                                         className=" scholarship_btn p-2 btn fw-bold fw-bolder borderStyle"
                                                      >
                                                         <p
                                                            className="mb-0"
                                                            style={{
                                                               fontSize: "15px",
                                                            }}
                                                         >
                                                            {
                                                               course.scholarship_2
                                                            }
                                                         </p>
                                                      </button>
                                                   </div>
                                                )}
                                                {course.scholarship_3 && (
                                                   <div className="  mb-2 ">
                                                      <button
                                                         onClick={() =>
                                                            window.open(
                                                               course.scholarship_3_link,
                                                               "_blank"
                                                            )
                                                         }
                                                         className=" scholarship_btn p-2 btn fw-bold fw-bolder borderStyle"
                                                      >
                                                         <p
                                                            className="mb-0"
                                                            style={{
                                                               fontSize: "15px",
                                                            }}
                                                         >
                                                            {
                                                               course.scholarship_3
                                                            }
                                                         </p>
                                                      </button>
                                                   </div>
                                                )}
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </ReactCardFlip>
                              </>
                           ))}
                        </div>
                     ) : (
                        <div className="d-flex flex-wrap justify-content-center column-gap-5">
                           {data.registration_fee === 1 ? (
                              data.course_list?.length > 0 ? (
                                 <>
                                    {/* 2nd card  */}
                                    {!consultancyChoosed && (
                                       <div className="d-flex flex-column align-items-center w-100">
                                          <div className="">
                                             <p
                                                className="fw-bold text-center"
                                                style={{ fontSize: "25px" }}
                                             >
                                                Exciting News! Your course list
                                                has been updated.
                                             </p>
                                          </div>
                                       </div>
                                    )}

                                    {!showFindrCard && (
                                       <>
                                          <div className="courseDetailCard shadow">
                                             <div className="paymentImgContainer p-3">
                                                <img
                                                   className="paymentImg"
                                                   src={paymemtImg2}
                                                   alt=""
                                                />
                                             </div>
                                             <h5
                                                className="text-center pt-4 px-4 fw-bolder"
                                                style={{
                                                   color: "#0F6990",
                                                }}
                                             >
                                                {" "}
                                                Let Consultant Pay for You.
                                             </h5>
                                             <div className="pb-3 d-flex justify-content-center ">
                                                <button
                                                   className="btnNew btn2 w-50 text-center"
                                                   data-bs-toggle="modal"
                                                   data-bs-target="#exampleModal"
                                                >
                                                   Proceed
                                                </button>
                                             </div>
                                          </div>

                                          <div className="d-flex align-items-center p-4">
                                             <p
                                                className="fw-bolder"
                                                style={{
                                                   fontSize: "22px",
                                                   color: "#0f6990",
                                                }}
                                             >
                                                or
                                             </p>
                                          </div>
                                          <div className="courseDetailCard shadow">
                                             <div className="paymentImgContainer p-3">
                                                <img
                                                   className="paymentImg"
                                                   src={paymemtImg}
                                                   alt=""
                                                />
                                             </div>
                                             <h5
                                                className="text-center pt-4 px-4 fw-bolder"
                                                style={{
                                                   color: "#0F6990",
                                                }}
                                             >
                                                {" "}
                                                Pay ₹5000 to unlock course list.
                                             </h5>
                                             <div className="pb-3 d-flex justify-content-center ">
                                                <button
                                                   className="btnNew btn2 w-50 text-center"
                                                   onClick={() =>
                                                      navigate("/payment")
                                                   }
                                                >
                                                   Pay Now
                                                </button>
                                             </div>
                                          </div>
                                       </>
                                    )}

                                    {/* agency form */}

                                    {showFindrCard && (
                                       <>
                                          <div className="courseDetailCard shadow">
                                             <div className="paymentImgContainer p-3">
                                                <img
                                                   className="paymentImg"
                                                   src={Consultant}
                                                   alt=""
                                                />
                                             </div>
                                             <div
                                                className="paymentCardContent "
                                                style={{
                                                   height: "340px",
                                                }}
                                             >
                                                <h5
                                                   className="text-center pt-4 px-4 fw-bolder"
                                                   style={{
                                                      color: "#0F6990",
                                                   }}
                                                >
                                                   {" "}
                                                   Let Findr Choose Best
                                                   Consultant For You
                                                </h5>
                                                <div className="checkList">
                                                   <ul
                                                      className="ms-3 mt-4"
                                                      style={{
                                                         listStyle: "none",
                                                      }}
                                                   >
                                                      <li className="fw-bolder">
                                                         <img
                                                            className="checkImg me-2"
                                                            src={tick}
                                                            alt=""
                                                         />
                                                         Cheapest Option
                                                         Available
                                                      </li>
                                                      <li className="fw-bolder mt-2">
                                                         <img
                                                            className="checkImg me-2"
                                                            src={tick}
                                                            alt=""
                                                         />
                                                         Trusted And Verified
                                                         Agencies
                                                      </li>
                                                      <li className="fw-bolder mt-2">
                                                         <img
                                                            className="checkImg me-2"
                                                            src={tick}
                                                            alt=""
                                                         />
                                                         Hassle Free Service
                                                      </li>
                                                   </ul>
                                                </div>
                                                <div className="d-flex flex-wrap px-5 py-5 pb-4 pt-3 ">
                                                   <label
                                                      htmlFor=""
                                                      className="d-block fw-bolder mb-2"
                                                   >
                                                      Location:
                                                   </label>
                                                   <select
                                                      id="district"
                                                      name="preferred_location"
                                                      className="profileInputBox"
                                                      onChange={(e) =>
                                                         getFormData(e)
                                                      }
                                                   >
                                                      <option hidden>
                                                         --Select your
                                                         location--
                                                      </option>
                                                      {districts.map(
                                                         (district, index) => (
                                                            <option
                                                               key={index}
                                                               value={district}
                                                            >
                                                               {district}
                                                            </option>
                                                         )
                                                      )}
                                                   </select>
                                                </div>
                                             </div>
                                             <div className="pb-3 d-flex justify-content-center ">
                                                <button
                                                   className="btnNew btn2 w-25 text-center"
                                                   onClick={handleSubmit}
                                                >
                                                   Submit
                                                </button>
                                             </div>
                                          </div>
                                          <div className="d-flex align-items-center p-4">
                                             <p
                                                className="fw-bolder"
                                                style={{
                                                   fontSize: "22px",
                                                   color: "#0f6990",
                                                }}
                                             >
                                                or
                                             </p>
                                          </div>
                                          <div className="courseDetailCard shadow">
                                             <div className="paymentImgContainer p-3">
                                                <img
                                                   className="paymentImg"
                                                   src={Consultantown}
                                                   alt=""
                                                />
                                             </div>
                                             <div
                                                className="paymentCardContent "
                                                style={{
                                                   height: "340px",
                                                }}
                                             >
                                                <h5
                                                   className="text-center pt-4 px-4 fw-bolder"
                                                   style={{
                                                      color: "#0F6990",
                                                   }}
                                                >
                                                   {" "}
                                                   Give Your Preferrd
                                                   Consultancy Details
                                                </h5>
                                                <div className="d-flex flex-wrap px-5 py-5 pb-4 pt-3 ">
                                                   <label
                                                      htmlFor=""
                                                      className="d-block fw-bolder mb-2"
                                                   >
                                                      {" "}
                                                      Consultancy Name:
                                                   </label>
                                                   <input
                                                      className="profileInputBox"
                                                      type="text"
                                                      placeholder="Consultancy Name"
                                                      name="consultancy_name"
                                                      onChange={(e) =>
                                                         getFormData(e)
                                                      }
                                                   />
                                                   <label
                                                      htmlFor=""
                                                      className="d-block fw-bolder mb-2 mt-3"
                                                   >
                                                      {" "}
                                                      Address:
                                                   </label>
                                                   <input
                                                      className="profileInputBox"
                                                      type="text"
                                                      placeholder="Consultancy Address"
                                                      name="consultancy_address"
                                                      onChange={(e) =>
                                                         getFormData(e)
                                                      }
                                                   />
                                                   <label
                                                      htmlFor=""
                                                      className="d-block fw-bolder mb-2 mt-3"
                                                   >
                                                      {" "}
                                                      Phone:
                                                   </label>
                                                   <input
                                                      className="profileInputBox"
                                                      type="number"
                                                      placeholder="Consultancy Number"
                                                      name="consultancy_number"
                                                      onChange={(e) =>
                                                         getFormData(e)
                                                      }
                                                   />
                                                </div>
                                             </div>
                                             <div className="pb-3 d-flex justify-content-center ">
                                                <button
                                                   className="btnNew btn2 w-25 text-center"
                                                   onClick={handleSubmit}
                                                >
                                                   Submit
                                                </button>
                                             </div>
                                          </div>
                                       </>
                                    )}
                                 </>
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
                                          Our expert analysis team is currently
                                          examining your data in depth to
                                          identify the most fitting course
                                          designed specifically for your
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
                                       <br /> Pay Registration Fee and Begin
                                       Your Study Abroad Adventure
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
                  </>
               )}
            </div>
         </div>

         {/* Modal */}
         <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
         >
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1
                        className="modal-title fs-4 fw-bold"
                        id="exampleModalLabel"
                     >
                        Kindly confirm your request
                     </h1>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body text-center">
                     <span className="fw-bold">
                        This service is currently limited to locations in Kerala
                     </span>
                     .
                     <p className="text-secondary">Coming to your city soon!</p>
                  </div>
                  <div className="modal-footer justify-content-center">
                     <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                     >
                        Close
                     </button>
                     <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => setShowFindrCard(true)}
                        data-bs-dismiss="modal"
                     >
                        Proceed
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Courses;
