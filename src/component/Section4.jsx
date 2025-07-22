import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Section4() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center text-white px-4 md:px-10 py-10 md:py-20">
        <img
          src="https://files.codingninjas.com/why-us2-33889.svg"
          alt=""
          className="w-40 md:w-auto"
        />
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[60%] mt-10 gap-8">
          <div className="flex flex-col bg-gray-800 rounded-2xl p-4 mt-10 w-full md:w-[55%]">
            <video
              id="whyus-video"
              playsInline
              muted
              autoPlay
              loop
              controls
              className="h-48 md:h-[352px] w-full rounded-xl"
              src="https://files.codingninjas.com/1-1-doubt-support-with-subtitle-2-33136.mp4"
            ></video>
            <div className="text-start mt-4">
              <h3 className="text-lg font-semibold text-orange-400">
                Ankush Singla
              </h3>
              <p className="text-sm">
                Co-Founder of Coding Ninjas | Mentor
              </p>
            </div>
          </div>

          <div className="w-full md:w-[45%]">
            <ul className="text-lg md:text-2xl font-bold flex flex-col gap-6 md:gap-10 text-start mt-10">
              <li className="flex items-center gap-2 hover:bg-gray-800 p-4 rounded-2xl cursor-pointer">
                <img
                  className="w-8 md:w-10"
                  src="https://files.codingninjas.com/live-one-one-doubt-support-32931.png"
                  alt=""
                />{" "}
                Fastest 1:1 doubt support
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-800 p-4 rounded-2xl cursor-pointer">
                <img
                  className="w-8 md:w-10"
                  src="https://files.codingninjas.com/stanford-iit-maang-faculty-32934.png"
                  alt=""
                />{" "}
                Stanford/IIT/MAANG faculty
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-800 p-4 rounded-2xl cursor-pointer">
                <img
                  className="w-8 md:w-10"
                  src="https://files.codingninjas.com/placement-assistance-32933.png"
                  alt=""
                />{" "}
                Placement assistance
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-lg md:text-xl font-bold text-center mt-20 md:mt-40 text-blue-600">
          The Coding Ninjas advantage
        </h1>
        <div className="bg-black text-white p-4 md:p-10 rounded-xl w-full md:w-[70%] mt-10 md:mt-20 mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="p-2 md:p-4"> </th>
                  <th className="p-2 md:p-4">Free resources</th>
                  <th className="p-2 md:p-4">Other courses</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Structured + problem solving based",
                  "Fastest 1:1 doubt support",
                  "Integrated prep platform",
                  "Profiles highlighted on Naukri",
                ].map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${
                      i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                    }`}
                  >
                    <td className="p-2 md:p-4">{item}</td>
                    <td className="p-2 md:p-4 text-center">✗</td>
                    <td className="p-2 md:p-4 text-center">
                      {i === 0 ? "✓" : "✗"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm mb-1 gap-2">
              <span className="flex items-center gap-2 font-semibold">
                <img
                  src="https://ninjasfiles.s3.amazonaws.com/0000000000001394.png"
                  alt="Coding Ninjas"
                  className="w-5 h-5"
                />
                codingninjas
              </span>
              <span className="text-pink-500 font-medium text-center md:text-right">
                Your dream role, faster and with confidence! ⚡
              </span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm gap-2">
            <span className="font-medium text-white/60">Others</span>
            <span className="text-white/60 text-center md:text-right">
              Average role, under-confident
            </span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
            <div className="bg-white/40 h-2 rounded-full w-[55%]"></div>
          </div>
        </div>
        <button className="mt-10 px-4 md:px-6 py-3 bg-orange-500 mx-auto text-white rounded hover:bg-orange-300 transition duration-300 font-bold cursor-pointer">
          Explore Offerings{" "}
          <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
        </button>
      </div>
    </>
  );
}

export default Section4;
