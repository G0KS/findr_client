import React from "react";
import { Link } from "react-router-dom";

function Test({ setShow, setSidebarShow }) {
   setShow(false);
   setSidebarShow(false);
   return (
      <div
         style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
        
      </div>
   );
}

export default Test;
