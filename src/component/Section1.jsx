import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Section1() {
return (
    <div
        className="absolute top-0 z-[-2] h-[180vh] max-md:h-[110vh] w-screen bg-[#18181b] bg-[radial-gradient(#ffffff33_1px,#18181b_1px)] bg-[size:30px_30px]"
    >
        <div>
            <div className="flex flex-col items-center mt-37 h-screen">
                <h2 className="text-2xl font-bold text-white mb-4 max-md:text-lg">
                    Restricted by opportunities?
                </h2>
                <p className="text-7xl text-center w-[48%] font-bold text-white mb-8 max-md:text-4xl max-md:w-[85%]">
                    Get the tech career you deserve. Faster.
                </p>
                <p className="text-lg text-center text-gray-500 mb-8 max-md:text-sm max-md:w-[85%]">
                    Structured coding courses that get you there faster with confidence.
                </p>
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-300 transition duration-300 font-bold cursor-pointer">
                    Explore Offerings <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
                </button>
            <div className="flex justify-center items-center mt-30 max-md:mt-15">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-[70%] rounded-[16px] max-md:w-[80%] max-md:rounded-[8px]"
                    src="https://files.codingninjas.com/hotstar-promo-1712578725.mp4"
                    poster=""
                ></video>
            </div>
            </div>
        </div>
    </div>
);
}

export default Section1;
