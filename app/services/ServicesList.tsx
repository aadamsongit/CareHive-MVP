"use client";

import { motion } from "framer-motion";

function ServicesList() {
  return (
    <div className="flex flex-col w-[90%] max-w-5xl mx-auto text-white z-10 mt-12 space-y-8">
      {/* TOP ROW */}
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold">Reliable Maids</h2>
          <p className="text-white/80">
            Childcare <br />
            Trustworthy & efficient <br />
            Skilled in home organization <br />
            Cleaning, laundry & cooking
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold">Compassionate Caregivers</h2>
          <p className="text-white/80">
            Support for the elderly and disabled <br />
            Medication reminders <br />
            Mobility and meal assistance <br />
            Emotional support and companionship
          </p>
        </motion.div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2 bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold">Quality & Performance</h2>
          <p className="text-white/80">
            Regular service checks & training <br />
            Continuous feedback for improvement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:w-1/2 bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold">Secure Worker Benefits</h2>
          <p className="text-white/80">
            We handle NAPSA & health insurance <br />
            Fair pay & timely payments
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesList;
