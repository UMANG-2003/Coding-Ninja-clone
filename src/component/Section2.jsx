import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faChartLine } from "@fortawesome/free-solid-svg-icons";

function Section2() {
return (
    <>
        <div className="w-full h-[70vh] bg-white absolute top-[180vh] flex flex-col p-10 max-md:p-4 max-md:h-auto max-md:top-[110vh]">
            <h1 className="text-8xl font-bold text-gray-300 text-center my-12 max-md:text-5xl max-md:my-6 flex-wrap">
                OUR OFFERINGS
            </h1>

            <div className="ml-52 my-7 max-md:ml-0 max-md:text-center">
                <span className="text-xl font-bold text-black max-md:text-lg">Job Botcamp</span>
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
    </>
);
}

export default Section2;
