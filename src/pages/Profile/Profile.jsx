import React, { useState } from "react";

function Profile({ setShow, setSliderShow }) {
  setShow(true);
  setSliderShow(true);
   const [inputData, setInputData] = useState({});
   const [editable, setEditable] = useState(true);

   const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
   };

   return (
      <div style={{ paddingBlock: "100px" }} className="container ms-auto">
         <h2 className="">Personal Details</h2>
         <div className="d-flex p-4" style={{ backgroundColor: "lightblue" }}>
            <div className="col-md-6 col-lg-5">
               {/* input section */}

               <form action="">
                  {/* name */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#067BC2", width: "100px" }}>
                        Name
                     </label>
                     <input
                        className="inputBox shadow "
                        type="text"
                        name="name1"
                        value={inputData.name1 || ""}
                        // disabled={editable}
                        onChange={(e) => getInputData(e)}
                        placeholder="Enter Name"
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  {/* mail id */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#067BC2", width: "100px" }}>
                        Mail ID
                     </label>
                     <input
                        className="inputBox shadow "
                        type="email"
                        name="email"
                        value={inputData.email || ""}
                        // disabled
                        onChange={(e) => getInputData(e)}
                        placeholder="Enter Mail ID"
                        style={{ fontSize: "15px", border: "none" }}
                     />
                  </div>
                  {/* phone number */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#067BC2", width: "100px" }}>
                        Phone No
                     </label>
                     <input
                        className="inputBox shadow "
                        type="number"
                        name="phone"
                        value={inputData.phone || ""}
                        // disabled={editable}
                        onChange={(e) => getInputData(e)}
                        placeholder="Enter PhoneNo"
                        style={{
                           fontSize: "15px",
                           border: "none",
                           appearance: "none",
                        }}
                     />
                  </div>
                  {/* gender */}
                  <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                     <label style={{ color: "#067BC2", width: "100px" }}>
                        Gender
                     </label>
                     <select
                        className="inputBox shadow "
                        aria-label="Default select example"
                        name="gender"
                        // disabled={editable}
                        onChange={(e) => getInputData(e)}
                        value={inputData.gender || ""}
                        style={{ fontSize: "15px", border: "none" }}
                     >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
               </form>
            </div>
            {/* next section  */}

            <div className="col-md-6 col-lg-5">
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label
                     className=" d-flex align-items-center"
                     style={{ color: "#067BC2", width: "100px" }}
                  >
                     DOB
                  </label>
                  <input
                     className="inputBox shadow "
                     type="date"
                     name="dob"
                     value={inputData.dob || ""}
                     //  disabled={editable}
                     onChange={(e) => getInputData(e)}
                     placeholder="Select DOB"
                     style={{ fontSize: "15px", border: "none", color: "gray" }}
                  />
               </div>
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label
                     className=""
                     style={{ color: "#067BC2", width: "100px" }}
                  >
                     Passport No
                  </label>
                  <input
                     className="inputBox shadow "
                     type="text"
                     name="passport_no"
                     value={inputData.passport_no || ""}
                     //  disabled={editable}
                     onChange={(e) => getInputData(e)}
                     placeholder="Enter Passport No"
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
               <div className="form-group d-lg-flex align-items-center gap-3 p-2">
                  <label
                     className=" d-flex"
                     style={{ color: "#067BC2", width: "100px" }}
                  >
                     Address
                  </label>
                  <textarea
                     className="inputBox shadow  "
                     name="address"
                     value={inputData.address || ""}
                     //  disabled={editable}
                     onChange={(e) => getInputData(e)}
                     placeholder="Enter Address"
                     style={{ fontSize: "15px", border: "none" }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
