"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Maximize2, ArrowLeft, ArrowRight } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/gallery/one.jpeg",
  "/images/gallery/two.jpeg",
  "/images/gallery/three.jpeg",
  "/images/gallery/four.jpeg",
  "/images/gallery/five.jpeg",
  "/images/gallery/six.jpeg",
  "/images/gallery/seven.jpeg",
  "/images/gallery/eight.jpeg",
  "/images/gallery/nine.jpeg",
  "/images/gallery/ten.jpeg",
  "/images/gallery/eleven.jpeg",
  "/images/gallery/twelve.jpeg",
  "/images/gallery/thirteen.jpeg",
  "/images/gallery/fourteen.jpeg",
  "/images/gallery/fifteen.jpeg",
];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <section id="gallery" className="py-24 bg-vista-blue overflow-hidden relative">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="text-[20vw] font-black text-white whitespace-nowrap leading-none -ml-[10%]">
          VISTA GALLERY VISTA GALLERY
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-px bg-vista-gold" />
              <span className="text-vista-gold font-black text-xs uppercase tracking-[0.3em]">Moments</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Our <span className="text-vista-gold">Gallery</span>
            </motion.h2>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm max-w-xs">
            A glimpse into the life and successes at Vista Academy
          </p>
        </div>
      </div>

      {/* Swipeable Gallery */}
      <div className="relative cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }} // Dynamic constraint would be better but this is a quick fix for demo
          className="flex gap-6 px-6"
          style={{ width: "fit-content" }}
        >
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: idx % 2 === 0 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              onClick={() => setSelectedImage(src)}
              className="relative shrink-0 w-[300px] md:w-[450px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vista-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="text-white" size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Instruction */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-full h-full bg-vista-gold"
             />
          </div>
          <span className="text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">Swipe to explore</span>
          <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
             <motion.div 
               animate={{ x: ["100%", "-100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-full h-full bg-vista-gold"
             />
          </div>
        </div>
      </div>

      {/* Lightbox / Enlarged View */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-vista-blue/95 backdrop-blur-2xl cursor-pointer"
            />
            
            <motion.div
              layoutId={selectedImage}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/10 z-10 bg-black"
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="w-full h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-vista-gold hover:text-vista-blue transition-all duration-300"
              >
                <X size={28} />
              </button>

              {/* Navigation Bar (Optional) */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-8">
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const idx = GALLERY_IMAGES.indexOf(selectedImage);
                    const nextIdx = (idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
                    setSelectedImage(GALLERY_IMAGES[nextIdx]);
                  }}
                  className="text-white hover:text-vista-gold transition-colors"
                 >
                   <ArrowLeft size={24} />
                 </button>
                 <div className="w-px h-6 bg-white/10" />
                 <span className="text-white/60 font-black text-xs uppercase tracking-widest">
                    {GALLERY_IMAGES.indexOf(selectedImage) + 1} / {GALLERY_IMAGES.length}
                 </span>
                 <div className="w-px h-6 bg-white/10" />
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const idx = GALLERY_IMAGES.indexOf(selectedImage);
                    const nextIdx = (idx + 1) % GALLERY_IMAGES.length;
                    setSelectedImage(GALLERY_IMAGES[nextIdx]);
                  }}
                  className="text-white hover:text-vista-gold transition-colors"
                 >
                   <ArrowRight size={24} />
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
