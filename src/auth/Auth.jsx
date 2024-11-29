import { useFrappeGetDoc } from "frappe-react-sdk";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logContext } from "../context/ContextShare";

function Auth() {
   const navigate = useNavigate();
   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { setIsLoggedIn } = useContext(logContext);

   const { data } = useFrappeGetDoc("Student", c_id);

   const getUserData = () => {
      if (data !== undefined) {
         if (!data.tenth_institution) {
            toast.warning("Complete your profile to continue");
            navigate("/profile/update");
         } else {
            setIsLoggedIn(true);
         }
      }
   };

   useEffect(() => {
      getUserData();
   }, [data]);
   return <></>;
}

export default Auth;
