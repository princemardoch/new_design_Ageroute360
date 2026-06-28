import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "../../../hooks/useGSAP";
import vectorImage from "../../../assets/images/Vector.png";
import mapBgImage from "../../../assets/images/projectBannerBG.jpg";

const MapHero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".map-hero-overlay",
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 },
    )
      .fromTo(
        ".map-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
        "-=1.2",
      )
      .fromTo(
        ".map-stat-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.6",
      );

    const counters = gsap.utils.toArray(".map-counter-value");
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const isDecimal = target % 1 !== 0;

      gsap.to(
        counter,
        {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: isDecimal ? 0.1 : 1 },
          onUpdate: function () {
            const val = this.targets()[0].innerHTML;
            counter.innerHTML = isDecimal
              ? Number(val).toFixed(1)
              : Math.round(val);
          },
        },
        "-=0.4",
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden min-h-[70vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={mapBgImage}
          alt="Map Infrastructure Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="map-hero-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[700px]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            <div className="map-hero-text">Interactive</div>
            <div className="map-hero-text text-brand-amber">Infrastructure</div>
            <div className="map-hero-text">Map</div>
          </h1>
          <p className="map-hero-text text-white/80 text-lg md:text-2xl lg:text-3xl font-normal font-jakarta leading-snug md:leading-[40px] max-w-[640px]">
            Real-time visual oversight of national road networks, bridge
            conditions, and ongoing maintenance tenders across all primary
            transit corridors.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-[450px] shrink-0 mt-8 lg:mt-0">
          <div className="map-stat-card self-start w-full md:w-[320px] p-6 bg-white/10 rounded-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex items-center gap-5 group hover:bg-white/15 transition-colors mb-5">
            <div className="w-12 h-12 bg-brand-amber/20 rounded-xl flex justify-center items-center shrink-0 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-brand-amber"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-brand-amber text-sm font-medium font-inter uppercase tracking-widest">
                Active Sites
              </span>
              <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
                <span className="map-counter-value" data-target="142">
                  0
                </span>
              </div>
            </div>
          </div>

          <div className="map-stat-card self-end lg:-mt-6 w-full md:w-[320px] p-6 bg-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex items-center gap-5 group hover:bg-white/15 transition-colors">
            <div className="w-12 h-12 bg-[#AFCBD5]/20 rounded-xl flex justify-center items-center shrink-0 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-[#AFCBD5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#AFCBD5] text-sm font-medium font-inter uppercase tracking-widest">
                Total Valuation
              </span>
              <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
                $
                <span className="map-counter-value" data-target="4.2">
                  0.0
                </span>
                B
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

export default MapHero;
