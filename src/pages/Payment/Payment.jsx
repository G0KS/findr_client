import React from 'react';
import paymentimg from '../../assets/paymentimg.jpeg';
function Payment({setShow,setSliderShow}) {
  setShow(true)
  setSliderShow(true)
  return (
    <section
      className="d-flex justify-content-center align-items-center "
      style={{
        height: '100vh',
        backgroundColor: '#0f6990',
        backgroundImage: 'linear-gradient(315deg, #0f6990  1%, #ffffff  45%)',
      }}
    >
      <div
        className="loginCard rounded-4 p-4 bg-white shadow-lg row"
        style={{
          width: '50rem',
          height: '25rem',
        }}
      >
        <div className="col d-flex align-items-center">
          <img src={paymentimg} alt="" style={{ width: '300px' }} />
        </div>
        <div className="col d-flex align-items-center">
          <div style={{ height: '70px', width: '70px' }}>
            <img src="" style={{ height: '100%' }} alt="" />
          </div>
          <div className="title">
            <h3 style={{ color: '#0F6990', fontSize: '40px' }}>Registration</h3>
            <p>
              Loremsuscipit natus mollitia tempora. Libero rerum voluptate
              aliquam saepe, eius ipsum! Voluptas!
            </p>
            <h3 className="fw-bolder" style={{ color: '#0F6990' }}>
              ₹2499
            </h3>
            <button
              type="submit"
              className="btn text-light mt-4 rounded "
              style={{
                backgroundColor: '#0F6990',
                // borderRadius: '20px',
                width: '100px',
                height: '40px',
              }}
            >
              Paynow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
