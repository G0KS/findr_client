import bg1 from "../../assets/bg-1.svg";
import bg2 from "../../assets/bg-2.svg";
import next from "../../assets/chevron-double-right.svg";
import remove from "../../assets/Delete.svg";
import check from "../../assets/check.svg";
import downArrow from "../../assets/down.svg";

import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFrappeGetDoc, useFrappeUpdateDoc } from "frappe-react-sdk";
import { updatedProfileContext } from "../../context/ContextShare";
import { templateData } from "../../constants/global";

function UpdateProfile({ setShow, setSidebarShow }) {
   document.title = "Profile update | Findr";
   const navigate = useNavigate();
   const email = JSON.parse(localStorage.getItem("findrData"))?.email;
   const name = JSON.parse(localStorage.getItem("findrData"))?.name;
   const c_id = JSON.parse(localStorage.getItem("findrData"))?.c_id;
   const { updatedData, setUpdatedData } = useContext(updatedProfileContext);

   const { data, isLoading } = useFrappeGetDoc("Student", c_id);

   useEffect(() => {
      setShow(true);
      setSidebarShow(false);
      if (!name) {
         toast.warning("Please login");
         navigate("/login");
      }
   }, []);

   useEffect(() => {
      if (!isLoading) if (data.profile_updated == 1) navigate("/payment");
   }, [data]);

   const [currentIndex, setCurrentIndex] = useState(0);
   const [component, setComponent] = useState(<></>);

   const { updateDoc } = useFrappeUpdateDoc();

   const handleNext = () => {
      setCurrentIndex(currentIndex + 1);
   };

   const handleBack = () => {
      setCurrentIndex(currentIndex - 1);
   };

   useEffect(() => {
      if (currentIndex == 0) {
         setComponent(<EducationForm />);
         window.scrollTo(0, 0);
      } else if (currentIndex == 1) {
         setComponent(<LanguageForm />);
         window.scrollTo(0, 0);
      } else if (currentIndex == 2) {
         setComponent(<WorkForm />);
         window.scrollTo(0, 0);
      } else if (currentIndex == 3) {
         setComponent(<AdditionalForm />);
         window.scrollTo(0, 0);
      } else {
         setCurrentIndex(0);
         window.scrollTo(0, 0);
      }
   }, [currentIndex]);

   const handleSubmit = async (e, updatedData) => {
      e.preventDefault();
      const {
         tenth_institution,
         tenth_marks,
         tenth_state,
         tenth_year,
         tenth_mode_of_study,
         tenth_board_of_study,
         twelfth_course,
         twelfth_institution,
         twelfth_marks,
         twelfth_year,
         twelfth_pursuing,
         twelfth_mode_of_study,
         findr_choose,
         education_program,
         preferred_country,
         preferred_course,
         date_of_birth,
      } = updatedData;

      const updateProfile = () => {
         updateDoc("Student", c_id, { ...updatedData })
            .then(() => {
               toast.success("Profile details updated");
               setUpdatedData(templateData);
               navigate("/payment");
            })
            .catch((err) => {
               console.log(err);
               toast.warning("Some internal errors. Please try again later");
            });
      };

      if (findr_choose == "0") {
         if (
            (tenth_institution == "") |
            (tenth_marks == "") |
            (tenth_state == "") |
            (tenth_year == "") |
            (tenth_board_of_study == "") |
            (tenth_mode_of_study == "") |
            (twelfth_course == "") |
            (twelfth_institution == "") |
            (twelfth_marks == "") |
            (twelfth_mode_of_study == "") |
            (twelfth_pursuing == "") |
            (twelfth_year == "") |
            (date_of_birth == "") |
            (preferred_country == "") |
            (preferred_course == "") |
            (education_program == "")
         ) {
            toast.warning("Fill all mandatory details");
         } else {
            updateProfile();
         }
      } else {
         if (
            (tenth_institution == "") |
            (tenth_marks == "") |
            (tenth_state == "") |
            (tenth_year == "") |
            (tenth_board_of_study == "") |
            (tenth_mode_of_study == "") |
            (twelfth_course == "") |
            (twelfth_institution == "") |
            (twelfth_marks == "") |
            (twelfth_mode_of_study == "") |
            (twelfth_pursuing == "") |
            (twelfth_year == "") |
            (date_of_birth == "") |
            (education_program == "")
         ) {
            toast.warning("Fill all mandatory details");
         } else {
            updateProfile();
         }
      }
   };

   return (
      <section style={{ position: "relative" }}>
         <img
            style={{
               position: "absolute",
               width: "100%",
               zIndex: "-10",
            }}
            src={bg1}
            alt="bg1"
            className="d-lg-block"
         />
         <img
            src={bg2}
            alt="bg2"
            style={{
               position: "absolute",
               bottom: "0",
               right: "0",
               width: "100%",
               zIndex: "-10",
            }}
            className=" d-lg-block"
         />
         <div style={{ paddingBlock: "95px" }} className="container ms-auto">
            <div className="d-flex justify-content-center align-items-center  ">
               <h2 className="" style={{ marginBottom: "0" }}>
                  Complete Your Profile{" "}
               </h2>
            </div>
            <div
               className="formContainer"
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <div
                  className="shadow rounded mt-4"
                  style={{
                     width: "960px",
                     backgroundColor: "#fafafa",
                  }}
               >
                  <div className="my-5">{component}</div>
               </div>
            </div>
            <div className="formButtons d-flex justify-content-center p-5">
               <button
                  className="me-3 btn btn-outline-dark"
                  onClick={handleBack}
                  disabled={currentIndex == 0}
               >
                  Back
               </button>
               {currentIndex < 3 ? (
                  <button
                     className="btn text-light"
                     style={{ backgroundColor: "#0f6990" }}
                     onClick={handleNext}
                  >
                     Next
                     <img
                        className="ms-1"
                        style={{ width: "15px" }}
                        src={next}
                        alt=""
                     />
                  </button>
               ) : (
                  <button
                     className="btn text-light"
                     style={{ backgroundColor: "#2e7d32" }}
                     onClick={(e) => handleSubmit(e, updatedData)}
                  >
                     Submit
                     <img
                        className="ms-1"
                        style={{ width: "15px" }}
                        src={check}
                        alt=""
                     />
                  </button>
               )}
            </div>
         </div>
      </section>
   );
}

