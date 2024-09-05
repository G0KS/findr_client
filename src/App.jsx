import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home.jsx";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Terms from "./pages/Termscont/Terms.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Faqpage from "./pages/FAQ/Faqpage.jsx";
import PagenotFound from "./pages/PagenotFound/PagenotFound.jsx";

function App() {
   const [show, setShow] = useState(true);
   const [sliderShow, setSliderShow] = useState(false);

   return (
      <>
         {show && <NavbarComponent />}
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<Home setShow={setShow} />} />
            <Route path="/login" element={<Login setShow={setShow} />} />
            <Route path="/signup" element={<Register setShow={setShow} />} />
            <Route
               path="/profile/update"
               element={<UpdateProfile setShow={setShow} />}
            />
            <Route path="/profile" element={<Profile setShow={setShow} />} />
            <Route path="/courses" element={<Courses setShow={setShow} />} />
            <Route
               path="/contactus"
               element={<Contactus setShow={setShow} />}
            />
            <Route path="/terms" element={<Terms setShow={setShow} />} />
            <Route path="/privacy" element={<Privacy setShow={setShow} />} />
            <Route path="/payment" element={<Payment setShow={setShow} />} />
            <Route path="/faq" element={<Faqpage setShow={setShow} />} />
            <Route path="/*" element={<PagenotFound setShow={setShow} />} />
         </Routes>
         {show && <FooterComponent />}

         <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </>
   );
}

export default App;
