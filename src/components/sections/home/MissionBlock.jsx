import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "../../../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const MissionBlock = () => {
  const sectionRef = useRef(null);

  // Extract list items into an array to keep the JSX clean (DRY Principle)
  const missionFeatures = [
    {
      title: "GPS-verified tracking",
      desc: "Field-level checkpoints across every construction site.",
    },
    {
      title: "Financial transparency",
      desc: "Disbursements published as they happen, line by line.",
    },
    {
      title: "National coverage",
      desc: "All 33 regions and 8 administrative areas, one map.",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none reverse",
        },
      });

      // Animate Image from the left
      tl.fromTo(
        ".mission-image",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      // Stagger Content elements from the bottom
      .fromTo(
        ".mission-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Image Area */}
        <div className="mission-image relative w-full rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#F0F5FB] aspect-square lg:aspect-[9/10] max-h-[380px] sm:max-h-[500px] lg:max-h-[640px] order-2 lg:order-1">
          <img
            src="src/assets/images/Our Mission01.png"
            alt="Road Construction Verification"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Right Column: Content Area */}
        <div className="flex flex-col items-start order-1 lg:order-2">
          <div className="mission-item">
            <span className="text-brand-amber text-xs sm:text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2px] sm:tracking-[2.75px]">
              Our Mission
            </span>
          </div>

          <h2 className="mission-item mt-3 sm:mt-4 mb-4 sm:mb-6 text-[#060D1A] text-[32px] sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold font-sora leading-[1.15]">
            Building Roads That <br className="hidden lg:block" /> Build Trust.
          </h2>

          <p className="mission-item mb-8 sm:mb-10 text-[#586474] text-sm sm:text-base md:text-lg font-jakarta leading-relaxed max-w-[500px]">
            Every kilometer of national road carries public money, donor
            commitments, and citizen expectations. We make every meter traceable
            — from the contract to the construction site.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[500px]">
            {missionFeatures.map((feature, index) => (
              <div key={index} className="mission-item flex items-start gap-4">
                {/* Icon Container */}
                <div className="w-7 h-7 mt-0.5 rounded-full bg-brand-amber/10 flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3332 8.66664C13.3332 12 10.9998 13.6666 8.2265 14.6333C8.08128 14.6825 7.92353 14.6802 7.77984 14.6266C4.99984 13.6666 2.6665 12 2.6665 8.66664V3.99997C2.6665 3.82316 2.73674 3.65359 2.86177 3.52857C2.98679 3.40355 3.15636 3.33331 3.33317 3.33331C4.6665 3.33331 6.33317 2.53331 7.49317 1.51997C7.63441 1.39931 7.81407 1.33301 7.99984 1.33301C8.1856 1.33301 8.36527 1.39931 8.5065 1.51997C9.67317 2.53997 11.3332 3.33331 12.6665 3.33331C12.8433 3.33331 13.0129 3.40355 13.1379 3.52857C13.2629 3.65359 13.3332 3.82316 13.3332 3.99997V8.66664Z"
                      stroke="#F2B52B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 7.99984L7.33333 9.33317L10 6.6665"
                      stroke="#F2B52B"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Text Content */}
                <div>
                  <h4 className="text-[#060D1A] text-sm sm:text-base font-semibold font-jakarta leading-tight mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#586474] text-xs sm:text-sm font-normal font-jakarta leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call To Action */}
          <Link
            to="/about"
            className="mission-item mt-8 sm:mt-10 group flex items-center gap-2 text-brand-amber text-sm font-semibold font-jakarta hover:text-amber-500 transition-colors w-max"
          >
            Learn more about our work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.33 8h9.34M8 3.33L12.67 8 8 12.67" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionBlock;
