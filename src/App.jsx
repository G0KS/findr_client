import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home/Home.jsx';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Contactus from './pages/Contactus/Contactus.jsx';
import Terms from './pages/Termscont/Terms.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import Payment from './pages/Payment/Payment.jsx';
import SliderComponent from './components/SliderComponent/SliderComponent.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';
import Courses from './pages/Courses/Courses.jsx';
import Faqpage from './pages/FAQ/Faqpage.jsx';
import PagenotFound from './pages/PagenotFound/PagenotFound.jsx';


function App() {
  const [show, setShow] = useState(true);
  const [sliderShow, setSliderShow] = useState(false);

  return (
    <>
      {show && <NavbarComponent />}
      {sliderShow && <SliderComponent />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home setShow={setShow} setSliderShow={setSliderShow} />} />
        <Route path="/login" element={<Login setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/signup" element={<Register setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/profile/update" element={<UpdateProfile setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/profile" element={<Profile setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/courses" element={<Courses setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/contactus" element={<Contactus setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/terms" element={<Terms setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/privacy" element={<Privacy setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/payment" element={<Payment setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/faq" element={<Faqpage setShow={setShow} setSliderShow={setSliderShow}/>} />
        <Route path="/*" element={<PagenotFound setShow={setShow} setSliderShow={setSliderShow}/>} />


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
