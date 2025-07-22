import React from "react";

const ImportantLinks = () => {
  return (
    <section className="bg-black text-white py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-xl mx-auto justify-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Important Links</h2>

        <div className="space-y-6 text-xs sm:text-sm">
          <div>
            <p className="font-semibold">Job Bootcamp for professionals</p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 text-blue-400 underline">
              <a href="#">Web Development Bootcamp (MERN & Springboot)</a>
              <span className="hidden sm:inline">|</span>
              <a href="#">Data Analytics Job Bootcamp</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">IIT Certifications for Professionals</p>
            <div className="mt-1 text-blue-400 underline">
              <a href="#">
                PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold">IIT Certifications for Students</p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 text-blue-400 underline">
              <a href="#">
                Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#">
                Training and Internship Certification in Advanced DSA by E&ICT Academy, IIT Guwahati
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">We accept payments using:</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-5 sm:h-6" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-5 sm:h-6" />
              <img src="https://files.codingninjas.com/upi-32277.webp" alt="UPI" className="h-5 sm:h-6" />
              <div className="px-2 py-1 bg-gray-200 text-black text-xs rounded">No Cost EMI</div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-blue-600 rounded text-white text-xs">
                <span className="text-base sm:text-lg">✔</span> 100% safe & secure payment
              </div>
              <img
                src="https://files.codingninjas.com/razorpay-32276.webp"
                alt="Razorpay"
                className="h-5 sm:h-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full sm:w-fit mx-auto bg-black py-6 sm:py-10">
        <p className="text-5xl sm:text-9xl text-white font-bold text-center relative inline-block shine-text">
          Coding Ninjas
        </p>
      </div>
    </section>
  );
};

export default ImportantLinks;
