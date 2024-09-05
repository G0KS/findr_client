import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo3.png";
import login from "../../assets/login.svg";
import menu from "../../assets/menu.svg";

import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import SliderComponent from "../SliderComponent/SliderComponent";

function NavbarComponent() {
   const navigate = useNavigate();
   return (
      <>
         <Navbar
            className="d-flex justify-content-between px-5"
            style={{
               position: "sticky",
               top: "0",
               width: "100%",
               height: "80px",
               backdropFilter: "blur(5px)",
               zIndex: "9999",
            }}
         >
            <Navbar.Brand>
               <img
                  src={Logo}
                  width="100"
                  alt="React Bootstrap logo"
                  onClick={(e) => {
                     e.preventDefault();
                     navigate("/");
                  }}
                  role="button"
               />
            </Navbar.Brand>

            <Button
               onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
               }}
               className="btn text-light"
               style={{ backgroundColor: "#0F6990" }}
            >
               <img className="me-2" src={login} alt="" />
               Sign In{" "}
            </Button>
         </Navbar>
      </>
   );
}

export default NavbarComponent;
