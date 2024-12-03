import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo3.png";
import login from "../../assets/login.svg";

import Button from "react-bootstrap/Button";
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
            className="d-flex justify-content-between px-5 navBar"
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
                  className="btn text-light"
                  style={{ backgroundColor: "#0F6990" }}
               >
                  <img className="me-2" src={login} alt="" />
                  Sign In{" "}
               </button>
            )}
         </Navbar>
      </>
   );
}

export default NavbarComponent;
