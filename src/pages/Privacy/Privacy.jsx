import { Link } from "react-router-dom";
import Logo from "../../assets/logo3.png";

function Privacy({ setShow, setSidebarShow }) {
   document.title = "Privacy & Policy | Findr";

   setShow(false);
   setSidebarShow(false);
   return (
      <div className="mt-5 mb-5">
         <div
            className="container d-flex justify-content-start shadow rounded"
            style={{ marginTrim: "500px" }}
         >
            <div className="p-4 ">
               <img
                  className=" mt-4 "
                  style={{ width: "120px" }}
                  src={Logo}
                  alt=""
               />

               <h2 style={{ marginTop: "30px" }}>Privacy Policy</h2>
               <p className=" " style={{ fontSize: "13px" }}>
                  Last updated on Aug 18 2024
               </p>
               <p className="mt-5">
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
               </p>
               <br />
               <p>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy
               </p>
               <h4 className="mt-5">Interpretation and Definitions</h4>
               <h5 className="mt-4">Interpretation</h5>
               <p className="mt-4">
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
               </p>
               <h5 className="mt-4">Definitions</h5>
               <p className="p-4">For the purposes of this Privacy Policy:</p>
               <ol>
                  <ul style={{ display: "list-item" }}>
                     <span className="fw-bold">Account</span> means a unique
                     account created for You to access our Service or parts of
                     our Service.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Affiliate </span> means an entity
                     that controls, is controlled by or is under common control
                     with a party, where "control" means ownership of 50% or
                     more of the shares, equity interest or other securities
                     entitled to vote for election of directors or other
                     managing authority.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Company </span>(referred to as
                     either "the Company", "We", "Us" or "Our" in this
                     Agreement) refers to Findr.study.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Cookies</span>are small files
                     that are placed on Your computer, mobile device or any
                     other device by a website, containing the details of Your
                     browsing history on that website among its many uses.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Country </span>refers to: Kerala,
                     India
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Device </span> means any device
                     that can access the Service such as a computer, a cellphone
                     or a digital tablet.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Personal Data</span> is any
                     information that relates to an identified or identifiable
                     individual.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Service</span> refers to the
                     Website.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Service Provider </span>means any
                     natural or legal person who processes the data on behalf of
                     the Company. It refers to third-party companies or
                     individuals employed by the Company to facilitate the
                     Service, to provide the Service on behalf of the Company,
                     to perform services related to the Service or to assist the
                     Company in analyzing how the Service is used.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Usage Data </span> refers to data
                     collected automatically, either generated by the use of the
                     Service or from the Service infrastructure itself (for
                     example, the duration of a page visit).
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Website</span> refers to
                     Findr.study, accessible from https://findr.study
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">You </span> means the individual
                     accessing or using the Service, or the company, or other
                     legal entity on behalf of which such individual is
                     accessing or using the Service, as applicable.
                  </ul>
               </ol>
               <h4 className="mt-5">Collecting and Using Your Personal Data</h4>
               <h5 className="mt-4">Types of Data Collected</h5>
               <p className="fw-bold">Personal Data</p>
               <p className="mt-4">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Email address
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     First name and last name
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Phone number
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Address, State, Province, ZIP/Postal code, City
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Usage Data
                  </ul>
               </ol>
               <p className="fw-bold">Usage Data</p>
               <p className="mt-4">
                  Usage Data is collected automatically when using the Service.
               </p>
               <p>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
               </p>
               <p>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
               </p>
               <p>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
               </p>
               <p className="fw-bold">Tracking Technologies and Cookies</p>
               <p className="p-4">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">
                        Cookies or Browser Cookies.
                     </span>{" "}
                     A cookie is a small file placed on Your Device. You can
                     instruct Your browser to refuse all Cookies or to indicate
                     when a Cookie is being sent. However, if You do not accept
                     Cookies, You may not be able to use some parts of our
                     Service. Unless you have adjusted Your browser setting so
                     that it will refuse Cookies, our Service may use Cookies.
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Web Beacons..</span> Certain
                     sections of our Service and our emails may contain small
                     electronic files known as web beacons (also referred to as
                     clear gifs, pixel tags, and single-pixel gifs) that permit
                     the Company, for example, to count users who have visited
                     those pages or opened an email and for other related
                     website statistics (for example, recording the popularity
                     of a certain section and verifying system and server
                     integrity).
                  </ul>
               </ol>
               <p>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser.
               </p>
               <p>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">
                        Necessary / Essential Cookies
                     </span>
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Type: Session Cookies</span>
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">Administered by: Us</span>
                  </ul>
               </ol>
               <p>
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Cookies Policy / Notice Acceptance Cookies
                  </ul>
               </ol>
               <p>Type: Persistent Cookies</p>
               <p>Administered by: Us</p>
               <p>
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Functionality Cookies
                  </ul>
               </ol>
               <p>Type: Persistent Cookies</p>
               <p>Administered by: Us</p>
               <p>
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
               </p>
               <p>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
               </p>
               <h5 className="mt-4 fw-bold">Use of Your Personal Data</h5>
               <p className="mt-4">
                  The Company may use Personal Data for the following purposes:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">
                        To provide and maintain our Service
                     </span>
                     , including to monitor the usage of our Service.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">To manage Your Account:</span> to
                     manage Your registration as a user of the Service. The
                     Personal Data You provide can give You access to different
                     functionalities of the Service that are available to You as
                     a registered user.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">
                        For the performance of a contract
                     </span>{" "}
                     the development, compliance and undertaking of the purchase
                     contract for the products, items or services You have
                     purchased or of any other contract with Us through the
                     Service.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">To contact You:</span> To contact
                     You by email, telephone calls, SMS, or other equivalent
                     forms of electronic communication, such as a mobile
                     application's push notifications regarding updates or
                     informative communications related to the functionalities,
                     products or contracted services, including the security
                     updates, when necessary or reasonable for their
                     implementation.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">To provide You :</span> with
                     news, special offers and general information about other
                     goods, services and events which we offer that are similar
                     to those that you have already purchased or enquired about
                     unless You have opted not to receive such information.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">To manage Your requests:</span>{" "}
                     To attend and manage Your requests to Us.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">For business transfers:</span> We
                     may use Your information to evaluate or conduct a merger,
                     divestiture, restructuring, reorganization, dissolution, or
                     other sale or transfer of some or all of Our assets,
                     whether as a going concern or as part of bankruptcy,
                     liquidation, or similar proceeding, in which Personal Data
                     held by Us about our Service users is among the assets
                     transferred
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">For other purposes:</span> We may
                     use Your information for other purposes, such as data
                     analysis, identifying usage trends, determining the
                     effectiveness of our promotional campaigns and to evaluate
                     and improve our Service, products, services, marketing and
                     your experience.
                  </ul>
               </ol>
               <p className="mt-4">
                  We may share Your personal information in the following
                  situations:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">With Service Providers:</span> We
                     may share Your personal information with Service Providers
                     to monitor and analyze the use of our Service, to contact
                     You.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">For business transfers:</span> We
                     may share or transfer Your personal information in
                     connection with, or during negotiations of, any merger,
                     sale of Company assets, financing, or acquisition of all or
                     a portion of Our business to another company.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">With Affiliates:</span> We may
                     share Your information with Our affiliates, in which case
                     we will require those affiliates to honor this Privacy
                     Policy. Affiliates include Our parent company and any other
                     subsidiaries, joint venture partners or other companies
                     that We control or that are under common control with Us.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">With business partners:</span> We
                     may share Your information with Our business partners to
                     offer You certain products, services or promotions.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">With other users:</span> when You
                     share personal information or otherwise interact in the
                     public areas with other users, such information may be
                     viewed by all users and may be publicly distributed
                     outside.
                  </ul>
               </ol>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     <span className="fw-bold">With Your consent:</span> We may
                     disclose Your personal information for any other purpose
                     with Your consent.
                  </ul>
               </ol>
               <h5 className="mt-4 fw-bold">Retention of Your Personal Data</h5>
               <p className="mt-4">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
               </p>
               <p className="mt-4">
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
               </p>
               <h5 className="mt-4 fw-bold">Delete Your Personal Data</h5>
               <p className="mt-4">
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
               </p>
               <p className="mt-4">
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
               </p>
               <p className="mt-4">
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
               </p>
               <p className="mt-4">
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
               </p>
               <h5 className="mt-4 fw-bold">
                  Disclosure of Your Personal Data
               </h5>
               <p className="fw-bold mt-4">Business Transactions</p>
               <p className="mt-4">
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy
               </p>
               <p className="fw-bold mt-4">Law enforcement</p>
               <p className="mt-4">
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
               </p>
               <p className="fw-bold mt-4">Other legal requirements</p>
               <p className="mt-4">
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Comply with a legal obligation
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Protect and defend the rights or property of the Company
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Prevent or investigate possible wrongdoing in connection
                     with the Service
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Protect the personal safety of Users of the Service or the
                     public
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Protect against legal liability
                  </ul>
               </ol>
               <h5 className="mt-4 fw-bold">Security of Your Personal Data</h5>

               <p className="mt-4">
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
               </p>
               <h5 className="mt-4 fw-bold">Security of Your Personal Data</h5>
               <p className="mt-4">
                  Our Service does not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 13
                  without verification of parental consent, We take steps to
                  remove that information from Our servers.
               </p>
               <p className="mt-4">
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent's consent before We collect
                  and use that information.
               </p>

               <p className="mt-4">
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
               </p>
               <p className="mt-4">
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
               </p>
               <h5 className="mt-4 fw-bold">Changes to this Privacy Policy</h5>
               <p className="mt-4">
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
               </p>
               <p className="mt-4">
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.
               </p>
               <p className="mt-4">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
               </p>
               <h5 className="mt-4 fw-bold">Contact Us</h5>
               <p className="mt-4">
                  If you have any questions about this Privacy Policy, You can
                  contact us:
               </p>
               <ol>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Using email: <Link>support@findr.study</Link>
                  </ul>
                  <ul className="mt-4" style={{ display: "list-item" }}>
                     Using phone number: <Link>+91 62822 55880</Link>
                  </ul>
               </ol>
            </div>
         </div>
      </div>
   );
}

export default Privacy;
