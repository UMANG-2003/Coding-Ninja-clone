import React from "react";
import { RocketIcon } from "lucide-react"; 

const LearningModel = () => {
  return (
    <section className=" py-20 px-4 md:px-16 w-[90%] mx-auto rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex items-center space-x-4 mb-10">
          <h2 className="text-xl md:text-xl font-semibold mx-auto my-10 flex items-center gap-2 text-gray-800">
          <div className="">
            <RocketIcon className="text-black w-6 h-6" />
          </div>
            A 3-stage learning model to turn you into a Coding Ninja
          </h2>
        </div>

        <div className="space-y-12 md:space-y-10">
         
          <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
            <div className="w-2 h-full bg-cyan-200 hidden md:block"></div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Learn</h3>
              <p className="text-gray-600 max-w-lg">
                Experience seamless learning with problem-solving modules,
                leaderboard, and awards.
              </p>
            </div>
          </div>

       
          <div className="flex md:flex-row flex-col md:items-start items-center gap-6 border-l-4 border-black pl-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Excel</h3>
              <p className="text-gray-600 max-w-lg">
                Track your skill level and make meaningful progress for you to
                grow.
              </p>
            </div>
           
            <div className="flex items-center space-x-2 mt-4">
    
              <img
                src="https://files.codingninjas.com/web_excel-33055.webp"
                alt="Skill Meter"
                className="absolute w-[700px]"
              />
            </div>
          </div>

        
          <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
            <div className="w-2 h-full bg-cyan-200 hidden md:block"></div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Standout</h3>
              <p className="text-gray-600 max-w-lg">
                Standout to recruiters, showcase ratings, get feedback and
                interview insights.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h4 className="font-semibold mb-4 text-gray-700">Skill Meter</h4>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2">
              <p className="font-medium text-sm">Loops</p>
              <div className="bg-gray-200 w-60 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded w-[70%]" />
              </div>
            </div>
            <div className="text-sm text-gray-600">7 problems solved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModel;
