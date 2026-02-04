"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Satellite from './Satellite';
import Starfield from './Starfield';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    staggerChildren: 0.2,
    delayChildren: 0.1
  }
};

export default function Hero() {
  const [mouseX, setMouseX] = useState(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      setMouseX(x);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textScale = 0.7 + (1 - mouseX) * 0.6; // Scale from 0.7 (right) to 1.3 (left)

  return (
    <section className="bg-gradient-to-br from-black via-raisin-black to-black flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white overflow-visible relative">
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-30 animate-scan" 
             style={{ 
               boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
               animation: 'scan 8s linear infinite'
             }}
        />
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-25 animate-scan" 
             style={{ 
               boxShadow: '0 0 8px rgba(88, 101, 242, 0.4)',
               animation: 'scan2 12s linear infinite'
             }}
        />
      </div>
      <style jsx>{`
        @keyframes scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
        @keyframes scan2 {
          0% { top: 30%; }
          100% { top: 130%; }
        }
      `}</style>
      <motion.div
        className="absolute right-0 lg:right-0 top-0 h-full w-full lg:w-1/2 pointer-events-none z-5"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Satellite />
      </motion.div>
      <div className="max-w-7xl w-full px-6 z-10 relative">
        <motion.div 
          className="text-center lg:text-left lg:w-1/2 bg-raisin-black/10 lg:bg-transparent p-8 lg:p-0 rounded-2xl"
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1 
            className="font-newsflash text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-cyber-cyan to-neon-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{ scaleY: textScale }}
            transition={{ scaleY: { duration: 0.5, ease: "easeOut" }, duration: 1.2, ease: "easeOut" }}
            style={{ 
              transformOrigin: 'center'
            }}
          >
            SECURE
          </motion.h1>
          <motion.h1 
            className="font-newsflash text-6xl md:text-8xl lg:text-9xl mb-6 bg-gradient-to-r from-neon-blue to-cyber-cyan bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{ scaleY: textScale }}
            transition={{ scaleY: { duration: 0.5, ease: "easeOut" }, duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={{ 
              transformOrigin: 'center'
            }}
          >
            CONTAIN
          </motion.h1>
          <motion.h1 
            className="font-newsflash text-6xl md:text-8xl lg:text-9xl mb-8 bg-gradient-to-r from-cyber-cyan to-electric-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            animate={{ scaleY: textScale }}
            transition={{ scaleY: { duration: 0.5, ease: "easeOut" }, duration: 1.2, ease: "easeOut", delay: 0.4 }}
            style={{ 
              transformOrigin: 'center'
            }}
          >
            PROTECT
          </motion.h1>
          <motion.p 
            className="font-dm text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Advanced cybersecurity solutions for the modern digital landscape
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <motion.button 
              className="px-8 py-4 bg-electric-blue hover:bg-deep-purple rounded-lg font-dm font-semibold text-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Protected
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-cyber-cyan hover:bg-cyber-cyan hover:text-raisin-black rounded-lg font-dm font-semibold text-lg transition-colors shadow-lg backdrop-blur-sm bg-raisin-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
