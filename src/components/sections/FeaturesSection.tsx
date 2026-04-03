"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Tv, 
  MapPin, 
  ArrowRight, 
  Star,
  Users,
  Trophy,
  LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { id: 1, label: "Total Selections", value: "50,000+", icon: Trophy, color: "bg-orange-500" },
  { id: 2, label: "Registered Students", value: "200k+", icon: Users, color: "bg-blue-600" },
  { id: 3, label: "Offline Centres", value: "40+", icon: Building2, color: "bg-purple-600" },
  { id: 4, label: "Years of Trust", value: "13+", icon: Star, color: "bg-amber-500" },
];

const courses = [
  {
    id: 1,
    title: "Classroom Offline",
    desc: "Attend classroom offline courses for Bank, SSC, TNPSC, Railways & TNUSRB SI/PC Police Courses at our premium offline centres.",
    features: ["Expert Faculty", "Library Access", "Daily Tests", "Mentorship"],
    icon: Building2,
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    title: "LIVE Online",
    desc: "Prepare for competitive exams through our LIVE Online Courses taught by our best faculty from the comfort of your homes.",
    features: ["Live Classes", "Recorded Sessions", "Study Materials", "E-Tests"],
    icon: Tv,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Residential Course",
    desc: "Stay at our residential campuses and learn without any disturbances with dedicated mentors, access to study halls & libraries.",
    features: ["Hostel Facility", "24/7 Library", "Mock Tests", "Gym & Food"],
    icon: LayoutGrid,
    gradient: "from-emerald-600 to-teal-700"
  }
];

export default function FeaturesSection() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20 px-6 bg-white relative z-10 -mt-10">
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

      {/* Courses Section */}
      <section id="courses" className="py-24 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-vista-blue leading-tight">
                Our Specialized <br />
                <span className="text-vista-gold">Learning Programs</span>
              </h2>
              <p className="text-xl text-vista-blue/60 max-w-xl">
                Tailored education for every aspirant. Choose the path that fits your learning style.
              </p>
            </div>
            <button className="bg-vista-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-vista-accent transition-all hover:translate-x-1">
               Compare All Programs <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-vista-blue/5 overflow-hidden group hover:ring-1 hover:ring-vista-gold transition-all"
              >
                <div className={cn("h-48 rounded-[2rem] p-10 flex flex-col justify-between bg-gradient-to-br", course.gradient)}>
                   <course.icon className="text-white w-12 h-12" />
                   <h3 className="text-white text-3xl font-black tracking-tight">{course.title}</h3>
                </div>
                <div className="p-8 space-y-8">
                   <p className="text-vista-blue/70 font-medium leading-relaxed h-24 overflow-hidden">
                      {course.desc}
                   </p>
                   <ul className="space-y-4">
                      {course.features.map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-vista-blue font-bold text-sm bg-slate-100/50 py-2.5 px-4 rounded-xl group-hover:bg-vista-blue/5 transition-colors">
                           <div className="w-1.5 h-1.5 rounded-full bg-vista-gold" />
                           {feat}
                        </li>
                      ))}
                   </ul>
                   <button className="w-full py-4 border-2 border-slate-100 rounded-2xl text-vista-blue font-black tracking-widest uppercase text-sm hover:border-vista-gold hover:text-vista-gold transition-all group-hover:bg-vista-blue group-hover:text-white group-hover:border-vista-blue">
                      Discover More
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
