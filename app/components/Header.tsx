"use client";

import React from "react";
import styles from "./Header.module.css";
import LogoSVG from "./LogoSVG";
import ContentSection from "./ContentSection";
import { motion, Variants } from "framer-motion";

const Header: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    show: {}, // keep empty since we’re manually controlling delays
  };

  const logoVariant: Variants = {
    hidden: { opacity: 0, y: 200, scale: 1.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }, // a bit faster
    },
  };

  const contentVariant: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 1.6 }, // delay slightly longer than logo
    },
  };

  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={styles.content}
      >
        {/* Overlay content */}
        {/* Cinematic headline */}
        <motion.h1 variants={logoVariant}>
          <LogoSVG />
        </motion.h1>

        <motion.div variants={contentVariant} className="w-full">
          <ContentSection />
        </motion.div>

        {/* <button className={styles.ctaButton}>Book Now</button> */}
      </motion.div>
    </header>
  );
};

export default Header;
