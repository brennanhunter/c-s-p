"use client";

import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import PentestShape from './svg-shapes/pentest-shape';
import AppsecShape from './svg-shapes/appsec-shape';
import PurpleTeamShape from './svg-shapes/purple-team-shape';
import RedTeamShape from './svg-shapes/red-team-shape';
import TigerTeamShape from './svg-shapes/tiger-team-shape';
import BlackOpsShape from './svg-shapes/blackops-shape';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const services = [
  {
    name: "Pentest Team",
    description: "Comprehensive penetration testing across all platforms—from networks and APIs to Web3, cloud, IoT, and emerging AI systems.",
    icon: "pentest",
    gradient: "from-cyber-cyan to-neon-blue"
  },
  {
    name: "AppSec Team",
    description: "Application security specialists providing source code review, blockchain audits, and full-stack security assessments.",
    icon: "appsec",
    gradient: "from-electric-blue to-electric-violet"
  },
  {
    name: "Purple Team",
    description: "Collaborative defense combining offensive and defensive tactics with OSINT, social engineering, and phishing campaigns.",
    icon: "purpleteam",
    gradient: "from-electric-violet to-deep-purple"
  },
  {
    name: "Red Team",
    description: "Advanced adversary simulation including physical intrusion, red teaming operations, and SIEM bypass techniques.",
    icon: "redteam",
    gradient: "from-red-600 to-red-800"
  },
  {
    name: "Tiger Team",
    description: "Specialized operations for supply chain security, DDoS simulation, malware testing, and vulnerability research.",
    icon: "tigerteam",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    name: "BlackOps Team",
    description: "Elite covert operations unit including Ghost Unit stealth engagements and ShayeteX-AI autonomous threat hunting.",
    icon: "blackops",
    gradient: "from-charcoal-gray to-raisin-black"
  }
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1
  });
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);

    return () => clearInterval(intervalId);
  }, [emblaApi, isHovered]);

  return (
    <section className="bg-gradient-to-br from-raisin-black via-charcoal-gray to-black flex flex-col items-center justify-center sticky top-0 min-h-screen py-16 text-white overflow-hidden">
      <div className="w-full">
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-newsflash text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-cyber-cyan via-electric-blue to-electric-violet bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <p className="font-dm text-xl text-slate-300 max-w-3xl mx-auto">
            Six specialized teams united in one mission: total security dominance
          </p>
        </motion.div>

        <div className="relative px-6">
          <div 
            className="overflow-visible" 
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex gap-8 px-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_35%] min-w-0"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div 
                    className="relative rounded-xl p-10 shadow-2xl border border-slate-600/80 flex flex-col justify-between min-h-[500px] overflow-hidden"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                      background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 25%, #1a202c 50%, #2d3748 75%, #4a5568 100%)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {/* Top metallic shine */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
                      style={{ 
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, transparent 100%)',
                        clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 50%, 0 50%)'
                      }}
                    />
                    
                    {/* Metallic brushed effect */}
                    <div 
                      className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.3) 1px, rgba(255,255,255,0.3) 2px)',
                      }}
                    />
                    
                    {/* Decorative gradient shape */}
                    <div 
                      className="absolute opacity-15"
                      style={{
                        width: '200px',
                        height: '200px',
                        right: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%) rotate(45deg)',
                      }}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-3xl blur-sm`} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6">
                        {service.icon === "pentest" ? (
                          <div className="w-20 h-20 mb-6">
                            <PentestShape />
                          </div>
                        ) : service.icon === "appsec" ? (
                          <div className="w-20 h-20 mb-6">
                            <AppsecShape />
                          </div>
                        ) : service.icon === "purpleteam" ? (
                          <div className="w-20 h-20 mb-6">
                            <PurpleTeamShape />
                          </div>
                        ) : service.icon === "redteam" ? (
                          <div className="w-20 h-20 mb-6">
                            <RedTeamShape />
                          </div>
                        ) : service.icon === "tigerteam" ? (
                          <div className="w-20 h-20 mb-6">
                            <TigerTeamShape />
                          </div>
                        ) : service.icon === "blackops" ? (
                          <div className="w-20 h-20 mb-6">
                            <BlackOpsShape />
                          </div>
                        ) : (
                          <div className="text-6xl mb-6 drop-shadow-lg">{service.icon}</div>
                        )}
                        <h3 className="font-newsflash text-5xl md:text-6xl mb-4">
                          <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                            {service.name.replace(' Team', '')}
                          </span>
                          <span className="text-slate-400 text-3xl md:text-4xl ml-2">TEAM</span>
                        </h3>
                      </div>
                      <p className="font-dm text-slate-300 leading-relaxed text-xl md:text-2xl mb-8 flex-grow">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <button className={`font-dm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center gap-2 group`}>
                          Learn more
                          <svg className={`w-5 h-5 transition-transform group-hover:translate-x-1 bg-gradient-to-r ${service.gradient} bg-clip-text`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-slate-600 to-slate-800 hover:from-slate-500 hover:to-slate-700 backdrop-blur-sm border border-slate-500/50 rounded-full p-4 transition-all duration-300 shadow-xl"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-slate-600 to-slate-800 hover:from-slate-500 hover:to-slate-700 backdrop-blur-sm border border-slate-500/50 rounded-full p-4 transition-all duration-300 shadow-xl"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
