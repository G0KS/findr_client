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

   // const authLink = import.meta.env.VITE_FRAPPE_AUTH_LINK;
   const findrData = JSON.parse(localStorage.getItem("findrData"));

   useEffect(() => {
      if (findrData) setIsLogged(true);
      else setIsLogged(false);
   }, [findrData]);

   return (
      <>
         <Navbar
            className="d-flex justify-content-between px-5"
            style={{
               position: "fixed",
               top: "0",
               width: "100%",
               height: "80px",
               backdropFilter: "blur(5px)",
               zIndex: "9999",
            }}
         >
            <button
               className="position-absolute btn d-md-none"
               style={{ left: "10px", color: "#0F6990" }}
               onClick={() => setSidebarCollapse(!sidebarCollapse)}
            >
               &#9776;
            </button>
            <Navbar.Brand>
               <img
                  src={Logo}
                  width="100"
                  alt="Findr logo"
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/");
                  }}
                  role="button"
               />
            </Navbar.Brand>

            {isLogged ? (
               <Button
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/profile");
                  }}
                  className="btn text-light"
                  style={{ backgroundColor: "#0F6990" }}
               >
                  Profile
               </Button>
            ) : (
               <Button
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/login");
                     // location.href = authLink;
                  }}
                  className="btn text-light"
                  style={{ backgroundColor: "#0F6990" }}
               >
                  <img className="me-2" src={login} alt="" />
                  Sign In{" "}
               </Button>
            )}
         </Navbar>
      </>
   );
}

export default NavbarComponent;
