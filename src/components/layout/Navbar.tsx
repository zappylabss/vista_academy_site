"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, Phone, User, BookOpen, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#exams" },
  { name: "Achievers", href: "#achievers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass ring-1 ring-black/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Social Icons Container */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
              <img 
                src="/images/logo.jpeg" 
                alt="Vista Academy Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-vista-blue tracking-tighter leading-none">
                VISTA <span className="text-vista-gold">ACADEMY</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-vista-blue/40 font-black mt-1">
                Excellence Reimagined
              </span>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-3 border-l-2 border-vista-blue/10 pl-4 h-6">
            <a href="https://www.instagram.com/vista_academy_tnpsc_ssc_2012?igsh=MXZkMHJuZnB6MmV5dQ==" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-[#E4405F]">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com/@vistaacademy_since2012?si=4lPqowNdU_BBoVxL" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-[#FF0000]">
              <Youtube size={18} />
            </a>
            <a href="https://facebook.com/VISTAACADEMY2012" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform text-[#1877F2]">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-vista-blue hover:text-vista-gold font-medium transition-colors py-2"
              >
                {item.name}
              </Link>

              {item.name === "Courses" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl shadow-vista-blue/10 ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden divide-y divide-slate-100">
                  {[
                    { name: "TNPSC", icon: "/images/exam_logo/tnpsc.png" },
                    { name: "BANKING", icon: "/images/exam_logo/banking.png" },
                    { name: "SSC", icon: "/images/exam_logo/ssc.png" },
                    { name: "RAILWAY", icon: "/images/exam_logo/railways.png" },
                    { name: "SI/PC", icon: "/images/exam_logo/si.jpg" },
                    { name: "TNEB", icon: "/images/exam_logo/tneb.png" },
                    { name: "TANCET", icon: "/images/exam_logo/tancet.png" },
                    { name: "NEET", icon: "/images/exam_logo/neet.jpg" },
                  ].map((course) => (
                    <Link
                      key={course.name}
                      href="#exams"
                      className="flex items-center gap-4 px-6 py-3 text-sm font-bold text-vista-blue hover:text-vista-gold hover:bg-slate-50 transition-colors uppercase tracking-wider group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm border border-slate-100 group-hover/link:scale-110 transition-transform">
                        <img src={course.icon} alt={course.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#contact"
            className="bg-vista-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-vista-accent transition-all hover:shadow-lg active:scale-95"
          >
            For Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-vista-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs glass-dark z-[60] p-8 shadow-2xl md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold text-white uppercase tracking-widest">Vista Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-vista-gold transition-colors flex items-center gap-3"
                >
                  <span className="w-1 h-1 bg-vista-gold rounded-full" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
                <Link
                  href="#contact"
                  className="w-full bg-vista-gold text-vista-blue py-3 rounded-xl flex items-center justify-center font-bold gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
