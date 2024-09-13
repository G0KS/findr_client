//
//    Paid Card
//

import React, { useEffect, useState } from "react";
import paymentimg from "../../assets/paymentimg.jpeg";
import RazorpayButton from "../../components/RazorpayButton";
import { getCandidate, getStudent } from "../../api/allApi";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

function Payment({ setShow }) {
   setShow(true);
   const [fee, setFee] = useState();
   const [payment, setPayment] = useState();

   const email = JSON.parse(localStorage.getItem("findrData"))?.email;
   const name = JSON.parse(localStorage.getItem("findrData"))?.name;

   const getUser = async () => {
      const params = {
         fields: '["name", "email", "course_fee", "registration_fee", "course_list"]',
         filters: `[["email", "=", "${email}"]]`,
      };

      try {
         const res = await getStudent(params);
         console.log(res);
         
         if (
            res.data.data[0].registration_fee == 1 &&
            res.data.data[0].course_fee == 1
         ) {
            setPayment("full_paid");
         } else if (res.data.data[0].registration_fee == 0) {
            setFee(2499);
            setPayment("registration_fee");
         } else {
            setFee(5000);
            setPayment("course_fee");
         }
      } catch (err) {
         console.error(err);
      }
   };

   useEffect(() => {
      getUser();
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
                  <div className="col d-flex align-items-center">
                     <img src={paymentimg} alt="" style={{ width: "300px" }} />
                  </div>
                  <div className="col d-flex align-items-center">
                     <div style={{ height: "70px", width: "70px" }}>
                        <img src="" style={{ height: "100%" }} alt="" />
                     </div>
                     <div className="title">
                        <h3 style={{ color: "#0F6990", fontSize: "40px" }}>
                           {fee == 2499 ? "Registration Fee" : "Course Fee"}
                        </h3>
                        <p>
                           Loremsuscipit natus mollitia tempora. Libero rerum
                           voluptate aliquam saepe, eius ipsum! Voluptas!
                        </p>
                        <h3 className="fw-bolder" style={{ color: "#0F6990" }}>
                           {fee == 2499 ? "₹2499" : "₹5000"}
                        </h3>
                        <RazorpayButton amount={fee} payment={payment} />
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

export default Payment;
