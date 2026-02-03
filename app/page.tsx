
"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import { motion } from 'framer-motion';
import Satellite from './components/Satellite';
import Starfield from './components/Starfield';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
const lenisRef = useRef<any>(null);
const containerRef = useRef<HTMLElement>(null);
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

useEffect(() => {
  function update(time: number) {
    lenisRef.current?.lenis?.raf(time * 1000);
  }

  lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);

  return () => gsap.ticker.remove(update);
}, []);

useGSAP(() => {
  const sections = document.querySelectorAll("section");
  const main = containerRef.current;

  // Update grid template rows dynamically
  if (main && sections.length > 0) {
    main.style.gridTemplateRows = `repeat(${sections.length}, 200vh)`;
  }

  sections.forEach((section, index) => {
    // Set initial rotation
    gsap.set(section, { rotation: 30 });
    
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const sectionTop = section.offsetTop;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Calculate distance from top of viewport
        const distanceFromTop = sectionTop - scrollTop;
        
        // Calculate rotation based on distance (closer to top = less rotation)
        const maxRotation = 30;
        const rotationRange = windowHeight; // Distance over which rotation changes
        let rotation = Math.max(0, Math.min(maxRotation, (distanceFromTop / rotationRange) * maxRotation));
        
        gsap.set(section, { rotation: rotation });
      }
    });
  });
},
{ scope: containerRef});

  return (
    <>
    <ReactLenis root options={{autoRaf: false}} ref={lenisRef} />
    <main 
      ref={containerRef}
      className="grid grid-cols-1"
    >
      <section className="bg-gradient-to-br from-black via-raisin-black to-black flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white overflow-visible relative">
        <div className="absolute inset-0 z-0">
          <Starfield />
        </div>
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
              variants={fadeInUp}
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
              variants={fadeInUp}
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
              variants={fadeInUp}
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
      <section className="bg-gradient-to-br from-charcoal-gray via-finn-purple to-raisin-black flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white">
        <motion.div 
          className="text-center max-w-6xl px-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-newsflash text-4xl md:text-6xl lg:text-7xl mb-12 bg-gradient-to-r from-electric-violet to-neon-pink bg-clip-text text-transparent"
            {...fadeInUp}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            COMPREHENSIVE DEFENSE
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-electric-violet/30 rounded-xl p-8"
              variants={fadeInLeft}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-electric-violet text-4xl mb-4">🛡️</div>
              <h3 className="font-newsflash text-xl mb-4 text-electric-violet">THREAT DETECTION</h3>
              <p className="font-dm text-slate-300 leading-relaxed">
                AI-powered monitoring systems that identify and neutralize threats before they breach your network.
              </p>
            </motion.div>
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-electric-violet/30 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-electric-violet text-4xl mb-4">🔐</div>
              <h3 className="font-newsflash text-xl mb-4 text-electric-violet">DATA ENCRYPTION</h3>
              <p className="font-dm text-slate-300 leading-relaxed">
                Military-grade encryption protocols ensuring your sensitive data remains protected at all times.
              </p>
            </motion.div>
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-electric-violet/30 rounded-xl p-8"
              variants={fadeInRight}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-electric-violet text-4xl mb-4">⚡</div>
              <h3 className="font-newsflash text-xl mb-4 text-electric-violet">RAPID RESPONSE</h3>
              <p className="font-dm text-slate-300 leading-relaxed">
                24/7 incident response team ready to contain and eliminate security breaches within minutes.
              </p>
            </motion.div>
          </motion.div>
          <motion.p 
            className="font-dm text-xl text-neon-pink"
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Trusted by Fortune 500 companies worldwide
          </motion.p>
        </motion.div>
      </section>
      <section className="bg-gradient-to-br from-raisin-black via-steel-pink to-charcoal-gray flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white">
        <motion.div 
          className="text-center max-w-5xl px-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-newsflash text-4xl md:text-6xl lg:text-7xl mb-12 bg-gradient-to-r from-steel-pink to-hot-pink bg-clip-text text-transparent"
            {...fadeInUp}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            ELITE PROTECTION
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="space-y-8"
              variants={fadeInLeft}
            >
              <motion.div 
                className="bg-raisin-black/40 backdrop-blur-sm border border-steel-pink/30 rounded-xl p-6"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-hot-pink text-2xl">💼</div>
                  <div>
                    <h4 className="font-newsflash text-lg text-steel-pink mb-2">ENTERPRISE GRADE</h4>
                    <p className="font-dm text-slate-300 text-sm">Scalable solutions for organizations of any size</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-raisin-black/40 backdrop-blur-sm border border-steel-pink/30 rounded-xl p-6"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-hot-pink text-2xl">🔬</div>
                  <div>
                    <h4 className="font-newsflash text-lg text-steel-pink mb-2">ZERO-DAY PROTECTION</h4>
                    <p className="font-dm text-slate-300 text-sm">Advanced threat intelligence and predictive analysis</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-raisin-black/40 backdrop-blur-sm border border-steel-pink/30 rounded-xl p-6"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-hot-pink text-2xl">🌐</div>
                  <div>
                    <h4 className="font-newsflash text-lg text-steel-pink mb-2">GLOBAL COVERAGE</h4>
                    <p className="font-dm text-slate-300 text-sm">Worldwide infrastructure with local compliance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <motion.div 
                className="bg-gradient-to-r from-steel-pink to-hot-pink rounded-2xl p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-newsflash text-2xl mb-4">READY TO SECURE YOUR FUTURE?</h3>
                <p className="font-dm mb-6 text-ghost-white">
                  Join thousands of organizations already protected by our cutting-edge cybersecurity platform.
                </p>
                <motion.button 
                  className="w-full px-6 py-4 bg-white text-steel-pink rounded-lg font-dm font-bold text-lg hover:bg-ghost-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  START PROTECTION NOW
                </motion.button>
              </motion.div>
              <motion.div 
                className="text-center"
                {...fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <p className="font-dm text-neon-pink text-sm">
                  Free 30-day trial • No credit card required • Setup in minutes
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <section className="bg-gradient-to-br from-raisin-black via-cyber-cyan to-charcoal-gray flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white">
        <motion.div 
          className="text-center max-w-6xl px-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="font-newsflash text-4xl md:text-6xl lg:text-7xl mb-12 bg-gradient-to-r from-cyber-cyan to-neon-blue bg-clip-text text-transparent"
            {...fadeInUp}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BY THE NUMBERS
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="font-newsflash text-5xl md:text-6xl text-cyan-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                99.9%
              </motion.div>
              <h3 className="font-dm text-lg text-neon-blue font-semibold">UPTIME</h3>
              <p className="font-dm text-slate-400 text-sm mt-2">
                Continuous protection guaranteed
              </p>
            </motion.div>
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="font-newsflash text-5xl md:text-6xl text-cyber-cyan mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                50M+
              </motion.div>
              <h3 className="font-dm text-lg text-neon-blue font-semibold">THREATS BLOCKED</h3>
              <p className="font-dm text-slate-400 text-sm mt-2">
                Daily attack prevention
              </p>
            </motion.div>
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="font-newsflash text-5xl md:text-6xl text-cyber-cyan mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                &lt;2MIN
              </motion.div>
              <h3 className="font-dm text-lg text-neon-blue font-semibold">RESPONSE TIME</h3>
              <p className="font-dm text-slate-400 text-sm mt-2">
                Average incident containment
              </p>
            </motion.div>
            <motion.div 
              className="bg-raisin-black/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-xl p-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="font-newsflash text-5xl md:text-6xl text-cyber-cyan mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                2,500+
              </motion.div>
              <h3 className="font-dm text-lg text-neon-blue font-semibold">CLIENTS</h3>
              <p className="font-dm text-slate-400 text-sm mt-2">
                Enterprises protected globally
              </p>
            </motion.div>
          </motion.div>
          <motion.p 
            className="font-dm text-xl text-neon-blue mb-8"
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Industry-leading performance backed by proven results
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center opacity-60"
            {...fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <div className="font-dm text-sm text-slate-400">ISO 27001 CERTIFIED</div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="font-dm text-sm text-slate-400">SOC 2 TYPE II</div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="font-dm text-sm text-slate-400">GDPR COMPLIANT</div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="font-dm text-sm text-slate-400">PCI DSS LEVEL 1</div>
          </motion.div>
        </motion.div>
      </section>
    </main>
    </>
  );
}