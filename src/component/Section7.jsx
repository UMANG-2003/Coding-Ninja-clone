import React from "react";
import { RocketIcon } from "lucide-react";

const LearningModel = () => {
  return (
    <section className="py-10 px-2 md:px-16 w-full md:w-[90%] mx-auto rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-lg md:text-xl font-semibold mx-auto my-6 flex items-center gap-2 text-gray-800">
            <span>
              <RocketIcon className="text-black w-6 h-6" />
            </span>
            <span className="text-center">
              A 3-stage learning model to turn you into a Coding Ninja
            </span>
          </h2>
        </div>

        <div className="space-y-8 md:space-y-10">
          {/* Learn */}
          <div className="flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6">
            <div className="w-2 h-full bg-cyan-200 hidden md:block"></div>
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2">Learn</h3>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                Experience seamless learning with problem-solving modules,
                leaderboard, and awards.
              </p>
            </div>
          </div>

          {/* Excel */}
          <div className="flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6 border-l-0 md:border-l-4 border-black pl-0 md:pl-6">
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2">Excel</h3>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                Track your skill level and make meaningful progress for you to
                grow.
              </p>
            </div>
            <div className="flex items-center justify-center w-full md:w-auto mt-4 md:mt-0">
              <img
                src="https://files.codingninjas.com/web_excel-33055.webp"
                alt="Skill Meter"
                className="w-full max-w-xs md:max-w-[700px] relative"
              />
            </div>
          </div>

          {/* Standout */}
          <div className="flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6">
            <div className="w-2 h-full bg-cyan-200 hidden md:block"></div>
            <div className="w-full md:w-auto text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2">Standout</h3>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
                Standout to recruiters, showcase ratings, get feedback and
                interview insights.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <h4 className="font-semibold mb-4 text-gray-700 text-center md:text-left">Skill Meter</h4>
          <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2 w-full md:w-auto">
              <p className="font-medium text-sm">Loops</p>
              <div className="bg-gray-200 w-full md:w-60 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded w-[70%]" />
              </div>
            </div>
            <div className="text-sm text-gray-600 w-full md:w-auto text-center md:text-left">7 problems solved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModel;
