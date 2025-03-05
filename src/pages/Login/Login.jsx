import { useNavigate } from "react-router-dom";
import Logo from "../../assets/f.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFrappeGetDocList } from "frappe-react-sdk";

function Login({ setShow, setSidebarShow }) {
   document.title = "Log In | Findr";

   setShow(true);
   setSidebarShow(false);
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const findrData = JSON.parse(localStorage.getItem("findrData"));

   useEffect(() => {
      if (findrData) navigate("/profile");
   }, [findrData]);

   const [inputData, setInputData] = useState({
      email: "",
      password: "",
   });

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const { data, error } = useFrappeGetDocList("Student", {
      fields: ["email", "first_name", "last_name", "password", "name"],
      filters: [["email", "=", inputData.email]],
   });   

   const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = inputData;
      if (!email || !password) {
         toast.warning("Fill the form");
      } else {
         try {
            if (password === data[0].password) {
               const c_id = data[0].name;
               const name = data[0].first_name;
               const email = data[0].email;
               localStorage.setItem(
                  "findrData",
                  JSON.stringify({ c_id, name, email })
               );
               toast.success("Logged in");
               navigate("/courses");
            } else toast.warning("Invalid credentials");
         } catch {
            toast.error("Some internal error! Please try again later");
            console.error(error);
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
                        type="email"
                        name="email"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        title="Must be a valid email id"
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
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
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
                     <label
                        htmlFor="showPassword"
                        style={{ fontSize: "12px", cursor: "pointer" }}
                     >
                        Show Password
                     </label>
                  </div>

                  <button
                     type="submit"
                     className="btn text-light"
                     style={{ backgroundColor: "#0F6990" }}
                  >
                     Login
                  </button>
                  <p className="text-center mt-4" style={{ fontSize: "12px" }}>
                     <a
                        role="button"
                        onClick={() => navigate("/forgot-your-password")}
                        style={{ color: "#0F6990" }}
                        className="fw-bold"
                     >
                        Forgot your password?
                     </a>
                  </p>
                  <p className="text-center" style={{ fontSize: "12px" }}>
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
