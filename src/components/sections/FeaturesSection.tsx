"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Trophy,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { id: 1, label: "Total Selections", value: "5000+", icon: Trophy, color: "bg-orange-500" },
  { id: 2, label: "Registered Students", value: "20k+", icon: Users, color: "bg-blue-600" },
  { id: 3, label: "Offline Centres", value: "2+", icon: Building2, color: "bg-purple-600" },
  { id: 4, label: "Years of Trust", value: "14+", icon: Star, color: "bg-amber-500" },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white relative z-10 -mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-vista-blue/5 ring-1 ring-black/5 flex flex-col items-center justify-center text-center group hover:scale-[1.05] transition-all"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform", stat.color)}>
                <stat.icon className="text-white w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-vista-blue mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-vista-blue/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
