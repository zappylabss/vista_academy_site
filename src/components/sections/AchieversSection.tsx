"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Users, Trophy, X } from "lucide-react";
import { useState } from "react";

const ACHIEVERS = [
  { name: "Jayakodi", role: "SI, TN Police", img: "/images/ach1.png" },
  { name: "Suresh", role: "SBI PO", img: "/images/ach2.png" },
  { name: "Priya", role: "SSC CGL", img: "/images/ach3.png" },
  { name: "Malai Mathi", role: "PO, SBI", img: "/images/ach4.png" },
  { name: "Anitha", role: "TNPSC G2", img: "/images/ach5.jpeg" },
  { name: "Baskar", role: "Railway ALP", img: "/images/ach6.jpeg" },
  { name: "Chitra", role: "TET Qualified", img: "/images/ach7.jpeg" },
  { name: "Dinesh", role: "Police PC", img: "/images/ach8.jpeg" },
  { name: "Eswari", role: "IBPS Clerk", img: "/images/ach9.jpeg" },
  { name: "Fakir", role: "SSC MTS", img: "/images/ach10.jpeg" },
  { name: "Gowtham", role: "SI, TN Police", img: "/images/ach11.jpeg" },
  { name: "Harini", role: "RRB NTPC", img: "/images/ach12.jpeg" },
  { name: "Indhu", role: "TNPSC G4", img: "/images/ach13.jpeg" },
  { name: "Jagadish", role: "Bank Clerk", img: "/images/ach14.jpeg" },
  { name: "Kaviya", role: "Police SI", img: "/images/ach15.jpeg" },
  { name: "Lokesh", role: "SSC CPO", img: "/images/ach16.jpeg" },
  { name: "Manoj", role: "Railway Group D", img: "/images/ach17.jpeg" },
  { name: "Nandhini", role: "TNPSC G1", img: "/images/ach18.jpeg" },
  { name: "Oviya", role: "SBI Clerk", img: "/images/ach19.jpeg" },
  { name: "Praveen", role: "Postal Dept", img: "/images/ach20.jpeg" },
];

// Double the list for seamless infinite scroll
const marqueeOne = [...ACHIEVERS.slice(0, 10), ...ACHIEVERS.slice(0, 10)];
const marqueeTwo = [...ACHIEVERS.slice(10, 20), ...ACHIEVERS.slice(10, 20)];

const AchieverCard = ({ ach, onClick, id }: { ach: typeof ACHIEVERS[0], onClick: () => void, id: string }) => (
  <motion.div 
    layoutId={id}
    onClick={onClick}
    className="flex-shrink-0 w-64 h-80 mx-4 relative group cursor-pointer"
  >
    <div className="absolute inset-0 bg-vista-blue rounded-[2.5rem] overflow-hidden">
      <img
        src={ach.img}
        alt={ach.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vista-blue via-vista-blue/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

      <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
        <Trophy className="text-vista-gold" size={20} />
      </div>
    </div>
  </motion.div>
);

export default function AchieversSection() {
  const [selected, setSelected] = useState<{ ach: typeof ACHIEVERS[0], id: string } | null>(null);

  return (
    <section id="achievers" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-px bg-vista-gold" />
              <span className="text-vista-gold font-black text-xs uppercase tracking-[0.3em]">Success Wall</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-vista-blue tracking-tighter"
            >
              Our Hall of <br />
              <span className="text-vista-gold italic">Achievers</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block max-w-sm text-right"
          >
            <p className="text-slate-400 font-medium text-lg leading-relaxed">
              Every year, hundreds of our students break stereotypes and secure their dream government positions. You could be next.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-12 relative">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={selected ? {} : { x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex flex-nowrap"
          >
            {marqueeOne.map((ach, idx) => (
              <AchieverCard 
                key={`row1-${idx}`} 
                id={`row1-${idx}`}
                ach={ach} 
                onClick={() => setSelected({ ach, id: `row1-${idx}` })}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={selected ? {} : { x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex flex-nowrap"
          >
            {marqueeTwo.map((ach, idx) => (
              <AchieverCard 
                key={`row2-${idx}`} 
                id={`row2-${idx}`}
                ach={ach} 
                onClick={() => setSelected({ ach, id: `row2-${idx}` })}
              />
            ))}
          </motion.div>
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Selection Stats */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Students Selected", value: "2500+", icon: Users },
             { label: "State Ranks", value: "15+", icon: Award },
             { label: "Success Rate", value: "94%", icon: Star },
             { label: "Centers", value: "Salem & Erode", icon: Trophy },
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-[2.5rem] bg-white ring-1 ring-black/5 hover:shadow-xl hover:shadow-vista-blue/5 transition-all text-center"
             >
                <stat.icon className="mx-auto text-vista-gold mb-4" size={32} />
                <div className="text-3xl font-black text-vista-blue tracking-tighter mb-1">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Enlarged Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelected(null)}
               className="absolute inset-0 bg-vista-blue/90 backdrop-blur-xl"
             />
             
             <motion.div 
               layoutId={selected.id}
               className="relative w-full max-w-xl aspect-[4/5] md:aspect-square bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10"
             >
                <img 
                  src={selected.ach.img} 
                  alt={selected.ach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vista-blue/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10 text-white">
                   <div className="text-4xl font-black mb-2">{selected.ach.name}</div>
                   <div className="text-vista-gold text-lg font-bold uppercase tracking-[0.2em]">{selected.ach.role}</div>
                </div>

                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-8 right-8 w-14 h-14 rounded-full bg-vista-gold shadow-lg shadow-vista-gold/20 flex items-center justify-center text-vista-blue hover:bg-white transition-all ring-4 ring-vista-gold/30"
                >
                  <X size={32} strokeWidth={3} />
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
