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
    </div>
  );
}

export default Profile;
