import React, { useState } from 'react';
import downArrow from '../../assets/down.svg';

function Faqpage() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      title: '1.What is findr.study, and what services do you offer??',
      answer:
        'findr.study is a platform that provides personalized course recommendations to students who wish to study abroad. Our expert panel suggests courses based on eligibility and preferences, and we also offer scholarship-backed courses.',
    },
    {
      title: '2.How does the course recommendation process work?',
      answer:
        'Our expert panel reviews your eligibility and preferences and suggests courses that match your profile. The process takes about two weeks, and the suggested courses will be available in the courses tab.',
    },
    {
      title: '3.What is the fee for your services, and how is it structured?',
      answer:
        ' Our total fee is 7499, split into two payments: 2499 at registration and 5000 to unlock course suggestions.',
    },
    {
      title:
        '4. What if I dont get accepted into any of the suggested courses?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis earum porro repellendus, explicabo placeat velit cumque quia magnam eos modi itaque asperiores doloribus consectetur dolorem ducimus autem quam necessitatibus.',
    },
    {
      title:
        '5. Can I apply to courses directly or through a consultancy?',
      answer:
        'You can apply directly or through any consultancy of your choice. We will provide course application links to facilitate the process..',
    },
    {
      title:
        '6.Who are the experts on your panel?',
      answer:
        'Our expert panel consists of alums and even members from scholarship councils of respective countries, ensuring authoritative and reliable guidance.',
    },
    {
      title:
        '7.How long does it take to get course suggestions?',
      answer:
        ' It takes about two weeks for the courses to be available in the courses tab.',
    },
    {
      title:
        '8.Is my payment secure?',
      answer:
        ' Yes, our payment gateway is secure, and your information is protected.',
    },
    {
      title:
        '9.Can I get a refund if Im not satisfied with the services?',
      answer:
        ' Please refer to our refund policy for details.',
    },
    {
      title:
        '10.How do I contact findr.study if I have more questions?',
      answer:
        'You can reach us through our contact page or email [insert email].',
    },
    
  ];
  return (
    <div>
      <section
        id="faqSection"
        className=" "
        style={{ paddingTop: '100px', paddingBottom: '10px' }}
      >
        <div className="faqTitle mb-5">
          <h2 className="fw-bold" style={{ marginInline: '18%' }}>
            Frequently Asked Questions
          </h2>
          <hr style={{ border: '1px solid light-gray' }} />
        </div>
        <div className="container d-flex flex-column align-items-center gap-4">
          {data.map((item, i) => (
            <div
              className="faq rounded shadow-sm p-3"
              onClick={() => toggle(i)}
              key={i}
            >
              <div className="question">
                <p className="d-flex justify-content-between align-items-center m-0">
                  {item.title}
                  <img src={downArrow} alt="down arrow" />
                </p>
              </div>
              <div className={selected === i ? 'answer show' : 'answer'}>
                <hr className="answerLine" />
                <p className="px-3 text-secondary">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faqpage;
