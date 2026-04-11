import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vista-blue text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        
        {/* About Academy */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-white p-2 rounded-xl group-hover:bg-vista-gold transition-colors">
              <GraduationCap className="w-8 h-8 text-vista-blue" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white block leading-none">VISTA</span>
              <span className="text-xs uppercase tracking-widest text-vista-gold font-semibold">Academy</span>
            </div>
          </Link>
          <p className="text-white/70 leading-relaxed font-light">
            Empowering students with excellence in competitive exam preparation. 
            Join the ranks of achievers with our expert mentorship and state-of-the-art facilities.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-vista-gold uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-white/70">
            {[
              { name: "Home", href: "#" },
              { name: "Learning Programs", href: "#courses" },
              { name: "Targeted Exams", href: "#exams" },
              { name: "Success Stories", href: "#achievers" },
              { name: "Our Locations", href: "#contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-vista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-vista-gold/50 rounded-full group-hover:bg-vista-gold transition-colors" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-vista-gold uppercase tracking-widest">Exams</h4>
          <ul className="space-y-4 text-white/70">
            {["Banking & Insurance", "SSC (CGL/CHSL/MTS)", "Railways (RRB)", "TNPSC Group Exams", "TNUSRB Police", "Central Govt. Exams"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-vista-gold transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/10 rounded-full group-hover:bg-vista-gold transition-colors" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-vista-gold uppercase tracking-widest">Contact Us</h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Get in touch with our expert counselors for personalized guidance on your career path.
          </p>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
             <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
               <Phone size={18} className="text-vista-gold" />
               <span className="text-sm font-medium">+91 93452 54176</span>
             </div>
             <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
               <Mail size={18} className="text-vista-gold" />
               <span className="text-sm font-medium">pravinvista.slm@gmail.com</span>
             </div>
             <div className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
               <MapPin size={18} className="text-vista-gold mt-1 flex-shrink-0" />
               <span className="text-sm font-medium">Salem & Erode, Tamil Nadu</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
        <p>© {currentYear} Vista Academy. All Rights Reserved.</p>
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-vista-gold">Privacy Policy</Link>
          <Link href="#" className="hover:text-vista-gold">Terms of Service</Link>
          <Link href="#" className="hover:text-vista-gold">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
