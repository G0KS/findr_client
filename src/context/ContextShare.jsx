import React, { createContext, useState } from "react";
import { userData } from "../constants/global";

export const profileContext = createContext();
export const updatedProfileContext = createContext();
export const sidebarContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   const [updatedData, setUpdatedData] = useState(userData);
   const [sidebarCollapse, setSidebarCollapse] = useState(false);
   return (
      <profileContext.Provider value={{ profileData, setProfileData }}>
         <updatedProfileContext.Provider
            value={{ updatedData, setUpdatedData }}
         >
            <sidebarContext.Provider
               value={{ sidebarCollapse, setSidebarCollapse }}
            >
               {children}
            </sidebarContext.Provider>
         </updatedProfileContext.Provider>
      </profileContext.Provider>
   );
}

export default ContextShare;
