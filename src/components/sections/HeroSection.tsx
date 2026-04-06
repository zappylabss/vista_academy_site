"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Star, GraduationCap, Laptop, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden px-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-vista-blue/5 -skew-x-12 transform translate-x-1/4 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-vista-gold/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-vista-gold/10 text-vista-gold px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase">
            <Star size={16} fill="currentColor" />
            Voted #1 Academy in South India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-vista-blue">
            Turn Your <span className="text-vista-gold">Aspiration</span> Into An <span className="relative">Achievememt<span className="absolute bottom-2 left-0 w-full h-3 bg-vista-gold/20 -z-10" /></span>
          </h1>
          
          <p className="text-xl text-vista-blue/70 leading-relaxed max-w-xl">
            South India's most trusted coaching center for Banking, SSC, Railways, and TNPSC. Join 200k+ students forging their path to government careers.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact" 
                className="bg-vista-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-vista-accent transition-all hover:translate-x-1 hover:shadow-xl group"
              >
                Start Learning Now <ArrowRight size={20} />
              </Link>
              <Link 
                href="#courses" 
                className="bg-white text-vista-blue border-2 border-vista-blue/10 px-8 py-4 rounded-xl font-bold hover:bg-vista-blue/5 transition-all"
              >
                Explore Courses
              </Link>
            </div>
            
            {/* Detail Icons below main CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { icon: Sparkles, text: "Live Classes" },
                { icon: BookOpen, text: "Daily Mock Tests" },
                { icon: CheckCircle2, text: "Placement Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-vista-blue/40 font-bold text-xs uppercase tracking-widest">
                  <item.icon size={16} className="text-vista-gold" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 flex items-center gap-12 border-t border-vista-blue/5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-white bg-vista-gold flex items-center justify-center text-xs font-bold text-vista-blue">
                +1k
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-vista-blue">50,000+</div>
              <div className="text-sm text-vista-blue/50">Successful Selections</div>
            </div>
          </div>
        </motion.div>

        {/* Visual / Image (Simulated with modern bento component) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
             <div className="h-64 bg-vista-blue rounded-3xl overflow-hidden relative group p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                   <GraduationCap className="text-white w-7 h-7" />
                </div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-xl uppercase tracking-tighter">Campus Excellence</div>
             </div>
             <div className="h-80 bg-vista-gold rounded-3xl p-8 flex flex-col justify-between">
                <Trophy className="w-12 h-12 text-vista-blue" />
                <div className="text-vista-blue font-bold text-2xl uppercase tracking-widest leading-none">Record Breaking Success</div>
             </div>
          </div>
          <div className="space-y-4 pt-12">
             <div className="h-80 bg-slate-100 rounded-3xl flex flex-col items-center justify-center p-8 text-center gap-4">
                <Users className="w-12 h-12 text-vista-gold" />
                <div className="text-vista-blue text-4xl font-black">200K+</div>
                <div className="text-sm text-vista-blue/60 font-medium tracking-widest uppercase">Registered Aspirants</div>
             </div>
             <div className="h-64 bg-vista-accent/10 rounded-3xl ring-1 ring-vista-accent/20 flex flex-col justify-between p-8">
                <div className="w-12 h-12 bg-vista-accent/20 rounded-2xl flex items-center justify-center">
                   <Laptop className="text-vista-accent w-7 h-7" />
                </div>
                <div className="text-vista-accent font-bold text-xl">Digital Learning Support</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
