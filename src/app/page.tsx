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

const COURSES = [
  {
    title: "TNPSC",
    icon: "/images/exam_logo/tnpsc.png",
    color: "bg-blue-500",
    content: "Master TNPSC Group exams (I, II, IV) with specialized focus on Tamil, General Studies, and current affairs.",
    image: "/images/ach1.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "BANKING",
    icon: "/images/exam_logo/banking.png",
    color: "bg-indigo-500",
    content: "Comprehensive coaching for IBPS, SBI, and RBI exams. Expert guidance on Aptitude, Reasoning, and Banking Awareness.",
    image: "/images/ach1.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "SSC",
    icon: "/images/exam_logo/ssc.png",
    color: "bg-emerald-500",
    content: "Top-tier training for SSC CGL, CHSL, and MTS. Conquer Tier 1 and Tier 2 with expert modules on English and Math.",
    image: "/images/ach2.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "RRB",
    icon: "/images/exam_logo/railways.png",
    color: "bg-amber-500",
    content: "Get ready for RRB NTPC, Group D, and ALP. In-depth coverage of General Science, Maths, and GS with mock tests.",
    image: "/images/ach3.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "SI/PC",
    icon: "/images/exam_logo/si.jpg",
    color: "bg-rose-500",
    content: "Elite training for TN Police Recruitment. Focused prep for SI/PC written exams and physical guidance.",
    image: "/images/ach4.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "TNEB (AE/TA)",
    icon: "/images/exam_logo/tneb.png",
    color: "bg-violet-500",
    content: "Specialized technical and non-technical coaching for TNEB recruitment. Build a solid foundation for state-level power exams.",
    image: "/images/ach3.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "Tancent(MBA/MCA)",
    icon: "/images/exam_logo/tancet.png",
    color: "bg-yellow-500",
    content: "The ultimate prep for MBA/MCA entrance. Boost your scores with advanced reasoning and mathematical workshops.",
    image: "/images/ach2.png",
    timings: {
      weekdays: "10.00 am to 01.00 pm",
      weekends: "10.00 am to 04.00 pm"
    }
  },
  {
    title: "NEET",
    icon: "/images/exam_logo/neet.jpg",
    color: "bg-orange-500",
    content: "Integrated medical entrance coaching. Expert faculty for Biology, Physics, and Chemistry for future doctors.",
    image: "/images/ach1.png",
    timings: null
  },
];


export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof COURSES[0]>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
              <div className="md:w-2/5 relative h-40 md:h-auto overflow-hidden bg-slate-50 flex items-center justify-center p-6 md:p-12 sticky top-0 z-30 md:relative border-b md:border-b-0 border-slate-100">
                <div className="flex flex-row md:flex-col items-center text-center gap-4 md:gap-6">
                  <div className={`w-20 h-20 md:w-40 md:h-40 rounded-[1.2rem] md:rounded-[2.5rem] bg-white flex items-center justify-center shadow-xl ring-4 md:ring-8 ring-white/50 p-2 md:p-4 border border-slate-100`}>
                    <img src={selectedCourse.icon} alt={selectedCourse.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-left md:text-center space-y-0.5 md:space-y-1">
                    <div className="text-vista-blue font-black text-base md:text-xl uppercase tracking-tighter leading-tight">Vista Academy</div>
                    <div className="text-vista-gold font-bold text-[8px] md:text-[xs] uppercase tracking-[0.2em]">Victory Institute for Strategic Achievement</div>
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
              <div className="flex-1 p-6 md:p-12 space-y-6 md:space-y-8 relative overflow-y-auto">
                {/* Desktop Close Button */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="hidden md:flex absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-100 items-center justify-center text-slate-400 hover:text-vista-blue hover:bg-vista-gold transition-colors z-20"
                >
                  <X size={24} />
                </button>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-vista-gold/10 text-vista-gold font-bold text-[10px] md:text-xs uppercase tracking-widest ring-1 ring-vista-gold/20">
                      Standard Program
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-5xl font-black text-vista-blue uppercase tracking-tighter leading-none">{selectedCourse.title}</h3>
                </div>

                <div className="space-y-5 md:space-y-6">
                  <p className="text-slate-500 font-medium text-sm md:text-lg leading-relaxed">
                    {selectedCourse.content}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { l: "Material", v: "Free study Materials" },
                      { l: "Testing", v: "Weekly Exams" },
                      { l: "Mentoring", v: "1-on-1 Help" },
                      { l: "Access", v: "Offline/Online" }
                    ].map((feat, i) => (
                      <div key={i} className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1 ring-1 ring-black/5">
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">{feat.l}</span>
                        <span className="text-vista-blue font-bold text-sm md:text-base">{feat.v}</span>
                      </div>
                    ))}
                  </div>

                  {selectedCourse.timings && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-vista-gold" />
                        <span className="text-vista-blue font-black text-sm uppercase tracking-widest">Class Timings</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-vista-gold/5 p-4 rounded-2xl border border-vista-gold/10">
                          <div className="text-[9px] font-black uppercase tracking-widest text-vista-gold mb-1">Weekdays (Mon-Fri)</div>
                          <div className="text-vista-blue font-bold text-sm">{selectedCourse.timings.weekdays}</div>
                        </div>
                        <div className="bg-vista-blue/5 p-4 rounded-2xl border border-vista-blue/10">
                          <div className="text-[9px] font-black uppercase tracking-widest text-vista-blue/60 mb-1">Weekend (Sat & Sun)</div>
                          <div className="text-vista-blue font-bold text-sm">{selectedCourse.timings.weekends}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => { setSelectedCourse(null); window.location.hash = "#contact"; }}
                  className="w-full h-14 md:h-16 bg-vista-blue text-white rounded-xl md:rounded-2xl font-black uppercase tracking-widest hover:bg-vista-gold hover:text-vista-blue transition-all flex items-center justify-center gap-2 md:gap-3 group/btn"
                >
                  For Enquiry
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
