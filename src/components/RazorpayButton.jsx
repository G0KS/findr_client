import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RazorpayButton({ amount }) {
   const navigate = useNavigate();

   const handlePayment = async () => {
      try {
         const response = await fetch(
            "http://127.0.0.1:8000/api/method/findr.api.create_payment_order",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ amount }),
            }
         );

         const orderData = await response.json();

         var options = {
            key: "rzp_test_feeHuamS6xqUwU",
            amount: orderData.message.amount,
            currency: orderData.message.currency,
            name: "Findr Study",
            description: "Test Transaction",
            order_id: orderData.message.id,
            handler: async function (response) {
               await fetch(
                  "http://127.0.0.1:8000/api/method/findr.api.verify_payment",
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
                        toast.success("Your courses will be updated soon");
                        navigate("/profile");
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
         className="btn text-light mt-4 rounded "
         style={{
            backgroundColor: "#0F6990",
            // borderRadius: '20px',
            width: "100px",
            height: "40px",
         }}
         onClick={handlePayment}
      >
         Paynow
      </button>
   );
}

export default RazorpayButton;
