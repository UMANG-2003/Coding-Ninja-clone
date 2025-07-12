import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faChartLine } from "@fortawesome/free-solid-svg-icons";

function Section2() {
  return (
    <>
      <div className="w-full h-[100vh] bg-white  flex flex-col p-10 max-md:p-4 max-md:h-auto max-md:top-[110vh]">
        <h1 className="text-8xl font-bold text-gray-300 text-center my-12 max-md:text-5xl max-md:my-6 flex-wrap">
          OUR OFFERINGS
        </h1>

        <div className="ml-52 my-7 max-md:ml-0 max-md:text-center">
          <span className="text-xl font-bold text-black max-md:text-lg">
            Job Botcamp
          </span>
          <span className="bg-violet-100 text-sm font-bold py-1 px-3 ml-2 rounded-tr-full rounded-br-full max-md:ml-1">
            for graduates
          </span>
        </div>

        <div className="flex gap-5 mt-10 items-center justify-center flex-wrap max-md:flex-col max-md:gap-4 max-md:mt-6">
          <div className="flex flex-col shadow-lg shadow-gray-300 rounded-lg w-[500px] max-md:w-full">
            <div className="bg-purple-50 p-10 rounded-t-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center max-md:p-4 max-md:gap-3">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-4xl border-[2px] border-gray-500 p-4 rounded-full max-md:text-2xl max-md:p-2"
              />
              <div>
                <p className="text-xl font-bold max-md:text-base">
                  Full Stack Web Development with GenAI
                </p>
              </div>
            </div>

            <div className="bg-white w-full h-10 rounded-lg p-7 flex justify-between items-center max-md:p-3 max-md:text-xs max-md:h-auto">
              <p>140+ Hrs of content</p>
              <p>600+ Problems</p>
              <p>10k+ Learners</p>
            </div>
          </div>
          <div className="flex flex-col shadow-lg shadow-gray-300 rounded-lg w-[500px] max-md:w-full">
            <div className="bg-purple-50 p-10 rounded-t-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center max-md:p-4 max-md:gap-3">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl border-[2px] border-gray-500 p-4 rounded-full max-md:text-2xl max-md:p-2"
              />
              <div>
                <p className="text-xl font-bold max-md:text-base">
                  Data Analytics with GenAI
                </p>
              </div>
            </div>

            <div className="bg-white w-full h-10 rounded-lg p-7 flex justify-between items-center max-md:p-3 max-md:text-xs max-md:h-auto">
              <p>100+ Hrs of content</p>
              <p>300+ Problems</p>
              <p>2000+ Learners</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[150vh] bg-yellow-50  flex flex-col p-10 max-md:p-4  max-md:top-[200vh]">
        <div className="flex gap-10 mt-10 items-center w-[72%] mx-auto flex-wrap max-md:flex-col max-md:gap-4 max-md:mt-6 max-md:overflow-y-auto">
          <div className="w-72 h-96 bg-white shadow-lg shadow-gray-300 rounded-xl p-5 flex flex-col justify-between relative max-md:w-full">
            <div className="w-10 h-10 bg-white border-[1px] border-gray-300 rounded-lg flex items-center justify-center absolute top-27 left-7">
              <img
                src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                alt=""
              />
            </div>
            <img
              src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
              alt=""
            />
            <p className="text-lg font-medium">
              PG Certification in Data Analytics with GenAI
            </p>
            <p className="text-amber-900 font-medium text-sm bg-yellow-50 w-fit px-2 py-1">
              E&ICT Academy, IIT Guwahati
            </p>
            <div className="w-[95%] h-[1px] bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center">
              <span className="flex gap-4 items-center text-sm font-medium text-gray-500">
                <img
                  src="https://files.codingninjas.com/chatgpt-home-page-v3-1733408297.webp"
                  alt=""
                />
                <img
                  src="https://files.codingninjas.com/home-page-v3-app-1733395395.svg"
                  alt=""
                />
                <img
                  src="https://files.codingninjas.com/google-analytics-1733395394.svg"
                  alt=""
                />
              </span>
              <p className="text-sm font-medium text-gray-500">6 months</p>
            </div>
          </div>

          <div className="w-72 h-96 bg-white shadow-lg shadow-gray-300 rounded-xl p-5 flex flex-col justify-between relative max-md:w-full">
            <div className="w-10 h-10 bg-white border-[1px] border-gray-300 rounded-lg flex items-center justify-center absolute top-27 left-7">
              <img
                src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                alt=""
              />
            </div>
            <img
              src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
              alt=""
            />
            <p className="text-lg font-medium">
              PG Certification in Data Science with GenAI
            </p>
            <p className="text-amber-900 font-medium text-sm bg-yellow-50 w-fit px-2 py-1">
              E&ICT Academy, IIT Guwahati
            </p>
            <div className="w-[95%] h-[1px] bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center">
              <span className="flex gap-4 items-center text-sm font-medium text-gray-500">
                <img
                  src="https://files.codingninjas.in/python-1-1719309672.svg"
                  alt=""
                />
                <img
                  src="https://files.codingninjas.in/machine-learning-2-1750067569.svg"
                  alt=""
                />
                <img
                  src="https://files.codingninjas.in/data-science-2-1750067569.svg"
                  alt=""
                />
              </span>
              <p className="text-sm font-medium text-gray-500">9 months</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-10 items-center w-[72%] mx-auto flex-wrap max-md:flex-col max-md:gap-4 max-md:mt-6 max-md:overflow-y-auto">
          <div className="w-72 h-96 bg-white shadow-lg shadow-gray-300 rounded-xl p-5 flex flex-col justify-between relative max-md:w-full">
            <div className="w-10 h-10 bg-white border-[1px] border-gray-300 rounded-lg flex items-center justify-center absolute top-27 left-7">
              <img
                className="rounded-lg"
                src="https://files.codingninjas.in/frame-1437253617-1736850284.webp"
                alt=""
              />
            </div>
            <img
              className="h-29 rounded-lg"
              src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
              alt=""
            />
            <p className="text-lg font-medium">
              Training and Internship Certification in Advanced DSA
            </p>
            <p className="text-amber-900 font-medium text-sm bg-yellow-50 w-fit px-2 py-1">
              IITM Pravartak, TIH IIT Madras
            </p>
            <div className="w-[95%] h-[1px] bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center">
              <span className="flex gap-4 items-center text-sm font-medium text-gray-500">
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/image-7-1733478713.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/image-8-1733478712.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/image-9-1733478711.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/image-591-1733478709.webp"
                  alt=""
                />
              </span>
              <p className="text-sm font-medium text-gray-500">4 months</p>
            </div>
          </div>
          <div className="w-72 h-96 bg-white shadow-lg shadow-gray-300 rounded-xl p-5 flex flex-col justify-between relative max-md:w-full">
            <div className="w-10 h-10 bg-white border-[1px] border-gray-300 rounded-lg flex items-center justify-center absolute top-27 left-7">
              <img
                className="rounded-lg"
                src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                alt=""
              />
            </div>
            <img
              className="h-29 rounded-lg"
              src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
              alt=""
            />
            <p className="text-lg font-medium">
              Training and Internship Certification in Data Analytics
            </p>
            <p className="text-amber-900 font-medium text-sm bg-yellow-50 w-fit px-2 py-1">
              E&ICT Academy, IIT Guwahati
            </p>
            <div className="w-[95%] h-[1px] bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center">
              <span className="flex gap-4 items-center text-sm font-medium text-gray-500">
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/microsoft-excel-1727278090.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/mysql-1727278092.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/python-1727278094.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/power-bi-1727278093.webp"
                  alt=""
                />
              </span>
              <p className="text-sm font-medium text-gray-500">4 months</p>
            </div>
          </div>
          <div className="w-72 h-96 bg-white shadow-lg shadow-gray-300 rounded-xl p-5 flex flex-col justify-between relative max-md:w-full">
            <div className="w-10 h-10 bg-white border-[1px] border-gray-300 rounded-lg flex items-center justify-center absolute top-27 left-7">
              <img
                className="rounded-lg"
                src="https://files.codingninjas.in/frame-1437253617-1736850284.webp"
                alt=""
              />
            </div>
            <img
              className="h-29 rounded-lg"
              src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
              alt=""
            />
            <p className="text-lg font-medium">
              Training and Internship Certification in Full Stack Web
              Development
            </p>
            <p className="text-amber-900 font-medium text-sm bg-yellow-50 w-fit px-2 py-1">
              IITM Pravartak, TIH IIT Madras
            </p>
            <div className="w-[95%] h-[1px] bg-gray-300 mx-auto"></div>
            <div className="flex justify-between items-center">
              <span className="flex gap-4 items-center text-sm font-medium text-gray-500">
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.in/react-1743832035.svg"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.com/image-7-1733478713.webp"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.in/full-stack-node-js-1743832099.svg"
                  alt=""
                />
                <img
                  className="w-6 h-6"
                  src="https://files.codingninjas.in/js-1743832131.svg"
                  alt=""
                />
              </span>
              <p className="text-sm font-medium text-gray-500">4 months</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] bg-white  flex flex-col p-10 max-md:p-4 max-md:h-auto max-md:top-[110vh]">
        <div className="ml-52 my-7 max-md:ml-0 max-md:text-center">
          <span className="text-xl font-bold text-black max-md:text-lg">
            New Launches
          </span>
          <span className="bg-violet-100 text-sm font-bold py-1 px-3 ml-2 rounded-tr-full rounded-br-full max-md:ml-1">
            for graduates
          </span>
        </div>

        <div className="flex gap-5 mt-10 items-center justify-center flex-wrap max-md:flex-col max-md:gap-4 max-md:mt-6">
          <div className="flex flex-col shadow-lg shadow-gray-300 rounded-lg w-[500px] max-md:w-full">
            <div className="bg-purple-50 p-10 rounded-t-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center max-md:p-4 max-md:gap-3">
              <img
                className="p-2 bg-white rounded-full max-md:text-2xl max-md:p-2"
                src="https://files.codingninjas.in/frame-2087323878-1749044071.svg"
                alt=""
              />
              <div>
                <p className="text-xl font-bold max-md:text-base">
                  Advanced Certification in GenAI & Multi Agent Systems for Tech
                  Professionals
                </p>
              </div>
            </div>

            <div className="bg-white w-full h-10 rounded-lg p-7 flex justify-between items-center max-md:p-3 max-md:text-xs max-md:h-auto">
              <p>100+ Hrs of content</p>
              <p>300+ Problems</p>
              <p>500+ Learners</p>
            </div>
          </div>
          <div className="flex flex-col shadow-lg shadow-gray-300 rounded-lg w-[500px] max-md:w-full">
            <div className="bg-purple-50 p-10 rounded-t-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center max-md:p-4 max-md:gap-3">
              <img
                className="p-2 h-16 w-20 bg-white max-md:text-2xl max-md:p-2"
                src="https://files.codingninjas.com/output-onlinepngtools-1-1742818734.webp"
                alt=""
              />
              <div>
                <p className="text-xl font-bold max-md:text-base">
                  PG Certification in GenAI for Non-Tech Professionals by IITM
                  Pravartak
                </p>
              </div>
            </div>

            <div className="bg-white w-full h-10 rounded-lg p-7 flex justify-between items-center max-md:p-3 max-md:text-xs max-md:h-auto">
              <p>100+ Hrs of content</p>
              <p>300+ Problems</p>
              <p>500+ Learners</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
