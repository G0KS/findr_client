import React, { createContext, useState } from "react";
import { userData } from "../constants/global";

export const profileContext = createContext();
export const updatedProfileContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   const [updatedData, setUpdatedData] = useState(userData);

   return (
         <profileContext.Provider value={{ profileData, setProfileData }}>
            <updatedProfileContext.Provider
               value={{ updatedData, setUpdatedData }}
            >
               {children}
            </updatedProfileContext.Provider>
         </profileContext.Provider>
   );
}

export default ContextShare;
