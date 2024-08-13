import React, { useState } from "react";
import { toast } from "react-toastify";

function Profile() {
   const [inputData, setInputData] = useState({
      tenth_institution: "",
      tenth_marks: "",
      tenth_mode_of_study: "",
   });

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   console.log(inputData);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { tenth_institution, tenth_marks, tenth_mode_of_study } = inputData;
      if(!tenth_institution||!tenth_marks||!tenth_mode_of_study){
         toast.warning("Fill all details")
      }else{
         const response = await axios.put()
      }
   };

   return (
      <section>
         <div style={{ paddingTop: "100px" }} className="container ms-auto">
            <h1 className="text-center mt-5">Complete Your Profile</h1>
            <div
               className="card shadow p-5 mx-auto my-5 rounded-4"
               style={{ width: "50%" }}
            >
               <h3 className="card-title">Tenth Qualification</h3>
               <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                     <label htmlFor="" className="fs-4">
                        Instituiton
                     </label>
                     <input
                        type="text"
                        placeholder="Institution Name"
                        name="tenth_institution"
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
                     <label htmlFor="" className="fs-4">
                        Marks
                     </label>
                     <input
                        type="text"
                        placeholder="Marks"
                        name="tenth_marks"
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
                     <label htmlFor="" className="fs-4">
                        Mode of Study
                     </label>
                     <select
                        className="shadow-sm border rounded-4 px-3 py-2 "
                        name="tenth_mode_of_study"
                        onChange={(e) => getInputData(e)}
                        style={{
                           border: "none",
                           outline: "none",
                           width: "220px",
                        }}
                     >
                        <option selected hidden>
                           Mode of Study{" "}
                        </option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Distance / Online">
                           Distance / Online
                        </option>
                     </select>
                  </div>
                  <div className="d-flex justify-content-between">
                     <button
                        className="btn text-light rounded-4 me-2"
                        style={{ backgroundColor: "#0F6990" }}
                     >
                        Prev
                     </button>
                     <button
                        className="btn text-light rounded-4"
                        style={{ backgroundColor: "#0F6990" }}
                     >
                        Next
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Profile;
