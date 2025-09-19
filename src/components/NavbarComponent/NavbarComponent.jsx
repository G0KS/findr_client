import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo3.png";

import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { sidebarContext } from "../../context/ContextShare";

function NavbarComponent() {
   const navigate = useNavigate();
   const [isLogged, setIsLogged] = useState(false);

   const { sidebarCollapse, setSidebarCollapse } = useContext(sidebarContext);

   const findrData = JSON.parse(localStorage.getItem("findrData"));

   useEffect(() => {
      if (findrData) setIsLogged(true);
      else setIsLogged(false);
   }, [findrData]);

   return (
      <>
         <Navbar
            className="d-flex justify-content-between px-4 navBar shadow-sm"
            style={{
               position: "fixed",
               top: "0",
               width: "100%",
               height: "80px",
               zIndex: "9999",
            }}
         >
            {isLogged && (
               <button
                  className="position-absolute btn d-md-none"
                  style={{ left: "10px", color: "#0F6990" }}
                  onClick={() => setSidebarCollapse(!sidebarCollapse)}
               >
                  &#9776;
               </button>
            )}
            <Navbar.Brand>
               <img
                  src={Logo}
                  width="100"
                  alt="Findr logo"
                  onClick={(e) => {
                     e.preventDefault();
                     if (!isLogged) navigate("/");
                  }}
                  role="button"
               />
            </Navbar.Brand>

            {!isLogged && (
               <button
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/login");
                  }}
                  className="d-flex align-items-center rounded-pill px-3 py-2"
                  style={{
                     backgroundImage:
                        " linear-gradient(90deg, #0f6990 0%, #80D0C7 100%)  ",
                     maxWidth: "max-content",
                     color: "white",
                     border: "none",
                     textDecoration: "none",
                     // fontSize:"10px"
                  }}
               >
                  Sign Up
                  <span className="material-symbols-outlined ms-1" style={{fontSize:"18px"}}>
                     arrow_outward
                  </span>
               </button>
            )}
         </Navbar>
      </>
   );
}

export default NavbarComponent;
