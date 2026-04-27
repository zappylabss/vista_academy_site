"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Quote } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side - CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img
                src="/images/ceo/founder.jpeg"
                alt="Pravin Kumar P - Founder & Director"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vista-blue/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-vista-blue font-black text-2xl uppercase tracking-tighter">Pravin Kumar P</h3>
                  <p className="text-vista-gold font-bold text-sm uppercase tracking-widest">Founder & Director</p>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-vista-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-vista-blue/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-px bg-vista-gold" />
                <span className="text-vista-gold font-black text-xs uppercase tracking-[0.3em]">Leadership</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-vista-blue uppercase tracking-tighter leading-none"
              >
                Who <span className="text-vista-gold">We Are</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-vista-gold/20 w-12 h-12" />
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium italic pl-6">
                  "Our mission is to bridge the gap between ambition and achievement. At Vista Academy, we don't just teach; we mentor the next generation of leaders."
                </p>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Led by <span className="text-vista-blue font-bold">Pravin Kumar P</span>, Vista Academy stands as a beacon of excellence in competitive exam coaching. With over <span className="text-vista-gold font-black">14+ years of dedicated experience</span> in the field, our founder brings unparalleled expertise and a proven track record of success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-vista-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-vista-blue/5 flex items-center justify-center text-vista-blue shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="font-black text-vista-blue text-sm uppercase tracking-tighter">14+ Years</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Expertise</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-vista-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-vista-gold/10 flex items-center justify-center text-vista-gold shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="font-black text-vista-blue text-sm uppercase tracking-tighter">Director</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strategic Leadership</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-vista-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="font-black text-vista-blue text-sm uppercase tracking-tighter">Mentorship</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student-Centric Approach</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
