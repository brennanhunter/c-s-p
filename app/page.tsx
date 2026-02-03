
"use client";

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
const lenisRef = useRef();
const containerRef = useRef(null);

useEffect(() => {
  function update(time) {
    lenisRef.current?.lenis?.raf(time * 1000);
  }

  lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);

  return () => gsap.ticker.remove(update);
}, []);

useGSAP(() => {
  const sections = document.querySelectorAll("section");

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
      style={{
        gridTemplateRows: 'repeat(3, 200vh)'
      }}
    >
      <section className="bg-red-500 flex items-center justify-center sticky top-0 h-screen">
        <h1 className="font-newsflash text-9xl">1</h1>
      </section>
      <section className="bg-blue-500 flex items-center justify-center sticky top-0 h-screen">
        <h1 className="font-newsflash text-9xl">2</h1>
      </section>
      <section className="bg-green-500 flex items-center justify-center sticky top-0 h-screen">
        <h1 className="font-newsflash text-9xl">3</h1>
      </section>
      <footer className="bg-black text-white flex items-center justify-center h-screen relative">
        <h1 className="font-newsflash text-6xl">Footer</h1>
      </footer>
    </main>
    </>
  );
}