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
import { FrappeProvider } from "frappe-react-sdk";
import SliderComponent from "./components/SliderComponent/SliderComponent.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";

function App() {
   const [show, setShow] = useState(true);
   const [sidebarShow, setSidebarShow] = useState(true);
   const api_key = import.meta.env.VITE_FRAPPE_STUDENT_KEY;
   const api_secret = import.meta.env.VITE_FRAPPE_STUDENT_SECRET;

   return (
      <>
         <FrappeProvider
            url="https://findrstudy.frappe.cloud"
            tokenParams={{
               type: "token",
               useToken: "true",
               token: () => `${api_key}:${api_secret}`,
            }}
            enableSocket={false}
         >
            {show && <NavbarComponent />}
            {sidebarShow && <SliderComponent />}
            <ScrollToTop />
            <Routes>
               <Route
                  path="/"
                  element={
                     <Home setShow={setShow} setSidebarShow={setSidebarShow} />
                  }
               />
               <Route
                  path="/login"
                  element={
                     <Login setShow={setShow} setSidebarShow={setSidebarShow} />
                  }
               />
               <Route
                  path="/signup"
                  element={
                     <Register
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/profile/update"
                  element={
                     <UpdateProfile
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/profile"
                  element={
                     <Profile
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/courses"
                  element={
                     <Courses
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/contactus"
                  element={
                     <Contactus
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/terms"
                  element={
                     <Terms setShow={setShow} setSidebarShow={setSidebarShow} />
                  }
               />
               <Route
                  path="/privacy"
                  element={
                     <Privacy
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/payment"
                  element={
                     <Payment
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/faq"
                  element={
                     <Faqpage
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/forgot-your-password"
                  element={
                     <ForgotPassword
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
               <Route
                  path="/*"
                  element={
                     <PagenotFound
                        setShow={setShow}
                        setSidebarShow={setSidebarShow}
                     />
                  }
               />
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
         </FrappeProvider>
      </>
   );
}

export default App;
