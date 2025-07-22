import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#20160f] text-[#d1cfcf] px-6 py-12 ">
      <div className="max-w-7xl grid md:grid-cols-4 gap-8 w-[70%] mx-auto">
      
        <div>
          <div className="mb-6">
            <img
              src="http://localhost:5173/new_cn_logo-29829.svg"
              alt="Coding Ninjas Logo"
              className="w-38 bg-amber-50 p-2 rounded-full mb-4"
            />
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-white mb-2">Contact us</h4>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> 1800-123-3598
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaEnvelope /> contact@codingninjas.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Our offerings</h4>
            <div className="mb-2 flex items-center gap-2">
              
              <span>job-bootcamp</span>
            </div>
            <div className="flex items-center gap-2">
              
              <span>code 360</span>
            </div>
          </div>
        </div>

      
        <div>
          <h4 className="font-semibold text-white mb-4">Coding Ninjas</h4>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
            <li>Pricing & refund policy</li>
            <li>Bug bounty</li>
            <li>Review</li>
            <li>Press release</li>
          </ul>
        </div>

   
        <div>
          <h4 className="font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2">
            <li>Job Bootcamp</li>
            <li>Code 360</li>
            <li>Professional Certifications</li>
            <li>Student Certifications</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Community</h4>
          <ul className="space-y-2">
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-[#333]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 w-[70%]">
        <p className="text-sm">Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex gap-4 text-white text-xl">
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
