import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChartLine,
  faLayerGroup,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showJob, setShowJob] = useState(false);
  const [showIIT, setShowIIT] = useState(false);
  const [showLaunches, setShowLaunches] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleJobEnter = () => setShowJob(true);
  const handleJobLeave = () => setShowJob(false);
  const handleIITEnter = () => setShowIIT(true);
  const handleIITLeave = () => setShowIIT(false);
  const handleLaunchesEnter = () => setShowLaunches(true);
  const handleLaunchesLeave = () => setShowLaunches(false);

  const [mobileDropdown, setMobileDropdown] = useState({
    job: false,
    iit: false,
    launches: false,
  });

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <nav className="bg-white h-18 w-full fixed top-0 left-0 z-10 max-md:hidden">
        <div className="flex justify-between items-center h-full mx-auto w-[70%] relative">
          <img src="/new_cn_logo-29829.svg" alt="" />
          <ul className="flex gap-10 text-black font-semibold text-md">
            <div
              className="relative"
              onMouseEnter={handleJobEnter}
              onMouseLeave={handleJobLeave}
            >
              <li className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative">
                Job Botcamp <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showJob && (
                <div className="bg-white h-60 w-[450px] p-5 rounded-bl-2xl rounded-br-2xl z-0 absolute left-0 top-full shadow-lg">
                  <div className="text-gray-500">For Graduates</div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center">
                      <FontAwesomeIcon
                        icon={faLayerGroup}
                        className="text-2xl border-[2px] border-gray-500 p-2 rounded-lg"
                      />
                      <div>
                        <p>Full Stack Web Development with GenAI</p>
                        <p className="text-gray-500 text-sm font-light">
                          Certified by Coding Ninjas
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-5 items-center">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-2xl border-[2px] border-gray-500 p-2 rounded-lg"
                      />
                      <div>
                        <p>Data Analytics with GenAI</p>
                        <p className="text-gray-500 text-sm font-light">
                          Certified by Coding Ninjas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={handleIITEnter}
              onMouseLeave={handleIITLeave}
              className="relative"
            >
              <li className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative">
                IIT Certifications <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showIIT && (
                <div className="bg-white w-[400px] h-auto rounded-bl-2xl rounded-br-2xl z-0 absolute left-0 top-full shadow-lg flex flex-col gap-3 p-5">
                  <div className="font-bold text-lg mb-2">
                    IIT Certifications
                  </div>
                  <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-xl border-[2px] border-gray-500 p-2 rounded-lg"
                    />
                    <div>
                      <p>Data Science & Machine Learning</p>
                      <p className="text-gray-500 text-sm font-light">
                        Certified by IIT Roorkee
                      </p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-xl border-[2px] border-gray-500 p-2 rounded-lg"
                    />
                    <div>
                      <p>Full Stack Web Development</p>
                      <p className="text-gray-500 text-sm font-light">
                        Certified by IIT Guwahati
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={handleLaunchesEnter}
              onMouseLeave={handleLaunchesLeave}
              className="relative"
            >
              <li className="cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-2xl relative">
                New Launches <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {showLaunches && (
                <div className="bg-white h-auto w-[500px] rounded-bl-2xl rounded-br-2xl z-0 absolute left-[29%] top-full shadow-lg flex flex-col gap-3 p-5">
                  <div className="font-bold text-lg mb-2">New Launches</div>
                  <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-xl border-[2px] border-gray-500 p-2 rounded-lg"
                    />
                    <div>
                      <p>AI Product Management Bootcamp</p>
                      <p className="text-gray-500 text-sm font-light">
                        Latest industry-focused program
                      </p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-4 items-center">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-xl border-[2px] border-gray-500 p-2 rounded-lg"
                    />
                    <div>
                      <p>Prompt Engineering with GenAI</p>
                      <p className="text-gray-500 text-sm font-light">
                        Hands-on with GenAI tools
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ul>
          <div>
            <div className="flex gap-2 items-center">
              <div className="px-3 py-2 rounded-lg border-[1px] border-black text-sm font-semibold">
                My Classroom
              </div>
              <div className="px-3 py-2 rounded-full bg-gray-200 text-sm font-semibold">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white w-full fixed top-0 left-0 z-10 md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <img src="/new_cn_logo-29829.svg" alt="" className="h-8" />
          <button
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="bg-white shadow-lg w-full absolute top-full left-0">
            <ul className="flex flex-col gap-2 text-black font-semibold text-md px-4 py-2">
              <li
                className="cursor-pointer flex justify-between items-center py-2 border-b"
                onClick={() => toggleMobileDropdown("job")}
              >
                <span>Job Botcamp</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {mobileDropdown.job && (
                <div className="bg-gray-50 rounded-lg p-2 mb-2">
                  <div className="text-gray-500">For Graduates</div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                      <FontAwesomeIcon
                        icon={faLayerGroup}
                        className="text-xl border-[2px] border-gray-500 p-1 rounded-lg"
                      />
                      <div>
                        <p className="text-sm">
                          Full Stack Web Development with GenAI
                        </p>
                        <p className="text-gray-500 text-xs font-light">
                          Certified by Coding Ninjas
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="text-xl border-[2px] border-gray-500 p-1 rounded-lg"
                      />
                      <div>
                        <p className="text-sm">Data Analytics with GenAI</p>
                        <p className="text-gray-500 text-xs font-light">
                          Certified by Coding Ninjas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <li
                className="cursor-pointer flex justify-between items-center py-2 border-b"
                onClick={() => toggleMobileDropdown("iit")}
              >
                <span>IIT Certifications</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {mobileDropdown.iit && (
                <div className="bg-gray-50 rounded-lg p-2 mb-2">
                  <div className="font-bold text-md mb-2">
                    IIT Certifications
                  </div>
                  <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-lg border-[2px] border-gray-500 p-1 rounded-lg"
                    />
                    <div>
                      <p className="text-sm">Data Science & Machine Learning</p>
                      <p className="text-gray-500 text-xs font-light">
                        Certified by IIT Roorkee
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-lg border-[2px] border-gray-500 p-1 rounded-lg"
                    />
                    <div>
                      <p className="text-sm">Full Stack Web Development</p>
                      <p className="text-gray-500 text-xs font-light">
                        Certified by IIT Guwahati
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <li
                className="cursor-pointer flex justify-between items-center py-2 border-b"
                onClick={() => toggleMobileDropdown("launches")}
              >
                <span>New Launches</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
              {mobileDropdown.launches && (
                <div className="bg-gray-50 rounded-lg p-2 mb-2">
                  <div className="font-bold text-md mb-2">New Launches</div>
                  <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="text-lg border-[2px] border-gray-500 p-1 rounded-lg"
                    />
                    <div>
                      <p className="text-sm">AI Product Management Bootcamp</p>
                      <p className="text-gray-500 text-xs font-light">
                        Latest industry-focused program
                      </p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex gap-3 items-center">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-lg border-[2px] border-gray-500 p-1 rounded-lg"
                    />
                    <div>
                      <p className="text-sm">Prompt Engineering with GenAI</p>
                      <p className="text-gray-500 text-xs font-light">
                        Hands-on with GenAI tools
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <li className="py-2">
                <div className="px-3 py-2 rounded-lg border-[1px] border-black text-sm font-semibold mb-2">
                  My Classroom
                </div>
                <div className="px-3 py-2 rounded-full bg-gray-200 text-sm font-semibold inline-block">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="md:hidden h-16"></div>
    </>
  );
}

export default Navbar;
