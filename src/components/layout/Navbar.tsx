"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, Phone, User, BookOpen, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#courses" },
  { name: "Centres", href: "#contact" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-vista-blue p-2 rounded-xl group-hover:bg-vista-accent transition-colors">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold text-vista-blue block leading-none">VISTA</span>
            <span className="text-xs uppercase tracking-widest text-vista-gold font-semibold">Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-vista-blue hover:text-vista-gold font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-vista-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-vista-accent transition-all hover:shadow-lg active:scale-95"
          >
            Join Now
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
