import { useNavigate } from "react-router-dom";
import Logo from "../../assets/f.png";
import RegImg from "../../assets/login.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { candidateRegister } from "../../api/allApi";

function Register({ setShow }) {
   setShow(true);
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const email = JSON.parse(localStorage.getItem("findrData"))?.email;

   useEffect(() => {
      if (email) navigate("/profile");
   }, [email]);

   const [inputData, setInputData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      address: "",
      password: "",
      confirmPassword: "",
   });

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const handleSignup = async (e) => {
      e.preventDefault();
      const {
         first_name,
         last_name,
         address,
         email,
         phone_number,
         password,
         confirmPassword,
      } = inputData;

      if (
         !first_name ||
         !last_name ||
         !email ||
         !phone_number ||
         !password ||
         !confirmPassword
      ) {
         toast.warning("Fill the form completely");
      } else if (password !== confirmPassword) {
         toast.warning("Passwords doesn't match");
      } else {
         const body = {
            first_name,
            last_name,
            address,
            email,
            password,
            phone_number,
         };
         try {
            const response = await candidateRegister(body);
            console.log(response);

            if (response.status === 200) {
               const name = response.data.data.name;
               const email = response.data.data.email;
               toast.success("Logged in successfully");
               localStorage.setItem(
                  "findrData",
                  JSON.stringify({ name, email })
               );
               navigate("/profile/update");
            } else if (response.response.status > 400) {
               toast.error("User already exists. Try logging in.");
            }
         } catch (err) {
            console.log(err);
            toast.error("There have been some error. Please try again later");
         }
      }
   };

   return (
      <section
         className="d-flex justify-content-center align-items-center loginSection"
         style={{ height: "100vh" }}
      >
         <div className="d-flex justify-content-center align-items-center rounded-4 mt-5 p-4 shadow-lg bg-white mx-4">
            <div className="signupCard row" style={{ maxWidth: "40rem" }}>
               <div className="col-lg-6">
                  <div style={{ height: "70px", width: "70px" }}>
                     <img src={Logo} style={{ height: "100%" }} alt="" />
                  </div>
                  <div className="title">
                     <h4>
                        Create <span style={{ color: "#0F6990" }}>Findr</span>{" "}
                        account
                     </h4>
                     <p style={{ fontSize: "13px" }}>
                        Provide all the details to create your account. Already
                        have an account?{" "}
                        <a
                           role="button"
                           onClick={() => navigate("/login")}
                           style={{ color: "#0F6990" }}
                           className="fw-bold"
                        >
                           Login to Findr
                        </a>
                        <br />
                        View Findr&#39;s{" "}
                        <a
                           role="button"
                           onClick={() => navigate("/signup")}
                           style={{ color: "#0F6990" }}
                           className="fw-bold"
                        >
                           Terms and conditions
                        </a>{" "}
                        and{" "}
                        <a
                           role="button"
                           onClick={() => navigate("/signup")}
                           style={{ color: "#0F6990" }}
                           className="fw-bold"
                        >
                           Privacy Policy
                        </a>
                     </p>
                  </div>
                  <div className="regImg d-none d-lg-block">
                     <img src={RegImg} alt="regImg" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="loginBody">
                     <form
                        className="d-flex flex-column justify-content-between"
                        onSubmit={handleSignup}
                     >
                        <label
                           htmlFor="firstName"
                           className="mb-1"
                           style={{ fontSize: "12px" }}
                        >
                           <span className="fw-bold">First Name</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <input
                              id="firstName"
                              type="text"
                              name="first_name"
                              onChange={(e) => getInputData(e)}
                              placeholder="First Name"
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        <label
                           htmlFor="lastName"
                           className="mb-1"
                           style={{ fontSize: "12px" }}
                        >
                           <span className="fw-bolder">Last Name</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <input
                              id="lastName"
                              type="text"
                              name="last_name"
                              onChange={(e) => getInputData(e)}
                              placeholder="Last Name"
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        <label
                           htmlFor="phone"
                           className="mb-1"
                           style={{ fontSize: "12px" }}
                        >
                           <span className="fw-bolder">Phone Number</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <input
                              id="phone"
                              type="text"
                              name="phone_number"
                              onChange={(e) => getInputData(e)}
                              placeholder="Phone Number"
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
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
                              placeholder="Email Id"
                              onChange={(e) => getInputData(e)}
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        <label
                           htmlFor="address"
                           className="mb-1"
                           style={{ fontSize: "12px" }}
                        >
                           <span className="fw-bolder">Address</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <textarea
                              id="address"
                              type="textarea"
                              name="address"
                              placeholder="Address"
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
                           <span className="fw-bolder">Password</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              onChange={(e) => getInputData(e)}
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        <label
                           htmlFor="confirmPassword"
                           className="mb-1"
                           style={{ fontSize: "12px" }}
                        >
                           <span className="fw-bolder">Confirm Password</span>
                        </label>
                        <div className="input-group input-group-sm mb-3">
                           <input
                              id="confirmPassword"
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              placeholder="Password"
                              onChange={(e) => getInputData(e)}
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        <div className="d-flex mb-3">
                           <input
                              type="checkbox"
                              id="showPassword"
                              className="me-2 btn"
                              onClick={() => setShowPassword(!showPassword)}
                           />
                           <label style={{ fontSize: "12px" }}>
                              Show Password
                           </label>
                        </div>

                        <button
                           type="submit"
                           className="btn text-light"
                           style={{ backgroundColor: "#0F6990" }}
                        >
                           SignUp
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Register;
