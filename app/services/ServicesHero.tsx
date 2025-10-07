import React from "react";
import ServicesList from "./ServicesList";

import { motion, Variants } from "framer-motion";

const ServicesHero: React.FC = () => {
  const servicesVariant: Variants = {
    hidden: { opacity: 0, y: 200, scale: 1.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }, // a bit faster
    },
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 mx-auto relative z-20 mt-24 text-white text-center">
        Our Services
      </h1>
      <motion.div variants={servicesVariant} className="w-full">
        <ServicesList />
      </motion.div>
    </>
  );
};

export default ServicesHero;
