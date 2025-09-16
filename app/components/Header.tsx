"use client";

import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import LogoSVG from "./LogoSVG";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <video className={styles.videoBackground} autoPlay loop muted playsInline>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Overlay content */}
        {/* Cinematic headline */}
        <LogoSVG></LogoSVG>
        
        {/* <button className={styles.ctaButton}>Book Now</button> */}
      </div>
    </header>
  );
};

export default Header;
