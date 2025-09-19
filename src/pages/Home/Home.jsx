import hero from "../../assets/hero_image.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useCountUp = (end, duration = 2000) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      let start = 0;
      const increment = end / (duration / 10); // Adjust duration/10 for smoother animation

      const timer = setInterval(() => {
         start += increment;
         if (start >= end) {
            setCount(end);
            clearInterval(timer);
         } else {
            setCount(Math.ceil(start));
         }
      }, 10);

      return () => clearInterval(timer);
   }, [end, duration]);

   return count;
};

function Home({ setShow, setSidebarShow }) {
   document.title = "Findr Study";
   setShow(true);
   setSidebarShow(false);
   const navigate = useNavigate();

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;

   const coursesCount = useCountUp(200000);
   const signupsCount = useCountUp(6000);
   const storiesCount = useCountUp(400);

   const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };

   useEffect(() => {
      if (name) navigate("/courses");
   }, [name]);

   useEffect(() => {
      AOS.init({ duration: 600 });
   }, []);

   return (
      <>
         {/* hero section */}
         <section className="container py-5">
            <div className="mt-5 mb-4 mb-lg-5">
               <div className="d-block d-lg-flex justify-content-center align-items-center gap-5">
                  <div className="heroImgContainer">
                     <img src={hero} alt="Hero Image" className="rounded-5" />
                  </div>
                  <div className="heroTextContainer w-100">
                     <h1 className="heroText">
                        Your Gateway to Global{" "}
                        <span style={{ color: "#0f6990" }}>Education</span>
                     </h1>
                     <div
                        style={{
                           backgroundImage:
                              " linear-gradient(90deg, #0f6990 0%, #80D0C7 100%)  ",
                           maxWidth: "max-content",
                        }}
                        className="px-4 py-3 rounded-pill mt-3"
                     >
                        <Link
                           to={"/signup"}
                           className="d-flex align-items-center"
                           style={{
                              color: "white",
                              height: "18px",
                              textDecoration: "none",
                              fontSize: "18px",
                           }}
                        >
                           Get Started
                           <span className="material-symbols-outlined">
                              arrow_outward
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            {/* stats section */}
            <div className="statsContainer">
               {/* Courses */}
               <div className="stats">
                  <div className="p-2 p-md-4">
                     <h5
                        className="statsText fw-bold mb-2"
                        style={{ color: "#0F6990" }}
                     >
                        {formatNumber(coursesCount)}+
                     </h5>
                     <p className="statsDesc" style={{ color: "#23a4dcff" }}>
                        Courses
                     </p>
                  </div>
               </div>
               <div className="statsBorder"></div>
               {/* Signups */}
               <div className="stats">
                  <div className="p-2 p-md-4">
                     <h2
                        className="statsText fw-bold mb-2"
                        style={{ color: "#0F6990" }}
                     >
                        {formatNumber(signupsCount)}+
                     </h2>
                     <p className="statsDesc" style={{ color: "#23a4dcff" }}>
                        Signups
                     </p>
                  </div>
               </div>
               <div className="statsBorder"></div>
               {/* Success Stories */}
               <div className="stats">
                  <div className="p-2 p-md-4">
                     <h2
                        className="statsText fw-bold mb-2"
                        style={{ color: "#0F6990" }}
                     >
                        {formatNumber(storiesCount)}+
                     </h2>
                     <p className="statsDesc" style={{ color: "#23a4dcff" }}>
                        Successes
                     </p>
                  </div>
               </div>
            </div>

            {/* about us */}
            <div
               className=" d-flex flex-lg-row flex-column justify-content-between align-items-center my-5 bg-body-tertiary rounded-3 p-4 text-center"
               style={{
                  backgroundImage:
                     " linear-gradient(270deg, #0f6990 0%, #80D0C7 100%)  ",
               }}
               data-aos="zoom-out-top"
            >
               <h1 style={{ width: "100%", fontSize: "60px", color: "white" }}>
                  What we do
               </h1>
               <div
                  className="d-none d-lg-block"
                  style={{
                     width: "1px",
                     height: "200px",
                     backgroundColor: "lightgray",
                  }}
               ></div>
               <p style={{ width: "100%", color: "#ffff" }}>
                  At Findr, we understand that studying abroad is a
                  life-changing decision. It opens doors to unparalleled
                  opportunities for personal growth, academic excellence, and
                  cultural enrichment. However, navigating the vast sea of
                  educational options can be overwhelming. That&#39;s where we
                  come in.
               </p>
            </div>

            {/* services section */}
            <div className="">
               <h1 className="text-center block " data-aos="zoom-in">
                  Our <span style={{ color: "#0f6990" }}>Services</span>
               </h1>
               <div className="p-5 cardBodyshow">
                  <p className="mb-0 text-center">
                     At Findr, we specialize in providing expert consultation to
                     students aspiring to study abroad. Our team of experienced
                     advisors, hailing from diverse academic backgrounds and
                     global regions, is dedicated to guiding you through every
                     step of the process.
                  </p>
               </div>
            </div>
            <div className="cardContainer my-3 mx-5 mx-lg-1 d-flex justify-content-between align-items-center flex-wrap row-gap-3 ">
               <div
                  className="cardBody cardBodyshow border p-4 shadow text-center"
                  data-aos="zoom-out-right"
                  style={{
                     width: "19rem",
                     borderRadius: "16px",
                     cursor: "pointer",
                  }}
               >
                  <div className="d-flex justify-content-center">
                     <div className="icon d-flex align-items-center justify-content-center mb-3">
                        <span className="material-symbols-outlined serviceIcon">
                           person
                        </span>
                     </div>
                  </div>
                  <h5 className="fw-bold mb-3">Tailored Consultation</h5>
                  <p
                     style={{
                        fontSize: "15px",
                     }}
                  >
                     Every student is unique, and their education should match
                     their aspirations. Our personalized consultations are
                     tailored to your academic interests, career goals, and
                     preferences.
                  </p>
               </div>
               <div
                  className="cardBody cardBodyshow border p-4 shadow text-center"
                  data-aos="zoom-out-right"
                  style={{
                     width: "19rem",
                     borderRadius: "16px",
                     cursor: "pointer",
                  }}
               >
                  <div className="icon d-flex align-items-center justify-content-center mb-3">
                     <span className="material-symbols-outlined serviceIcon">
                        currency_rupee_circle
                     </span>
                  </div>
                  <h5 className="fw-bold mb-3">Affordable Pricing</h5>
                  <p style={{ fontSize: "15px" }}>
                     We believe quality education should be accessible to all.
                     Our consultations are priced at just INR 7499, with
                     specialized scholarship guidance available for INR 2499.
                  </p>
               </div>
               <div
                  className="cardBody cardBodyshow border p-4 shadow text-center"
                  data-aos="zoom-out-right"
                  style={{
                     width: "19rem",
                     borderRadius: "16px",
                     cursor: "pointer",
                  }}
               >
                  <div className="icon d-flex align-items-center justify-content-center mb-3">
                     <span className="material-symbols-outlined serviceIcon">
                        task_alt
                     </span>
                  </div>
                  <h5 className="fw-bold mb-3">No Admission or Visa </h5>
                  <p style={{ fontSize: "15px" }}>
                     Findr doesn’t do admissions or visas, we help you discover
                     the best courses worldwide, matched to your goals and
                     interests.
                  </p>
               </div>
               <div
                  className="cardBody cardBodyshow border p-4 shadow text-center"
                  data-aos="zoom-out-right"
                  style={{
                     width: "19rem",
                     borderRadius: "16px",
                     cursor: "pointer",
                  }}
               >
                  <div className="icon d-flex align-items-center justify-content-center mb-3 ">
                     <span className="material-symbols-outlined serviceIcon">
                        language
                     </span>
                  </div>
                  <h5 className="fw-bold mb-3">
                     Curated Courses from Around the Globe
                  </h5>
                  <p style={{ fontSize: "15px" }}>
                     With our global network of universities, we match you to
                     courses that fit your academic goals, whether it’s
                     engineering in Germany, business in the US, or literature
                     in the UK.
                  </p>
               </div>
            </div>
            {/* Prices section */}

            <div className="py-5 overflow-hidden">
               <h1 className="text-center block" data-aos="zoom-in">
                  Our <span style={{ color: "#0f6990" }}>Pricing</span>
               </h1>
               <div
                  className="priceCardContainer"
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     flexWrap: "wrap",
                     gap: "100px",
                     marginBlock: "50px",
                  }}
               >
                  <div
                     className="shadow-sm"
                     style={{
                        width: "300px",
                        height: "484px",
                        borderRadius: "18px",
                        padding: "12px",
                        backgroundColor: "#cee4ee69",
                        position: "relative",
                     }}
                     data-aos="zoom-out-left"
                  >
                     <p
                        className="px-2 py-1 m-3"
                        style={{
                           fontSize: "10px",
                           fontWeight: "bolder",
                           position: "absolute",
                           top: "0",
                           right: "0",
                           backgroundColor: "white",
                           color: "#0F6990",
                           borderRadius: "18px",
                        }}
                     >
                        <i
                           className="fa-solid fa-fire"
                           style={{ color: "#66d1cf" }}
                        ></i>{" "}
                        Popular
                     </p>
                     <div
                        className="cardTitle text-center d-flex justify-content-evenly flex-column align-items-center"
                        style={{
                           marginTop: "36px",
                        }}
                     >
                        <p
                           style={{
                              fontSize: "25px",
                              color: "#0F6990",
                           }}
                        >
                           Starter
                        </p>
                        <p
                           style={{
                              fontWeight: "bolder",
                              fontSize: "40px",
                              color: "#0F6990",
                           }}
                        >
                           ₹
                           <span style={{ fontFamily: "Poppins" }}> 2,499</span>
                        </p>
                     </div>
                     <div
                        className="px-3 py-4"
                        style={{
                           height: "256px",
                        }}
                     >
                        <div className="d-flex flex-column gap-2">
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Course & Scholarship Match
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Smart Study Fit
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Opportunity Match
                           </p>
                        </div>
                     </div>
                     <div className="p-3">
                        <button
                           className="w-100 btn text-light px-4"
                           style={{ backgroundColor: "#0F6990" }}
                           onClick={() => navigate("/signup")}
                        >
                           Join Now
                        </button>
                     </div>
                  </div>
                  <div
                     className="shadow-sm"
                     style={{
                        width: "300px",
                        height: "484px",
                        borderRadius: "18px",
                        padding: "12px",
                        backgroundImage:
                           "linear-gradient(338deg, #0f6990 64%, #66d1cf 100%)",
                        position: "relative",
                     }}
                     data-aos="zoom-out-left"
                  >
                     <p
                        className="px-2 py-1 m-3"
                        style={{
                           fontSize: "10px",
                           fontWeight: "bolder",
                           position: "absolute",
                           top: "0",
                           right: "0",
                           backgroundColor: "white",
                           color: "#0f6990",
                           borderRadius: "18px",
                        }}
                     >
                        <i className="fa-solid fa-leaf"></i> Best Value
                     </p>
                     <div
                        className="cardTitle text-center text-light d-flex justify-content-evenly flex-column align-items-center"
                        style={{
                           marginTop: "36px",
                        }}
                     >
                        <p
                           style={{
                              fontSize: "25px",
                           }}
                        >
                           Pro
                        </p>
                        <p
                           style={{
                              fontWeight: "bolder",
                              fontSize: "40px",
                           }}
                        >
                           ₹
                           <span style={{ fontFamily: "Poppins" }}> 7,499</span>
                        </p>
                     </div>
                     <div className="px-3 py-4 text-white">
                        <div className="d-flex flex-column gap-2">
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Course & Scholarship Match
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Smart Study Fit
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Opportunity Match
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Personalised Mentorship
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              Direct Apply Access
                           </p>
                           <p className="d-flex">
                              <span className="material-symbols-outlined me-2">
                                 check_circle
                              </span>
                              1:1 Guided Path
                           </p>
                        </div>
                     </div>
                     <div className="p-3">
                        <button
                           className="w-100 btn bg-light px-4"
                           style={{ color: "0f6990" }}
                           onClick={() => navigate("/signup")}
                        >
                           Go Pro
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Home;
