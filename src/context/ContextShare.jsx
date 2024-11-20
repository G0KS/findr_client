import React, { createContext, useState } from "react";
import { templeteData } from "../constants/global";

export const profileContext = createContext();
export const updatedProfileContext = createContext();
export const sidebarContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   const [updatedData, setUpdatedData] = useState(templeteData);
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
