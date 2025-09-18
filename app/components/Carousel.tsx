"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const steps = [
    {
      number: "01",
      icon: "bi-award",
      title: "Professional & Qualified Workers",
      text: "We ensure every maid and caregiver meets high standards of skill and professionalism.",
    },
    {
      number: "02",
      icon: "bi-people",
      title: "We Find the Right Match for You",
      text: "Tell us what you need, and we'll connect you with a helper who fits your home and budget.",
    },
    {
      number: "03",
      icon: "bi-cash-coin",
      title: "Fair Pay for Quality Service",
      text: "Our workers receive reasonable wages, so they stay motivated to provide the best service.",
    },
    {
      number: "04",
      icon: "bi-wallet2",
      title: "Simple Booking & Safe Payments",
      text: "Book a maid or caregiver easily and pay securely through mobile money or bank transfer.",
    },
  ];

  return (
    <section id="how-we-work" className="py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-3xl mx-auto"
      >
        {steps.map((step, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="p-8 h-50 flex flex-col items-center justify-start 
                        rounded-2xl shadow-xl border border-white/20 
                        bg-white/30 backdrop-blur-md"
            >
              {/* Fixed header inside the card */}
              {/* <h2 className="text-2xl font-bold mb-2">How We Work</h2>
              <p className="text-gray-600 text-sm mb-6 text-center max-w-md">
                At CareHive, we believe that every home deserves a caring and
                reliable helper, and every worker deserves respect and fair
                treatment.
              </p> */}

              {/* Slide content */}
              <span className="text-4xl font-bold text-gray-800 mb-2">
                {step.number}
              </span>
              <div className="text-3xl text-blue-500 mb-2">
                <i className={`bi ${step.icon}`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
