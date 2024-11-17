//-------------------------------------
// signup validation
//-------------------------------------
import background from '../../assets/background.svg';

import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import logo from '../../assets/F.png';
import { useNavigate } from 'react-router-dom';
import { useFrappeUpdateDoc } from 'frappe-react-sdk';
import Button from 'react-bootstrap/esm/Button';

function UpdateProfile({ setShow, setSidebarShow }) {
  setShow(true);
  setSidebarShow(false);
  const navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem('findrData'))?.email;
  const name = JSON.parse(localStorage.getItem('findrData'))?.name;
  const c_id = JSON.parse(localStorage.getItem('findrData'))?.c_id;

  useEffect(() => {
    if (!name) {
      toast.warning('Please login');
      navigate('/login');
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [component, setComponent] = useState(<></>);

  const { updateDoc } = useFrappeUpdateDoc();

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    setCurrentIndex(currentIndex - 1);
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
      toast.warning('Fill all details');
    } else {
      updateDoc('Student', c_id, { ...updatedData })
        .then((res) => {
          console.log(res);
          toast.success('Updated');
          navigate('/profile');
        })
        .catch((err) => {
          console.log(err);
          toast.warning('Some internal errors. Please try again later');
        });
    }
  };

  useEffect(() => {
    if (currentIndex == 0) {
      setComponent(<EducationForm />);
      window.scrollTo(0, 0);
    } else if (currentIndex == 1) {
      setComponent(<LanguageForm />);
      window.scrollTo(0, 0);
    } else if (currentIndex == 2) {
      setComponent(<PersonalForm />);
      window.scrollTo(0, 0);
    } else if (currentIndex == 3) {
      setComponent(<PreferenceForm />);
      window.scrollTo(0, 0);
    } else {
      setCurrentIndex(0);
      window.scrollTo(0, 0);
    }
  }, [currentIndex]);

  return (
    <section>
      <img
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: '-10',
        }}
        src={background}
        alt=""
        className="d-none d-lg-block"
      />
      <div style={{ paddingBlock: '95px' }} className="container ms-auto">
        <div className="d-flex justify-content-center align-items-center  ">
          <div
            style={{
              width: '40px',
              height: '40px',
            }}
            className="image"
          >
            <img style={{ height: '100%' }} src={logo} alt="" />
          </div>
          <h2 className="" style={{ marginBottom: '0' }}>
            Complete Your Profile{' '}
          </h2>
        </div>
        <div
          className="formContainer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="form shadow rounded mt-4 p-4 "
            style={{
              width: '60rem',
              backgroundColor: '#fafafa',
            }}
          >
            <div className=" my-5">{component}</div>
          </div>
        </div>
        <div className="formButtons d-flex justify-content-center p-5">
          <Button className="me-3" variant="outline-dark" onClick={handleBack}>
            Back
          </Button>
          <Button style={{ backgroundColor: '#0f6990' }} onClick={handleNext}>
            Next Page
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfile;

