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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {["SBI PO/CLERK", "IBPS RRB", "SSC CGL", "TNPSC G-IV", "RAILWAYS NTPC", "LIC ADO", "SSC CHSL", "POLICE SI"].map((exam, idx) => (
              <motion.div
                key={exam}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="h-28 md:h-32 rounded-[2rem] bg-slate-50 flex items-center justify-center p-6 md:p-8 text-center ring-1 ring-black/5 hover:ring-vista-gold/50 hover:bg-white hover:shadow-2xl hover:shadow-vista-gold/10 transition-all cursor-default group"
              >
                <span className="text-vista-blue font-black text-lg group-hover:scale-110 group-hover:text-vista-gold transition-all">{exam}</span>
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

           <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="space-y-4 md:space-y-6">
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-64 bg-vista-gold/10 rounded-[2.5rem] p-8 ring-1 ring-white/10 overflow-hidden group relative flex flex-col justify-end"
                 >
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 bg-white/5" />
                    <div className="relative z-10">
                      <div className="text-white font-black text-xl mb-1">Jayakodi</div>
                      <div className="text-vista-gold font-bold text-xs uppercase tracking-widest">SI, TN Police</div>
                    </div>
                 </motion.div>
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-48 bg-white/5 rounded-[3rem] p-10 ring-1 ring-white/10 flex flex-col justify-between"
                 >
                    <div className="text-vista-gold font-black text-2xl uppercase italic tracking-tighter leading-none">SBI PO</div>
                    <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Merit Selection 2024</div>
                 </motion.div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-12">
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-48 bg-white/5 rounded-[3rem] p-10 ring-1 ring-white/10 flex items-center"
                 >
                    <p className="text-white/70 font-medium italic text-lg leading-snug">"The mentorship at Vista was the game changer for my entire preparation journey."</p>
                 </motion.div>
                 <motion.div 
                   whileHover={{ y: -5 }}
                   className="h-64 bg-vista-accent/20 rounded-[2.5rem] p-10 ring-1 ring-white/10 overflow-hidden relative group flex flex-col justify-end"
                 >
                    <div className="relative z-10">
                      <div className="text-white font-black text-xl mb-1">Malai Mathi</div>
                      <div className="text-vista-gold font-bold text-xs uppercase tracking-widest">PO, SBI</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
