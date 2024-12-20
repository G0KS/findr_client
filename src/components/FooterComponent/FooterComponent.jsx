import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo3.png";

import style from "./FooterComponent.module.css";

function FooterComponent() {
   return (
      <div
         className="footer"
         style={{
            paddingTop: "20px",
            boxShadow: "0px -5px 10px rgba(50, 50, 50, 0.10)",
         }}
      >
         <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
            <div style={{ height: "50px", width: "130px" }}>
               <img width={100} src={Logo} alt="" className="ms-4" />
            </div>
            <ul
               style={{ listStyle: "none", height: "100%" }}
               className="d-flex  flex-column flex-lg-row  gap-4 my-4"
            >
               <li>
                  <Link
                     to="/privacy"
                     style={{ textDecoration: "none", color: "black" }}
                  >
                     Privacy Policy
                  </Link>
               </li>
               <li>
                  <Link
                     to="/terms"
                     style={{ textDecoration: "none", color: "black" }}
                  >
                     Terms and Conditions
                  </Link>
               </li>
               <li>
                  <Link
                     to="/contactus"
                     style={{ textDecoration: "none", color: "black" }}
                  >
                     Contact
                  </Link>
               </li>
               <li>
                  <Link
                     to="/faq"
                     style={{ textDecoration: "none", color: "black" }}
                  >
                     Faq
                  </Link>
               </li>
            </ul>
            <div className="socials text-light ms-3">
               <Link to="mailto:contact.findr.study@gmail.com" target="blank" className={style.socialIcon}>
                  <i
                     className="fa-solid fa-message fs-3"
                     style={{ color: "#0f6990" }}
                  ></i>
                  <span>contact.findr.study@gmail.com</span>
               </Link>
               <div className="d-flex justify-content-sm-between">
                  <Link to="https://www.facebook.com/people/FinderStudy/61570457473882/" target="blank" className={style.socialIcon}>
                     <i
                        className="fa-brands fa-facebook"
                        style={{ color: "#0f6990" }}
                     ></i>
                  </Link>
                  <Link
                     to="https://www.instagram.com/findr_study/"
                     target="blank"
                     className={style.socialIcon}
                  >
                     <i
                        className="fa-brands fa-instagram"
                        style={{ color: "#0f6990" }}
                     ></i>
                  </Link>
                  <Link to="" target="blank" className={style.socialIcon}>
                     <i
                        className="fa-brands fa-x-twitter"
                        style={{ color: "#0f6990" }}
                     ></i>
                  </Link>
                  <Link to="https://wa.link/wk3s7u" target="blank" className={style.socialIcon}>
                     <i
                        className="fa-brands fa-whatsapp"
                        style={{ color: "#0f6990" }}
                        
                     ></i>
                  </Link>
               </div>
            </div>
         </div>
         <hr />
         <div className="d-flex justify-content-center">
            <p style={{ color: "0f6990" }}>Copyright © 2024 findr</p>
         </div>
      </div>
   );
}

export default FooterComponent;
