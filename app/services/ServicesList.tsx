"use client";

import { motion } from "framer-motion";

function ServicesList() {
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
        <h2 className="text-3xl font-bold">Reliable Maids</h2>
        <p className="text-white/80 text-left">
          Childcare
          <br />
          Trustworthy & efficient
          <br />
          Skilled in home organization
          <br />
          Cleaning, laundry & cooking
        </p>
      </motion.div>
    </div>
  );
}

export default ServicesList;
