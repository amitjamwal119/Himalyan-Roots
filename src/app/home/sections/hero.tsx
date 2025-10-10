"use client";

import Reservation from "../../home/reservation";

export default function Hero() {
  return (
    <section className="relative lg:h-[calc(100dvh-80px)] sm:h-dvh flex items-center justify-center bg-[image:var(--hero-bg)] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-20 w-full">
        {/* Text Section */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-2xl text-[#ffbe3d] text-shadow-lg/30 lg:text-5xl leading-tight font-(family-name:--head-font) drop-shadow-lg">
            Nature, Comfort & Togetherness
            <br />
            in One Place.
          </h1>
        </div>

        {/* Reservation Form */}
        <div className="w-full max-w-md">
          <Reservation />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffbe3d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-lg"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6v4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
