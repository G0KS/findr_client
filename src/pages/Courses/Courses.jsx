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

function Courses({ setShow, setSidebarShow }) {
   setShow(true);
   setSidebarShow(true);
   const [userData, setUserData] = useState({});
   const navigate = useNavigate();
   const [showFindrCard, setShowFindrCard] = useState(false);
   const [consultancyPreference, setConsultancyPreference] = useState({});

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { data, isLoading } = useFrappeGetDoc("Student", c_id);
   const { updateDoc } = useFrappeUpdateDoc();

   const getUserData = () => {
      setUserData(data);
   };

   const getFormData = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
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
         !consultancy_address &&
         !preferred_location &&
         !consultancy_name &&
         !consultancy_number
      ) {
         toast.warn("Fill the required details");
      } else {
         console.log(consultancyPreference);
         updateDoc("Student", c_id, {
            consultancy_address,
            preferred_location,
            consultancy_name,
            consultancy_number,
         })
            .then(() => toast.success("Your request has been recieved"))
            .catch((err) => {
               console.error(err);
               toast.warn("Some internal error. Please try later");
            });
      }
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
            {isLoading ? (
               "Loading"
            ) : (
               <>
                  {data.course_fee == 1 ? (
                     <div className="d-flex flex-wrap gap-4">
                        {data.course_list?.map((course) => (
                           <div className="courseCard shadow" key={course.name}>
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
                                 <button className="btnNew btn2">
                                    Apply Now
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="d-flex flex-wrap justify-content-evenly gap-4">
                        {data.registration_fee === 1 ? (
                           data.course_list?.length > 0 ? (
                              <>
                                 {/* 2nd card  */}
                                 <div className="d-flex flex-column align-items-center w-100">
                                    <div className="">
                                       <p
                                          className="fw-bold text-center"
                                          style={{ fontSize: "25px" }}
                                       >
                                          Exciting News! Course List Updated.
                                          Pay fees to access.
                                       </p>
                                    </div>
                                 </div>

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
                                             style={{ color: "#0F6990" }}
                                          >
                                             {" "}
                                             Let Consultant Pay for us.
                                          </h5>
                                          <div className="pb-3 d-flex justify-content-center ">
                                             <button
                                                className="btnNew btn2 w-50 text-center"
                                                onClick={() =>
                                                   setShowFindrCard(true)
                                                }
                                             >
                                                Click here
                                             </button>
                                          </div>
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
                                             style={{ color: "#0F6990" }}
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
                                             style={{ height: "340px" }}
                                          >
                                             <h5
                                                className="text-center pt-4 px-4 fw-bolder"
                                                style={{ color: "#0F6990" }}
                                             >
                                                {" "}
                                                Let Findr Choose Best Consultant
                                                For You
                                             </h5>
                                             <div className="checkList">
                                                <ul
                                                   className="ms-3 mt-4"
                                                   style={{ listStyle: "none" }}
                                                >
                                                   <li className="fw-bolder">
                                                      <img
                                                         className="checkImg me-2"
                                                         src={tick}
                                                         alt=""
                                                      />
                                                      Cheapest Option Available
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
                                                   {" "}
                                                   Location:
                                                </label>
                                                <input
                                                   className="profileInputBox"
                                                   type="text"
                                                   name="preferred_location"
                                                   placeholder="Enter location"
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
                                             style={{ height: "340px" }}
                                          >
                                             <h5
                                                className="text-center pt-4 px-4 fw-bolder"
                                                style={{ color: "#0F6990" }}
                                             >
                                                {" "}
                                                Give Your Preferrd Consultancy
                                                Details
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
                                       examining your data in depth to identify
                                       the most fitting course designed
                                       specifically for your educational and
                                       career goals.
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
                                    <br /> Pay Registration Fee and Begin Your
                                    Study Abroad Adventure
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
   );
}

export default Courses;
