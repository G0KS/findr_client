import React, { createContext, useState } from "react";

export const profileContext = createContext();
export const userContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   const [userData, setUserData] = useState();
   return (
      <userContext.Provider value={{ userData, setUserData }}>
         <profileContext.Provider value={{ profileData, setProfileData }}>
            {children}
         </profileContext.Provider>
      </userContext.Provider>
   );
}

export default ContextShare;
