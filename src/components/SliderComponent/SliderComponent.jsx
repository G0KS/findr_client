import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";

import Profile from "../../assets/Profile.svg";
import Payment from "../../assets/Payment.svg";
import Document from "../../assets/Document.svg";
import Logout from "../../assets/Logout.svg";
import Calling from "../../assets/Calling.svg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast } from "react-toastify";

function SliderComponent() {
   const [collapse, setCollapse] = useState(false);

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
         collapsed={collapse}
         collapsedWidth="0px"
         backgroundColor="white"
         onBackdropClick
         style={{
            position: "sticky",
            top: "80px",
            left: "0",
            height: "90vh",
         }}
         
      >
         
         <Menu className="" style={{ position: "relative", height: "100%" }}>
            {/* <Link
               className="fw-bold"
               style={{ textDecoration: "none", color: "gray" }}
               to={"/"}
            >
               <MenuItem>
                  {" "}
                  <img className="p-2" src={Home} alt="" /> Home
               </MenuItem>
            </Link> */}
            <Link
               to={"/profile"}
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
