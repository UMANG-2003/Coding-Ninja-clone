import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoubtSupportSection = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      [line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current],
      {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

return (
    <section
        ref={containerRef}
        className="bg-black text-white px-6 py-16 md:py-24 flex items-start gap-4 md:gap-10"
    >
        <div className="w-[70%] mx-auto flex flex-col items-start gap-6">
            <p
                ref={line1Ref}
                className="text-sm text-white mb-10 font-semibold hover:text-gray-400 transition-colors duration-200"
            >
                Always available when you get stuck
            </p>
            <h2
                ref={line2Ref}
                className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-6 hover:text-gray-400 transition-colors duration-200"
            >
                Resolve doubts any time through chat, <br /> voice notes or calling.
            </h2>
            <p
                ref={line3Ref}
                className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-6 hover:text-gray-400 transition-colors duration-200"
            >
                500+ dedicated Teaching Assistants to resolve your doubts quickly
            </p>
            <p
                ref={line4Ref}
                className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight mb-6 hover:text-gray-400 transition-colors duration-200"
            >
                5/5 rating for 90% doubt resolutions
            </p>
        </div>
    </section>
);
};

export default DoubtSupportSection;
