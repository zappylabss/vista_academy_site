"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const HERO_IMAGES = [
  {
    url: "/images/hero1.png",
    title: "Master TNPSC Exams",
    subtitle: "Your gateway to Tamil Nadu state government careers."
  },
  {
    url: "/images/hero2.png",
    title: "Banking Career Success",
    subtitle: "Comprehensive coaching for IBPS, SBI, and RBI aspirants."
  },
  {
    url: "/images/hero3.png",
    title: "SSC Selection Hub",
    subtitle: "Conquer CGL, CHSL, and MTS with expert guidance."
  },
  {
    url: "/images/hero4.png",
    title: "Elite Police Training",
    subtitle: "Focused preparation for SI and Police Constable exams."
  },
  {
    url: "/images/hero5.png",
    title: "NEET Integrated Prep",
    subtitle: "Building the foundation for future medical professionals."
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 30000); // Change every 30 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentIndex].url}
            alt={HERO_IMAGES[currentIndex].title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vista-blue/40 via-transparent to-vista-blue/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-vista-gold/20 backdrop-blur-md rounded-full text-vista-gold font-bold text-sm tracking-[0.3em] uppercase mb-4">
            Vista Academy Excellence
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            {HERO_IMAGES[currentIndex].title.split(" ").map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-vista-gold" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            {HERO_IMAGES[currentIndex].subtitle}
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
             <Link 
               href="#contact" 
               className="bg-vista-gold text-vista-blue px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-vista-gold/20"
             >
                For Enquiry
             </Link>
             <Link 
               href="#exams" 
               className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-vista-blue transition-all"
             >
                Explore Courses
             </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        suppressHydrationWarning
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-vista-gold hover:text-vista-blue transition-all z-20 group"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        suppressHydrationWarning
        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-vista-gold hover:text-vista-blue transition-all z-20 group"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            suppressHydrationWarning
            className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-vista-gold" : "w-6 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
