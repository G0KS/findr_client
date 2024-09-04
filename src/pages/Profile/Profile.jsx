import React, { useEffect, useState } from "react";
import edit from "../../assets/Edit.svg";
import save from "../../assets/Save.svg";
import { candidateUpdate, getCandidate } from "../../api/allApi";
import { toast } from "react-toastify";

function Profile({ setShow, setSliderShow }) {
   setShow(true);
   setSliderShow(true);
   const [inputData, setInputData] = useState({});
   const [editable, setEditable] = useState(true);
   const [userData, setUserData] = useState({});

   const name = JSON.parse(localStorage.getItem("findrData")).name;

   const getUserData = async () => {
      let data = await getCandidate(name);
      setUserData(data.data.data);
   };

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   const handleEdit = async () => {
      const body = {
         name,
         doctype: "Student",
         ...inputData,
      };
      try {
         const res = await candidateUpdate(body, name);
         if (res.status === 200) {
            toast.success("Contact details updated");
            setEditable(!editable);
         } else toast.warning("Update was not completed.");
      } catch (err) {
         console.log(err);
         toast.error("There have been some technical error.");
         toast.error("Please try again later.");
      }
   };

   useEffect(() => {
      getUserData();
   }, []);

   return (
      <div
         style={{ paddingBlock: "100px", paddingLeft: "200px" }}
         className="container ms-auto"
      >
         <div className="d-flex justify-content-between">
            <h2>Personal Details</h2>
   
            {/* Edit Button */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               {editable ? (
                  <button
                     className="ms-auto py-2  px-3 shadow border "
                     style={{
                        backgroundColor: "#0F6990",
                        borderRadius: "20px",
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
                     className="ms-auto py-2  px-3 shadow border "
                     style={{
                        backgroundColor: "#0F6990",
                        borderRadius: "20px",
                        textDecoration: "none",
                        width: "7rem",
                     }}
                     onClick={handleEdit}
                  >
                     <span className="p-2" style={{ color: "white" }}>
                        Save
                     </span>
                     <img src={save} alt="" height={20} />
                  </button>
               )}
            </div>
         </div>

         {/* Personal Details */}
         <div className="d-flex p-4 row p-3 ">
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Full Name
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="name1"
                        value={`${userData.first_name} ${userData.last_name}`}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Phone No.
                     </label>
                     <input
                        className="inputBox shadow "
                        type="number"
                        name="phone_number"
                        value={inputData.phone_number || userData.phone_number}
                        disabled={editable ? "disabled" : ""}
                        onChange={(e) => getInputData(e)}
                        placeholder="Enter Phone Number"
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        DOB
                     </label>
                     <input
                        className="inputBox shadow "
                        type="date"
                        name=""
                        value={userData.date_of_birth || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Email
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="email"
                     value={inputData.email || userData.email}
                     disabled={editable ? "disabled" : ""}
                     onChange={(e) => getInputData(e)}
                     placeholder="Enter Email"
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Address
                  </label>
                  <textarea
                     className="inputBox shadow "
                     type="textArea"
                     name=""
                     value={userData.address || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Nationality
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name=""
                     value={userData.nationality || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Tenth Qualification */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Tenth</span> Qualification
         </h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Instituiton
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="tenth_institution"
                        value={userData.tenth_institution || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Marks
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="tenth_marks"
                        value={userData.tenth_marks || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Mode of Study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="tenth_mode_of_study"
                     value={userData.tenth_mode_of_study || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Twelfth Qualification */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Twelfth</span> Qualification
         </h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Instituiton
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="twelfth_institution"
                        value={userData.twelfth_institution || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Marks
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="twelfth_marks"
                        value={userData.twelfth_marks || ""}
                        disabled
                        placeholder="Enter Marks"
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Mode of Study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="twelfth_mode_of_study"
                     value={userData.twelfth_mode_of_study || ""}
                     disable
                     placeholder="Enter Marks"
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* UG Qualification */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Undergraduate </span>{" "}
            Qualification
         </h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Instituiton
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="undergraduate_institution"
                        value={userData.undergraduate_institution || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Marks
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="undergraduate_marks"
                        value={userData.undergraduate_marks || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Mode of Study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="undergraduate_mode_of_study"
                     value={userData.undergraduate_mode_of_study || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Postgraduate Qualification */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Postgraduate </span>{" "}
            Qualification
         </h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Instituiton
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="postgraduate_institution"
                        value={userData.postgraduate_institution || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Marks
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="postgraduate_marks"
                        value={userData.postgraduate_marks || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Mode of Study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="postgraduate_mode_of_study"
                     value={userData.postgraduate_mode_of_study || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* PhD Qualification */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>PhD </span> Qualification
         </h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Instituiton
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="phd_institution"
                        value={userData.phd_institution || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Marks
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="phd_marks"
                        value={userData.phd_marks || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Mode of Study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="phd_mode_of_study"
                     value={userData.phd_mode_of_study || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Language Proficiency */}
         <h4 className=" mt-4">Language Proficiency</h4>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990" }}>
                        Do you have good communication skill in English?
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="english_skill"
                        value={userData.english_skill === 1 ? "Yes" : "No"}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>

                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990" }}>
                        Are you comfortable spending few months in learning a
                        new language?
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="new_language"
                        value={userData.new_language === 1 ? "Yes" : "No"}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>

            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990" }}>
                     Have you got any language proficiency?
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="proficiency_in_language"
                     value={
                        userData.proficiency_in_language === 1 ? "Yes" : "No"
                     }
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Language Details */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Language </span>Details
         </h4>
         <div className="d-flex p-2 row  ">
            <div className="col-md-6 col-lg-4">
               <div className="form-group d-lg-flex   flex-column gap-3 p-2">
                  <label style={{ color: "#0F6990", fontSize: "17px" }}>
                     Language
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="name1"
                     value={inputData.name1 || ""}
                     // disabled={editable
                     placeholder=""
                     style={{
                        fontSize: "15px",
                        border: "none",
                        width: "300px",
                     }}
                  />
               </div>
            </div>
            {/* next section */}
            <div className="col-md-6 col-lg-4">
               <div className="form-group d-lg-flex   flex-column gap-3 p-2">
                  <label style={{ color: "#0F6990", fontSize: "17px" }}>
                     Certificate
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="name1"
                     value={inputData.name1 || ""}
                     // disabled={editable
                     placeholder=""
                     style={{
                        fontSize: "15px",
                        border: "none",
                        width: "300px",
                     }}
                  />
               </div>
            </div>
            <div className="col-md-6 col-lg-4">
               <div className="form-group d-lg-flex   flex-column gap-3 p-2">
                  <label style={{ color: "#0F6990", fontSize: "17px" }}>
                     Level
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="name1"
                     value={inputData.name1 || ""}
                     // disabled={editable
                     placeholder=""
                     style={{
                        fontSize: "15px",
                        border: "none",
                        width: "300px",
                     }}
                  />
               </div>
            </div>
         </div>

         {/* Work Experience */}
         <h2 className="mt-3 mb-4" style={{}}>
            Work Experience
         </h2>

         {/* Internship Details */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Internship </span>Details
         </h4>
         {userData.internship_details?.map((intern) => (
            <div
               className="d-flex p-4 row p-3 "
               style={{ backgroundColor: "" }}
            >
               <div className="col-md-6 col-lg-5">
                  {/* input section */}

                  <form action="">
                     {/* name */}
                     <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                        <label style={{ color: "#0F6990", width: "100px" }}>
                           Position
                        </label>
                        <input
                           className="inputBox shadow "
                           type="text"
                           name="intern_position"
                           value={intern.intern_position || ""}
                           disabled
                           style={{ fontSize: "15px", border: "none" }}
                        />
                     </div>
                     <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                        <label style={{ color: "#0F6990", width: "100px" }}>
                           From
                        </label>
                        <input
                           className="inputBox shadow "
                           type="text"
                           name="intern_from"
                           value={intern.intern_from || ""}
                           disabled
                           style={{ fontSize: "15px", border: "none" }}
                        />
                     </div>
                  </form>
               </div>
               {/* next section  */}
               <div className="col-md-6 col-lg-5">
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Company Name
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="intern_company_name"
                        value={intern.intern_company_name || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        To
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="intern_to"
                        value={intern.intern_to || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </div>
            </div>
         ))}

         {/* Work Details */}
         <h4 className=" mt-4">
            <span style={{ color: "#0F6990" }}>Work </span>Details
         </h4>
         {userData.work_experience?.map((work) => (
            <div
               className="d-flex p-4 row p-3 "
               style={{ backgroundColor: "" }}
            >
               <div className="col-md-6 col-lg-5">
                  {/* input section */}

                  <form action="">
                     {/* name */}
                     <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                        <label style={{ color: "#0F6990", width: "100px" }}>
                           Position
                        </label>
                        <input
                           className="inputBox shadow "
                           type="text"
                           name="work_position"
                           value={work.work_position || ""}
                           disabled
                           style={{ fontSize: "15px", border: "none" }}
                        />
                     </div>
                     <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                        <label style={{ color: "#0F6990", width: "100px" }}>
                           From
                        </label>
                        <input
                           className="inputBox shadow "
                           type="text"
                           name="work_from"
                           value={work.work_from || ""}
                           disabled
                           style={{ fontSize: "15px", border: "none" }}
                        />
                     </div>
                  </form>
               </div>
               {/* next section  */}
               <div className="col-md-6 col-lg-5">
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Company Name
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="work_company_name"
                        value={work.work_company_name || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        To
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="work_to"
                        value={work.work_to || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </div>
            </div>
         ))}

         {/* Preferences */}
         <h2 className="" style={{}}>
            Preferences
         </h2>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Preferred course
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="preferred_course"
                        value={userData.preferred_course || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     preferred Country
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="preferred_country"
                     value={userData.preferred_country || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>

         {/* Additional Details */}
         <h2 className="mt-4" style={{}}>
            Additional Details
         </h2>
         <div className="d-flex p-4 row p-3 " style={{ backgroundColor: "" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#0F6990", width: "100px" }}>
                        Intake
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="intake"
                        value={userData.intake || ""}
                        disabled
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
               </form>
            </div>
            {/* next section  */}
            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label style={{ color: "#0F6990", width: "100px" }}>
                     Year of study
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="year_of_study"
                     value={userData.year_of_study || ""}
                     disabled
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
