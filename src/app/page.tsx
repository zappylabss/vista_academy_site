"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";

const COURSES = [
  { 
    title: "SI (TALUK)", 
    icon: "👮", 
    color: "bg-blue-500",
    content: "Complete preparation for Sub-Inspector exams. Includes Law courses, Psychology, and Physical Endurance Test guidance.",
    duration: "6 Months",
    image: "/images/ach1.png"
  },
  { 
    title: "PC", 
    icon: "🚓", 
    color: "bg-indigo-500",
    content: "Police Constable recruitment training focusing on General Knowledge, Mathematics, and Mental Ability.",
    duration: "4 Months",
    image: "/images/ach1.png"
  },
  { 
    title: "TET", 
    icon: "🎓", 
    color: "bg-emerald-500",
    content: "Teacher Eligibility Test preparation covering Child Development, Pedagogy, and Subject Specialization.",
    duration: "5 Months",
    image: "/images/ach2.png"
  },
  { 
    title: "TNPSC (TAMIL & ENGLISH)", 
    icon: "🏛️", 
    color: "bg-amber-500",
    content: "Group II & IV preparation with comprehensive Tamil/English language modules and General Studies.",
    duration: "8 Months",
    image: "/images/ach3.png"
  },
  { 
    title: "BANKING (IBPS/SBI)", 
    icon: "💰", 
    color: "bg-rose-500",
    content: "Master Quantitative Aptitude, Reasoning, and English for Banking PO/Clerk roles. Special focus on Mock tests.",
    duration: "6 Months",
    image: "/images/ach4.png"
  },
  { 
    title: "SSC", 
    icon: "📑", 
    color: "bg-violet-500",
    content: "Staff Selection Commission coaching for CGL, CHSL, and MTS. Expert guidance on Tier 1 & 2 patterns.",
    duration: "7 Months",
    image: "/images/ach3.png"
  },
  { 
    title: "RRB", 
    icon: "🚄", 
    color: "bg-yellow-500",
    content: "Railway Recruitment Board coaching for NTPC, Group D, and ALP. In-depth Science and GS coverage.",
    duration: "5 Months",
    image: "/images/ach2.png"
  },
  { 
    title: "TNEB", 
    icon: "⚡", 
    color: "bg-orange-500",
    content: "Technical and Non-Technical coaching for Tamil Nadu Electricity Board recruitment exams.",
    duration: "4 Months",
    image: "/images/ach1.png"
  },
  { 
    title: "TANCET", 
    icon: "📖", 
    color: "bg-cyan-500",
    content: "MBA/MCA entrance coaching with advanced reasoning and mathematical focus.",
    duration: "3 Months",
    image: "/images/ach2.png"
  },
  { 
    title: "POLICE", 
    icon: "🛡️", 
    color: "bg-red-500",
    content: "Holistic training for various police department roles including physical and written exams.",
    duration: "5 Months",
    image: "/images/ach1.png"
  },
  { 
    title: "NEET", 
    icon: "🩺", 
    color: "bg-green-500",
    content: "Biology, Physics, and Chemistry integrated coaching for medical aspirants with expert faculty.",
    duration: "1 Year",
    image: "/images/ach4.png"
  }
];

