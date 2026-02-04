
"use client";

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';

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
      <Hero />
      <section className="bg-gradient-to-br from-charcoal-gray via-finn-purple to-raisin-black flex flex-col items-center justify-center sticky top-0 min-h-screen py-8 text-white">
        <div className="max-w-7xl w-full px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img 
                src="/images/Planet.jpg" 
                alt="Cybersecurity Protection" 
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h2 
                className="font-newsflash text-5xl md:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-cyber-cyan via-electric-blue to-electric-violet bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Beyond Protection. Beyond Limits.
              </motion.h2>
              <motion.p 
                className="font-dm text-xl md:text-2xl text-slate-200 leading-relaxed font-semibold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                Elite cybersecurity specialists defending the digital frontier.
              </motion.p>
              <motion.p 
                className="font-dm text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                We combine cutting-edge threat intelligence with proactive defense strategies. Our team doesn't just respond to attacks—we predict, prevent, and eliminate threats before they materialize. From penetration testing to 24/7 monitoring, we ensure your infrastructure remains impenetrable.
              </motion.p>
              <motion.button 
                className="px-10 py-5 bg-electric-blue hover:bg-deep-purple rounded-lg font-dm font-semibold text-lg transition-all shadow-xl hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Services />
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