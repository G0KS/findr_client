import { useNavigate } from "react-router-dom";
import Logo from "../../assets/f.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const [inputData, setInputData] = useState({
      email: "",
      password: "",
   });

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = inputData;
      if (!email || !password) {
         toast.warning("Fill the form");
      } else {
         try {
            const response = await axios.get(
               `http://127.0.0.1:8000/api/resource/Student/${email}`
            );
            if (response.data.data.password === password) {
               toast.success("Successfully logged in");
               navigate("/profile");
            } else toast.error("Wrong Credentials");
         } catch (err) {
            console.log(err);
            toast.error("Invalid Credentials");
         }
      }
   };

   return (
      <section
         className="d-flex justify-content-center align-items-center loginSection"
         style={{ height: "90vh" }}
      >
         <div
            className="loginCard rounded-4 p-4 bg-white shadow-lg"
            style={{ width: "22rem", height: "30rem" }}
         >
            <div style={{ height: "70px", width: "70px" }}>
               <img src={Logo} style={{ height: "100%" }} alt="" />
            </div>
            <div className="title">
               <h4>Login to Findr</h4>
               <p style={{ fontSize: "13px" }}>
                  Enter your email below to login to your account
               </p>
            </div>
            <div className="loginBody">
               <form
                  className="d-flex flex-column justify-content-between"
                  onSubmit={handleLogin}
               >
                  <label
                     htmlFor="email"
                     className="mb-1"
                     style={{ fontSize: "12px" }}
                  >
                     Email
                  </label>
                  <div className="input-group input-group-sm mb-3">
                     <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={(e) => getInputData(e)}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                     />
                  </div>
                  <label
                     htmlFor="password"
                     className="mb-1"
                     style={{ fontSize: "12px" }}
                  >
                     Password
                  </label>
                  <div className="input-group input-group-sm mb-3">
                     <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={(e) => getInputData(e)}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                     />
                  </div>
                  <div className="d-flex mb-3">
                     <input
                        type="checkbox"
                        name=""
                        id="showPassword"
                        className="me-2 btn"
                        onClick={() => setShowPassword(!showPassword)}
                     />
                     <label style={{ fontSize: "12px" }}>Show Password</label>
                  </div>

                  <button
                     type="submit"
                     className="btn text-light"
                     style={{ backgroundColor: "#0F6990" }}
                  >
                     Login
                  </button>
                  <p className="text-center mt-5" style={{ fontSize: "12px" }}>
                     Dont have an account?{" "}
                     <a
                        role="button"
                        onClick={() => navigate("/signup")}
                        style={{ color: "#0F6990" }}
                        className="fw-bold"
                     >
                        Sign Up
                     </a>
                  </p>
               </form>
            </div>
         </div>
      </section>
   );
}

export default Login;
