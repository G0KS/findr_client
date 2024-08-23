import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { candidateUpdate } from '../../api/allApi';

function Profile({ setShow }) {
  setShow(true);
  const cards = [
    {
      id: 1,
      title: 'Tenth Qualification',
      institution: 'tenth_institution',
      marks: 'tenth_marks',
      mode: 'tenth_mode_of_study',
    },
    {
      id: 2,
      title: 'Twelfth Qualification',
      institution: 'twelfth_institution',
      marks: 'twelfth_marks',
      mode: 'twelfth_mode_of_study',
    },
    {
      id: 3,
      title: 'Undergraduate Qualification',
      institution: 'undergraduate_institution',
      marks: 'undergraduate_marks',
      mode: 'undergraduate_mode_of_study',
    },
    {
      id: 4,
      title: 'Postgraduate Qualification',
      institution: 'postgraduate_institution',
      marks: 'postgraduate_marks',
      mode: 'postgraduate_mode_of_study',
    },
    {
      id: 5,
      title: 'PhD Qualification',
      institution: 'phd_institution',
      marks: 'phd_marks',
      mode: 'phd_mode_of_study',
    },
    // Add more cards as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const Cards = ({ index, data }) => {
    const [inputData, setInputData] = useState({});

    const getInputData = (e) => {
      const { name, value } = e.target;
      setInputData({ ...inputData, [name]: value });
    };

    return (
      <div
        className="card active shadow p-5 mx-auto my-5 rounded-4"
        style={{ maxWidth: '700px' }}
      >
        <h3 className="card-title">{data.title}</h3>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <label htmlFor="" className="fs-4">
              Instituiton
            </label>
            <input
              type="text"
              placeholder="Institution Name"
              name={data.institution}
              onChange={(e) => getInputData(e)}
              className="shadow-sm border rounded-4 px-3 py-2 "
              style={{
                border: 'none',
                outline: 'none',
                width: '220px',
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
              name={data.marks}
              onChange={(e) => getInputData(e)}
              className="shadow-sm border rounded-4 px-3 py-2 "
              style={{
                border: 'none',
                outline: 'none',
                width: '220px',
              }}
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <label htmlFor="" className="fs-4">
              Mode of Study
            </label>
            <select
              className="shadow-sm border rounded-4 px-3 py-2 "
              name={data.mode}
              onChange={(e) => getInputData(e)}
              style={{
                border: 'none',
                outline: 'none',
                width: '220px',
              }}
            >
              <option defaultValue hidden>
                Mode of Study
              </option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Distance / Online">Distance / Online</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn text-light rounded-4 me-2"
              style={{ backgroundColor: '#0F6990' }}
              onClick={(e) => handlePrevious(e)}
              disabled={cards.length <= 1}
            >
              Prev
            </button>
            <button
              className="btn text-light rounded-4"
              style={{ backgroundColor: '#0F6990' }}
              onClick={(e) => handleNext(e, inputData)}
              disabled={cards.length <= 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleNext = (e, inputData) => {
    // handleSubmit(e, inputData);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleSubmit = async (e, inputData) => {
    e.preventDefault();
    const { tenth_institution, tenth_marks, tenth_mode_of_study } = inputData;
    if (!tenth_institution || !tenth_marks || !tenth_mode_of_study) {
      toast.warning('Fill all details');
    } else {
      const name = localStorage.getItem('findrData');
      const body = {
        name,
        doctype: 'Student',
        tenth_institution,
        tenth_marks,
        tenth_mode_of_study,
      };
      try {
        await candidateUpdate(body, name);
        toast.success('Updated');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section>
      <div style={{ paddingBlock: '100px' }} className="container ms-auto">
        <h1 className="text-center mt-5">
          Complete Your Profile {currentIndex}{' '}
        </h1>
        <div className="cardContainer">
          <Cards index={currentIndex} data={cards[currentIndex]} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
