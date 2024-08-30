//-------------------------------------
// checkbox implementation
// signup validation
//-------------------------------------

import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { candidateUpdate, getCandidate } from "../../api/allApi";
import {
   profileContext,
   updatedProfileContext,
} from "../../context/ContextShare";
import world from "../../assets/world.svg";

function UpdateProfile({ setShow, setSliderShow }) {
   setShow(true);
   setSliderShow(true);
   const email = JSON.parse(localStorage.getItem("findrData")).email;

   const getUserData = async () => {
      const userData = await getCandidate(email);
      console.log(userData);
   };

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
      if (updatedData) console.log(updatedData[data.institution]);

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

      const addInternship = async () => {
         const internship_details = [
            {
               parent: email,
               parentfield: "internship_details",
               parenttype: "Student",
               internship_experience: 1,
               intern_position: updatedData.intern_position,
               intern_company_name: updatedData.intern_company_name,
               intern_to: updatedData.intern_to,
               intern_from: updatedData.intern_from,
            },
         ];
         setUpdatedData({ ...updatedData, internship_details });
      };

      const addWork = async () => {
         const work_experience = [
            {
               parent: email,
               parentfield: "work_experience",
               parenttype: "Student",
               work_position: updatedData.work_position,
               work_company_name: updatedData.work_company_name,
               work_to: updatedData.work_to,
               work_from: updatedData.work_from,
            },
         ];
         setUpdatedData({ ...updatedData, work_experience });
      };
      const addPreferences = async () => {
         const preferences = [
            {
               parent: email,
               parentfield: "preferences",
               parenttype: "Student",
               preferred_course: updatedData.preferred_course,
               preferred_country: updatedData.preferred_country,
            },
         ];
         setUpdatedData({ ...updatedData, preferences });
      };
      console.log(updatedData);

      return (
         <div
            className="card active shadow p-5 mx-auto my-5 rounded-4"
            style={{ maxWidth: "700px" }}
         >
            <h2 className="card-title ">{data.title}</h2>
            <div className="card-body">
               {data.institution && (
                  <div>
                     <div className="d-flex justify-content-between mb-3">
                        <label htmlFor="" className="fs-5">
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
                              border: "none",
                              outline: "none",
                              width: "220px",
                           }}
                        />
                     </div>
                     <div className="d-flex justify-content-between mb-3">
                        <label htmlFor="" className="fs-5">
                           Marks
                        </label>
                        <input
                           type="text"
                           placeholder="Marks"
                           name={data.marks}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "220px",
                           }}
                        />
                     </div>
                     <div className="d-flex justify-content-between mb-3">
                        <label htmlFor="" className="fs-5">
                           Mode of Study
                        </label>
                        <select
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           name={data.mode}
                           onChange={(e) => getInputData(e)}
                           style={{
                              border: "none",
                              outline: "none",
                              width: "220px",
                           }}
                        >
                           <option defaultValue hidden>
                              Mode of Study
                           </option>
                           <option  value="Full Time">Full Time</option>
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
                        <p className="fs-5">
                           Do you have good communication skill in English?
                        </p>
                        <div className="d-flex align-items-center justify-content-evenly">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.english}
                                 value={1}
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
                        <p className="fs-5">
                           Are you comfortable spending few months in learning a
                           new language?
                        </p>
                        <div className="d-flex align-items-center justify-content-evenly">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.new_language}
                                 value={1}
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
                        <p className="fs-5">
                           Have you got any language proficiency?
                        </p>
                        <div className="d-flex align-items-center justify-content-evenly">
                           <div className="d-flex align-items-center gap-2">
                              <label>Yes</label>
                              <input
                                 type="radio"
                                 name={data.proficiency}
                                 value={1}
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
                     <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center mb-3">
                        <input
                           type="text"
                           placeholder="Language"
                           name={data.language}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "180px",
                           }}
                        />
                        <input
                           type="text"
                           placeholder="Certificate"
                           name={data.certificate}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "180px",
                           }}
                        />
                        <input
                           type="text"
                           placeholder="Level of Proficiency"
                           name={data.level_of_proficiency}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "180px",
                           }}
                        />
                        <label htmlFor="addLangauge">✅</label>
                        <label htmlFor="">❌</label>
                        <input
                           className="d-none"
                           type="checkbox"
                           name=""
                           id="addLangauge"
                           onClick={addLanguage}
                        />
                     </div>
                  </div>
               )}
               {data.work && (
                  <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center mb-3" >
                     <h4>{data.subtitle}</h4>
                     <br />
                     <input
                        type="text"
                        placeholder="Position (Job Role)"
                        name={data.position}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <input
                        type="text"
                        placeholder="Company Name"
                        name={data.company_name}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <div className="p-1">
                        <label htmlFor="">From</label>
                        <input
                           type="date"
                           placeholder="From"
                           name={data.from}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "220px",
                           }}
                        />
                     </div>
                     <div>
                        <label htmlFor="">To</label>
                        <input
                           type="date"
                           placeholder="To"
                           name={data.to}
                           onChange={(e) => getInputData(e)}
                           className="shadow-sm border rounded-4 px-3 py-2 "
                           style={{
                              border: "none",
                              outline: "none",
                              width: "220px",
                           }}
                        />
                     </div>
                     {data.work === "Intern" ? (
                        <div>
                           <label htmlFor="addIntern">✅ Ad \dd</label>
                           <label htmlFor="">❌</label>
                           <input
                              className="d-none"
                              type="checkbox"
                              name=""
                              id="addIntern"
                              onClick={addInternship}
                           />
                        </div>
                     ) : (
                        <div>
                           <label htmlFor="addWork">✅</label>
                           <label htmlFor="">❌</label>
                           <input
                              className="d-none"
                              type="checkbox"
                              name=""
                              id="addWork"
                              onClick={addWork}
                           />
                        </div>
                     )}
                  </div>
               )}
               {data.preferred_course && (
                  <div>
                     <input
                        type="text"
                        placeholder="Preferred Course"
                        name={data.preferred_course}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <input
                        type="text"
                        placeholder="Preferred Country"
                        name={data.preferred_country}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <div>
                        <label htmlFor="addPreference">✅</label>
                        <label htmlFor="">❌</label>
                        <input
                           className="d-none"
                           type="checkbox"
                           name=""
                           id="addPreference"
                           onClick={addPreferences}
                        />
                     </div>
                  </div>
               )}
               {data.budget && (
                  <div>
                     <input
                        type="text"
                        placeholder="Budget"
                        name={data.budget}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                  </div>
               )}
               {data.availing_scholarship && (
                  <div className="">
                     <input
                        type="checkbox"
                        placeholder="scholarship"
                        name={data.availing_scholarship}
                        onChange={(e) => getInputData(e)}
                     />
                     <label htmlFor="">Availing Scholarship</label>
                     <input
                        type="text"
                        placeholder="Religion"
                        name={data.religion}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <input
                        type="text"
                        placeholder="Caste"
                        name={data.caste}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                  </div>
               )}
               {data.additional_info && (
                  <div>
                     <input
                        type="text"
                        placeholder="Nationality"
                        name={data.nationality}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <label htmlFor="">DOB</label>
                     <input
                        type="date"
                        placeholder="Date of Birth"
                        name={data.date_of_birth}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <input
                        type="text"
                        placeholder="Intake"
                        name={data.intake}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                     <input
                        type="text"
                        placeholder="Year of Study"
                        name={data.year_of_study}
                        onChange={(e) => getInputData(e)}
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     />
                  </div>
               )}

               <div className="d-flex justify-content-between">
                  {currentIndex > 0 && (
                     <button
                        className="btn text-light rounded-4 me-2"
                        style={{ backgroundColor: "#0F6990" }}
                        onClick={handlePrevious}
                     >
                        Prev
                     </button>
                  )}

                  {currentIndex > cards.length - 2 ? (
                     <button
                        className="btn btn-success rounded-4"
                        onClick={(e) => handleSubmit(e, updatedData)}
                     >
                        Submit
                     </button>
                  ) : (
                     <button
                        className="btn text-light rounded-4"
                        style={{ backgroundColor: "#0F6990" }}
                        onClick={handleNext}
                     >
                        Next
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
      // const { tenth_institution, tenth_marks, tenth_mode_of_study } =
      //    updatedData;
      // if (!tenth_institution || !tenth_marks || !tenth_mode_of_study) {
      //    toast.warning("Fill all details");
      // } else {
      const body = {
         name: email,
         doctype: "Student",
         ...updatedData,
      };
      try {
         const res = await candidateUpdate(body, email);
         console.log(res.data.data);

         toast.success("Updated");
      } catch (err) {
         console.log(err);
      }
      // }
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
         <div style={{ paddingBlock: "100px" }} className="container ms-auto">
            <h2 className="text-center mt-5 fw-bold">
               Complete Your <span style={{ color: "#0f6990" }}>Profile</span>
            </h2>
            <div className="cardContainer">
               <Cards index={currentIndex} data={cards[currentIndex]} />
            </div>
         </div>
      </section>
   );
}

export default UpdateProfile;
