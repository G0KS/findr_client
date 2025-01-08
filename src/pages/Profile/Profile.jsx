import { useEffect, useState } from "react";
import edit from "../../assets/Edit.svg";
import save from "../../assets/Save.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFrappeGetDoc, useFrappeUpdateDoc } from "frappe-react-sdk";

function Profile({ setShow, setSidebarShow }) {
   document.title = "Profile | Findr";

   setShow(true);
   setSidebarShow(true);
   const [inputData, setInputData] = useState("");
   const [editable, setEditable] = useState(true);
   const [profileData, setProfileData] = useState({});
   const navigate = useNavigate();

   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const email = JSON.parse(localStorage.getItem("findrData"))?.email;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;

   const { data, isLoading } = useFrappeGetDoc("Student", c_id);
   console.log(data);

   const getUserData = () => {
      if (!isLoading) {
         if (data.profile_updated == 1) {
            setProfileData(data);
         }
      }
   };

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const { updateDoc } = useFrappeUpdateDoc();

   const handleEdit = async () => {
      if (inputData == "") {
         toast.warning("Nothing to save");
      } else {
         const body = {
            name: c_id,
            doctype: "Student",
            ...inputData,
         };
         updateDoc("Student", c_id, { ...body })
            .then(() => {
               toast.success("Contact details updated");
               setInputData("");
               setEditable(!editable);
            })
            .catch((err) => {
               console.error(err);
               toast.warning("Some internal errors. Please try again later");
            });
      }
   };

   useEffect(() => {
      if (name) {
         getUserData();
      } else {
         toast.warning("Please login");
         navigate("/login");
      }
   }, [data]);

   return (
      <div className="d-flex">
         <div className="d-none d-lg-block" style={{ width: "380px" }}></div>{" "}
         <div className="container my-4" style={{ paddingBlock: "90px" }}>
            <div className="d-flex justify-content-between">
               <div className="shapeParent d-flex align-items-center">
                  <div className="shape "></div>
                  <h2 className="m-0 ms-3">Personal Details</h2>
               </div>
               {editable ? (
                  <button
                     className="py-2 px-3 shadow border "
                     style={{
                        backgroundColor: "#0F6990",
                        borderRadius: "10px",
                        textDecoration: "none",
                        width: "7rem",
                     }}
                     onClick={() => setEditable(!editable)}
                  >
                     <span className="p-2" style={{ color: "white" }}>
                        Edit
                     </span>
                     <img src={edit} alt="" />
                  </button>
               ) : (
                  <button
                     className="ms-auto py-2  px-3 me-3 shadow border "
                     style={{
                        backgroundColor: "#0F6990",
                        borderRadius: "10px",
                        textDecoration: "none",
                        width: "7rem",
                     }}
                     onClick={() => handleEdit()}
                  >
                     <span className="p-2" style={{ color: "white" }}>
                        Save
                     </span>
                     <img src={save} alt="" height={20} />
                  </button>
               )}
            </div>

            {isLoading ? (
               "Loading"
            ) : (
               <>
                  <div
                     className="d-flex p-4 row p-3 "
                     style={{ backgroundColor: "" }}
                  >
                     <div className="col-md-6 col-lg-5">
                        {/* input section */}

                        <form action="">
                           {/* name */}
                           <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2 ">
                              <label
                                 style={{ color: "#0F6990", width: "100px" }}
                              >
                                 Full Name
                              </label>
                              <input
                                 className="inputBox shadow"
                                 type="text"
                                 name="name1"
                                 value={`${profileData.first_name} ${profileData.last_name}`}
                                 disabled
                                 style={{ fontSize: "15px", border: "none" }}
                              />
                           </div>
                           <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                              <label
                                 style={{ color: "#0F6990", width: "100px" }}
                              >
                                 Phone No.
                              </label>
                              <input
                                 className="inputBox shadow "
                                 type="number"
                                 name="phone_number"
                                 value={
                                    inputData.phone_number ||
                                    profileData.phone_number
                                 }
                                 disabled={editable ? "disabled" : ""}
                                 onChange={(e) => getInputData(e)}
                                 style={{ fontSize: "15px", border: "none" }}
                              />
                           </div>
                           <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                              <label
                                 style={{ color: "#0F6990", width: "100px" }}
                              >
                                 DOB
                              </label>
                              <input
                                 className="inputBox shadow "
                                 type="text"
                                 name=""
                                 value={profileData.date_of_birth || ""}
                                 disabled
                                 style={{ fontSize: "15px", border: "none" }}
                              />
                           </div>
                        </form>
                     </div>
                     {/* next section  */}
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Email
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="email"
                              value={inputData.email || profileData.email}
                              disabled={editable ? "disabled" : ""}
                              onChange={(e) => getInputData(e)}
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Address
                           </label>
                           <textarea
                              className="inputBox shadow "
                              type="textArea"
                              name=""
                              value={profileData.address || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Nationality
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name=""
                              value={profileData.nationality || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label
                              style={{ color: "#0F6990", width: "100px" }}
                              className=""
                           >
                              Course looking for
                           </label>
                           <input
                              className="inputBox shadow"
                              type="text"
                              value={profileData.education_program || ""}
                              disabled
                              style={{
                                 fontSize: "15px",
                                 border: "none",
                              }}
                           />
                        </div>
                     </div>
                  </div>

                  {/* Tenth Qualification */}
                  <h4 className=" mt-4 ms-3">
                     <span style={{ color: "#0F6990" }}>Tenth</span>{" "}
                     Qualification
                  </h4>
                  <div
                     className="d-flex p-4 row p-3 "
                     style={{ backgroundColor: "" }}
                  >
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Instituiton
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_institution"
                              value={profileData.tenth_institution || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>

                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Marks
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_marks"
                              value={profileData.tenth_marks || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Board of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_board_of_study"
                              value={profileData.tenth_board_of_study || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                     {/* next section  */}
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990" }}>
                              Mode of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_mode_of_study"
                              value={profileData.tenth_mode_of_study || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990" }}>
                              Year of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_year"
                              value={profileData.tenth_year || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              State
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="tenth_state"
                              value={profileData.tenth_state || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                  </div>

                  {/* Twelfth Qualification */}
                  <h4 className=" mt-4 ms-3">
                     <span style={{ color: "#0F6990" }}>Twelfth</span>{" "}
                     Qualification
                  </h4>
                  <div
                     className="d-flex p-4 row p-3 "
                     style={{ backgroundColor: "" }}
                  >
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Instituiton
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_institution"
                              value={profileData.twelfth_institution || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>

                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Marks
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_marks"
                              value={profileData.twelfth_marks || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Board of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_board_of_study"
                              value={profileData.twelfth_board_of_study || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                     {/* next section  */}
                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Mode of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_mode_of_study"
                              value={profileData.twelfth_mode_of_study || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Year of Study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_year"
                              value={profileData.twelfth_year || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              State
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="twelfth_state"
                              value={profileData.twelfth_state || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                  </div>

                  {/* UG Qualification */}
                  {profileData.undergraduate_institution && (
                     <div id="ugContainer">
                        <h4 className=" mt-4 ms-3">
                           <span style={{ color: "#0F6990" }}>
                              Undergraduate{" "}
                           </span>{" "}
                           Qualification
                        </h4>
                        <div
                           className="d-flex p-4 row p-3 "
                           style={{ backgroundColor: "" }}
                        >
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Course
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_course"
                                    value={
                                       profileData.undergraduate_course ||
                                       ""
                                    }
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Instituiton
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_institution"
                                    value={
                                       profileData.undergraduate_institution ||
                                       ""
                                    }
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>

                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Marks
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_marks"
                                    value={
                                       profileData.undergraduate_marks || ""
                                    }
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                           </div>
                           {/* next section  */}
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    University
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_university"
                                    value={
                                       profileData.undergraduate_university ||
                                       ""
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Mode of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_mode_of_study"
                                    value={
                                       profileData.undergraduate_mode_of_study ||
                                       ""
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Year of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="undergraduate_year"
                                    value={profileData.undergraduate_year || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* Postgraduate Qualification */}
                  {profileData.postgraduate_institution && (
                     <div id="pgContainer">
                        <h4 className=" mt-4 ms-3">
                           <span style={{ color: "#0F6990" }}>
                              Postgraduate{" "}
                           </span>
                           Qualification
                        </h4>
                        <div
                           className="d-flex p-4 row p-3 "
                           style={{ backgroundColor: "" }}
                        >
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Course Name
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_course"
                                    value={
                                       profileData.postgraduate_course ||
                                       ""
                                    }
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Instituiton
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_institution"
                                    value={
                                       profileData.postgraduate_institution ||
                                       ""
                                    }
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>

                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Marks
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_marks"
                                    value={profileData.postgraduate_marks || ""}
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                           </div>
                           {/* next section  */}
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    University
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_university"
                                    value={
                                       profileData.postgraduate_university || ""
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Mode of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_mode_of_study"
                                    value={
                                       profileData.postgraduate_mode_of_study ||
                                       ""
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Year of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="postgraduate_year"
                                    value={profileData.postgraduate_year || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* PhD Qualification */}
                  {profileData.phd_institution && (
                     <div id="phdContainer">
                        <h4 className=" mt-4 ms-3">
                           <span style={{ color: "#0F6990" }}>PhD </span>{" "}
                           Qualification
                        </h4>
                        <div
                           className="d-flex p-4 row p-3 "
                           style={{ backgroundColor: "" }}
                        >
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Course Name
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_course"
                                    value={profileData.phd_course || ""}
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Instituiton
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_institution"
                                    value={profileData.phd_institution || ""}
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>

                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{
                                       color: "#0F6990",
                                       width: "100px",
                                    }}
                                 >
                                    Marks
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_marks"
                                    value={profileData.phd_marks || ""}
                                    disabled
                                    style={{
                                       fontSize: "15px",
                                       border: "none",
                                    }}
                                 />
                              </div>
                           </div>
                           {/* next section  */}
                           <div className="col-md-6 col-lg-5">
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    University
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_university"
                                    value={profileData.phd_university || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Mode of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_mode_of_study"
                                    value={profileData.phd_mode_of_study || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Year of Study
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="phd_year"
                                    value={profileData.phd_year || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* Language Proficiency */}

                  <div id="languageContainer">
                     <h4 className=" mt-4 ms-3">Language Proficiency</h4>
                     <div className="d-flex p-4 row p-3 ">
                        <div className="col-md-6 col-lg-5">
                           {/* input section */}

                           <form action="">
                              {/* name */}
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label style={{ color: "#0F6990" }}>
                                    Do you have good communication skill in
                                    English?
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="english_skill"
                                    value={
                                       profileData.english_skill == 1
                                          ? "Yes"
                                          : "No"
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>

                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label style={{ color: "#0F6990" }}>
                                    Are you comfortable spending few months in
                                    learning a new language?
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="new_language"
                                    value={
                                       profileData.new_language == 1
                                          ? "Yes"
                                          : "No"
                                    }
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                           </form>
                        </div>

                        {/* next section  */}
                        <div className="col-md-6 col-lg-5">
                           <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                              <label style={{ color: "#0F6990" }}>
                                 Have you got any language proficiency?
                              </label>
                              <input
                                 className="inputBox shadow "
                                 type="text"
                                 name="proficiency_in_language"
                                 value={
                                    profileData.proficiency_in_language == 1
                                       ? "Yes"
                                       : "No"
                                 }
                                 disabled
                                 style={{ fontSize: "15px", border: "none" }}
                              />
                           </div>
                        </div>
                     </div>

                     {/* Language Details */}
                     {profileData.language_proficiency?.length < 0 && (
                        <div>
                           <h4 className=" mt-4 ms-3">
                              <span style={{ color: "#0F6990" }}>
                                 Language{" "}
                              </span>
                              Details
                           </h4>
                           {profileData.language_proficiency?.map(
                              (language) => (
                                 <div
                                    className="d-flex p-2 row"
                                    key={language.id}
                                 >
                                    <div className="col-md-6 col-lg-6">
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                fontSize: "17px",
                                             }}
                                          >
                                             Language
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="name1"
                                             disabled
                                             value={language.language}
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                                width: "300px",
                                             }}
                                          />
                                       </div>
                                    </div>
                                    {/* next section */}
                                    <div className="col-md-6 col-lg-6">
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                fontSize: "17px",
                                             }}
                                          >
                                             Certificate
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="name1"
                                             value={language.certificate}
                                             disabled
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                                width: "300px",
                                             }}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              )
                           )}
                        </div>
                     )}
                  </div>

                  {/* Work Experience */}
                  <div id="experienceContainer">
                     {profileData.internship_details?.length > 0 ||
                     profileData.work_experience?.length > 0 ? (
                        <h2 className="mt-3 mb-4 ms-3">Work Experience</h2>
                     ) : (
                        <></>
                     )}

                     {/* Internship Details */}
                     {profileData.internship_details?.length > 0 && (
                        <div id="internContainer">
                           <h4 className=" mt-4 ms-3  ">
                              <span style={{ color: "#0F6990" }}>
                                 Internship{" "}
                              </span>
                              Details
                           </h4>
                           {profileData.internship_details?.map((intern) => (
                              <div
                                 className="d-flex p-4 row p-3 "
                                 key={intern.id}
                              >
                                 <div className="col-md-6 col-lg-5">
                                    {/* input section */}

                                    <form action="">
                                       {/* name */}
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                width: "100px",
                                             }}
                                          >
                                             Position
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="intern_position"
                                             value={
                                                intern.intern_position || ""
                                             }
                                             disabled
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                             }}
                                          />
                                       </div>
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                width: "100px",
                                             }}
                                          >
                                             From
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="intern_from"
                                             value={intern.intern_from || ""}
                                             disabled
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                             }}
                                          />
                                       </div>
                                    </form>
                                 </div>
                                 {/* next section  */}
                                 <div className="col-md-6 col-lg-5">
                                    <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                       <label
                                          style={{
                                             color: "#0F6990",
                                             width: "100px",
                                          }}
                                       >
                                          Company Name
                                       </label>
                                       <input
                                          className="inputBox shadow "
                                          type="text"
                                          name="intern_company_name"
                                          value={
                                             intern.intern_company_name || ""
                                          }
                                          disabled
                                          style={{
                                             fontSize: "15px",
                                             border: "none",
                                          }}
                                       />
                                    </div>
                                    <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                       <label
                                          style={{
                                             color: "#0F6990",
                                             width: "100px",
                                          }}
                                       >
                                          To
                                       </label>
                                       <input
                                          className="inputBox shadow "
                                          type="text"
                                          name="intern_to"
                                          value={intern.intern_to || ""}
                                          disabled
                                          style={{
                                             fontSize: "15px",
                                             border: "none",
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}

                     {/* Work Details */}
                     {profileData.work_experience?.length > 0 && (
                        <div id="workContainer">
                           <h4 className=" mt-4 ms-3">
                              <span style={{ color: "#0F6990" }}>Work </span>
                              Details
                           </h4>
                           {profileData.work_experience?.map((work) => (
                              <div
                                 className="d-flex p-4 row p-3 "
                                 key={work.id}
                              >
                                 <div className="col-md-6 col-lg-5">
                                    {/* input section */}

                                    <form action="">
                                       {/* name */}
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                width: "100px",
                                             }}
                                          >
                                             Position
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="work_position"
                                             value={work.work_position || ""}
                                             disabled
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                             }}
                                          />
                                       </div>
                                       <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                          <label
                                             style={{
                                                color: "#0F6990",
                                                width: "100px",
                                             }}
                                          >
                                             From
                                          </label>
                                          <input
                                             className="inputBox shadow "
                                             type="text"
                                             name="work_from"
                                             value={work.work_from || ""}
                                             disabled
                                             style={{
                                                fontSize: "15px",
                                                border: "none",
                                             }}
                                          />
                                       </div>
                                    </form>
                                 </div>
                                 {/* next section  */}
                                 <div className="col-md-6 col-lg-5">
                                    <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                       <label
                                          style={{
                                             color: "#0F6990",
                                             width: "100px",
                                          }}
                                       >
                                          Company Name
                                       </label>
                                       <input
                                          className="inputBox shadow "
                                          type="text"
                                          name="work_company_name"
                                          value={work.work_company_name || ""}
                                          disabled
                                          style={{
                                             fontSize: "15px",
                                             border: "none",
                                          }}
                                       />
                                    </div>
                                    <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                       <label
                                          style={{
                                             color: "#0F6990",
                                             width: "100px",
                                          }}
                                       >
                                          To
                                       </label>
                                       <input
                                          className="inputBox shadow "
                                          type="text"
                                          name="work_to"
                                          value={work.work_to || ""}
                                          disabled
                                          style={{
                                             fontSize: "15px",
                                             border: "none",
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>

                  {/* Preferences */}
                  <h2 className="ms-3" style={{}}>
                     Preferences
                  </h2>
                  <div className="d-flex p-4 row p-3 ">
                     {profileData.preferred_course && (
                        <div className="col-md-6 col-lg-5">
                           {/* input section */}

                           <form action="">
                              {/* name */}
                              <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                                 <label
                                    style={{ color: "#0F6990", width: "100px" }}
                                 >
                                    Preferred course
                                 </label>
                                 <input
                                    className="inputBox shadow "
                                    type="text"
                                    name="preferred_course"
                                    value={profileData.preferred_course || ""}
                                    disabled
                                    style={{ fontSize: "15px", border: "none" }}
                                 />
                              </div>
                           </form>
                        </div>
                     )}
                     {/* next section  */}
                     {profileData.preferred_country && (
                        <div className="col-md-6 col-lg-5">
                           <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                              <label
                                 style={{ color: "#0F6990", width: "100px" }}
                              >
                                 Preferred Country
                              </label>
                              <input
                                 className="inputBox shadow "
                                 type="text"
                                 name="preferred_country"
                                 value={profileData.preferred_country || ""}
                                 disabled
                                 style={{ fontSize: "15px", border: "none" }}
                              />
                           </div>
                        </div>
                     )}

                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Intake
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="intake"
                              value={profileData.intake || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>

                     <div className="col-md-6 col-lg-5">
                        <div className="form-group d-flex flex-column flex-lg-row justify-content-center align-items-lg-center gap-3 p-2">
                           <label style={{ color: "#0F6990", width: "100px" }}>
                              Year of study
                           </label>
                           <input
                              className="inputBox shadow "
                              type="text"
                              name="year_of_study"
                              value={profileData.year_of_study || ""}
                              disabled
                              style={{ fontSize: "15px", border: "none" }}
                           />
                        </div>
                     </div>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}

export default Profile;
