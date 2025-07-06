import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showJob, setShowJob] = useState(false);

  // Handlers for mouse events
  const handleJobEnter = () => setShowJob(true);
  const handleJobLeave = () => setShowJob(false);

  return (
    <>
      <nav className='bg-white h-18 w-full absolute top-0 left-0 z-10'>
        <div className='flex justify-between items-center h-full px-60  mx-auto'>
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
                  className='bg-white h-60 w-[400px] rounded-bl-2xl rounded-br-2xl z-0 absolute left-0 top-full shadow-lg flex flex-col justify-center items-center text-black font-semibold text-lg'
                >
                  job
                </div>
              )}
            </div>

            
            <li className='cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl'>IIT Certifications <FontAwesomeIcon icon={faAngleDown} /></li>
            <li className='cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl'>New Launches <FontAwesomeIcon icon={faAngleDown} /></li>
          </ul>
          <div>
            <div className='flex gap-2 items-center mx-10'>
              <div className='px-3 py-2 rounded-lg border-[1px] border-black text-sm font-semibold'>My Classroom</div>
              <div className='px-3 py-2 rounded-full bg-gray-200 text-sm font-semibold mx-5'><FontAwesomeIcon icon={faUser} /></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar