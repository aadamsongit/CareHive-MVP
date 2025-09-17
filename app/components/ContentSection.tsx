"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContentSection() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-[90%] max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-12 text-white z-10 mt-35">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:w-1/2 space-y-4"
      >
        <h2 className="text-3xl font-bold">Reliable Care. Fair Work.</h2>
        <h3 className="text-xl font-semibold">
          Find a Trusted Maid or Caregiver
        </h3>
        <p className="text-white/80">
          Struggling to find a reliable maid? We make it easy by connecting you
          with trusted and experienced maids for your home.
        </p>
      </motion.div>

      {/* RIGHT SIDE (dynamic content) */}
      <motion.div
        key={pathname} // forces animation on route change
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <AnimatePresence mode="wait">
          {pathname === "/about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold">Friendly & Professional</h2>
              <p className="text-white/80">
                At CareHive, we make hiring simple! We connect families with
                qualified and professional maids and caregivers, ensuring that
                your home gets the best service from capable and reliable
                workers.
              </p>
              <p className="text-white/80">
                Whether you need daily household support or compassionate care
                for a loved one, we ensure your home receives the best service
                from trustworthy, capable, and experienced workers. Our goal is
                to give you peace of mind by matching you with individuals who
                not only meet your practical needs but also align with your
                values and expectations.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
