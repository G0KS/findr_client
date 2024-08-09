import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';
import hero from '../../assets/hero.svg';

function Home() {
  return (
    <>
      {/* hero section */}
      <section className="container py-5">
        <div>
          <Row>
            <Col style={{ width: '50px' }}>
              <img style={{ width: '100%' }} src={hero} alt="" />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <h1 style={{fontSize:"50px"}} >Your Gateway to <br /> Global <span style={{color:"#0f6990"}} >Education</span></h1>
            </Col>
          </Row>
        </div>

        {/* about us */}
        <div
          className="text-center d-flex flex-lg-row flex-column   justify-content-between align-items-center my-5 bg-body-tertiary rounded-3 p-4"
          style={{
            backgroundImage:
              ' linear-gradient(270deg, #0f6990 0%, #80D0C7 100%)  ',
          } } 
        >
          <h1 style={{ width: '100%',fontSize:"50px", color:"white" }}>What we do</h1>
          <p style={{ width: '100%', color:"#ffff" }}>
            At Findr, we understand that studying abroad is a life-changing
            decision. It opens doors to unparalleled opportunities for personal
            growth, academic excellence, and cultural enrichment. However,
            navigating the vast sea of educational options can be overwhelming.
            That&#39;s where we come in.
          </p>
        </div>

        {/* services section */}
        <div>
          <h1 className="text-center">Our <span style={{color:"#0f6990"}} >Services</span></h1>
          <div className="p-5">
            <p className="mb-0 text-center">
              At Findr, we specialize in providing expert consultation to
              students aspiring to study abroad. Our team of experienced
              advisors, hailing from diverse academic backgrounds and global
              regions, is dedicated to guiding you through every step of the
              process.
            </p>
          </div>
        </div>
        <div className="cardContainer my-3 mx-5 mx-lg-1 d-flex justify-content-between align-items-center flex-wrap row-gap-3">
          <div
            className="cardBody border p-4 shadow "
            style={{ width: '19rem', height: '26rem', borderRadius: '16px', backgroundImage: "linear-gradient(338deg, #0f6990 64%, #66d1cf 100%)",color:"#ffff" }}
          >
            <div
              className="icon d-flex align-items-center justify-content-center mb-3"
              style={{
                borderRadius: '50%',
                backgroundColor: '#0F6990',
                width: '50px',
                height: '50px',
              }}
            >
              <span className="material-symbols-outlined fs-2 text-light">
                person
              </span>
            </div>
            <h5 className="fw-bold mb-3">Tailored Consultation</h5>
            <p>
              We believe that each student is unique, and their educational
              journey should reflect their individual aspirations and goals. Our
              consultation services are personalized to suit your specific
              needs, ensuring that you receive guidance tailored to your
              academic interests, career ambitions, and personal preferences.
            </p>
          </div>
          <div
            className="cardBody border p-4 shadow"
            style={{ width: '19rem', height: '26rem', borderRadius: '16px' }}
          >
            <div
              className="icon d-flex align-items-center justify-content-center mb-3 "
              style={{
                borderRadius: '50%',
                backgroundColor: '#0F6990',
                width: '50px',
                height: '50px',
              }}
            >
              <span className="material-symbols-outlined fs-2 text-light">
                language
              </span>
            </div>
            <h5 className="fw-bold mb-3">
              Curated Courses from Around the Globe
            </h5>
            <p>
              With access to a vast network of educational institutions
              worldwide, we curate the best courses that align with your
              academic pursuits. Whether you dream of studying engineering in
              Germany, business in the United States, or literature in the
              United Kingdom, we have the expertise to match you with the
              perfect program.
            </p>
          </div>
          <div
            className="cardBody border p-4 shadow"
            style={{ width: '19rem', height: '26rem', borderRadius: '16px' }}
          >
            <div
              className="icon d-flex align-items-center justify-content-center mb-3"
              style={{
                borderRadius: '50%',
                backgroundColor: '#0F6990',
                width: '50px',
                height: '50px',
              }}
            >
              <span className="material-symbols-outlined fs-2 text-light">
                task_alt
              </span>
            </div>
            <h5 className="fw-bold mb-3">No Admission or Visa </h5>
            <p>
              We don&#39;t do admissions or visa services in Findr. We just pick
              the best courses for you. We provide a comprehensive range of
              courses from universities around the globe, without any specific
              preference for country or institution. Our goal is to help you
              find the best educational opportunities based on your needs and
              interests.
            </p>
          </div>
          <div
            className="cardBody border p-4 shadow"
            style={{ width: '19rem', height: '26rem', borderRadius: '16px' }}
          >
            <div
              className="icon d-flex align-items-center justify-content-center mb-3"
              style={{
                borderRadius: '50%',
                backgroundColor: '#0F6990',
                width: '50px',
                height: '50px',
              }}
            >
              <span className="material-symbols-outlined fs-2 text-light">
                currency_rupee_circle
              </span>
            </div>
            <h5 className="fw-bold mb-3">Affordable Pricing</h5>
            <p>
              We believe that quality education should be accessible to all.
              That&#39;s why we offer our consultation services at a competitive
              price of INR 7499. Additionally, for those seeking scholarship
              opportunities, we provide specialized guidance at an affordable
              rate of INR 2499.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
