import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { candidateUpdate } from "../../api/allApi";
import { profileContext } from "../../context/ContextShare";

function Profile() {
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
      // Add more cards as needed
   ];

  const [currentIndex, setCurrentIndex] = useState(0);

   const Cards = ({ index, data }) => {
      const { profileData, setProfileData } = useContext(profileContext);

      const getInputData = (e) => {
         const { name, value } = e.target;
         setProfileData({ ...profileData, [name]: value });
      };

      console.log(profileData);

      return (
         <div
            className="card active shadow p-5 mx-auto my-5 rounded-4"
            style={{ maxWidth: "700px" }}
         >
            <h2 className="card-title ">{data.title}</h2>
            <div className="card-body">
               {data.institution && (
                  <div className="d-flex justify-content-between mb-3">
                     <label htmlFor="" className="fs-5">
                        Instituiton
                     </label>
                     <input
                        type="text"
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
               )}
               {data.marks && (
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
               )}
               {data.mode && (
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
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Distance / Online">
                           Distance / Online
                        </option>
                     </select>
                  </div>
               )}
               {data.english && (
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
                              value={"yes"}
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
                              value={"no"}
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
               )}
               {data.new_language && (
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
                              value={"yes"}
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
                              value={"no"}
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
               )}
               {data.proficiency && (
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
                              value={"yes"}
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
                              value={"no"}
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
               )}
               {data.language_proficiency && (
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
                  </div>
               )}
               <div className="d-flex justify-content-between">
                  <button
                     className="btn text-light rounded-4 me-2"
                     style={{ backgroundColor: "#0F6990" }}
                     onClick={handlePrevious}
                     disabled={cards.length <= 1}
                  >
                     Prev
                  </button>
                  <button onClick={(e) => handleSubmit(e, profileData)}>
                     Submit
                  </button>
                  <button
                     className="btn text-light rounded-4"
                     style={{ backgroundColor: "#0F6990" }}
                     onClick={handleNext}
                     disabled={cards.length <= 1}
                  >
                     Next
                  </button>
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

   const handleSubmit = async (e, profileData) => {
      console.log("e");

      e.preventDefault();
      const {
         tenth_institution,
         tenth_marks,
         tenth_mode_of_study,
         twelfth_institution,
         twelfth_marks,
         twelfth_mode_of_study,
         undergraduate_institution,
         undergraduate_marks,
         undergraduate_mode_of_study,
         postgraduate_institution,
         postgraduate_marks,
         postgraduate_mode_of_study,
         phd_institution,
         phd_marks,
         phd_mode_of_study,
      } = profileData;
      if (!tenth_institution || !tenth_marks || !tenth_mode_of_study) {
         toast.warning("Fill all details");
      } else {
         const name = localStorage.getItem("findrData");
         const body = {
            name,
            doctype: "Student",
            tenth_institution,
            tenth_marks,
            tenth_mode_of_study,
            twelfth_institution,
            twelfth_marks,
            twelfth_mode_of_study,
            undergraduate_institution,
            undergraduate_marks,
            undergraduate_mode_of_study,
            postgraduate_institution,
            postgraduate_marks,
            postgraduate_mode_of_study,
            phd_institution,
            phd_marks,
            phd_mode_of_study,
         };
         try {
            await candidateUpdate(body, name);
            toast.success("Updated");
         } catch (err) {
            console.log(err);
         }
      }
   };

   return (
      <section>
         <div style={{ paddingBlock: "100px" }} className="container ms-auto">
            <h1 className="text-center mt-5 fw-bold">Complete Your Profile</h1>
            <div className="cardContainer">
               <Cards index={currentIndex} data={cards[currentIndex]} />
            </div>
         </div>
      </section>
   );
}

export default Profile;
