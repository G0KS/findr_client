//
//    Paid Card
//

import React, { useEffect, useState } from "react";
import paymentimg from "../../assets/paymentimg.jpeg";
import RazorpayButton from "../../components/RazorpayButton";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFrappeGetDoc } from "frappe-react-sdk";

function Payment({ setShow, setSidebarShow }) {
   setShow(true);
   setSidebarShow(true);
   const [fee, setFee] = useState();
   const [payment, setPayment] = useState();
   const [paymentDesc, setPaymentDesc] = useState("");
   const navigate = useNavigate();

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { data } = useFrappeGetDoc("Student", c_id);
   console.log(data);

   const getPaymentDetails = () => {
      if (data !== undefined) {
         if (data.registration_fee == 1 && data.course_fee == 1) {
            setPayment("full_paid");
            setPaymentDesc(
               "Thanks for joining the findr.study community! Share your study abroad story and recommend us to friends who dare to dream."
            );
         } else if (data.registration_fee == 0) {
            setFee(2499);
            setPayment("registration_fee");
            setPaymentDesc(
               "Continue with payment to complete the registration"
            );
         } else if (data.course_list.length > 0) {
            setFee(5000);
            setPayment("course_fee");
            setPaymentDesc(
               "Unlock your course library - payment unlocks access!"
            );
         } else if (data.course_list.length == 0) {
            setPayment("payment_done");
            setPaymentDesc(
               "Payment received. Registration completed. You can access your tailored course suggestions in courses tab in 1-2 weeks."
            );
         }
      }
   };

   const getUserData = () => {
      if (data !== undefined) {
         if (!data.tenth_institution) {
            toast.warning("Complete your profile to continue");
            navigate("/profile/update");
         }
      }
   };

   useEffect(() => {
      if (name) {
         getUserData();
      } else {
         toast.warning("Please login");
         navigate("/login");
      }
      if (name) {
         getPaymentDetails();
      } else {
         toast.warning("Please login");
         navigate("/login");
      }
   }, [data]);

   useEffect(() => {}, [data]);

   return (
      <>
         <div className="d-flex">
            <div className="col-md-2"></div>
            <div className="col">
               <div style={{ width: "100%" }}>
                  <section
                     className="d-flex justify-content-center align-items-center p-2"
                     style={{
                        height: "100vh",
                        backgroundColor: "#0f6990",
                        backgroundImage:
                           "linear-gradient(315deg, #0f6990  1%, #ffffff  45%)",
                     }}
                  >
                     <div className="paymentCard rounded-4 p-4 bg-white shadow-lg">
                        {payment === "payment_done" ||
                        payment === "full_paid" ? (
                           <div className="row">
                              <div className="col d-flex align-items-center justify-content-center">
                                 <img
                                    src={paymentimg}
                                    alt=""
                                    style={{ maxWidth: "300px" }}
                                 />
                              </div>
                              <div className="col d-flex align-items-center my-4">
                                 <div className="title">
                                    <p
                                       style={{
                                          fontSize: "18px",
                                          marginBottom: "0px",
                                       }}
                                    >
                                       {paymentDesc}
                                    </p>
                                    {payment === "full_paid" && (
                                       <button
                                          className="text-light mt-4 rounded w-100 paymentBtn"
                                          onClick={() => navigate("/courses")}
                                       >
                                          Go to Courses
                                       </button>
                                    )}
                                 </div>
                              </div>
                           </div>
                        ) : (
                           <div className="row">
                              <div className="col d-flex align-items-center justify-content-center">
                                 <img
                                    src={paymentimg}
                                    alt="Payment image"
                                    style={{ width: "300px" }}
                                 />
                              </div>
                              <div className="col d-flex align-items-center my-4">
                                 <div className="title">
                                    <h3
                                       style={{
                                          color: "#0F6990",
                                          fontSize: "40px",
                                       }}
                                    >
                                       {fee == 2499
                                          ? "Registration Fee"
                                          : "Course Fee"}
                                    </h3>
                                    <p
                                       style={{
                                          fontSize: "18px",
                                          marginBottom: "0px",
                                       }}
                                    >
                                       {paymentDesc}
                                    </p>
                                    <h3
                                       className="fw-bolder text-center text-lg-start pt-2"
                                       style={{
                                          color: "#0F6990",
                                          fontSize: "28px",
                                          fontFamily: "Arial",
                                       }}
                                    >
                                       {fee == 2499 ? "₹2499" : "₹5000"}
                                    </h3>
                                    <RazorpayButton
                                       amount={fee}
                                       payment={payment}
                                    />
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </>
   );
}

export default Payment;