const ACHIEVERS = [
  { name: "Jayakodi", role: "SI, TN Police", img: "/images/ach1.png", size: "tall", story: "Coming from a rural background, Jayakodi's dedication coupled with Vista's focused SI module helped him secure the 14th state rank." },
  { name: "Suresh", role: "SBI PO", img: "/images/ach2.png", size: "small", story: "Suresh mastered Quantitative Aptitude through our specialized banking workshops, clearing SBI PO in his very first attempt." },
  { name: "Priya", role: "SSC CGL", img: "/images/ach3.png", size: "small", story: "Priya's consistent performance in our daily mock tests gave her the edge needed to crack the SSC CGL Tier 2 with high marks." },
  { name: "Malai Mathi", role: "PO, SBI", img: "/images/ach4.png", size: "tall", story: "Through personalized mentorship and interview training, Malai Mathi overcame her communication barriers to become an SBI Officer." }
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof COURSES[0]>(null);
  const [selectedAchiever, setSelectedAchiever] = useState<null | typeof ACHIEVERS[0]>(null);
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
      
      <FeaturesSection />
      
      {/* Interactive Exam Spotlight */}
      <section className="py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-vista-blue uppercase tracking-tighter"
            >
              Targeted <span className="text-vista-gold underline decoration-vista-gold/30">Exams</span>
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
                className="h-32 md:h-40 rounded-[2.5rem] bg-slate-50 flex flex-col items-center justify-center p-4 md:p-6 text-center ring-1 ring-black/5 hover:ring-vista-gold/50 hover:bg-white hover:shadow-2xl hover:shadow-vista-gold/10 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-vista-gold/5 to-transparent pointer-events-none" />
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                  {course.icon}
                </div>
                <span className="text-vista-blue font-black text-[10px] md:text-xs group-hover:text-vista-gold transition-all line-clamp-2 uppercase tracking-tighter leading-tight relative z-10">
                  {course.title}
                </span>
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
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row group"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-slate-50 flex items-center justify-center p-12">
                <div className="flex flex-col items-center text-center gap-6">
                   <div className={`w-32 h-32 rounded-[2.5rem] ${selectedCourse.color} flex items-center justify-center text-6xl shadow-2xl ring-8 ring-white/50 animate-bounce`}>
                      {selectedCourse.icon}
                   </div>
                   <div className="space-y-1">
                      <div className="text-vista-blue font-black text-xl uppercase tracking-tighter">Vista Academy</div>
                      <div className="text-vista-gold font-bold text-xs uppercase tracking-[0.2em]">Excellence Reimagined</div>
                   </div>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12 space-y-8 relative">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-vista-blue hover:bg-vista-gold transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 0M6 6l12 12" />
                  </svg>
                </button>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-vista-gold/10 text-vista-gold font-bold text-xs uppercase tracking-widest ring-1 ring-vista-gold/20">
                      Standard Program
                    </span>
                    <span className="text-slate-300 font-black">•</span>
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedCourse.duration}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-vista-blue uppercase tracking-tighter leading-none">{selectedCourse.title}</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    {selectedCourse.content}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "Material", v: "Daily PDFs" },
                      { l: "Testing", v: "Weekly Exams" },
                      { l: "Mentoring", v: "1-on-1 Help" },
                      { l: "Access", v: "Offline/Online" }
                    ].map((feat, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-2xl flex flex-col gap-1 ring-1 ring-black/5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{feat.l}</span>
                        <span className="text-vista-blue font-bold">{feat.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full h-16 bg-vista-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-vista-gold hover:text-vista-blue transition-all flex items-center justify-center gap-3 group/btn">
                  Enroll in course
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Achievers Section (Modern Bento Style) */}
      <section id="testimonials" className="py-24 px-6 bg-vista-blue relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <div className="w-14 h-14 bg-vista-gold rounded-2xl flex items-center justify-center shadow-2xl shadow-vista-gold/30 rotate-3">
                <span className="text-3xl font-black text-vista-blue">"</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Our Student <br />
                <span className="text-vista-gold">Success Stories</span>
              </h2>
              <p className="text-white/60 text-xl font-medium leading-relaxed max-w-xl">
                Real results from real students. See how Vista Academy transformed their career path through dedicated mentorship, structured materials, and consistent testing.
              </p>
              <div className="pt-8 flex flex-col gap-6 border-t border-white/10">
                 <div className="flex items-center gap-6 group">
                    <div className="text-white text-6xl font-black tracking-tighter group-hover:text-vista-gold transition-colors">2k+</div>
                    <div className="text-white/40 font-bold text-sm uppercase tracking-widest leading-none">Aspirants <br /> Cracked Govt. Jobs</div>
                 </div>
              </div>
           </motion.div>

           <div className="grid grid-cols-2 gap-4 md:gap-6 relative min-h-[500px]">
              {ACHIEVERS.map((ach, idx) => (
                <motion.div 
                  key={idx}
                  layoutId={`achiever-${idx}`}
                  onClick={() => setSelectedAchiever(ach)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-[2.5rem] overflow-hidden group ring-1 ring-white/10 cursor-pointer ${
                    ach.size === "tall" ? "h-[320px]" : "h-[240px]"
                  } ${idx % 2 !== 0 ? "mt-12" : ""}`}
                >
                  <img 
                    src={ach.img} 
                    alt={ach.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vista-blue via-vista-blue/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white font-black text-xl mb-0.5">{ach.name}</div>
                    <div className="text-vista-gold font-bold text-[10px] uppercase tracking-widest">{ach.role}</div>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-vista-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Achiever Modal */}
      <AnimatePresence>
        {selectedAchiever && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchiever(null)}
              className="absolute inset-0 bg-vista-gold/90 backdrop-blur-xl pointer-events-auto"
            />
            <motion.div 
              layoutId={`achiever-${ACHIEVERS.indexOf(selectedAchiever)}`}
              className="relative w-full max-w-2xl bg-vista-blue rounded-[3rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col items-center text-center p-12 group"
            >
              <button 
                onClick={() => setSelectedAchiever(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="w-32 h-32 rounded-3xl overflow-hidden ring-4 ring-vista-gold/50 shadow-2xl mb-8">
                <img src={selectedAchiever.img} alt={selectedAchiever.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-vista-gold font-black text-xs uppercase tracking-[0.3em] mb-2">Verified Success</div>
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter">{selectedAchiever.name}</h3>
                  <div className="text-white/40 font-bold text-lg">{selectedAchiever.role}</div>
                </div>
                
                <p className="text-white/80 text-xl font-medium italic leading-relaxed max-w-md">
                   "{selectedAchiever.story}"
                </p>
                
                <div className="pt-8 border-t border-white/10 flex justify-center gap-12">
                   <div>
                     <div className="text-vista-gold text-2xl font-black tracking-tighter">2024</div>
                     <div className="text-white/30 text-[10px] font-black uppercase tracking-widest">Selection Year</div>
                   </div>
                   <div>
                     <div className="text-vista-gold text-2xl font-black tracking-tighter">AIR 14</div>
                     <div className="text-white/30 text-[10px] font-black uppercase tracking-widest">Exam Rank</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ContactSection />
    </>
  );
}
