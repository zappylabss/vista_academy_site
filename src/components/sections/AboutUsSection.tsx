"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Target, BookOpen } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vista-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-px bg-vista-gold" />
                <span className="text-vista-gold font-black text-xs uppercase tracking-[0.3em]">Knowledge is Power</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-vista-blue uppercase tracking-tighter leading-[1.1]"
              >
                About <br /> <span className="text-vista-gold">Vista Academy</span>
              </motion.h2>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-6"
            >
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                Established in <span className="text-vista-gold font-bold">2012</span>, Vista Academy is Salem and Erode's premier destination for competitive exam preparation. We are dedicated to providing focused coaching for a wide range of exams, including <strong className="text-vista-blue">TNPSC, RRB, SSC, Banking, Police (SI/PC) & NEET</strong>.
              </p>
              
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                Our experienced faculty and comprehensive curriculum are designed to equip students with the knowledge and skills necessary to excel. At our training centre, we foster a supportive and ambitious environment, empowering individuals to achieve their career goals and build a successful future. 
              </p>
              
              <div className="pl-6 border-l-4 border-vista-gold py-2">
                 <p className="text-vista-blue font-black text-xl italic">
                   "Vista Academy is your partner in turning professional aspirations into reality."
                 </p>
              </div>
            </motion.div>

            {/* Stats/Icons row */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="grid grid-cols-2 gap-6 pt-6"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-vista-blue/5 flex items-center justify-center text-vista-blue">
                     <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="font-black text-vista-blue text-xl">14+ Years</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experience</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-vista-gold/10 flex items-center justify-center text-vista-gold">
                     <Target size={24} />
                  </div>
                  <div>
                    <div className="font-black text-vista-blue text-xl">Targeted</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Coaching</div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-vista-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img 
              src="/images/hero2.png" 
              alt="Vista Academy Students" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            {/* Floating Card */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl z-20 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <div className="flex items-center gap-4">
                 <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center font-bold text-blue-600">S</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-green-100 flex items-center justify-center font-bold text-green-600">A</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center font-bold text-purple-600">P</div>
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-vista-gold flex items-center justify-center font-bold text-vista-blue"><Users size={16} /></div>
                 </div>
                 <div>
                    <div className="text-vista-blue font-black text-lg">Join Our Community</div>
                    <div className="text-slate-500 font-medium text-sm">Thousands of successful alumni</div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
