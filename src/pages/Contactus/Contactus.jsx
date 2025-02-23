import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import call from "../../assets/Call.svg";
import Message from "../../assets/Message.svg";
import Location from "../../assets/Location.svg";
import Contactimg from "../../assets/Contactus.jpg";
import { Link } from "react-router-dom";
import { useFrappeGetDoc } from "frappe-react-sdk";

function Contactus({ setShow, setSidebarShow }) {
   document.title = "Contact Us | Findr";

   setShow(true);
   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   useEffect(() => {
      if (name) setSidebarShow(true);
      else setSidebarShow(false);
   }, [name]);

   return (
      <div className="container">
         <div
            className="d-flex justify-content-center align-items-center"
            style={{
               height: "100vh",
            }}
         >
            <Card
               className=" shadow rounded-5  "
               style={{
                  width: "40rem",
                  position: "relative",
               }}
            >
               <div style={{ width: "100%" }}>
                  <img
                     src={Contactimg}
                     alt="contact image"
                     className="rounded-4"
                     style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        zIndex: "1",
                     }}
                  />
               </div>
               <Card.Body className="p-4" style={{ zIndex: "2" }}>
                  <h1 style={{ color: "#0F6990" }}>Contact us</h1>
                  <p style={{ fontSize: "15px" }}>Reach Out for Assistance</p>
                  {c_id && (
                     <p style={{ fontSize: "15px" }}>
                        Your Findr ID is{" "}
                        <span
                           style={{
                              color: "#0F6990",
                              fontWeight: "800",
                              backgroundColor: "#0f699036",
                           }}
                           className="px-2 py-1 rounded"
                        >
                           {c_id}
                        </span>
                     </p>
                  )}
                  <Link
                     to=""
                     className="fw-bold"
                     style={{ textDecoration: "none", color: "gray" }}
                  >
                     <div className="p-2 ">
                        <img src={call} alt="" />
                        <span className="ms-2">+91 62822 55880</span>
                     </div>
                  </Link>
                  <Link
                     target="_blank"
                     to=""
                     className="fw-bold"
                     style={{ textDecoration: "none", color: "gray" }}
                  >
                     <div className="p-2 ">
                        <img src={Message} alt="" />
                        <span className="ms-2">support@findr.study</span>
                     </div>
                  </Link>
                  <Link
                     target="blank"
                     to="https://maps.app.goo.gl/ZYE7EkCH6xiDuTap7"
                     className="fw-bold"
                     style={{ textDecoration: "none", color: "gray" }}
                  >
                     <div className="p-2">
                        <img src={Location} alt="" />
                        <span className="ms-2 ">
                           apest, Lövőház u. 27b-3. em. 1. ajtó, 1024 Hungary
                        </span>
                     </div>
                  </Link>
                  <Card.Text></Card.Text>
               </Card.Body>
            </Card>
         </div>
      </div>
   );
}

export default Contactus;
