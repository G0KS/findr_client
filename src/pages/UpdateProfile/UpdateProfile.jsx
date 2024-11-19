//-------------------------------------
// signup validation
//-------------------------------------
// import background from '../../assets/background.svg';
import bg1 from '../../assets/bg-1.svg';
import bg2 from '../../assets/bg-2.svg';
import next from '../../assets/chevron-double-right.svg';
import add from '../../assets/add.svg';
import remove from '../../assets/Delete.svg';
import check from '../../assets/check.svg';

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
      setComponent(<WorkForm />);
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
    <section style={{ position: 'relative' }}>
      <img
        style={{
          position: 'absolute',
          width: '80%',
          zIndex: '-10',
        }}
        src={bg1}
        alt="bg1"
        className="d-none d-lg-block"
      />
      <img
        src={bg2}
        alt="bg2"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '60%',
          zIndex: '-10',
        }}
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
            className="shadow rounded mt-4"
            style={{
              width: '960px',
              backgroundColor: '#fafafa',
            }}
          >
            <div className="my-5">{component}</div>
          </div>
        </div>
        <div className="formButtons d-flex justify-content-center p-5">
          <Button className="me-3" variant="outline-dark" onClick={handleBack}>
            Back
          </Button>
          {currentIndex < 3 ? (
            <Button style={{ backgroundColor: '#0f6990' }} onClick={handleNext}>
              Next
              <img
                className="ms-1"
                style={{ width: '15px' }}
                src={next}
                alt=""
              />
            </Button>
          ) : (
            <Button style={{ backgroundColor: '#2e7d32' }} onClick={handleNext}>
              Submit
              <img
                className="ms-1"
                style={{ width: '15px' }}
                src={check}
                alt=""
              />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default UpdateProfile;

function EducationForm() {
  return (
    <div className="educationContainer p-lg-5">
      <h3
        className="d-flex justify-content-center fw-bold"
        style={{ color: '#0f6990' }}
      >
        Education Info
      </h3>
      <div className="tenth">
        <h4 className="p-4 pb-0">
          <span style={{ color: '#0f6990' }}>Tenth </span>
          Qualification
        </h4>
        <div className="row p-4 d-flex">
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2 "
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Institution"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input
              className="profileInputBox "
              placeholder="CGPA/Percentage "
              type="text"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input
              className="profileInputBox "
              placeholder="Enter Year"
              type="text"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input
                  className="cursor "
                  type="radio"
                  id="fulltime"
                  name="tenthOption"
                />
                <label className="ps-2 cursor" htmlFor="fulltime">
                  Full time
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="tenthOption"
                  type="radio"
                  id="parttime"
                />
                <label className="ps-2 cursor" htmlFor="parttime">
                  Part time
                </label>
              </div>
              <div className="ms-5">
                <input
                  className="cursor"
                  name="tenthOption"
                  type="radio"
                  id="tenthDistance"
                  style={{ height: '15px', width: '15px' }}
                />
                <label className="ps-2 cursor" htmlFor="tenthDistance">
                  Distance
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twelfth">
        <h4 className="p-4 pb-0">
          <span style={{ color: '#0f6990' }}>Twelfth </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Institution"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="CGPA / Percentage "
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Year"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input
                  className="cursor"
                  type="radio"
                  id="twelfthFulltime"
                  name="twelfth"
                />
                <label className="ps-2 cursor" htmlFor="twelfthFulltime">
                  Full time
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="twelfth"
                  type="radio"
                  id="twelfthParttime"
                />
                <label className="ps-2 cursor" htmlFor="twelfthParttime">
                  Part time
                </label>
              </div>
              <div className="ms-5">
                <input
                  className="cursor"
                  name="twelfth"
                  type="radio"
                  id="twelfthDistance"
                />
                <label className="ps-2 cursor" htmlFor="twelfthDistance">
                  Distance
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="undergraduate">
        <h4 className="p-4 pb-0">
          <span style={{ color: '#0f6990' }}>Undergraduate </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Institution"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="CGPA / Percentage "
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Year"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input
                  className="cursor"
                  type="radio"
                  id="ugFulltime"
                  name="undergraduate"
                />
                <label className="ps-2 cursor" htmlFor="ugFulltime">
                  Full time
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="undergraduate"
                  type="radio"
                  id="ugPartTime"
                />
                <label className="ps-2 cursor" htmlFor="ugPartTime">
                  Part time
                </label>
              </div>
              <div className="ms-5">
                <input
                  className="cursor"
                  name="undergraduate"
                  type="radio"
                  id="ugDistance"
                />
                <label className="ps-2 cursor" htmlFor="ugDistance">
                  Distance
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="postgraduate ">
        <h4 className="p-4 pb-0">
          <span style={{ color: '#0f6990' }}>Postgraduate </span>
          Qualification
        </h4>

        <div className="row p-4 d-flex">
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Institution "
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="CGPA / Percentage"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Year"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input
                  className="cursor"
                  type="radio"
                  id="pgFulltime"
                  name="postgraduate"
                />
                <label className="ps-2 cursor" htmlFor="pgFulltime">
                  Full time
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="postgraduate"
                  type="radio"
                  id="pgParttime"
                />
                <label className="ps-2 cursor" htmlFor="pgParttime">
                  Part time
                </label>
              </div>
              <div className="ms-5">
                <input
                  className="cursor"
                  name="postgraduate"
                  type="radio"
                  id="pgDistance"
                />
                <label className="ps-2 cursor" htmlFor="pgDistance">
                  Distance
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="phd">
        <h4 className="p-4 pb-0">
          <span style={{ color: '#0f6990' }}>PhD </span>Qualification
        </h4>
        <div className="row p-4 d-flex">
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Institution
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Institution"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Marks
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="CGPA / Percentage "
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="d-block fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Year
            </label>
            <input
              className="profileInputBox "
              type="text"
              placeholder="Enter Year"
            />
          </div>
          <div className="col mt-5">
            <label
              htmlFor=""
              className="fw-bolder mb-2"
              style={{ fontSize: '17px' }}
            >
              Mode Of Study
            </label>
            <div className="fw-bolder d-flex mt-2">
              <div className="">
                <input
                  className="cursor"
                  type="radio"
                  id="phdFulltime"
                  name="phd"
                />
                <label className="ps-2 cursor" htmlFor="phdFulltime">
                  Full time
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="phd"
                  type="radio"
                  id="phdParttime"
                />
                <label className="ps-2 cursor" htmlFor="phdParttime">
                  Part time
                </label>
              </div>
              <div className="ms-5">
                <input
                  className="cursor"
                  name="phd"
                  type="radio"
                  id="phdDistance"
                />
                <label className="ps-2 cursor" htmlFor="phdDistance">
                  Distance
                </label>
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
    <div className="languageContainer p-4 p-lg-5">
      <h3
        className="d-flex justify-content-center fw-bold"
        style={{ color: '#0f6990' }}
      >
        Language Proficiency
      </h3>
      <div className=" fw-bolder ">
        <div>
          <p style={{ fontSize: '17px' }}>
            Do you have good communication skill in English?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                className="cursor"
                type="radio"
                id="languageQ1Y"
                name="languageQ1"
              />
              <label className="ps-2 cursor" htmlFor="languageQ1Y">
                Yes
              </label>
            </div>

            <div className="ms-5">
              <input
                className="cursor"
                name="languageQ1"
                type="radio"
                id="languageQ1N"
              />
              <label className="ps-2 cursor" htmlFor="languageQ1N">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p style={{ fontSize: '17px' }}>
            Are you comfortable spending few months in learning a new language?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                className="cursor"
                type="radio"
                id="languageQ2Y"
                name="languageQ2"
              />
              <label className="ps-2 cursor" htmlFor="languageQ2Y">
                Yes
              </label>
            </div>

            <div className="ms-5">
              <input
                name="languageQ2"
                className="cursor"
                type="radio"
                id="languageQ2N"
              />
              <label className="ps-2 cursor" htmlFor="languageQ2N">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p style={{ fontSize: '17px' }}>
            Have you got any language proficiency?
          </p>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                className="cursor"
                type="radio"
                id="languageQ3Y"
                name="languageQ3"
              />
              <label className="ps-2 cursor" htmlFor="languageQ3Y">
                Yes
              </label>
            </div>

            <div className="ms-5">
              <input
                className="cursor"
                name="languageQ3"
                type="radio"
                id="languageQ3N"
              />
              <label className="ps-2 cursor" htmlFor="languageQ3N">
                No
              </label>
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
              placeholder="Certificate Name ( Level of proficiency )"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="formButtons d-flex justify-content-center my-5">
        <Button style={{ backgroundColor: '#0f6990' }}>
          Add more <img style={{ width: '16px' }} src={add} alt="" />
        </Button>
      </div>
      
      {/* Added Language */}
      <div className="row my-4">
        <div className="col-lg-5 col-10 pt-3">
          <div className="shadow rounded p-3">
            <p className="mb-0" style={{ color: '#0f6990' }}>
              language
            </p>
          </div>
        </div>
        <div className="col-1 my-auto ms-lg-0 ms-2 pt-3">
          <img src={remove} alt="" />
        </div>
      </div>
      <div className="preferenceForm ">
        <h3
          className="d-flex justify-content-center fw-bolder"
          style={{ color: '#0f6990' }}
        >
          Preferences
        </h3>
        <div className="row">
          <div className="col mt-5">
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
          <div className="col mt-5">
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
                <input
                  className="cursor"
                  type="radio"
                  id="scholarshipY"
                  name="scholarship"
                />
                <label className="ps-2 cursor" htmlFor="scholarshipY">
                  Yes
                </label>
              </div>

              <div className="ms-5">
                <input
                  className="cursor"
                  name="scholarship"
                  type="radio"
                  id="scholarshipN"
                />
                <label className="ps-2 cursor " htmlFor="scholarshipN">
                  No
                </label>
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
            <p className="mt-2 " style={{ color: 'gray', fontSize: '14px' }}>
              *Due to Reservation and Scholarships
            </p>
          </div>
          <div className="col mt-5">
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
            <p className="mt-2 " style={{ color: 'gray', fontSize: '14px' }}>
              *Due to Reservation and Scholarships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkForm() {
  return (
    <div className="p-lg-5">
      <h3
        className="d-flex justify-content-center fw-bolder mb-5"
        style={{ color: '#0f6990' }}
      >
        Work Experience
      </h3>

      <h4 className="ms-4">
        <p style={{ color: '#0f6990' }}>Internship Details</p>
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
          />
        </div>
        <div className="col mt-5">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            From
          </label>
          <input className="profileInputBox " type="date" />
        </div>
        <div className="col mt-5">
          <label htmlFor="" className="d-block fw-bolder mb-2">
            To
          </label>
          <input className="profileInputBox " type="date" />
        </div>
      </div>

      <div className="formButtons d-flex justify-content-center p-4">
        <Button style={{ backgroundColor: '#0f6990' }}>
          Add more <img style={{ width: '16px' }} src={add} alt="" />
        </Button>
      </div>

      {/* Added Internship */}
      <div className="px-4">
        <div className="row my-4">
          <div className="col-lg-5 col-10">
            <div className="shadow rounded p-3">
              <p className="mb-0" style={{ color: '#0f6990' }}>
                sample job
              </p>
              <p className="mb-0">company</p>
            </div>
          </div>
          <div className="col-1 my-auto ms-lg-0 ms-2">
            <img src={remove} alt="" />
          </div>
        </div>
      </div>

      <h4 className="ms-4">
        <p style={{ color: '#0f6990' }}>Work Details</p>
      </h4>
      <div className="row p-4 d-flex">
        <div className="col mt-5">
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
        <div className="col mt-5">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            Company Name
          </label>
          <input
            className="profileInputBox "
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="col mt-5">
          <label
            htmlFor=""
            className="d-block fw-bolder mb-2"
            style={{ fontSize: '17px' }}
          >
            From
          </label>
          <input className="profileInputBox " type="date" />
        </div>
        <div className="col mt-5">
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
      <div className="formButtons d-flex justify-content-center p-4">
        <Button style={{ backgroundColor: '#0f6990' }}>
          Add more <img style={{ width: '16px' }} src={add} alt="" />
        </Button>
      </div>

      {/* Added Work */}
      <div className="px-4">
        <div className="row my-4">
          <div className="col-lg-5 col-10">
            <div className="shadow rounded p-3">
              <p className="mb-0" style={{ color: '#0f6990' }}>
                sample job
              </p>
              <p className="mb-0">company</p>
            </div>
          </div>
          <div className="col-1 my-auto ms-lg-0 ms-2">
            <img src={remove} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PreferenceForm() {
  return (
    <div className="preferenceForm p-4 p-lg-5">
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
          <div className="fw-bolder d-flex mt-2 ">
            <div className="">
              <input
                type="radio"
                className="cursor"
                id="gender1"
                name="gender"
              />
              <label className="ps-2 cursor" htmlFor="gender1">
                Male
              </label>
            </div>

            <div className="ms-5 ">
              <input
                name="gender"
                className="cursor"
                type="radio"
                id="gender2"
              />
              <label className="ps-2 cursor" htmlFor="gender2">
                Female
              </label>
            </div>
            <div className="ms-5">
              <input
                name="gender"
                className="cursor"
                type="radio"
                id="gender3"
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
            style={{ fontSize: '17px' }}
          >
            Marital status
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input
                type="radio"
                className="cursor"
                id="mStatus1"
                name="maritalStatus"
              />
              <label className="ms-2 cursor" htmlFor="mStatus1">
                Married
              </label>
            </div>

            <div className="ms-5">
              <input
                name="maritalStatus"
                className="cursor"
                type="radio"
                id="mStatus2"
              />
              <label className="ps-2 cursor" htmlFor="mStatus2">
                Single
              </label>
            </div>
            <div className="ms-5">
              <input
                name="maritalStatus"
                className="cursor"
                type="radio"
                id="mStatus3"
              />
              <label className="ps-2 cursor" htmlFor="mStatus3">
                Divorced
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Marital status */}

      <div className="row">
        <div className="col-lg-6 col-12 mt-5">
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
                className="cursor"
                id="spouseY"
                name="spouseVisa"
              />
              <label className="ms-2 cursor" htmlFor="spouseY">
                Yes
              </label>
            </div>

            <div className="ms-5">
              <input
                name="spouseVisa"
                type="radio"
                id="spouseN"
                className="cursor"
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
            style={{ fontSize: '17px' }}
          >
            Do you have kids?
          </label>
          <div className="fw-bolder d-flex mt-2">
            <div className="">
              <input type="radio" className="cursor" id="kidsY" name="kids" />
              <label className="ps-2 cursor" htmlFor="kidsY">
                Yes
              </label>
            </div>

            <div className="ms-5">
              <input name="kids" type="radio" id="kidsN" className="cursor" />
              <label className="ps-2 cursor" htmlFor="kidsN">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
