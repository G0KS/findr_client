import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useFrappeUpdateDoc } from "frappe-react-sdk";

function RazorpayButton({ amount, payment, paymentID, setRefresh }) {
   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;
   const razory_key_id = import.meta.env.VITE_RAZORPAY_KEY_ID;

   const { updateDoc } = useFrappeUpdateDoc();

   const updatePayment = (razorpay_payment_id) => {
      try {
         updateDoc("Student", c_id, {
            [payment]: "1",
            [paymentID]: razorpay_payment_id,
         })
            .then(() => setRefresh(true))
            .catch((err) => console.log(err));
      } catch (error) {
         console.error(error);
      }
   };

   const handlePayment = async () => {
      try {
         const { data } = await axios.post(
            "https://findrstudy.frappe.cloud/api/method/findr.api.create_payment_order",
            { amount }
         );
         const orderData = data.message;

         var options = {
            key: razory_key_id,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Findr Study",
            description: payment,
            order_id: orderData.id,
            handler: async function (response) {
               await fetch(
                  "https://findrstudy.frappe.cloud/api/method/findr.api.verify_payment",
                  {
                     method: "POST",
                     headers: {
                        "Content-Type": "application/json",
                     },
                     body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                     }),
                  }
               )
                  .then((response) => response.json())
                  .then((data) => {
                     if (data.message.status === "success") {
                        toast.success(
                           "Payment Successful " +
                              "Payment ID:" +
                              response.razorpay_payment_id
                        );
                        updatePayment(response.razorpay_payment_id);
                     } else {
                        toast.warning(
                           "Payment Verification Failed: " + data.message
                        );
                     }
                  })
                  .catch((error) => {
                     console.error("Error:", error);
                     toast.error("Payment Verification Error");
                  });
            },
            notes: {
               address: "Customer Address",
            },
            theme: {
               color: "#3399cc",
            },
         };
         const paymentObject = new window.Razorpay(options);
         paymentObject.open();
      } catch (err) {
         console.log("Error", err);
      }
   };
   return (
      <button
         className="text-light mt-4 rounded paymentBtn"
         onClick={handlePayment}
      >
         Pay Now
      </button>
   );
}

export default RazorpayButton;
