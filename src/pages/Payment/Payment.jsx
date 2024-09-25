//
//    Paid Card
//

import React, { useEffect, useState } from "react";
import paymentimg from "../../assets/paymentimg.jpeg";
import RazorpayButton from "../../components/RazorpayButton";
import { getCandidate } from "../../api/allApi";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

function Payment({ setShow }) {
   setShow(true);
   const [fee, setFee] = useState();
   const [payment, setPayment] = useState();
   const [paymentDesc, setPaymentDesc] = useState("");

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;

   const getUser = async () => {
      try {
         const res = await getCandidate(name);
         console.log(res.data.data.course_list);

         if (
            res.data.data.registration_fee == 1 &&
            res.data.data.course_fee == 1
         ) {
            setPayment("full_paid");
            setPaymentDesc(
               "Thanks for joining the findr.study community! Share your study abroad story and recommend us to friends who dare to dream."
            );
         } else if (res.data.data.registration_fee == 0) {
            setFee(2499);
            setPayment("registration_fee");
            setPaymentDesc(
               "Continue with payment to complete the registration"
            );
         } else if (res.data.data.course_list.length > 0) {
            setFee(5000);
            setPayment("course_fee");
            setPaymentDesc(
               "Unlock your course library - payment unlocks access!"
            );
         } else if (res.data.data.course_list.length == 0) {
            setPayment("payment_done");
            setPaymentDesc(
               "Payment received. Registration completed. You can access your tailored course suggestions in courses tab in 1-2 weeks."
            );
         }
      } catch (err) {
         console.error(err);
      }
   };

   useEffect(() => {
      if (name) getUser();
      else {
         toast.warning("Please login");
         navigate("/login");
      }
   }, []);

   return (
      <div className="d-lg-flex">
         <div className="d-none d-lg-block">
            <SliderComponent />
         </div>

         <div style={{ width: "100%" }}>
            <section
               className="d-flex justify-content-center align-items-center "
               style={{
                  height: "100vh",
                  backgroundColor: "#0f6990",
                  backgroundImage:
                     "linear-gradient(315deg, #0f6990  1%, #ffffff  45%)",
               }}
            >
               <div
                  className="loginCard rounded-4 p-4 bg-white shadow-lg row"
                  style={{
                     width: "50rem",
                  }}
               >
                  {payment === "payment_done" || payment === "full_paid" ? (
                     <div className="row">
                        <div className="col d-flex align-items-center">
                           <img
                              src={paymentimg}
                              alt=""
                              style={{ width: "300px" }}
                           />
                        </div>
                        <div className="col d-flex align-items-center">
                           <div style={{ height: "70px", width: "70px" }}>
                              <img src="" style={{ height: "100%" }} alt="" />
                           </div>
                           <div className="title">
                              <h3
                                 style={{ color: "#0F6990", fontSize: "40px" }}
                              ></h3>
                              <p
                                 style={{
                                    fontSize: "18px",
                                 }}
                              >
                                 {paymentDesc}
                              </p>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="row">
                        <div className="col d-flex align-items-center">
                           <img
                              src={paymentimg}
                              alt=""
                              style={{ width: "300px" }}
                           />
                        </div>
                        <div className="col d-flex align-items-center">
                           <div style={{ height: "70px", width: "70px" }}>
                              <img src="" style={{ height: "100%" }} alt="" />
                           </div>
                           <div className="title">
                              <h3
                                 style={{ color: "#0F6990", fontSize: "40px" }}
                              >
                                 {fee == 2499
                                    ? "Registration Fee"
                                    : "Course Fee"}
                              </h3>
                              <p>{paymentDesc}</p>
                              <h3
                                 className="fw-bolder"
                                 style={{ color: "#0F6990" }}
                              >
                                 {fee == 2499 ? "₹2499" : "₹5000"}
                              </h3>
                              <RazorpayButton amount={fee} payment={payment} />
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </section>
         </div>
      </div>
   );
}

export default Payment;
