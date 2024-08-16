import React, { createContext, useState } from "react";

export const profileContext = createContext();

function ContextShare({ children }) {
   const [profileData, setProfileData] = useState();
   return (
      <profileContext.Provider value={{ profileData, setProfileData }}>
         {children}
      </profileContext.Provider>
   );
}

export default ContextShare;
