"use client";

import { motion } from "framer-motion";

export default function ContentSection() {

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-[90%] max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-12 text-white z-10 mt-12">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:w-1/2 space-y-4
             bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8
             ml-0 md:ml-[-2rem]"
      >
        <h2 className="text-3xl font-bold">
          Reliable Care. Fair Work.
        </h2>
        <h3 className="text-xl font-semibold">
          Find a Trusted Maid or Caregiver
        </h3>
        <p className="text-white/80 text-left">
          Struggling to find a reliable maid? We make it easy by connecting you
          with trusted and experienced maids for your home.
        </p>
      </motion.div>

      {/* RIGHT SIDE (dynamic content) */}
      <motion.div
        // forces animation on route change
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 space-y-4
             bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8
             ml-0 md:ml-[-2rem]"
        >
          <h2 className="text-2xl font-bold">Friendly & Professional</h2>
          <p className="text-white/80 text-left">
            At CareHive, we make hiring simple! We connect families with
            qualified and professional maids and caregivers, ensuring that your
            home gets the best service from capable and reliable workers.
          </p>
          <p className="text-white/80 text-left">
            Whether you need daily household support or compassionate care for a
            loved one, we ensure your home receives the best service from
            trustworthy, capable, and experienced workers. Our goal is to give
            you peace of mind by matching you with individuals who not only meet
            your practical needs but also align with your values and
            expectations.
          </p>
        </motion.div>
    </div>
  );
}
