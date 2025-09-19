import React, { useEffect, useState } from "react";
import Logo from "../../assets/f.png";
import { useFrappeGetDocList, useFrappeUpdateDoc } from "frappe-react-sdk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ForgotPassword({ setShow, setSidebarShow }) {
   setShow(true);
   setSidebarShow(false);

   const [cardTitle, setCardTitle] = useState(<></>);
   const [cardDescription, setCardDescription] = useState(<></>);
   const [buttonText, setButtonText] = useState("Check Email");
   const [showPassword, setShowPassword] = useState(false);
   const [isEmailVerified, setIsEmailVerified] = useState(false);
   const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
   const { updateDoc } = useFrappeUpdateDoc();
   const navigate = useNavigate();

   const [inputData, setInputData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
   });

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const { data, error } = useFrappeGetDocList("Student", {
      fields: ["email", "name", "password"],
      filters: [["email", "=", inputData.email]],
   });

   const checkEmail = (e) => {
      e.preventDefault();
      const { email } = inputData;
      if (data[0]?.email === email) {
         setIsEmailVerified(true);
         setButtonText("Reset Password");
      } else {
         toast.warning("Email not registered");
      }
   };

   const handleUpdate = (e) => {
      e.preventDefault();
      const { email, password, confirmPassword } = inputData;
      if (!email || !password || !confirmPassword) {
         toast.warning("Fill the form completely");
      } else if (password !== confirmPassword) {
         toast.error("Passwords doesn't match");
      } else {
         updateDoc("Student", data[0].name, { password })
            .then(() => {
               toast.success("Password has been updated");
               setIsPasswordUpdated(true);
               setCardTitle(
                  <h4>
                     Password reset{" "}
                     <span style={{ color: "#0F6990" }}>successfull</span>
                  </h4>
               );
               setCardDescription(
                  <p style={{ fontSize: "13px" }}>
                     Your password has been reset successfully, login to
                     continue using{" "}
                     <span style={{ color: "#0F6990" }}>Findr Study</span>
                  </p>
               );
               setButtonText("Back to Login");
            })
            .catch(() => {
               toast.error("Some internal error please try again later");
               console.error(error);
            });
      }
   };

   useEffect(() => {
      setCardTitle(
         <h4>
            Reset your <span style={{ color: "#0F6990" }}>password</span>
         </h4>
      );
      setCardDescription(
         <p style={{ fontSize: "13px" }}>
            Enter your email below to reset your password
         </p>
      );
   }, []);

   return (
      <section
         className="d-flex justify-content-center align-items-center loginSection"
         style={{ height: "100vh" }}
      >
         <div
            className="loginCard rounded-4 p-4 bg-white shadow-lg"
            style={{ width: "22rem" }}
         >
            <div style={{ height: "70px", width: "70px" }}>
               <img src={Logo} style={{ height: "100%" }} alt="" />
            </div>
            <div className="title">
               {cardTitle} {cardDescription}
            </div>
            <div className="loginBody">
               <form
                  className="d-flex flex-column justify-content-between"
                  onSubmit={
                     isPasswordUpdated
                        ? () => navigate("/login")
                        : isEmailVerified
                        ? handleUpdate
                        : checkEmail
                  }
               >
                  {!isPasswordUpdated && (
                     <>
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
                              disabled={isEmailVerified}
                              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                              title="Must be a valid email id"
                              onChange={(e) => getInputData(e)}
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                           />
                        </div>
                        {isEmailVerified && (
                           <>
                              <label
                                 htmlFor="password"
                                 className="mb-1"
                                 style={{ fontSize: "12px" }}
                              >
                                 <span className="fw-bolder">New Password</span>
                              </label>
                              <div className="input-group input-group-sm mb-3">
                                 <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    disabled={isPasswordUpdated}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    onChange={(e) => getInputData(e)}
                                    className="form-control"
                                    aria-label="Sizing example
                           input"
                                    aria-describedby="inputGroup-sizing-sm"
                                 />
                              </div>
                              <label
                                 htmlFor="confirmPassword"
                                 className="mb-1"
                                 style={{ fontSize: "12px" }}
                              >
                                 <span className="fw-bolder">
                                    Confirm Password
                                 </span>
                              </label>
                              <div className="input-group input-group-sm mb-3">
                                 <input
                                    id="confirmPassword"
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Password"
                                    disabled={isPasswordUpdated}
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
                                    id="showPassword"
                                    className="me-2 btn"
                                    onClick={() =>
                                       setShowPassword(!showPassword)
                                    }
                                 />
                                 <label
                                    htmlFor="showPassword"
                                    style={{ fontSize: "12px" }}
                                 >
                                    Show Password
                                 </label>
                              </div>
                           </>
                        )}
                     </>
                  )}

                  <button
                     type="submit"
                     className="btn text-light"
                     style={{ backgroundColor: "#0F6990" }}
                  >
                     {buttonText}
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default ForgotPassword;
