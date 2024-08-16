import React, { useRef } from "react";

export default function Testimonial() {
  const scrollContainerRef = useRef<any>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-[48px] py-8">
      <p className="text-[32px] font-bold text-tertiary">
        What Our Clients Say
      </p>

      <div className="relative w-full">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute hidden top-1/2 left-0 z-10 p-2 m-4 bg-primary-light text-primary-dark rounded-full shadow-lg hover:bg-tertiary-dark hover:text-secondary focus:outline-none transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Horizontal Scrollable Container */}
        <div
          id="testimonialContainer"
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-5 md:px-10"
        >
          <div className="flex gap-[40px] w-max px-4 md:px-0">
            {Array.from({ length: 10 }, (_, id) => (
              <div
                key={id}
                className="min-w-[350px] max-w-[350px] bg-secondary text-primary-dark p-8 rounded-xl shadow-2xl snap-center"
              >
                <p className="text-tertiary-dark mb-4 text-xl font-semibold">
                  Client #{id + 1}
                </p>
                <p className="text-primary-light leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute hidden top-1/2 right-0 z-10 p-2 m-4 bg-primary-light text-primary-dark rounded-full shadow-lg hover:bg-tertiary-dark hover:text-secondary focus:outline-none transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
