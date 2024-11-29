import React, { useContext, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";

import Profile from "../../assets/Profile.svg";
import Payment from "../../assets/Payment.svg";
import Document from "../../assets/Document.svg";
import Logout from "../../assets/Logout.svg";
import Calling from "../../assets/Calling.svg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast } from "react-toastify";
import { sidebarContext } from "../../context/ContextShare";

function SliderComponent() {
   const { sidebarCollapse, setSidebarCollapse } = useContext(sidebarContext);
   const [isSmallDevice, setIsSmallDevice] = useState(false);

   useEffect(() => {
      const screenWidth = document.documentElement.clientWidth;
      if (screenWidth < 600) setIsSmallDevice(true);
   }, []);

   const navigate = useNavigate();

   const handleLogout = () => {
      confirmAlert({
         title: "Confirm to submit",
         message: "Are you sure you want to logout?",
         buttons: [
            {
               label: "Logout",
               onClick: () => {
                  localStorage.removeItem("findrData");
                  localStorage.removeItem("access");
                  navigate("/");
                  toast.success("You have been logged out!");
               },
            },
            {
               label: "Cancel",
               onClick: () => {},
            },
         ],
      });
   };
   return (
      <Sidebar
         collapsed={sidebarCollapse}
         collapsedWidth="0px"
         backgroundColor="white"
         onBackdropClick={() => {}}
         style={{
            position: "fixed",
            left: "0",
            zIndex: "999",
         }}
      >
         <Menu
            className=""
            style={{
               position: "relative",
               height: "100vh",
               paddingTop: "80px",
            }}
         >
            <>
               <Link
                  to={"/profile"}
                  onClick={() => {
                     if (isSmallDevice) setSidebarCollapse(!sidebarCollapse);
                  }}
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "gray" }}
               >
                  <MenuItem>
                     {" "}
                     <img className="p-2" src={Profile} alt="" />
                     Profile
                  </MenuItem>
               </Link>
               <Link
                  to={"/payment"}
                  onClick={() => {
                     if (isSmallDevice) setSidebarCollapse(!sidebarCollapse);
                  }}
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "gray" }}
               >
                  <MenuItem>
                     {" "}
                     <img className="p-2" src={Payment} alt="" />
                     Payment
                  </MenuItem>
               </Link>
               <Link
                  to={"/courses"}
                  onClick={() => {
                     if (isSmallDevice) setSidebarCollapse(!sidebarCollapse);
                  }}
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "gray" }}
               >
                  <MenuItem>
                     <img className="p-2" src={Document} alt="" />
                     Courses
                  </MenuItem>
               </Link>
               <Link
                  to={"/contactus"}
                  onClick={() => {
                     if (isSmallDevice) setSidebarCollapse(!sidebarCollapse);
                  }}
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "gray" }}
               >
                  <MenuItem>
                     <img className="p-2" src={Calling} alt="" />
                     Contact us
                  </MenuItem>
               </Link>
            </>
            <MenuItem
               className="fw-bold"
               style={{
                  textDecoration: "none",
                  color: "gray",
               }}
               onClick={handleLogout}
            >
               <img className="p-2" src={Logout} alt="" /> Logout
            </MenuItem>
         </Menu>
      </Sidebar>
   );
}

export default SliderComponent;
