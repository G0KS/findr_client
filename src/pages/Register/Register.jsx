import { useNavigate } from "react-router-dom";
import Logo from "../../assets/f.png";
import RegImg from "../../assets/login.svg";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");

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
         toast.warning("Fill the form");
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
            const response = await axios.post(
               "http://127.0.0.1:8000/api/resource/Student",
               body,
               {
                  withCredentials: true, // Important to handle cookies
               }
            );

            // Handle successful login
            console.log(response.data);
            toast.success("You have been logged in");
            navigate("/profile");
            // Redirect user or update state
         } catch (err) {
            // Handle error
            setError("Login failed. Please check your credentials.");
            toast.error(error);
            console.error(err);
         }
      }
   };

   return (
      <section
         className="d-flex justify-content-center align-items-center loginSection"
          style={{ height: "90vh" }}
      >
         <div className="d-flex justify-content-center align-items-center rounded-4 p-4 shadow-lg bg-white mx-4">
            <div
               className="signupCard row"
               style={{ maxWidth: "40rem" }}
            >
               <div className="col-lg-6">
                  <div style={{ height: "70px", width: "70px" }}>
                     <img src={Logo} style={{ height: "100%" }} alt="" />
                  </div>
                  <div className="title">
                     <h4>Create Findr account</h4>
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
                           First Name
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
                           Last Name
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
                           Phone Number
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
                           Email
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
                           Address
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
                           Password
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
                           Confirm Password
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
