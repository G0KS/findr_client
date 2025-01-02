import Logo from '../../assets/logo3.png';

function Terms({ setShow, setSidebarShow }) {
  document.title = "Terms & Conditions | Findr";

  setShow(false);
  setSidebarShow(false);
  return (
    <div className="mt-5 mb-5">
      <section className=" container flex items-center justify-center py-20 shadow rounded  mt-5">
        <img
          className="p-2 mt-4 ms-4"
          style={{ width: '150px' }}
          src={Logo}
          alt=""
        />
        <div className="rounded w-full p-5">
          <div className="flex flex-col space-y-1.5 p-7 lg:p-10 mt-2 mb-5">
            <h3 className="font-quicksand font-bold tracking-tight text-2xl lg:text-3xl">
              Terms and Conditions
            </h3>
            <p className="text-sm text-muted-foreground">
              Last updated on Aug 20 2024
            </p>
          </div>
          <div className="p-7 pt-0 lg:p-10 lg:pt-0 prose-sm max-w-none lg:prose lg:max-w-none">
            <p>
              For the purpose of these Terms and Conditions, The term "we",
              "us", "our" used anywhere on this page shall mean{' '}
              <strong>findr.study</strong>, whose registered/operational office
              is{' '}
              <strong>1024 Budapest. Lövőház utca 27/B 3. em. 1. ajtó</strong>.
              "you", “your”, "user", “visitor” shall mean any natural or legal
              person who is visiting our website and/or agreed to purchase from
              us.
            </p>
            <p>
              <strong>
                Your use of the website and/or purchase from us are governed by
                following Terms and Conditions:
              </strong>
            </p>
            <ul>
              <li>
                <p>
                  The content of the pages of this website is subject to change
                  without notice.
                </p>
              </li>
              <li>
                <p>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </p>
              </li>
              <li>
                <p>
                  Your use of any information or materials on our website and/or
                  product pages is entirely at your own risk, for which we shall
                  not be liable. It shall be your own responsibility to ensure
                  that any products, services or information available through
                  our website and/or product pages meet your specific
                  requirements.
                </p>
              </li>
              <li>
                <p>
                  Our website contains material which is owned by or licensed to
                  us. This material includes, but are not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </p>
              </li>
              <li>
                <p>
                  All trademarks reproduced in our website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </p>
              </li>
              <li>
                <p>
                  Unauthorized use of information provided by us shall give rise
                  to a claim for damages and/or be a criminal offense.
                </p>
              </li>
              <li>
                <p>
                  From time to time our website may also include links to other
                  websites. These links are provided for your convenience to
                  provide further information.
                </p>
              </li>
              <li>
                <p>
                  You may not create a link to our website from another website
                  or document without <strong>findr.study</strong>’s prior
                  written consent.
                </p>
              </li>
              <li>
                <p>
                  Any dispute arising out of use of our website and/or purchase
                  with us and/or any engagement with us is subject to the laws
                  of India .
                </p>
              </li>
              <li>
                <p>
                  We, shall be under no liability whatsoever in respect of any
                  loss or damage arising directly or indirectly out of the
                  decline of authorization for any Transaction, on Account of
                  the Cardholder having exceeded the preset limit mutually
                  agreed by us with our acquiring bank from time to time
                </p>
              </li>
            </ul>
            <h2 className="mt-4 mb-4">Cancellation and Refund</h2>
            <p>Last updated on Apr 3 2024</p>
            <p>
              Applicants cannot cancel their course application at any time .
            </p>
            <ul>
              <li>
                <p className="fw-bold">Refund Eligibility:</p>
                <ol>
                  <li>
                    If an applicant is not accepted into none of the suggested
                    courses, they are eligible for a full refund of the
                    application fee.
                  </li>
                  <li>
                    To qualify for a refund, the applicant must provide
                    necessary proof of rejection from all suggested courses.
                  </li>
                </ol>
              </li>
              <li>
                <p className="fw-bold mt-3">Refund Process:</p>
                <ol>
                  <li>
                    Once the necessary proof is received and verified, the
                    refund will be processed within 14 business days.
                  </li>
                  <li>
                    Refunds will be issued to the original payment method used
                    during the application process.
                  </li>
                </ol>
              </li>
              <li>
                <p className="fw-bold mt-3">Contact Information:</p>
                <ol>
                  <p>
                    For any questions or concerns regarding cancellations and
                    refunds, please contact our support team at
                    <a
                      className="ms-2"
                      style={{ textDecoration: 'none' }}
                      href=""
                    >
                      support@findr.study
                    </a>
                  </p>
                </ol>
              </li>
            </ul>
            <h2>Shipping and Delivery</h2>
            <p>Last updated on Aug 20 2024</p>
            <p>Shipping is not applicable for business.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
