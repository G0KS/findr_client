import { useNavigate } from "react-router-dom";
import Logo from "../../assets/f.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCandidate } from "../../api/allApi";

function Login({ setShow }) {
   setShow(true);
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);z

   const email = JSON.parse(localStorage.getItem("findrData"))?.email;

   useEffect(() => {
      if (email) navigate("/profile");
   }, [email]);

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
            const response = await getCandidate(email);
            if (response.data.data.password === password) {
               toast.success("Successfully logged in");
               localStorage.setItem("findrData", JSON.stringify({ email }));
               navigate("/profile");
            } else toast.warning("Wrong Credentials");
         } catch (err) {
            console.log(err);
            toast.error("Invalid Credentials");
         }
      }
   };

   return (
      <section
         className="d-flex justify-content-center align-items-center loginSection"
         style={{ height: "100vh" }}
      >
         <div
            className="loginCard rounded-4 p-4 bg-white shadow-lg"
            style={{ width: "22rem", height: "30rem" }}
         >
            <div style={{ height: "70px", width: "70px" }}>
               <img src={Logo} style={{ height: "100%" }} alt="" />
            </div>
            <div className="title">
               <h4>
                  Login to <span style={{ color: "#0F6990" }}>Findr</span>
               </h4>
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
                     <span className="fw-bolder">Email</span>
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
                     <span className=" fw-bolder">Password</span>
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
