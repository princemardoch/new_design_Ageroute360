import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "../../../hooks/useGSAP";
import vectorImage from "../../../assets/images/Vector.png";
import tenderBgImage from "../../../assets/images/projectBannerBG.jpg";


const TendersHero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".tenders-hero-overlay",
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 },
    )
      .fromTo(
        ".tenders-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
        "-=1.2",
      )
      .fromTo(
        ".tenders-stat-card",
        { x: 50, y: 50, rotation: 0, opacity: 0 },
        {
          x: 0,
          y: 0,
          rotation: 12,
          opacity: 1,
          duration: 1,
          clearProps: "rotation",
        },
        "-=0.6",
      );

    const counter = document.querySelector(".tenders-counter-value");
    if (counter) {
      const target = parseFloat(counter.getAttribute("data-target"));
      gsap.to(
        counter,
        {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function () {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML);
          },
        },
        "-=0.4",
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[65vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={tenderBgImage}
          alt="Tenders Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="tenders-hero-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[860px]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            <div className="tenders-hero-text">Tender </div>
            <div className="tenders-hero-text text-brand-amber">
              Opportunities
            </div>
          </h1>
          <p className="tenders-hero-text text-white/80 text-lg md:text-xl lg:text-[32px] font-normal font-jakarta leading-snug lg:leading-[48px] max-w-[800px]">
            Strategic infrastructure procurement and project management for a
            connected nation. Access high-value road network contracts and
            development frameworks.
          </p>
        </div>

        <div className="flex justify-start w-full lg:w-auto mt-8 lg:mt-0 pb-10 lg:pb-0">
          <div className="tenders-stat-card origin-top-left md:rotate-[12deg] p-6 lg:p-8 bg-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex items-center gap-5 group hover:bg-white/15 transition-colors shrink-0">
            <div className="w-14 h-14 bg-brand-amber/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg
                width="29"
                height="31"
                viewBox="0 0 29 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2605 21.7037L22.3702 14.4034L20.9204 12.1972L12.0169 18.0478L9.06574 13.5566L6.85956 15.0064L11.2605 21.7037ZM2.61135 26.6538C1.89323 26.5052 1.33138 26.1223 0.925808 25.5051C0.520235 24.8879 0.391744 24.2203 0.540337 23.5021L4.3227 5.2227C4.47129 4.50458 4.85419 3.94273 5.47139 3.53716C6.0886 3.13158 6.75626 3.00309 7.47438 3.15169L12.9582 4.28639C13.4032 3.56153 14.0071 3.02839 14.7699 2.68697C15.5327 2.34556 16.3275 2.26041 17.1544 2.43152C17.9814 2.60262 18.6772 2.99622 19.2418 3.6123C19.8065 4.22838 20.1492 4.9574 20.27 5.79934L25.7538 6.93405C26.472 7.08264 27.0338 7.46554 27.4394 8.08274C27.8449 8.69995 27.9734 9.36761 27.8248 10.0857L24.0425 28.3652C23.8939 29.0833 23.511 29.6451 22.8938 30.0507C22.2766 30.4563 21.6089 30.5848 20.8908 30.4362L2.61135 26.6538ZM3.15169 24.0425L21.4311 27.8248L25.2135 9.5454L6.93405 5.76304L3.15169 24.0425ZM16.2764 6.67496C16.5593 6.7335 16.8124 6.68942 17.0356 6.54272C17.2589 6.39602 17.3997 6.18123 17.4583 5.89833C17.5168 5.61543 17.4727 5.36236 17.326 5.13912C17.1793 4.91587 16.9645 4.77498 16.6816 4.71645C16.3988 4.65791 16.1457 4.70199 15.9224 4.84869C15.6992 4.99538 15.5583 5.21018 15.4998 5.49308C15.4412 5.77597 15.4853 6.02904 15.632 6.25229C15.7787 6.47553 15.9935 6.61642 16.2764 6.67496ZM3.15169 24.0425L6.93405 5.76304L3.15169 24.0425Z"
                  fill="#F2B52B"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/80 text-xs md:text-sm font-inter uppercase tracking-widest whitespace-nowrap">
                Open Tenders
              </span>
              <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
                <span className="tenders-counter-value" data-target="12">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Vector Mask */}
      <img
        src={vectorImage}
        alt="bottom vector"
        className="absolute bottom-0 left-0 w-full object-cover z-20 pointer-events-none"
      />
    </section>
  );
};

export default TendersHero;
