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

    lenisRef.current?.lenis?.on("scroll",
    ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      const sections = document.querySelectorAll
      ("section");

      sections.forEach((section, index) => {
        const container = section.querySelector(".container");

        gsap.to(container, {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <ReactLenis rootOptions={{autoRaf: false}} ref={lenisRef} /> 
    <main ref={containerRef}>
      <section className="one">
        <div className="container bg-red-500">
          <div className="col">
            <h1 className="font-newsflash">
            Entry Point
            </h1>
          </div>
          <div className="col">
            <p>
            This is the main entry point of the application.
            </p>
          </div>
        </div>
      </section>
      <section className="two">
        <div className="container bg-blue-500">
          <div className="col">
            <h1 className="font-newsflash">
            Features
            </h1>
          </div>
          <div className="col">
            <p>
            Explore the various features of our application.
            </p>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="container bg-green-500">
          <div className="col">
            <h1 className="font-newsflash">
            Contact Us
            </h1>
          </div>
          <div className="col">
            <p>
            Get in touch with our team for more information.
            </p>
          </div>
        </div>
      </section>
      <section className="four">
        <div className="container bg-yellow-500">
          <div className="col">
            <h1 className="font-newsflash">
            About Us
            </h1>
          </div>
          <div className="col">
            <p>
            Learn more about our mission and values.
            </p>
          </div>
        </div>
      </section>
      <section className="five">
        <div className="container bg-purple-500">
          <div className="col">
            <h1 className="font-newsflash">
            Services
            </h1>
          </div>
          <div className="col">
            <p>
            Discover the range of services we offer to meet your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="six">
        <div className="container bg-pink-500">
          <div className="col">
            <h1 className="font-newsflash">
            Portfolio
            </h1>
          </div>
          <div className="col">
            <p>
            Browse through our portfolio to see our past projects and achievements.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <h1 className="font-newsflash">
          Footer
        </h1>
      </footer>
    </main>
    </>
  );
}