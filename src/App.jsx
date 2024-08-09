import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
