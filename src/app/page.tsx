"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";
import AchieversSection from "@/components/sections/AchieversSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import GallerySection from "@/components/sections/GallerySection";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Clock, ArrowRight, CalendarDays } from "lucide-react";

import { COURSES } from "@/lib/courses";
import { useEffect } from "react";


export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof COURSES[0]>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleSelectCourse = (e: any) => {
      const course = COURSES.find(c => c.title === e.detail);
      if (course) {
        setSelectedCourse(course);
        // Also scroll to exams section if not already there
        const examsSection = document.getElementById("exams");
        if (examsSection) {
          examsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("selectCourse", handleSelectCourse);
    return () => window.removeEventListener("selectCourse", handleSelectCourse);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-vista-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      <HeroSection />

      <AboutUsSection />

      <FeaturesSection />

      {/* Interactive Exam Spotlight */}
      <section id="exams" className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-vista-blue uppercase tracking-tighter"
            >
              Courses <span className="text-vista-gold underline decoration-vista-gold/30">Offered</span>
            </motion.h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Join the Elite Preparation Circle</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {COURSES.map((course, idx) => (
              <motion.div
                key={idx}
                layoutId={`course-${idx}`}
                onClick={() => setSelectedCourse(course)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="h-36 md:h-48 rounded-[2.5rem] bg-slate-50 flex flex-col items-center justify-center p-4 md:p-6 text-center ring-1 ring-black/5 hover:ring-vista-gold/50 hover:bg-white hover:shadow-2xl hover:shadow-vista-gold/10 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-vista-gold/5 to-transparent pointer-events-none" />
                <div className="w-20 h-20 md:w-28 md:h-28 mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm flex items-center justify-center bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
                  <img src={course.icon} alt={course.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-vista-blue font-black text-[10px] md:text-xs group-hover:text-vista-gold transition-all line-clamp-2 uppercase tracking-tighter leading-tight relative z-10">
                    {course.title}
                  </span>
                  {course.timings && (
                    <div className="flex items-center gap-1 text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
                      <Clock size={8} className="md:w-2.5 md:h-2.5" />
                      <span>Available</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Popup */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-vista-blue/90 backdrop-blur-xl pointer-events-auto"
            />
            <motion.div
              layoutId={`course-${COURSES.indexOf(selectedCourse)}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl pointer-events-auto flex flex-col md:flex-row group overflow-hidden"
            >
              {/* Header section - Sticky on mobile */}
              <div className="md:w-1/3 flex-shrink-0 relative h-32 md:h-auto overflow-hidden bg-slate-50 flex items-center justify-center p-4 md:p-8 sticky top-0 z-30 md:relative border-b md:border-b-0 border-slate-100">
                <div className="flex flex-row md:flex-col items-center text-center gap-3 md:gap-4">
                  <div className={`w-16 h-16 md:w-32 md:h-32 rounded-[1rem] md:rounded-[2rem] bg-white flex items-center justify-center shadow-xl ring-4 md:ring-6 ring-white/50 p-2 md:p-3 border border-slate-100`}>
                    <img src={selectedCourse.icon} alt={selectedCourse.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-left md:text-center space-y-0.5">
                    <div className="text-vista-blue font-black text-sm md:text-lg uppercase tracking-tighter leading-tight">Vista Academy</div>
                    <div className="text-vista-gold font-bold text-[7px] md:text-[9px] uppercase tracking-[0.2em]">Victory Institute for Strategic Achievement</div>
                  </div>
                </div>

                {/* Mobile Close Button (In sticky header) */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="md:hidden absolute top-1/2 -translate-y-1/2 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body section - Scrollable */}
              <div className="flex-1 min-h-0 p-5 md:p-10 pb-8 md:pb-12 space-y-5 md:space-y-6 relative overflow-y-auto custom-scrollbar">
                {/* Desktop Close Button */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="hidden md:flex absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-100 items-center justify-center text-slate-400 hover:text-vista-blue hover:bg-vista-gold transition-colors z-20"
                >
                  <X size={24} />
                </button>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-vista-gold/10 text-vista-gold font-bold text-[9px] md:text-[10px] uppercase tracking-widest ring-1 ring-vista-gold/20">
                      Standard Program
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black text-vista-blue uppercase tracking-tighter leading-none">{selectedCourse.title}</h3>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <p className="text-slate-500 font-medium text-xs md:text-base leading-relaxed">
                    {selectedCourse.content}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {[
                      { l: "Material", v: "Free study Materials" },
                      { l: "Testing", v: "Weekly Exams" },
                      { l: "Mentoring", v: "1-on-1 Help" },
                      { l: "Access", v: "Offline/Online" }
                    ].map((feat, i) => (
                      <div key={i} className="bg-slate-50 p-2.5 md:p-3 rounded-lg md:rounded-xl flex flex-col gap-0.5 ring-1 ring-black/5">
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400">{feat.l}</span>
                        <span className="text-vista-blue font-bold text-xs md:text-sm">{feat.v}</span>
                      </div>
                    ))}
                  </div>

                  {selectedCourse.timings && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-vista-gold" />
                        <span className="text-vista-blue font-black text-[10px] md:text-xs uppercase tracking-widest">Class Timings</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="bg-vista-gold/5 p-3 rounded-xl border border-vista-gold/10">
                          <div className="text-[8px] font-black uppercase tracking-widest text-vista-gold mb-1">Weekdays (Mon-Fri)</div>
                          <div className="text-vista-blue font-bold text-xs">{selectedCourse.timings.weekdays}</div>
                        </div>
                        <div className="bg-vista-blue/5 p-3 rounded-xl border border-vista-blue/10">
                          <div className="text-[8px] font-black uppercase tracking-widest text-vista-blue/60 mb-1">Weekend (Sat & Sun)</div>
                          <div className="text-vista-blue font-bold text-xs">{selectedCourse.timings.weekends}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => { setSelectedCourse(null); window.location.hash = "#contact"; }}
                  className="w-full h-12 md:h-14 bg-vista-blue text-white rounded-lg md:rounded-xl font-black uppercase tracking-widest hover:bg-vista-gold hover:text-vista-blue transition-all flex items-center justify-center gap-2 group/btn text-xs md:text-sm"
                >
                  For Enquiry
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <WhoWeAreSection />

      <GallerySection />

      <AchieversSection />

      <ContactSection />
    </>
  );
}
