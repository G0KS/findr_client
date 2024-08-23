import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from './pages/Profile/Profile.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import Contactus from './pages/Contactus/Contactus.jsx';
import Terms from './pages/Termscont/Terms.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import {  useState } from 'react';
import Payment from './pages/Payment/Payment.jsx';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Home setShow={setShow} />} />
        <Route path="/login" element={<Login setShow={setShow} />} />
        <Route path="/signup" element={<Register setShow={setShow} />} />
        <Route path="/profile" element={<Profile setShow={setShow} />} />
        <Route path="/contactus" element={<Contactus setShow={setShow} />} />
        <Route path="/terms" element={<Terms setShow={setShow} />} />
        <Route path="/privacy" element={<Privacy setShow={setShow} />} />
        <Route path="/payment" element={<Payment setShow={setShow} />} />

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
