//-------------------------------------
// signup validation
//-------------------------------------
import world from "../../assets/world.svg";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import Logo from "../../assets/f.png";
import submit from "../../assets/submit.svg";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { candidateUpdate, getCandidate } from "../../api/allApi";
import { updatedProfileContext } from "../../context/ContextShare";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateProfile({ setShow, setSliderShow }) {
   setShow(true);
   setSliderShow(true);
   const navigate = useNavigate();
   const email = JSON.parse(localStorage.getItem("findrData")).email;
   const name = JSON.parse(localStorage.getItem("findrData")).name;   

   const cards = [
      {
         id: 1,
         title: "Tenth Qualification",
         institution: "tenth_institution",
         marks: "tenth_marks",
         mode: "tenth_mode_of_study",
      },
      {
         id: 2,
         title: "Twelfth Qualification",
         institution: "twelfth_institution",
         marks: "twelfth_marks",
         mode: "twelfth_mode_of_study",
      },
      {
         id: 3,
         title: "Undergraduate Qualification",
         institution: "undergraduate_institution",
         marks: "undergraduate_marks",
         mode: "undergraduate_mode_of_study",
      },
      {
         id: 4,
         title: "Postgraduate Qualification",
         institution: "postgraduate_institution",
         marks: "postgraduate_marks",
         mode: "postgraduate_mode_of_study",
      },
      {
         id: 5,
         title: "PhD Qualification",
         institution: "phd_institution",
         marks: "phd_marks",
         mode: "phd_mode_of_study",
      },
      {
         id: 6,
         title: "Language Proficiency",
         english: "english_skill",
         new_language: "new_language",
         proficiency: "proficiency_in_language",
         language_proficiency: "language_proficiency",
         language: "language",
         certificate: "certificate",
         level_of_proficiency: "level_of_proficiency",
      },
      {
         id: 7,
         title: "Work Experience",
         work: "Intern",
         subtitle: "Internship Details",
         position: "intern_position",
         company_name: "intern_company_name",
         to: "intern_to",
         from: "intern_from",
      },
      {
         id: 8,
         title: "Work Experience",
         work: "Work",
         subtitle: "Work Details",
         position: "work_position",
         company_name: "work_company_name",
         to: "work_to",
         from: "work_from",
      },

      {
         id: 9,
         title: "Preferences",
         preferred_course: "preferred_course",
         preferred_country: "preferred_country",
      },
      {
         id: 10,
         title: "Budget",
         budget: "budget",
      },
      {
         id: 11,
         title: "Scholarship Details",
         availing_scholarship: "availing_scholarship",
         religion: "religion",
         caste: "caste",
      },
      {
         id: 12,
         title: "Additional Details",
         additional_info: "Additional Info",
         nationality: "nationality",
         date_of_birth: "date_of_birth",
         intake: "intake",
         year_of_study: "year_of_study",
      },
      // Add more cards as needed
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const Cards = ({ data }) => {
      const { updatedData, setUpdatedData } = useContext(updatedProfileContext);

      const getInputData = (e) => {
         const { name, value } = e.target;
         setUpdatedData({ ...updatedData, [name]: value });
      };

      const addLanguage = async () => {
         const language_proficiency = [
            {
               parent: email,
               parentfield: "language_proficiency",
               parenttype: "Student",
               language: updatedData.language,
               certificate: updatedData.certificate,
               level_of_proficiency: updatedData.level_of_proficiency,
            },
         ];
         setUpdatedData({ ...updatedData, language_proficiency });
      };

      const [intern, setIntern] = useState({
         parent: email,
         parentfield: "internship_details",
         parenttype: "Student",
         internship_experience: 1,
      });

      const getIntern = (e) => {
         const { name, value } = e.target;
         setIntern({ ...intern, [name]: value });
      };

      const addInternship = () => {
         updatedData.internship_details.push(intern);
      };

      const [work, setWork] = useState({
         parent: email,
         parentfield: "work_experience",
         parenttype: "Student",
         work_experience: 1,
      });

      const getWork = (e) => {
         const { name, value } = e.target;
         setWork({ ...work, [name]: value });
      };

      const addWork = async () => {
         updatedData.work_experience.push(work);
      };

      return (
         <div
            className="card active shadow px-5 py-4 mx-auto my-4 rounded-4"
            style={{
               maxWidth: "700px",
               height: "620px",
               position: "relative",
            }}
         >
            <div className="d-flex justify-content-center align-items-center m-4">
               <img style={{ height: "40px" }} src={Logo} alt="" />
               <h2 className=" fw-bold">
                  Complete Your{" "}
                  <span style={{ color: "#0f6990" }}>Profile</span>
               </h2>
            </div>
            <h3 className="card-title ">{data.title}</h3>
            <div className="card-body mt-4">
               {data.institution && (
                  <div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "21px" }}
                        >
                           Instituiton
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.institution]}
                           placeholder="Institution Name"
                           name={data.institution}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              fontSize: "15px",
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px" }}
                        >
                           Marks
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.marks]}
                           placeholder="Marks"
                           name={data.marks}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px" }}
                        >
                           Mode of Study
                        </label>
                        <select
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           value={updatedData[data.mode]}
                           name={data.mode}
                           onChange={(e) => getInputData(e)}
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        >
                           <option defaultValue hidden>
                              Mode of Study
                           </option>
                           <option value="Full Time">Full Time</option>
                           <option value="Part Time">Part Time</option>
                           <option value="Distance / Online">
                              Distance / Online
                           </option>
                        </select>
                     </div>
                  </div>
               )}
               {data.english && (
                  <div>
                     <div className=" mb-3">
                        <p className="fw-bold" style={{ fontSize: "17px" }}>
                           Do you have good communication skill in English?
                        </p>
                        <div className="d-flex align-items-center gap-3">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.english}
                                 value="1"
                                 checked={
                                    updatedData[data.english] == 1
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                           <div className="d-flex align-items-center gap-2">
                              <label>No</label>
                              <input
                                 type="radio"
                                 name={data.english}
                                 value={0}
                                 checked={
                                    updatedData[data.english] == 0
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                     <div className=" mb-3">
                        <p className="fw-bold" style={{ fontSize: "17px" }}>
                           Are you comfortable spending few months in learning a
                           new language?
                        </p>
                        <div className="d-flex align-items-center gap-3">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.new_language}
                                 value={1}
                                 checked={
                                    updatedData[data.new_language] == 1
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                           <div className="d-flex align-items-center gap-2">
                              <label>No</label>
                              <input
                                 type="radio"
                                 name={data.new_language}
                                 value={0}
                                 checked={
                                    updatedData[data.new_language] == 0
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                     <div className=" mb-3">
                        <p className="fw-bold" style={{ fontSize: "17px" }}>
                           Have you got any language proficiency?
                        </p>
                        <div className="d-flex align-items-center gap-3">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.proficiency}
                                 value={1}
                                 checked={
                                    updatedData[data.proficiency] == 1
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                           <div className="d-flex align-items-center gap-2">
                              <label>No</label>
                              <input
                                 type="radio"
                                 name={data.proficiency}
                                 value={0}
                                 checked={
                                    updatedData[data.proficiency] == 0
                                       ? "checked"
                                       : ""
                                 }
                                 onChange={(e) => getInputData(e)}
                                 style={{
                                    border: "none",
                                    outline: "none",
                                    height: "16px",
                                    width: "16px",
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                     {/* <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center mb-3">
                <input
                  type="text"
                  placeholder="Language"
                  name={data.language}
                  onChange={(e) => getInputData(e)}
                  className="shadow-sm border rounded-4 px-3 py-2 "
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '180px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Certificate"
                  name={data.certificate}
                  onChange={(e) => getInputData(e)}
                  className="shadow-sm border rounded-4 px-3 py-2 "
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '180px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Level of Proficiency"
                  name={data.level_of_proficiency}
                  onChange={(e) => getInputData(e)}
                  className="shadow-sm border rounded-4 px-3 py-2 "
                  style={{
                    border: 'none',
                    outline: 'none',
                    width: '180px',
                  }}
                />

                <Link>
                  {' '}
                  <img src={check} alt="" />
                </Link>
                <Link>
                  <img src={cancel} alt="" />
                </Link>
                <input
                  className="d-none"
                  type="checkbox"
                  name=""
                  id="addLangauge"
                  onClick={addLanguage}
                />
              </div> */}
                  </div>
               )}
               {data.work && (
                  <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center mb-3">
                     <h5 style={{ color: "#0F6990" }}>{data.subtitle}</h5>
                     <br />
                     <div className="d-flex align-items-center justify-content-between  gap-3">
                        <div className="d-flex flex-column">
                           <label className="fw-bolder p-1" htmlFor="">
                              Position
                           </label>
                           <input
                              type="text"
                              placeholder="Position (Job Role)"
                              name={data.position}
                              value={updatedData[data.position]}
                              onChange={
                                 data.work === "Intern"
                                    ? (e) => {
                                         getIntern(e);
                                      }
                                    : (e) => {
                                         getWork(e);
                                      }
                              }
                              className="shadow-sm border rounded-4 px-3 py-2 "
                              style={{
                                 border: "none",
                                 outline: "none",
                                 width: "220px",
                              }}
                           />
                        </div>
                        <div className="d-flex flex-column">
                           <label className="fw-bolder p-1" htmlFor="">
                              Company Name{" "}
                           </label>
                           <input
                              type="text"
                              placeholder="Company Name"
                              name={data.company_name}
                              value={updatedData[data.company_name]}
                              onChange={
                                 data.work === "Intern"
                                    ? (e) => {
                                         getIntern(e);
                                      }
                                    : (e) => {
                                         getWork(e);
                                      }
                              }
                              className="shadow-sm border rounded-4 px-3 py-2 "
                              style={{
                                 border: "none",
                                 outline: "none",
                                 width: "220px",
                              }}
                           />
                        </div>
                     </div>
                     <div className="d-flex align-items-center gap-3">
                        <div className=" d-flex flex-column">
                           <label className="fw-bolder p-1" htmlFor="">
                              From
                           </label>
                           <input
                              type="date"
                              placeholder="From"
                              name={data.from}
                              value={updatedData[data.from]}
                              onChange={
                                 data.work === "Intern"
                                    ? (e) => {
                                         getIntern(e);
                                      }
                                    : (e) => {
                                         getWork(e);
                                      }
                              }
                              className="shadow-sm border rounded-4 px-3 py-2 "
                              style={{
                                 border: "none",
                                 outline: "none",
                                 width: "220px",
                              }}
                           />
                        </div>
                        <div className="d-flex flex-column">
                           <label className="fw-bolder p-1" htmlFor="">
                              To
                           </label>
                           <input
                              type="date"
                              placeholder="To"
                              name={data.to}
                              value={updatedData[data.to]}
                              onChange={
                                 data.work === "Intern"
                                    ? (e) => {
                                         getIntern(e);
                                      }
                                    : (e) => {
                                         getWork(e);
                                      }
                              }
                              className="shadow-sm border rounded-4 px-3 py-2 "
                              style={{
                                 border: "none",
                                 outline: "none",
                                 width: "220px",
                              }}
                           />
                        </div>
                     </div>

                     {data.work === "Intern" ? (
                        <div>
                           <div className="d-flex justify-content-center align-items-center p-3">
                              <Button
                                 className="btn ext-light d-flex justify-content-center align-items-center"
                                 style={{ backgroundColor: "#0F6990" }}
                                 onClick={addInternship}
                              >
                                 Save & add more
                              </Button>
                           </div>
                        </div>
                     ) : (
                        <div>
                           <div className="d-flex justify-content-center align-items-center p-3">
                              <Button
                                 className="btn ext-light d-flex justify-content-center align-items-center"
                                 style={{ backgroundColor: "#0F6990" }}
                                 onClick={addWork}
                              >
                                 Save & add more
                              </Button>
                           </div>
                        </div>
                     )}
                  </div>
               )}
               {data.preferred_course && (
                  <div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "21px" }}
                        >
                           Preferred course
                        </label>
                        <input
                           type="text"
                           placeholder="Course Name"
                           name={data.preferred_course}
                           value={updatedData[data.preferred_course]}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              fontSize: "15px",
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px" }}
                        >
                           Preferred Country
                        </label>
                        <input
                           type="text"
                           placeholder="Country Name"
                           name={data.preferred_country}
                           value={updatedData[data.preferred_country]}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                  </div>
               )}
               {data.budget && (
                  <div>
                     <div className="d-flex justify-content-between mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "21px" }}
                        >
                           Budget
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.budget]}
                           placeholder="Enter Budget"
                           name={data.budget}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              fontSize: "15px",
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                  </div>
               )}
               {data.availing_scholarship && (
                  <div className=" mb-3">
                     <p className="fw-bold" style={{ fontSize: "19px" }}>
                        Do you wish to Avail Scholarship?
                     </p>
                     <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="d-flex align-items-center gap-2">
                           <label>Yes</label>
                           <input
                              type="radio"
                              name={data.availing_scholarship}
                              value={1}
                              checked={
                                 updatedData[data.availing_scholarship] == 1
                                    ? "checked"
                                    : ""
                              }
                              onChange={(e) => getInputData(e)}
                              style={{
                                 border: "none",
                                 outline: "none",
                                 height: "16px",
                                 width: "16px",
                              }}
                           />
                        </div>
                        <div className="d-flex align-items-center gap-2">
                           <label>No</label>
                           <input
                              type="radio"
                              name={data.availing_scholarship}
                              value={0}
                              checked={
                                 updatedData[data.availing_scholarship] == 0
                                    ? "checked"
                                    : ""
                              }
                              onChange={(e) => getInputData(e)}
                              style={{
                                 border: "none",
                                 outline: "none",
                                 height: "16px",
                                 width: "16px",
                              }}
                           />
                        </div>
                     </div>
                     <div className="d-flex mb-2 align-items-center">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Religion
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.religion]}
                           placeholder="Religion"
                           name={data.religion}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <p style={{ color: "gray" }}>
                        Due to Reservation and Scholarships{" "}
                     </p>
                     <div className="d-flex align-items-center  mb-2">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Caste
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.caste]}
                           placeholder="Caste"
                           name={data.caste}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <p style={{ color: "gray" }}>
                        Due to Reservation and Scholarships{" "}
                     </p>
                  </div>
               )}
               {data.additional_info && (
                  <div>
                     <div className="d-flex align-items-center  mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Nationality
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.nationality]}
                           placeholder="Enter Nationality"
                           name={data.nationality}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex align-items-center  mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Date Of Birth
                        </label>
                        <input
                           type="date"
                           value={updatedData[data.date_of_birth]}
                           placeholder="Enter Date Of Birth"
                           name={data.date_of_birth}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex align-items-center  mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Intake
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.intake]}
                           placeholder="Enter Intake"
                           name={data.intake}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                     <div className="d-flex align-items-center  mb-3">
                        <label
                           htmlFor=""
                           className="fw-bold"
                           style={{ fontSize: "20px", width: "200px" }}
                        >
                           Year Of Study
                        </label>
                        <input
                           type="text"
                           value={updatedData[data.year_of_study]}
                           placeholder="Enter Year Of Study "
                           name={data.year_of_study}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "300px",
                           }}
                        />
                     </div>
                  </div>
               )}
               <div
                  className="d-flex justify-content-end"
                  style={{
                     position: "absolute",
                     bottom: "40px",
                     right: "40px",
                  }}
               >
                  {currentIndex > 0 && (
                     <button
                        className="btn text-light rounded-5 me-2"
                        style={{ backgroundColor: "#0F6990" }}
                        onClick={handlePrevious}
                     >
                        <img style={{ width: "26px" }} src={left} alt="" />
                     </button>
                  )}

                  {currentIndex > cards.length - 2 ? (
                     <button
                        className="btn btn-success rounded-4"
                        onClick={(e) => handleSubmit(e, updatedData)}
                     >
                        Submit
                        <img
                           style={{ maxWidth: "20px", marginLeft: "5px" }}
                           src={submit}
                           alt=""
                        />
                     </button>
                  ) : (
                     <button
                        className="btn text-light rounded-5"
                        style={{ backgroundColor: "#0F6990" }}
                        onClick={handleNext}
                     >
                        <img style={{ width: "26px" }} src={right} alt="" />
                     </button>
                  )}
               </div>
            </div>
         </div>
      );
   };

   const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
   };

   const handlePrevious = () => {
      setCurrentIndex(
         (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
      );
   };

   const handleSubmit = async (e, updatedData) => {
      e.preventDefault();
      const {
         tenth_institution,
         tenth_marks,
         tenth_mode_of_study,
         preferred_country,
         preferred_course,
      } = updatedData;
      if (
         !tenth_institution ||
         !tenth_marks ||
         !tenth_mode_of_study ||
         !preferred_country ||
         !preferred_course
      ) {
         toast.warning("Fill all details");
      } else {
         const body = {
            name,
            doctype: "Student",
            ...updatedData,
         };
         try {
            const res = await candidateUpdate(body, name);           
            toast.success("Updated");
            navigate("/profile");
         } catch (err) {
            console.log(err);
            toast.error("There have been some technical error.");
            toast.error("Please try again later.");
         }
      }
   };

   return (
      <section>
         <img
            style={{
               position: "absolute",
               width: "100%",
               zIndex: "-10",
            }}
            src={world}
            alt=""
            className="d-none d-lg-block"
         />
         <div style={{ paddingBlock: "65px" }} className="container ms-auto">
            <div className="cardContainer">
               <Cards index={currentIndex} data={cards[currentIndex]} />
            </div>
         </div>
      </section>
   );
}

export default UpdateProfile;
