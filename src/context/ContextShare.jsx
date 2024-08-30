import React, { createContext, useState } from "react";

export const profileContext = createContext();
export const updatedProfileContext = createContext();
export const userContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   const [updatedData, setUpdatedData] = useState({
      tenth_institution: "",
      tenth_marks: "",
      tenth_mode_of_study: "",
   });
   const [userData, setUserData] = useState();
   return (
      <userContext.Provider value={{ userData, setUserData }}>
         <profileContext.Provider value={{ profileData, setProfileData }}>
            <updatedProfileContext.Provider
               value={{ updatedData, setUpdatedData }}
            >
               {children}
            </updatedProfileContext.Provider>
         </profileContext.Provider>
      </userContext.Provider>
   );
}

export default ContextShare;