function EducationForm() {
  return (
    <div className="educationContainer">
      <h3
        className="d-flex justify-content-center"
        style={{ color: '#0f6990' }}
      >
        Education Info
      </h3>
      <div className="Tenth">
        <h4 className="p-4">
          <span style={{ color: '#0f6990' }}>Tenth </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2 "
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label>Full time</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label>Part time</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Twelfth">
        <h4 className="p-4">
          <span style={{ color: '#0f6990' }}>Twelfth </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label>Full time</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label>Part time</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Undergraduate">
        <h4 className="p-4">
          <span style={{ color: '#0f6990' }}>Undergraduate </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label>Full time</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label>Part time</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Postgraduate ">
        <h4 className="p-4">
          <span style={{ color: '#0f6990' }}>Postgraduate </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label>Full time</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label>Part time</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Phd">
        <h4 className="p-4">
          <span style={{ color: '#0f6990' }}>PhD</span>Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input className="profileInputBox " type="text" />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label>Full time</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label>Part time</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageForm() {
  return (
    <div>
      <h3
        className="d-flex justify-content-center"
        style={{ color: '#0f6990' }}
      >
        Language Proficiency
      </h3>
      <div className="p-5 fw-bolder ">
        <div>
          <p style={{ fontSize: '17px' }}>
            Do you have good communication skill in English?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input type="radio" id="fulltime" name="modOfstudy" checked />
              <label className="ms-2">Yes</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">No</label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p style={{ fontSize: '17px' }}>
            Are you comfortable spending few months in learning a new language?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input type="radio" id="fulltime" name="modOfstudy" checked />
              <label className="ms-2">Yes</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">No</label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p style={{ fontSize: '17px' }}>
            Have you got any language proficiency?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input type="radio" id="fulltime" name="modOfstudy" checked />
              <label className="ms-2">Yes</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">No</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Which language?

            </label>
            <input
              className="profileInputBox "
              placeholder="Enter Language"
              type="text"
            />
           
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Which certificate?

            </label>
            
            <input
              className="profileInputBox  "
              placeholder="Certificate Name"
              type="text"
            />
             <p className="mt-2 " style={{ color: 'gray' }}>
            Level of proficiency

            </p>
          </div>
        </div>


      </div>
      <div className="PreferenceForm p-5">
        <h3
          className="d-flex justify-content-center fw-bolder mb-5"
          style={{ color: '#0f6990' }}
        >
          Preferences
        </h3>
        <div className="row">
          <div className="col ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Preferred course
            </label>
            <input
              className="profileInputBox "
              placeholder="Course Name"
              type="text"
            />
          </div>
          <div className="col">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Preferred Country
            </label>
            <input
              className="profileInputBox "
              placeholder="Country Name"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
            What is your budget including the flight ticket?
            </label>
            <input
              className="profileInputBox "
              placeholder="Enter Budget"
              type="text"
            />
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Do you wish to Avail Scholarship?
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input type="radio" id="fulltime" name="modOfstudy" checked />
                <label className='ms-2'>Yes</label>
              </div>

              <div className="ms-5">
                <input name="modOfstudy" type="radio" id="parttime" />
                <label className='ms-2' >No</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5 ">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Religion
            </label>
            <input
              className="profileInputBox "
              placeholder="Enter Religion"
              type="text"
            />
            <p className="mt-2 " style={{ color: 'gray' }}>
              Due to Reservation and Scholarships
            </p>
          </div>
          <div className="col mt-5  ">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Do you wish to Avail Scholarship?
            </label>
            <input
              className="profileInputBox  "
              placeholder="Enter Cast"
              type="text"
            />
            <p className="mt-2 " style={{ color: 'gray' }}>
              Due to Reservation and Scholarships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalForm() {
  return (
    <div>
      <h3
        className="d-flex justify-content-center fw-bolder mb-5"
        style={{ color: '#0f6990' }}
      >
        Work Experience
      </h3>
      <h4 className="ms-4">
        <p style={{ color: '#0f6990' }}>Internship Details</p>
      </h4>
      <div className="row p-4 d-flex">
        <div className="col ">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            Position
          </label>
          <input
            className="profileInputBox "
            placeholder="Position(Job Role)"
            type="text"
          />
        </div>
        <div className="col ">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            Company Name
          </label>
          <input className="profileInputBox " type="text" />
        </div>
        <div className="col mt-5 ">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            From
          </label>
          <input className="profileInputBox " type="date" />
        </div>
        <div className="col mt-5  ">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            To
          </label>
          <input className="profileInputBox " type="date" />
        </div>
      </div>
      <h4 className="ms-4 mt-3 ">
        <p style={{ color: '#0f6990' }}>Work Details</p>
      </h4>
      <div className="row p-4 d-flex">
        <div className="col ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Position
          </label>
          <input
            className="profileInputBox "
            placeholder="Position(Job Role)"
            type="text"
          />
        </div>
        <div className="col ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Company Name
          </label>
          <input className="profileInputBox " type="text" />
        </div>
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            From
          </label>
          <input className="profileInputBox " type="date" />
        </div>
        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            To
          </label>
          <input className="profileInputBox " type="date" />
        </div>
      </div>
    </div>
  );
}

function PreferenceForm() {
  return (
    <div className="PreferenceForm p-4">
      <h3
        className="d-flex justify-content-center fw-bolder"
        style={{ color: '#0f6990' }}
      >
        Additional Details
      </h3>


      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Full Name
          </label>
          <input
            className="profileInputBox "
            placeholder="Enter Full Name"
            type="text"
          />
        </div>

        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block "
            style={{ fontSize: '17px' }}
          >
            Phone

          </label>
          <input
            className="profileInputBox  "
            placeholder="Enter Phone Number"
            type="number"
          />
        </div>
      </div>



      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Email
          </label>
          <input
            className="profileInputBox "
            placeholder="Enter Email"
            type="text"
          />
        </div>

        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block "
            style={{ fontSize: '17px' }}
          >
            Address

          </label>
          <input
            className="profileInputBox  "
            placeholder="Enter Address"
            type="text"
          />
        </div>
      </div>
      

      

      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Nationality
          </label>
          <input
            className="profileInputBox "
            placeholder="Enter Nationality"
            type="text"
          />
        </div>

        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block "
            style={{ fontSize: '17px' }}
          >
            Date Of Birth
          </label>
          <input
            className="profileInputBox  "
            placeholder="Enter Date Of Birth"
            type="date"
          />
        </div>
      </div>
      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Intake
          </label>
          <input
            className="profileInputBox "
            placeholder="Enter Intake"
            type="text"
          />
        </div>
        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block"
            style={{ fontSize: '17px' }}
          >
            Year Of Study
          </label>
          <input
            className="profileInputBox  "
            placeholder="Enter Year Of Study"
            type="text"
          />
        </div>
      </div>

      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Gender
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                type="radio"
                className=""
                id="fulltime"
                name="modOfstudy"
                checked
              />
              <label className="ms-2">Male</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">Female</label>
            </div>
            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">Other</label>
            </div>
          </div>
        </div>

        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block "
            style={{ fontSize: '17px' }}
          >
            Marital status
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                type="radio"
                className=""
                id="fulltime"
                name="modOfstudy"
                checked
              />
              <label className="ms-2">Married</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">Single</label>
            </div>
            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">Divorced</label>
            </div>
          </div>
        </div>
      </div>

      {/* Marital status */}
      

      <div className="row">
        <div className="col mt-5 ">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Do you wish to Apply for a spouse visa ?
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                type="radio"
                className=""
                id="fulltime"
                name="modOfstudy"
                checked
              />
              <label className="ms-2">Yes</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">No</label>
            </div>
          </div>
        </div>

        <div className="col mt-5  ">
          <label
            htmlFor=""
            className="fw-bolder mb-2 d-block "
            style={{ fontSize: '17px' }}
          >
            Do you have kids?
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                type="radio"
                className=""
                id="fulltime"
                name="modOfstudy"
                checked
              />
              <label className="ms-2">Yes</label>
            </div>

            <div className="ms-5">
              <input name="modOfstudy" type="radio" id="parttime" />
              <label className="ms-2">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
