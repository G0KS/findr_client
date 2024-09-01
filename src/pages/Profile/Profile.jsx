import React, { useState } from 'react';

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
    <div
      style={{ paddingBlock: '100px', paddingLeft: '200px' }}
      className="container ms-auto "
    >
      <h2 className="" style={{}}>
        Personal Details
      </h2>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Full Name
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Full Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Phone No.
              </label>
              <input
                className="inputBox shadow "
                type="number"
                name=""
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Phone Number"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>DOB</label>
              <input
                className="inputBox shadow "
                type="date"
                name=""
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter DOB"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>Email</label>
            <input
              className="inputBox shadow "
              type="number"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Email"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>Address</label>
            <input
              className="inputBox shadow "
              type="number"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Address"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Nationality
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Nationality"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
        </div>
      </div>
      {/* Tenth Qualification */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Tenth</span> Qualification
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Instituiton
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Instituiton Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>Marks</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Marks"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Mode of Study
            </label>
            <select
              className="inputBox shadow "
              aria-label="Default select example"
              name="gender"
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              value={inputData.gender || ''}
              style={{ fontSize: '15px', border: 'none' }}
            >
              <option value="Male">Full Time</option>
              <option value="Female">Part Time</option>
              <option value="Other">Distance / Online</option>
            </select>
          </div>
        </div>
      </div>
      {/* Twelfth Qualification */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Twelfth</span> Qualification
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Instituiton
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Instituiton Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>Marks</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Marks"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Mode of Study
            </label>
            <select
              className="inputBox shadow "
              aria-label="Default select example"
              name="gender"
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              value={inputData.gender || ''}
              style={{ fontSize: '15px', border: 'none' }}
            >
              <option value="Male">Full Time</option>
              <option value="Female">Part Time</option>
              <option value="Other">Distance / Online</option>
            </select>
          </div>
        </div>
      </div>

      {/* UG Qualification */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Undergraduate </span> Qualification
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Instituiton
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Instituiton Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>Marks</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Marks"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Mode of Study
            </label>
            <select
              className="inputBox shadow "
              aria-label="Default select example"
              name="gender"
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              value={inputData.gender || ''}
              style={{ fontSize: '15px', border: 'none' }}
            >
              <option value="Male">Full Time</option>
              <option value="Female">Part Time</option>
              <option value="Other">Distance / Online</option>
            </select>
          </div>
        </div>
      </div>
      {/* Postgraduate Qualification */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Postgraduate </span> Qualification
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Instituiton
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Instituiton Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>Marks</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Marks"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Mode of Study
            </label>
            <select
              className="inputBox shadow "
              aria-label="Default select example"
              name="gender"
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              value={inputData.gender || ''}
              style={{ fontSize: '15px', border: 'none' }}
            >
              <option value="Male">Full Time</option>
              <option value="Female">Part Time</option>
              <option value="Other">Distance / Online</option>
            </select>
          </div>
        </div>
      </div>
      {/* PhD Qualification */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>PhD </span> Qualification
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
                Instituiton
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Instituiton Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>Marks</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ''}
                // disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Marks"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>
              Mode of Study
            </label>
            <select
              className="inputBox shadow "
              aria-label="Default select example"
              name="gender"
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              value={inputData.gender || ''}
              style={{ fontSize: '15px', border: 'none' }}
            >
              <option value="Male">Full Time</option>
              <option value="Female">Part Time</option>
              <option value="Other">Distance / Online</option>
            </select>
          </div>
        </div>
      </div>
      <h4 className=" mt-4">Language Proficiency</h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990' }}>
                Do you have good communication skill in English?
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none', width: '100px' }}
              />
            </div>

            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990' }}>
                Are you comfortable spending few months in learning a new
                language?
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none', width: '100px' }}
              />
            </div>
          </form>
        </div>

        {/* next section  */}
        <div className="col-md-6 col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990' }}>
              Have you got any language proficiency?
            </label>
            <input
              className="inputBox shadow "
              type="text"
              name="name1"
              value={inputData.name1 || ''}
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder=""
              style={{ fontSize: '15px', border: 'none', width: '100px' }}
            />
          </div>
        </div>
      </div>
      {/* table */}
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Language </span>Details
      </h4>
      <div className="d-flex p-2 row  " >
        <div className="col-md-6 col-lg-4">
          <div className="form-group d-lg-flex   flex-column gap-3 p-2">
            <label style={{ color: '#0F6990', fontSize: '17px' }}>Language</label>
            <input
              className="inputBox shadow "
              type="text"
              name="name1"
              value={inputData.name1 || ''}
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder=""
              style={{ fontSize: '15px', border: 'none', width: '300px' }}
            />
          </div>
        </div>
        {/* next section */}
        <div className="col-md-6 col-lg-4">
          <div className="form-group d-lg-flex   flex-column gap-3 p-2">
            <label style={{ color: '#0F6990', fontSize: '17px' }}>Certificate</label>
            <input
              className="inputBox shadow "
              type="text"
              name="name1"
              value={inputData.name1 || ''}
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder=""
              style={{ fontSize: '15px', border: 'none', width: '300px' }}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="form-group d-lg-flex   flex-column gap-3 p-2">
            <label style={{ color: '#0F6990', fontSize: '17px' }}>Level</label>
            <input
              className="inputBox shadow "
              type="text"
              name="name1"
              value={inputData.name1 || ''}
              // disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder=""
              style={{ fontSize: '15px', border: 'none', width: '300px' }}
            />
          </div>
        </div>
      </div>
      <h2 className="mt-3 mb-4" style={{}}>
      Work Experience
      </h2>
      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Internship </span>Details
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Position
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Full Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>From</label>
            <input
              className="inputBox shadow "
              type="date"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Email"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
        <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Company Name
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Full Name"
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>To</label>
            <input
              className="inputBox shadow "
              type="date"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Address"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
        </div>
      </div>

      <h4 className=" mt-4">
        <span style={{ color: '#0F6990' }}>Work </span>Details
      </h4>
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Position
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>From</label>
            <input
              className="inputBox shadow "
              type="date"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder=""
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
        <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Company Name
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label style={{ color: '#0F6990', width: '100px' }}>To</label>
            <input
              className="inputBox shadow "
              type="date"
              name=""
              value={inputData.email || ''}
              // disabled
              onChange={(e) => getInputData(e)}
              placeholder="Enter Address"
              style={{ fontSize: '15px', border: 'none' }}
            />
          </div>
        </div>
      </div>
      <h2 className="" style={{}}>
      Preferences
      </h2>
      
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              preferred course
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
        <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              preferred Country
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
        </div>
      </div>

      {/* additional Details */}
      <h2 className="mt-4" style={{}}>
      Additional Details
      </h2>
      
      <div className="d-flex p-4 row p-3 " style={{ backgroundColor: '' }}>
        <div className="col-md-6 col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Intake
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
          </form>
        </div>
        {/* next section  */}
        <div className="col-md-6 col-lg-5">
        <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: '#0F6990', width: '100px' }}>
              Year of study
              </label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ''}
                // disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder=""
                style={{ fontSize: '15px', border: 'none' }}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
