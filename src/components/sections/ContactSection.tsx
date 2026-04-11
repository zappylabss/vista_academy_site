"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Tv, 
  MapPin, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { sendContactEmail } from "@/app/actions/contact";
import { Loader2 } from "lucide-react";

const locations = [
  {
    id: "salem",
    name: "Salem Branch",
    address: "New Bus Stand Road, Near Swadeshi Mall, Salem, Tamil Nadu 636004",
    phone: "+91 93452 54176",
    wa: "919345254176",
    email: "salem@vistaacademy.com",
    hours: "9:00 AM - 7:00 PM",
    map: "https://www.google.com/maps?q=Salem"
  },
  {
    id: "erode",
    name: "Erode Branch",
    address: "Mettur Road, Opp. to Central Bus Stand, Erode, Tamil Nadu 638011",
    phone: "+91 63819 50060",
    wa: "916381950060",
    email: "erode@vistaacademy.com",
    hours: "9:00 AM - 7:30 PM",
    map: "https://www.google.com/maps?q=Erode"
  }
];

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState(locations[0]);
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Email
      await sendContactEmail({
        ...formData,
        branch: activeTab.name
      });

      // Existing WhatsApp feature
      const text = `Hi Vista Academy (${activeTab.name}), I'm ${formData.name}. My phone number is ${formData.phone}. I'm interested in the ${formData.course} course. Please contact me soon!`;
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/${activeTab.wa}?text=${encoded}`, "_blank");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none -z-10">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-vista-blue rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-vista-blue">Our <span className="text-vista-gold">Locations</span></h2>
          <p className="text-vista-blue/60 max-w-2xl mx-auto">
            Find the nearest Vista Academy campus and start your journey with us. 
            Choose your preferred location and message us on WhatsApp instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Toggle & Details */}
          <div className="space-y-8">
            <div className="flex gap-4 p-2 bg-slate-200/50 rounded-2xl w-fit">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc)}
                  className={cn(
                    "px-8 py-3 rounded-xl font-bold transition-all text-sm uppercase tracking-widest",
                    activeTab.id === loc.id 
                      ? "bg-white text-vista-blue shadow-lg scale-105" 
                      : "text-vista-blue/40 hover:text-vista-blue/60"
                  )}
                >
                  {loc.id}
                </button>
              ))}
            </div>

            <motion.div
              layoutId="activeLocation"
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-vista-blue/5 space-y-8 relative overflow-hidden ring-1 ring-black/5"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-vista-gold/5 rounded-full blur-[40px]" />
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-vista-blue flex items-center gap-3">
                  <Building2 className="text-vista-gold" />
                  {activeTab.name}
                </h3>
              </div>

              <div className="space-y-6">
                 <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-vista-blue group-hover:bg-vista-blue group-hover:text-white transition-colors">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <div className="text-sm font-bold uppercase tracking-widest text-vista-blue/40 mb-1">Address</div>
                       <p className="text-vista-blue text-lg font-medium leading-snug">{activeTab.address}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 group">
                       <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-vista-blue group-hover:bg-vista-blue group-hover:text-white transition-colors">
                          <Phone size={24} />
                       </div>
                       <div>
                          <div className="text-sm font-bold uppercase tracking-widest text-vista-blue/40 mb-1">Call Us</div>
                          <p className="text-vista-blue text-lg font-bold underline decoration-vista-gold/30">{activeTab.phone}</p>
                       </div>
                    </div>
                    <div className="flex gap-4 group">
                       <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-vista-blue group-hover:bg-vista-blue group-hover:text-white transition-colors">
                          <Clock size={24} />
                       </div>
                       <div>
                          <div className="text-sm font-bold uppercase tracking-widest text-vista-blue/40 mb-1">Timing</div>
                          <p className="text-vista-blue text-lg font-bold">{activeTab.hours}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                 <a 
                   href={activeTab.map} 
                   target="_blank" 
                   className="flex items-center gap-2 text-vista-blue font-bold hover:text-vista-gold transition-colors"
                 >
                    Get Directions <ExternalLink size={18} />
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Dynamic WhatsApp Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-vista-blue rounded-[3rem] -rotate-2 -z-10 opacity-5" />
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl ring-1 ring-black/[0.02]">
              <h4 className="text-2xl font-black text-vista-blue mb-2">Instant Admission <span className="text-vista-gold underline decoration-vista-gold/50">Support</span></h4>
              <p className="text-slate-500 mb-8 font-medium">Message our {activeTab.id} counselor directly on WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-tighter text-slate-400 px-1">Your Name</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-vista-gold/50 transition-all font-medium text-vista-blue placeholder:text-slate-300"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-tighter text-slate-400 px-1">Mobile No</label>
                    <input 
                       required
                       value={formData.phone}
                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
                       type="tel" 
                       placeholder="10 digit number" 
                       className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-vista-gold/50 transition-all font-medium text-vista-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-tighter text-slate-400 px-1">Desired Course</label>
                    <select 
                       value={formData.course}
                       onChange={(e) => setFormData({...formData, course: e.target.value})}
                       className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-vista-gold/50 transition-all font-bold text-vista-blue appearance-none"
                    >
                       <option value="">Select Exam</option>
                       <option value="BANKING">Banking & IBPS</option>
                       <option value="SSC">SSC (CGL/MTS)</option>
                       <option value="RAILWAYS">Railways (RRB)</option>
                       <option value="TNPSC">TNPSC Group Exams</option>
                       <option value="POLICE">Police (SI/PC)</option>
                       <option value="TET">TET / Teachers Exam</option>
                       <option value="OTHERS">Others exams</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={28} />
                      Processing...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={28} />
                      Connect to {activeTab.id} Branch
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">
                  No Hidden Charges • Instant Response
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
