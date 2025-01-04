import React, { createContext, useState } from "react";
import { templateData } from "../constants/global";

export const profileContext = createContext();
export const updatedProfileContext = createContext();
export const sidebarContext = createContext();
export const logContext = createContext();

function ContextShare({ children }) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [profileData, setProfileData] = useState();
   const [updatedData, setUpdatedData] = useState(templateData);
   const [sidebarCollapse, setSidebarCollapse] = useState(false);
   return (
      <profileContext.Provider value={{ profileData, setProfileData }}>
         <updatedProfileContext.Provider
            value={{ updatedData, setUpdatedData }}
         >
            <sidebarContext.Provider
               value={{ sidebarCollapse, setSidebarCollapse }}
            >
               <logContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                  {children}
               </logContext.Provider>
            </sidebarContext.Provider>
         </updatedProfileContext.Provider>
      </profileContext.Provider>
   );
}

export default ContextShare;