export default UpdateProfile;

function EducationForm() {
   const { updatedData, setUpdatedData } = useContext(updatedProfileContext);
   const [additionalCourse, setAdditionalCourse] = useState({
      currently_studying: "",
      course: "",
      level_of_study: "",
      university: "",
      institution: "",
      year_of_passing: "",
      mark: "",
      mode_of_study: "",
   });

   const getFormData = (e) => {
      const { name, value } = e.target;
      setUpdatedData({ ...updatedData, [name]: value });
   };

   const getAdditionalCourse = (e) => {
      const { name, value } = e.target;
      setAdditionalCourse({ ...additionalCourse, [name]: value });
   };

   const addAdditionalCourse = () => {
      if (
         !additionalCourse.course ||
         !additionalCourse.currently_studying ||
         !additionalCourse.institution ||
         !additionalCourse.level_of_study ||
         !additionalCourse.mark ||
         !additionalCourse.mark ||
         !additionalCourse.mode_of_study ||
         !additionalCourse.university ||
         !additionalCourse.year_of_passing
      ) {
         toast.warning(
            "Please fill all the details about additional qualification"
         );
      } else {
         const additionalCourseArray = updatedData.additional_course;
         additionalCourseArray.push(additionalCourse);
         setUpdatedData({
            ...updatedData,
            additional_course: additionalCourseArray,
         });
         setAdditionalCourse({
            currently_studying: "",
            course: "",
            level_of_study: "",
            university: "",
            institution: "",
            year_of_passing: "",
            mark: "",
            mode_of_study: "",
         });
      }
   };

   const removeAddedCourse = (index) => {
      updatedData.additional_course.splice(index, 1);
      const additionalCourseArray = updatedData.additional_course;
      setUpdatedData({
         ...updatedData,
         additional_course: additionalCourseArray,
      });
   };

   const toggle = (elementId) => {
      const container = document.getElementById(elementId);
      if (container.classList.contains("show"))
         container.classList.remove("show");
      else container.classList.add("show");
   };

   return (
      <div className="educationContainer p-lg-5">
         <h3
            className="d-flex justify-content-center fw-bold"
            style={{ color: "#0f6990" }}
         >
            Education Info
         </h3>

         {/* Tenth */}
         <div className="tenth">
            <h4 className="p-4 pb-0">
               <span style={{ color: "#0f6990" }}>Tenth </span>
               Qualification
            </h4>
            <div className="row p-4 d-flex">
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2 "
                     style={{ fontSize: "17px" }}
                  >
                     Institution<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox"
                     type="text"
                     name="tenth_institution"
                     value={updatedData.tenth_institution}
                     onChange={(e) => getFormData(e)}
                     placeholder="Enter Institution"
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Marks<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="CGPA/Percentage "
                     type="text"
                     name="tenth_marks"
                     value={updatedData.tenth_marks}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               {/* new update */}
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Board Of Study<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter Board Of Study"
                     type="text"
                     name="tenth_board_of_study"
                     value={updatedData.tenth_board_of_study}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     State<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter State"
                     type="text"
                     name="tenth_state"
                     value={updatedData.tenth_state}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Year of passing<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter Year of passing"
                     type="text"
                     name="tenth_year"
                     value={updatedData.tenth_year}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Mode Of Study<span className="text-danger">*</span>
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor "
                           type="radio"
                           id="fulltime"
                           name="tenth_mode_of_study"
                           checked={
                              updatedData.tenth_mode_of_study === "Full Time"
                           }
                           value="Full Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="fulltime">
                           Full time
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="parttime"
                           name="tenth_mode_of_study"
                           checked={
                              updatedData.tenth_mode_of_study === "Part Time"
                           }
                           value="Part Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="parttime">
                           Part time
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="tenthDistance"
                           name="tenth_mode_of_study"
                           checked={
                              updatedData.tenth_mode_of_study ===
                              "Distance / Online"
                           }
                           value="Distance / Online"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="tenthDistance">
                           Distance
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Twelfth */}
         <div className="twelfth">
            <h4 className="p-4 pb-0">
               <span style={{ color: "#0f6990" }}>Twelfth </span>
               Qualification
            </h4>

            <div className="row p-4 d-flex">
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Stream name<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Stream name"
                     name="twelfth_stream"
                     value={updatedData.twelfth_stream}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Board Of Study<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter Board Of Study"
                     type="text"
                     name="twelfth_board_of_study"
                     value={updatedData.twelfth_board_of_study}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     State<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter State"
                     type="text"
                     name="twelfth_state"
                     value={updatedData.twelfth_state}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Institution<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Institution"
                     name="twelfth_institution"
                     value={updatedData.twelfth_institution}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Currently studying?<span className="text-danger">*</span>
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="twelfthPursuingY"
                           name="twelfth_pursuing"
                           value="1"
                           checked={updatedData.twelfth_pursuing === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label
                           className="ps-2 cursor"
                           htmlFor="twelfthPursuingY"
                        >
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="twelfthPursuingN"
                           name="twelfth_pursuing"
                           value="0"
                           checked={updatedData.twelfth_pursuing === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label
                           className="ps-2 cursor"
                           htmlFor="twelfthPursuingN"
                        >
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     {updatedData.twelfth_pursuing === "0" ? (
                        <>
                           Marks<span className="text-danger">*</span>
                        </>
                     ) : (
                        <>
                           {" "}
                           Expected Marks<span className="text-danger">*</span>
                        </>
                     )}
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="CGPA / Percentage"
                     name="twelfth_marks"
                     value={updatedData.twelfth_marks}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Year of passing<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Year of passing"
                     name="twelfth_year"
                     value={updatedData.twelfth_year}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Mode Of Study<span className="text-danger">*</span>
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="twelfthFulltime"
                           name="twelfth_mode_of_study"
                           checked={
                              updatedData.twelfth_mode_of_study === "Full Time"
                           }
                           value="Full Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label
                           className="ps-2 cursor"
                           htmlFor="twelfthFulltime"
                        >
                           Full time
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="twelfthParttime"
                           name="twelfth_mode_of_study"
                           checked={
                              updatedData.twelfth_mode_of_study === "Part Time"
                           }
                           value="Part Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label
                           className="ps-2 cursor"
                           htmlFor="twelfthParttime"
                        >
                           Part time
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="twelfthDistance"
                           name="twelfth_mode_of_study"
                           checked={
                              updatedData.twelfth_mode_of_study ===
                              "Distance / Online"
                           }
                           value="Distance / Online"
                           onChange={(e) => getFormData(e)}
                        />
                        <label
                           className="ps-2 cursor"
                           htmlFor="twelfthDistance"
                        >
                           Distance
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* UG */}
         <div className="undergraduate">
            <div
               className="d-flex justify-content-between align-items-center cursor"
               onClick={() => toggle("underGradContainer")}
            >
               <h4 className="p-4 pb-0">
                  <span style={{ color: "#0f6990" }}>Undergraduate </span>
                  Qualification
               </h4>
               <img src={downArrow} alt="" className="me-5" />
            </div>
            <div className="row p-4 d-flex answer" id="underGradContainer">
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Course name
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Course name"
                     name="undergraduate_course"
                     value={updatedData.undergraduate_course}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     University
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter university name"
                     name="undergraduate_university"
                     value={updatedData.undergraduate_university}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Institution
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Institution"
                     name="undergraduate_institution"
                     value={updatedData.undergraduate_institution}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     State
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter State"
                     name="undergraduate_state"
                     value={updatedData.undergraduate_state}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Currently studying?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="ugPursuingY"
                           name="undergraduate_currently_studying"
                           value="1"
                           checked={
                              updatedData.undergraduate_currently_studying ===
                              "1"
                           }
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="ugPursuingY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="ugPursuingN"
                           name="undergraduate_currently_studying"
                           value="0"
                           checked={
                              updatedData.undergraduate_currently_studying ===
                              "0"
                           }
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="ugPursuingN">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     {updatedData.undergraduate_currently_studying === "0" ? (
                        <>Marks</>
                     ) : (
                        <>Expected marks</>
                     )}
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="CGPA / Percentage"
                     name="undergraduate_marks"
                     value={updatedData.undergraduate_marks}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Year of passing
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Year of passing"
                     name="undergraduate_year"
                     value={updatedData.undergraduate_year}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Mode Of Study
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="ugFulltime"
                           name="undergraduate_mode_of_study"
                           checked={
                              updatedData.undergraduate_mode_of_study ===
                              "Full Time"
                           }
                           value="Full Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="ugFulltime">
                           Full time
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="ugPartTime"
                           name="undergraduate_mode_of_study"
                           checked={
                              updatedData.undergraduate_mode_of_study ===
                              "Part Time"
                           }
                           value="Part Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="ugPartTime">
                           Part time
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="ugDistance"
                           name="undergraduate_mode_of_study"
                           checked={
                              updatedData.undergraduate_mode_of_study ===
                              "Distance / Online"
                           }
                           value="Distance / Online"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="ugDistance">
                           Distance
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* PG */}
         <div className="postgraduate">
            <div
               className="d-flex justify-content-between align-items-center cursor"
               onClick={() => toggle("postGradContainer")}
            >
               <h4 className="p-4 pb-0">
                  <span style={{ color: "#0f6990" }}>Postgraduate </span>
                  Qualification
               </h4>
               <img src={downArrow} alt="" className="me-5" />
            </div>
            <div className="row p-4 d-flex answer" id="postGradContainer">
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Course name
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Course name"
                     name="postgraduate_course"
                     value={updatedData.postgraduate_course}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     University
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter university name"
                     name="postgraduate_university"
                     value={updatedData.postgraduate_university}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Institution
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Institution "
                     name="postgraduate_institution"
                     value={updatedData.postgraduate_institution}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     State
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter State"
                     name="postgraduate_state"
                     value={updatedData.postgraduate_state}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Currently studying?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="pgPursuingY"
                           name="postgraduate_currently_studying"
                           value="1"
                           checked={
                              updatedData.postgraduate_currently_studying ===
                              "1"
                           }
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="pgPursuingY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="pgPursuingN"
                           name="postgraduate_currently_studying"
                           value="0"
                           checked={
                              updatedData.postgraduate_currently_studying ===
                              "0"
                           }
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="pgPursuingN">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     {updatedData.postgraduate_currently_studying === "0" ? (
                        <>Marks</>
                     ) : (
                        <>Expected Marks</>
                     )}
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="CGPA / Percentage"
                     name="postgraduate_marks"
                     value={updatedData.postgraduate_marks}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Year of passing
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Year of passing"
                     name="postgraduate_year"
                     value={updatedData.postgraduate_year}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Mode Of Study
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="pgFulltime"
                           name="postgraduate_mode_of_study"
                           checked={
                              updatedData.postgraduate_mode_of_study ===
                              "Full Time"
                           }
                           value="Full Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="pgFulltime">
                           Full time
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="pgParttime"
                           name="postgraduate_mode_of_study"
                           checked={
                              updatedData.postgraduate_mode_of_study ===
                              "Part Time"
                           }
                           value="Part Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="pgParttime">
                           Part time
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="pgDistance"
                           name="postgraduate_mode_of_study"
                           checked={
                              updatedData.postgraduate_mode_of_study ===
                              "Distance / Online"
                           }
                           value="Distance / Online"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="pgDistance">
                           Distance
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* PhD */}
         <div className="phd">
            <div
               className="d-flex justify-content-between align-items-center cursor"
               onClick={() => toggle("phdContainer")}
            >
               <h4 className="p-4 mb-0">
                  <span style={{ color: "#0f6990" }}>PhD </span>Qualification
               </h4>
               <img src={downArrow} alt="" className="me-5" />
            </div>
            <div className="row p-4 d-flex answer" id="phdContainer">
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Course name
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Course name"
                     name="phd_course"
                     value={updatedData.phd_course}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     University
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter university name"
                     name="phd_university"
                     value={updatedData.phd_university}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Institution
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Institution"
                     name="phd_institution"
                     value={updatedData.phd_institution}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     State
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter State"
                     name="phd_state"
                     value={updatedData.phd_state}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Currently studying?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="phdPursuingY"
                           name="phd_currently_studying"
                           value="1"
                           checked={updatedData.phd_currently_studying === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="phdPursuingY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="phdPursuingN"
                           name="phd_currently_studying"
                           value="0"
                           checked={updatedData.phd_currently_studying === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="phdPursuingN">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     {updatedData.phd_currently_studying === "0" ? (
                        <>Marks</>
                     ) : (
                        <>Expected Marks</>
                     )}
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="CGPA / Percentage "
                     name="phd_marks"
                     value={updatedData.phd_marks}
                     onChange={(e) => getFormData(e)}
                  />
               </div>

               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Year of passing
                  </label>
                  <input
                     className="profileInputBox "
                     type="text"
                     placeholder="Enter Year of passing"
                     name="phd_year"
                     value={updatedData.phd_year}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Mode Of Study
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="phdFulltime"
                           name="phd_mode_of_study"
                           checked={
                              updatedData.phd_mode_of_study === "Full Time"
                           }
                           value="Full Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="phdFulltime">
                           Full time
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="phdParttime"
                           name="phd_mode_of_study"
                           checked={
                              updatedData.phd_mode_of_study === "Part Time"
                           }
                           value="Part Time"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="phdParttime">
                           Part time
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="phdDistance"
                           name="phd_mode_of_study"
                           checked={
                              updatedData.phd_mode_of_study ===
                              "Distance / Online"
                           }
                           value="Distance / Online"
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="phdDistance">
                           Distance
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Additional Course*/}
         <div className="additionalCourse">
            <div
               className="d-flex justify-content-between align-items-center cursor"
               onClick={() => toggle("additionalContainer")}
            >
               <h4 className="p-4 mb-0">
                  <span style={{ color: "#0f6990" }}>Additional </span>
                  Qualification
               </h4>
               <img src={downArrow} alt="" className="me-5" />
            </div>
            <div className="answer" id="additionalContainer">
               <div className="row p-4 d-flex">
                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Course name
                     </label>
                     <input
                        className="profileInputBox "
                        type="text"
                        placeholder="Enter Course name"
                        name="course"
                        value={additionalCourse.course}
                        onChange={(e) => getAdditionalCourse(e)}
                     />
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        University
                     </label>
                     <input
                        className="profileInputBox "
                        type="text"
                        placeholder="Enter university name"
                        name="university"
                        value={additionalCourse.university}
                        onChange={(e) => getAdditionalCourse(e)}
                     />
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Institution
                     </label>
                     <input
                        className="profileInputBox "
                        type="text"
                        placeholder="Enter Institution"
                        name="institution"
                        value={additionalCourse.institution}
                        onChange={(e) => getAdditionalCourse(e)}
                     />
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Level of Study
                     </label>
                     <select
                        className="profileInputBox"
                        name="level_of_study"
                        onChange={(e) => getAdditionalCourse(e)}
                        value={additionalCourse.level_of_study}
                     >
                        <option selected hidden>
                           Choose level of Study
                        </option>
                        <option value="Bachelor's Degree">
                           Bachelor&apos;s Degree
                        </option>
                        <option value="Master's Degree">
                           Master&apos;s Degree
                        </option>
                        <option value="Diploma">Diploma</option>
                        <option value="Vocational Training">
                           Vocational Training
                        </option>
                        <option value="Doctoral Degree">Doctoral Degree</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Currently studying?
                     </label>
                     <div className="fw-bolder d-flex mt-2">
                        <div className="">
                           <input
                              className="cursor"
                              type="radio"
                              id="additionalPursuingY"
                              name="currently_studying"
                              value="1"
                              checked={
                                 additionalCourse.currently_studying === "1"
                              }
                              onChange={(e) => getAdditionalCourse(e)}
                           />
                           <label
                              className="ps-2 cursor"
                              htmlFor="additionalPursuingY"
                           >
                              Yes
                           </label>
                        </div>

                        <div className="ms-5">
                           <input
                              className="cursor"
                              type="radio"
                              id="additionalPursuingN"
                              name="currently_studying"
                              value="0"
                              checked={
                                 additionalCourse.currently_studying === "0"
                              }
                              onChange={(e) => getAdditionalCourse(e)}
                           />
                           <label
                              className="ps-2 cursor"
                              htmlFor="additionalPursuingN"
                           >
                              No
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        {additionalCourse.currently_studying === "0" ? (
                           <>Marks</>
                        ) : (
                           <>Expected Marks</>
                        )}
                     </label>
                     <input
                        className="profileInputBox "
                        type="text"
                        placeholder="CGPA / Percentage "
                        name="mark"
                        value={additionalCourse.mark}
                        onChange={(e) => getAdditionalCourse(e)}
                     />
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Year of passing
                     </label>
                     <input
                        className="profileInputBox "
                        type="text"
                        placeholder="Enter Year of passing"
                        name="year_of_passing"
                        value={additionalCourse.year_of_passing}
                        onChange={(e) => getAdditionalCourse(e)}
                     />
                  </div>

                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Mode Of Study
                     </label>
                     <div className="fw-bolder d-flex mt-2">
                        <div className="">
                           <input
                              className="cursor"
                              type="radio"
                              id="additionalFulltime"
                              name="mode_of_study"
                              checked={
                                 additionalCourse.mode_of_study === "Full Time"
                              }
                              value="Full Time"
                              onChange={(e) => getAdditionalCourse(e)}
                           />
                           <label
                              className="ps-2 cursor"
                              htmlFor="additionalFulltime"
                           >
                              Full time
                           </label>
                        </div>

                        <div className="ms-5">
                           <input
                              className="cursor"
                              type="radio"
                              id="additionalParttime"
                              name="mode_of_study"
                              checked={
                                 additionalCourse.mode_of_study === "Part Time"
                              }
                              value="Part Time"
                              onChange={(e) => getAdditionalCourse(e)}
                           />
                           <label
                              className="ps-2 cursor"
                              htmlFor="additionalParttime"
                           >
                              Part time
                           </label>
                        </div>
                        <div className="ms-5">
                           <input
                              className="cursor"
                              type="radio"
                              id="additionalDistance"
                              name="mode_of_study"
                              checked={
                                 additionalCourse.mode_of_study ===
                                 "Distance / Online"
                              }
                              value="Distance / Online"
                              onChange={(e) => getAdditionalCourse(e)}
                           />
                           <label
                              className="ps-2 cursor"
                              htmlFor="additionalDistance"
                           >
                              Distance
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="formButtons d-flex justify-content-center p-4">
                     <button
                        className="btn text-light"
                        style={{ backgroundColor: "#0f6990" }}
                        onClick={() => addAdditionalCourse()}
                     >
                        Add
                     </button>
                  </div>

                  {updatedData.additional_course.length > 0 && (
                     <div className="d-flex flex-wrap gap-4 px-4 py-5">
                        {updatedData.additional_course.map(
                           (addedCourse, index) => (
                              <div
                                 className="d-flex gap-4 addFormCard"
                                 key={index}
                              >
                                 <div className="shadow rounded p-3 w-100">
                                    <p
                                       className="mb-0"
                                       style={{ color: "#0f6990" }}
                                    >
                                       {addedCourse.course}
                                    </p>
                                    <p className="mb-0">
                                       {addedCourse.level_of_study}
                                    </p>
                                 </div>
                                 <div className="my-auto cursor">
                                    <img
                                       src={remove}
                                       alt=""
                                       onClick={() => removeAddedCourse(index)}
                                    />
                                 </div>
                              </div>
                           )
                        )}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

function LanguageForm() {
   const { updatedData, setUpdatedData } = useContext(updatedProfileContext);
   const [languageData, setLanguageData] = useState({
      language: "",
      certificate: "",
   });

   const getFormData = (e) => {
      const { name, value } = e.target;
      setUpdatedData({ ...updatedData, [name]: value });
   };

   const getLanguage = (e) => {
      const { name, value } = e.target;
      setLanguageData({ ...languageData, [name]: value });
   };

   const addLanguage = () => {
      if (!languageData.certificate | !languageData.language) {
         toast.warning("Please fill language details properly");
      } else {
         const languageArray = updatedData.language_proficiency;
         languageArray.push(languageData);
         setUpdatedData({
            ...updatedData,
            language_proficiency: languageArray,
         });
         setLanguageData({ language: "", certificate: "" });
      }
   };

   const remvoveLanguage = (i) => {
      updatedData.language_proficiency.splice(i, 1);
      const languageArray = updatedData.language_proficiency;
      setUpdatedData({ ...updatedData, language_proficiency: languageArray });
   };
   return (
      <div className="languageContainer p-4 p-lg-5">
         <div className="languageForm px-4">
            <h3
               className="d-flex justify-content-center fw-bold mb-5"
               style={{ color: "#0f6990" }}
            >
               Language Proficiency
            </h3>
            <div className=" fw-bolder">
               <div>
                  <p style={{ fontSize: "17px" }}>
                     Do you have good communication skill in English?
                  </p>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ1Y"
                           name="english_skill"
                           value="1"
                           checked={updatedData.english_skill === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ1Y">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ1N"
                           name="english_skill"
                           value="0"
                           checked={updatedData.english_skill === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ1N">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               <div className="mt-4">
                  <p style={{ fontSize: "17px" }}>
                     Are you comfortable spending few months in learning a new
                     language?
                  </p>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ2Y"
                           name="new_language"
                           value="1"
                           checked={updatedData.new_language === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ2Y">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ2N"
                           name="new_language"
                           value="0"
                           checked={updatedData.new_language === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ2N">
                           No
                        </label>
                     </div>
                  </div>
               </div>
               <div className="mt-4">
                  <p style={{ fontSize: "17px" }}>
                     Have you got any language Certifications?
                  </p>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ3Y"
                           name="proficiency_in_language"
                           value="1"
                           checked={updatedData.proficiency_in_language === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ3Y">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="languageQ3N"
                           name="proficiency_in_language"
                           value="0"
                           checked={updatedData.proficiency_in_language === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="languageQ3N">
                           No
                        </label>
                     </div>
                  </div>
               </div>

               {updatedData.proficiency_in_language === "1" && (
                  <div>
                     <div className="row">
                        <div className="col mt-5 ">
                           <label
                              htmlFor=""
                              className="d-block fw-bolder mb-2"
                              style={{ fontSize: "17px" }}
                           >
                              Which language?
                           </label>
                           <input
                              className="profileInputBox "
                              placeholder="Enter Language"
                              type="text"
                              name="language"
                              onChange={(e) => getLanguage(e)}
                              value={languageData.language}
                           />
                        </div>
                        <div className="col mt-5  ">
                           <label
                              htmlFor=""
                              className="fw-bolder mb-2"
                              style={{ fontSize: "17px" }}
                           >
                              Which certificate?
                           </label>

                           <input
                              className="profileInputBox  "
                              placeholder="Certificate Name ( Level of proficiency )"
                              type="text"
                              name="certificate"
                              onChange={(e) => getLanguage(e)}
                              value={languageData.certificate}
                           />
                        </div>
                     </div>
                     <div className="formButtons d-flex justify-content-center my-5">
                        <button
                           className="btn text-light"
                           style={{ backgroundColor: "#0f6990" }}
                           onClick={addLanguage}
                        >
                           Add{" "}
                        </button>
                     </div>
                  </div>
               )}
            </div>

            {/* Added Language */}
            <div className="d-flex flex-wrap gap-4 py-3">
               {updatedData.language_proficiency.map((language, index) => (
                  <div className="d-flex gap-4 addFormCard" key={index}>
                     <div className="shadow rounded p-3 w-100">
                        <p className="mb-0" style={{ color: "#0f6990" }}>
                           {language.language}
                        </p>
                     </div>
                     <div className="my-auto cursor">
                        <img
                           src={remove}
                           alt=""
                           onClick={() => remvoveLanguage(index)}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="preferenceForm px-2">
            <h3
               className="d-flex justify-content-center fw-bolder"
               style={{ color: "#0f6990" }}
            >
               Preferences
            </h3>

            <div className="mt-4 fw-bolder p-2">
               <p style={{ fontSize: "17px" }}>
                  What type of course are you interested in? Please select from
                  the following options
               </p>

               <div className="row p-2">
                  <div className="col" style={{ marginTop: "33px" }}>
                     <select
                        className="profileInputBox"
                        name="education_program"
                        onChange={(e) => getFormData(e)}
                     >
                        <option selected hidden>
                           Choose your course
                        </option>
                        <option value="Bachelor's Degree">
                           Bachelor&apos;s Degree
                        </option>
                        <option value="Master's Degree">
                           Master&apos;s Degree
                        </option>
                        <option value="Diploma">Diploma</option>
                        <option value="Vocational Training">
                           Vocational Training
                        </option>
                        <option value="Doctoral Degree">Doctoral Degree</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
                  {updatedData.education_program == "Other" ? (
                     <div className="col">
                        <label
                           htmlFor=""
                           className="mb-2 d-block"
                           style={{ fontSize: "17px" }}
                        >
                           Other
                           <span className="text-danger">*</span>
                        </label>
                        <input
                           className="profileInputBox"
                           placeholder="Enter other Intrested courses"
                           type="text"
                           name="other_program"
                           onChange={(e) => getFormData(e)}
                        />
                     </div>
                  ) : (
                     ""
                  )}
               </div>
            </div>

            {/* That qustion answers */}

            <div className="fw-bolder borderStyle mt-4">
               <div className="p-3">
                  <p style={{ fontSize: "17px" }}>
                     Let Findr choose the best course and country for you?
                     <span className="text-danger">*</span>
                  </p>
                  <div className=" d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="findrChooseY"
                           name="findr_choose"
                           value="1"
                           checked={updatedData.findr_choose == "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="findrChooseY">
                           Yes
                        </label>
                     </div>
                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="findrChooseN"
                           name="findr_choose"
                           value="0"
                           checked={updatedData.findr_choose === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="findrChooseN">
                           No
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            {updatedData.findr_choose === "0" && (
               <div className="row">
                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Preferred Course/field
                        <span className="text-danger">*</span>
                     </label>
                     <input
                        className="profileInputBox "
                        placeholder="Course Name"
                        type="text"
                        name="preferred_course"
                        value={updatedData.preferred_course}
                        onChange={(e) => getFormData(e)}
                     />
                  </div>
                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Preferred Country<span className="text-danger">*</span>
                     </label>
                     <input
                        className="profileInputBox "
                        placeholder="Country Name"
                        type="text"
                        name="preferred_country"
                        value={updatedData.preferred_country}
                        onChange={(e) => getFormData(e)}
                     />
                  </div>
               </div>
            )}

            <div className="row">
               <div className="col mt-5 ">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Intake<span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter Intake"
                     type="text"
                     name="intake"
                     value={updatedData.intake}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5  ">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2 d-block"
                     style={{ fontSize: "17px" }}
                  >
                     Preferred year of study
                     <span className="text-danger">*</span>
                  </label>
                  <input
                     className="profileInputBox  "
                     placeholder="Enter Year Of Study"
                     type="text"
                     name="year_of_study"
                     value={updatedData.year_of_study}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
            </div>

            <div className="row">
               <div className="col mt-5 ">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     What is your budget including the flight ticket?
                  </label>
                  <input
                     className="profileInputBox "
                     placeholder="Enter Budget"
                     type="text"
                     name="budget"
                     value={updatedData.budget}
                     onChange={(e) => getFormData(e)}
                  />
               </div>
               <div className="col mt-5  ">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Do you wish to Avail Scholarship?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           className="cursor"
                           type="radio"
                           id="scholarshipY"
                           name="availing_scholarship"
                           value="1"
                           checked={updatedData.availing_scholarship === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="scholarshipY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           className="cursor"
                           type="radio"
                           id="scholarshipN"
                           name="availing_scholarship"
                           value="0"
                           checked={updatedData.availing_scholarship === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor " htmlFor="scholarshipN">
                           No
                        </label>
                     </div>
                  </div>
               </div>
            </div>

            {updatedData.availing_scholarship == "1" && (
               <div className="row">
                  <div className="col mt-5 ">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Religion
                     </label>
                     <input
                        className="profileInputBox "
                        placeholder="Enter Religion"
                        type="text"
                        name="religion"
                        value={updatedData.religion}
                        onChange={(e) => getFormData(e)}
                     />
                     <p
                        className="mt-2 "
                        style={{ color: "gray", fontSize: "14px" }}
                     >
                        *Due to Reservation and Scholarships
                     </p>
                  </div>
                  <div className="col mt-5">
                     <label
                        htmlFor=""
                        className="d-block fw-bolder mb-2"
                        style={{ fontSize: "17px" }}
                     >
                        Caste
                     </label>
                     <input
                        className="profileInputBox  "
                        placeholder="Enter Caste"
                        type="text"
                        name="caste"
                        value={updatedData.caste}
                        onChange={(e) => getFormData(e)}
                     />
                     <p
                        className="mt-2 "
                        style={{ color: "gray", fontSize: "14px" }}
                     >
                        *Due to Reservation and Scholarships
                     </p>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

function WorkForm() {
   const { updatedData, setUpdatedData } = useContext(updatedProfileContext);
   const [internData, setInternData] = useState({
      intern_position: "",
      intern_company_name: "",
      intern_to: "",
      intern_from: "",
   });
   const [workData, setWorkData] = useState({
      work_position: "",
      work_company_name: "",
      work_to: "",
      work_from: "",
   });

   const getInternData = (e) => {
      const { name, value } = e.target;
      setInternData({ ...internData, [name]: value });
   };

   const addIntern = () => {
      if (
         !internData.intern_position ||
         !internData.intern_company_name ||
         !internData.intern_from ||
         !internData.intern_to
      ) {
         toast.warning("Add Intern details properly");
      } else {
         const internArray = updatedData.internship_details;
         internArray.push(internData);
         setUpdatedData({ ...updatedData, internship_details: internArray });
         setInternData({
            intern_position: "",
            intern_company_name: "",
            intern_to: "",
            intern_from: "",
         });
      }
   };

   const removeIntern = (i) => {
      updatedData.internship_details.splice(i, 1);
      const internArray = updatedData.internship_details;
      setUpdatedData({ ...updatedData, internship_details: internArray });
   };

   const getWorkData = (e) => {
      const { name, value } = e.target;
      setWorkData({ ...workData, [name]: value });
   };

   const addWork = () => {
      if (
         !workData.work_position ||
         !workData.work_company_name ||
         !workData.work_from ||
         !workData.work_to
      ) {
         toast.warning("Add Work details properly");
      } else {
         const workArray = updatedData.work_experience;
         workArray.push(workData);
         setUpdatedData({ ...updatedData, work_experience: workArray });
         setWorkData({
            work_position: "",
            work_company_name: "",
            work_to: "",
            work_from: "",
         });
      }
   };

   const removeWork = (i) => {
      updatedData.work_experience.splice(i, 1);
      const workArray = updatedData.work_experience;
      setUpdatedData({ ...updatedData, work_experience: workArray });
   };

   return (
      <div className="p-lg-5">
         <h3
            className="d-flex justify-content-center fw-bolder mb-5"
            style={{ color: "#0f6990" }}
         >
            Work Experience
         </h3>

         <h4 className="ms-4">
            <p style={{ color: "#0f6990" }}>Internship Details</p>
         </h4>

         <div className="row p-4">
            <div className="col mt-5">
               <label htmlFor="" className="d-block fw-bolder mb-2">
                  Position
               </label>
               <input
                  className="profileInputBox "
                  placeholder="Position(Job Role)"
                  type="text"
                  name="intern_position"
                  onChange={(e) => getInternData(e)}
                  value={internData.intern_position}
               />
            </div>
            <div className="col mt-5">
               <label htmlFor="" className="d-block fw-bolder mb-2">
                  Company Name
               </label>
               <input
                  className="profileInputBox "
                  type="text"
                  placeholder="Company Name"
                  name="intern_company_name"
                  onChange={(e) => getInternData(e)}
                  value={internData.intern_company_name}
               />
            </div>
            <div className="col mt-5">
               <label htmlFor="" className="d-block fw-bolder mb-2">
                  From
               </label>
               <input
                  className="profileInputBox "
                  type="date"
                  name="intern_from"
                  onChange={(e) => getInternData(e)}
                  value={internData.intern_from}
               />
            </div>
            <div className="col mt-5">
               <label htmlFor="" className="d-block fw-bolder mb-2">
                  To
               </label>
               <input
                  className="profileInputBox "
                  type="date"
                  name="intern_to"
                  onChange={(e) => getInternData(e)}
                  value={internData.intern_to}
               />
            </div>
         </div>

         <div className="formButtons d-flex justify-content-center p-4">
            <button
               className="btn text-light"
               style={{ backgroundColor: "#0f6990" }}
               onClick={() => addIntern()}
            >
               Add
            </button>
         </div>

         {/* Added Internship */}
         <div className="d-flex flex-wrap gap-4 px-4 py-5">
            {updatedData.internship_details.map((intern, i) => (
               <div className="d-flex gap-4 addFormCard" key={i}>
                  <div className="shadow rounded p-3 w-100">
                     <p className="mb-0" style={{ color: "#0f6990" }}>
                        {intern.intern_position}
                     </p>
                     <p className="mb-0">{intern.intern_company_name}</p>
                  </div>
                  <div className="my-auto cursor">
                     <img src={remove} alt="" onClick={() => removeIntern(i)} />
                  </div>
               </div>
            ))}
         </div>

         <h4 className="ms-4">
            <p style={{ color: "#0f6990" }}>Work Details</p>
         </h4>

         <div className="row p-4 d-flex">
            <div className="col mt-5">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  Position
               </label>
               <input
                  className="profileInputBox "
                  placeholder="Position(Job Role)"
                  type="text"
                  name="work_position"
                  onChange={(e) => getWorkData(e)}
                  value={workData.work_position}
               />
            </div>
            <div className="col mt-5">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  Company Name
               </label>
               <input
                  className="profileInputBox "
                  type="text"
                  placeholder="Company Name"
                  name="work_company_name"
                  onChange={(e) => getWorkData(e)}
                  value={workData.work_company_name}
               />
            </div>
            <div className="col mt-5">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  From
               </label>
               <input
                  className="profileInputBox "
                  type="date"
                  name="work_from"
                  onChange={(e) => getWorkData(e)}
                  value={workData.work_from}
               />
            </div>
            <div className="col mt-5">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  To
               </label>
               <input
                  className="profileInputBox "
                  type="date"
                  name="work_to"
                  onChange={(e) => getWorkData(e)}
                  value={workData.work_to}
               />
            </div>
         </div>

         <div className="formButtons d-flex justify-content-center p-4">
            <button
               className="btn text-light"
               style={{ backgroundColor: "#0f6990" }}
               onClick={() => addWork()}
            >
               Add
            </button>
         </div>

         {/* Added Work */}
         <div className="d-flex flex-wrap gap-4 px-4 py-5">
            {updatedData.work_experience.map((work, i) => (
               <div className="d-flex gap-4 addFormCard" key={i}>
                  <div className="shadow rounded p-3 w-100">
                     <p className="mb-0" style={{ color: "#0f6990" }}>
                        {work.work_position}
                     </p>
                     <p className="mb-0">{work.work_company_name}</p>
                  </div>
                  <div className="my-auto cursor">
                     <img src={remove} alt="" onClick={() => removeWork(i)} />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function AdditionalForm() {
   const { updatedData, setUpdatedData } = useContext(updatedProfileContext);

   useEffect(() => {
      if (updatedData.other_program != "")
         setUpdatedData({
            ...updatedData,
            education_program: updatedData.other_program,
         });

      setUpdatedData({ ...updatedData, profile_updated: 1 });
   }, []);

   const getFormData = (e) => {
      const { name, value } = e.target;
      setUpdatedData({ ...updatedData, [name]: value });
   };

   return (
      <div className="additionalForm p-4 p-lg-5">
         <h3
            className="d-flex justify-content-center fw-bolder"
            style={{ color: "#0f6990" }}
         >
            Additional Details
         </h3>

         <div className="row">
            <div className="col mt-5 ">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  Nationality<span className="text-danger">*</span>
               </label>
               <input
                  className="profileInputBox "
                  placeholder="Enter Nationality"
                  type="text"
                  name="nationality"
                  value={updatedData.nationality}
                  onChange={(e) => getFormData(e)}
               />
            </div>

            <div className="col mt-5  ">
               <label
                  htmlFor=""
                  className="fw-bolder mb-2 d-block "
                  style={{ fontSize: "17px" }}
               >
                  Date Of Birth<span className="text-danger">*</span>
               </label>
               <input
                  className="profileInputBox  "
                  placeholder="Enter Date Of Birth"
                  type="date"
                  name="date_of_birth"
                  value={updatedData.date_of_birth}
                  onChange={(e) => getFormData(e)}
               />
            </div>
         </div>

         <div className="row">
            <div className="col mt-5 ">
               <label
                  htmlFor=""
                  className="d-block fw-bolder mb-2"
                  style={{ fontSize: "17px" }}
               >
                  Gender<span className="text-danger">*</span>
               </label>
               <div className="fw-bolder d-flex mt-2 ">
                  <div className="">
                     <input
                        type="radio"
                        className="cursor"
                        id="gender1"
                        name="gender"
                        value="Male"
                        checked={updatedData.gender === "Male"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ps-2 cursor" htmlFor="gender1">
                        Male
                     </label>
                  </div>

                  <div className="ms-5 ">
                     <input
                        className="cursor"
                        type="radio"
                        id="gender2"
                        name="gender"
                        value="Female"
                        checked={updatedData.gender === "Female"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ps-2 cursor" htmlFor="gender2">
                        Female
                     </label>
                  </div>
                  <div className="ms-5">
                     <input
                        className="cursor"
                        type="radio"
                        id="gender3"
                        name="gender"
                        value="Other"
                        checked={updatedData.gender === "Other"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ps-2 cursor" htmlFor="gender3">
                        Other
                     </label>
                  </div>
               </div>
            </div>

            <div className="col mt-5  ">
               <label
                  htmlFor=""
                  className="fw-bolder mb-2 d-block  "
                  style={{ fontSize: "17px" }}
               >
                  Marital status<span className="text-danger">*</span>
               </label>
               <div className="fw-bolder d-flex mt-2">
                  <div className="">
                     <input
                        type="radio"
                        className="cursor"
                        id="mStatus1"
                        name="marital_status"
                        value="Married"
                        checked={updatedData.marital_status === "Married"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ms-2 cursor" htmlFor="mStatus1">
                        Married
                     </label>
                  </div>

                  <div className="ms-5">
                     <input
                        className="cursor"
                        type="radio"
                        id="mStatus2"
                        name="marital_status"
                        value="Single"
                        checked={updatedData.marital_status === "Single"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ps-2 cursor" htmlFor="mStatus2">
                        Single
                     </label>
                  </div>
                  <div className="ms-5">
                     <input
                        className="cursor"
                        type="radio"
                        id="mStatus3"
                        name="marital_status"
                        value="Divorced"
                        checked={updatedData.marital_status === "Divorced"}
                        onChange={(e) => getFormData(e)}
                     />
                     <label className="ps-2 cursor" htmlFor="mStatus3">
                        Divorced
                     </label>
                  </div>
               </div>
            </div>
         </div>

         {/* Marital status */}

         {updatedData.marital_status === "Married" && (
            <div className="row">
               <div className="col-lg-6 col-12 mt-5">
                  <label
                     htmlFor=""
                     className="d-block fw-bolder mb-2"
                     style={{ fontSize: "17px" }}
                  >
                     Do you wish to Apply for a spouse visa ?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           type="radio"
                           className="cursor"
                           id="spouseY"
                           name="availing_spouse_visa"
                           value="1"
                           checked={updatedData.availing_spouse_visa === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ms-2 cursor" htmlFor="spouseY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           type="radio"
                           id="spouseN"
                           className="cursor"
                           name="availing_spouse_visa"
                           value="0"
                           checked={updatedData.availing_spouse_visa === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="spouseN">
                           No
                        </label>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-12 mt-5  ">
                  <label
                     htmlFor=""
                     className="fw-bolder mb-2 d-block "
                     style={{ fontSize: "17px" }}
                  >
                     Do you have kids?
                  </label>
                  <div className="fw-bolder d-flex mt-2">
                     <div className="">
                        <input
                           type="radio"
                           className="cursor"
                           id="kidsY"
                           name="have_kids"
                           value="1"
                           checked={updatedData.have_kids === "1"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="kidsY">
                           Yes
                        </label>
                     </div>

                     <div className="ms-5">
                        <input
                           type="radio"
                           id="kidsN"
                           className="cursor"
                           name="have_kids"
                           value="0"
                           checked={updatedData.have_kids === "0"}
                           onChange={(e) => getFormData(e)}
                        />
                        <label className="ps-2 cursor" htmlFor="kidsN">
                           No
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
