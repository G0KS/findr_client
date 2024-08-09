import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <>
         <NavbarComponent />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
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
