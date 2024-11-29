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

   useEffect(() => {
      const screenWidth = document.documentElement.clientWidth;
      if (screenWidth < 600) setSidebarCollapse(true);
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
         onBackdropClick
         style={{
            position: "fixed",
            top: "80px",
            left: "0",
            height: "92vh",
            zIndex: "999",
         }}
      >
         <Menu className="" style={{ position: "relative", height: "100%" }}>
            <Link
               to={"/profile"}
               onClick={() => setSidebarCollapse(!sidebarCollapse)}
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
               onClick={() => setSidebarCollapse(!sidebarCollapse)}
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
               onClick={() => setSidebarCollapse(!sidebarCollapse)}
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
               onClick={() => setSidebarCollapse(!sidebarCollapse)}
               className="fw-bold"
               style={{ textDecoration: "none", color: "gray" }}
            >
               <MenuItem>
                  <img className="p-2" src={Calling} alt="" />
                  Contact us
               </MenuItem>
            </Link>
            <MenuItem
               className="fw-bold"
               style={{
                  textDecoration: "none",
                  color: "gray",
                  marginTop: "400px",
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
