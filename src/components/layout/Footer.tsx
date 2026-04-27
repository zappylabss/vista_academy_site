import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Send, Phone, Mail, MapPin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vista-blue text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

        {/* About Academy */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
              <img
                src="/images/logo.jpeg"
                alt="Vista Academy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-none">
                VISTA <span className="text-vista-gold">ACADEMY</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mt-0.5">
                Victory Institute for Strategic Achievement
              </span>
            </div>
          </Link>
          <p className="text-white/70 leading-relaxed font-light">
            Empowering students with excellence in competitive exam preparation.
            Join the ranks of achievers with our expert mentorship and state-of-the-art facilities.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/VISTAACADEMY2012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110 text-[#1877F2]">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/vista_academy_tnpsc_ssc_2012?igsh=MXZkMHJuZnB6MmV5dQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110 text-[#E4405F]">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@vistaacademy_since2012?si=4lPqowNdU_BBoVxL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-vista-gold transition-all hover:scale-110 text-[#FF0000]">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-vista-gold uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-white/70">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "#about" },
              { name: "Who We Are", href: "#who-we-are" },
              { name: "Courses Offered", href: "#exams" },
              { name: "Gallery", href: "#gallery" },
              { name: "Achievers", href: "#achievers" },
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
          <h4 className="text-lg font-bold mb-6 text-vista-gold uppercase tracking-widest">Courses</h4>
          <ul className="space-y-4 text-white/70">
            {["TNPSC", "BANKING", "SSC", "RRB", "SI/PC", "TNEB(AE/TA)", "TANCET(MBA/MCA)", "NEET"].map((item) => (
              <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-vista-gold transition-colors">
                <span className="w-1.5 h-1.5 bg-white/10 rounded-full group-hover:bg-vista-gold transition-colors" />
                {item}
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
              <span className="text-sm font-medium">+91 79049 53066, 93452 54176</span>
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
