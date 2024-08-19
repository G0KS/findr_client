import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";
import Contactus from "./pages/Contactus/Contactus.jsx";
import Terms from "./pages/Termscont/Terms.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";

function App() {
   return (
      <>
         <NavbarComponent />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
     
         </Routes>
         <FooterComponent/>
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
