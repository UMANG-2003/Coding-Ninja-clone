import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChartLine, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showJob, setShowJob] = useState(false);
  const [showIIT, setShowIIT] = useState(false);
  const [showLaunches, setShowLaunches] = useState(false);

  const handleJobEnter = () => setShowJob(true);
  const handleJobLeave = () => setShowJob(false);
  const handleIITEnter = () => setShowIIT(true);
  const handleIITLeave = () => setShowIIT(false);
  const handleLaunchesEnter = () => setShowLaunches(true);
  const handleLaunchesLeave = () => setShowLaunches(false);

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className='bg-white h-18 w-full absolute top-0 left-0 z-10 max-md:hidden'>
        <div className='flex justify-between items-center h-full px-60 mx-auto w-full relative'>
          <img src="/new_cn_logo-29829.svg" alt="" />
          <ul className='flex gap-10 text-black font-semibold text-md'>
            <div
              className="relative"
              onMouseEnter={handleJobEnter}
              onMouseLeave={handleJobLeave}
            >
              <li
                className='cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative '
              >
                Job Botcamp <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showJob && (
                <div
                  className='bg-white h-60 w-[450px] p-5 rounded-bl-2xl rounded-br-2xl z-0 absolute left-0 top-full shadow-lg '
                >
                  <div className='text-gray-500'>For Graduates</div>
                  <div className='flex flex-col gap-3 mt-3'>
                    <div className=' p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center'>
                      <FontAwesomeIcon icon={faLayerGroup} className='text-2xl border-[2px] border-gray-500 p-2 rounded-lg' />
                      <div>
                      <p>Full Stack Web Development with GenAI</p>
                      <p className='text-gray-500 text-sm font-light'>Certified by Coding Ninjas</p>
                      </div>
                      </div>
                      <hr />
                       <div className=' p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center'>
                      <FontAwesomeIcon icon={faChartLine} className='text-2xl border-[2px] border-gray-500 p-2 rounded-lg' />
                      <div>
                      <p>Data Analytics with GenAI</p>
                      <p className='text-gray-500 text-sm font-light'>Certified by Coding Ninjas</p>
                      </div>
                      </div>
                   
                   
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={handleIITEnter}
              onMouseLeave={handleIITLeave}
            >
              <li
                className='cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative '
              >
                IIT Certifications <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showIIT && (
                <div
                  className='bg-white w-full h-92 rounded-bl-2xl rounded-br-2xl z-0 absolute left-0 top-full shadow-lg flex flex-col justify-center items-center text-black font-semibold text-lg'
                  
                >
                  IIT Certifications
                </div>
              )}
            </div>

            <div
              onMouseEnter={handleLaunchesEnter}
              onMouseLeave={handleLaunchesLeave}
            >
              <li
                className='cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative '
              >
                New Launches <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showLaunches && (
                <div
                  className='bg-white h-40 w-[500px] rounded-bl-2xl rounded-br-2xl z-0 absolute left-[29%] top-full shadow-lg flex flex-col justify-center items-center text-black font-semibold text-lg'
                >
                  New Launches
                </div>
              )}
            </div>
          </ul>
          <div>
            <div className='flex gap-2 items-center mx-10'>
              <div className='px-3 py-2 rounded-lg border-[1px] border-black text-sm font-semibold'>My Classroom</div>
              <div className='px-3 py-2 rounded-full bg-gray-200 text-sm font-semibold mx-5'><FontAwesomeIcon icon={faUser} /></div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar for smaller screens */}
      <div>
        
      </div>

    </>
  );
}

export default Navbar