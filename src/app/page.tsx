"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
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
            {[
              "SI (TALUK)", "PC", "TET", "TNPSC (TAMIL & ENGLISH)", 
              "BANKING (IBPS/SBI)", "SSC", "RRB", "TNEB", 
              "TANCET", "SI", "POLICE", "NEET"
            ].map((exam, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="h-24 md:h-28 rounded-[2rem] bg-slate-50 flex items-center justify-center p-4 md:p-6 text-center ring-1 ring-black/5 hover:ring-vista-gold/50 hover:bg-white hover:shadow-2xl hover:shadow-vista-gold/10 transition-all cursor-default group"
              >
                <span className="text-vista-blue font-black text-sm md:text-base group-hover:scale-105 group-hover:text-vista-gold transition-all line-clamp-2">{exam}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              {[
                { name: "Jayakodi", role: "SI, TN Police", img: "/images/ach1.png", size: "tall" },
                { name: "Suresh", role: "SBI PO", img: "/images/ach2.png", size: "small" },
                { name: "Priya", role: "SSC CGL", img: "/images/ach3.png", size: "small" },
                { name: "Malai Mathi", role: "PO, SBI", img: "/images/ach4.png", size: "tall" }
              ].map((ach, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-[2.5rem] overflow-hidden group ring-1 ring-white/10 ${
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

      <ContactSection />
    </>
  );
}
