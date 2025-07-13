import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".card");

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="h-[300vh] bg-gray-900 flex flex-col items-center gap-40 text-white px-10 py-20"
      >
        {[
          {
            img: null,
            title: ["9 years of", "transforming", "tech careers"],
          },
          {
            img: "https://files.codingninjas.com/learner-32929.svg",
            bg: "bg-purple-900",
            title: ["1.5 Lac+ learners"],
            subtitle: "cracked dream roles at top tech companies",
          },
          {
            img: "https://files.codingninjas.in/placement-cell-fill-32935.svg",
            bg: "bg-green-400",
            title: ["1,400 Alumni in MAANG"],
            subtitle: "& more in 103/111 Unicorns",
          },
          {
            img: "https://files.codingninjas.com/average-ctc-fill-32937.svg",
            bg: "bg-pink-400",
            title: ["1 Cr+ highest CTC"],
            subtitle: "after completing the course",
          },
          {
            img: "https://files.codingninjas.com/hike-32944.svg",
            bg: "bg-blue-400",
            title: ["128% average hike"],
            subtitle: "via our placement cell",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="card text-7xl flex flex-col items-center justify-center font-bold gap-4"
          >
            {item.img && (
              <img
                className={`${item.bg} p-6 rounded-4xl`}
                src={item.img}
                alt=""
              />
            )}
            {item.title.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {item.subtitle && (
              <p className="text-2xl font-normal text-gray-400">
                {item.subtitle}
              </p>
            )}
          </div>
        ))}

        <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-300 transition duration-300 font-bold cursor-pointer">
        Explore Offerings{" "}
        <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
      </button>
      </div>
      
    </>
  );
}

export default Section3;
