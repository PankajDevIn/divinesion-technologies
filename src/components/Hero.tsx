import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ Type imported safely
import {
  ArrowRightIcon,
  PlayIcon,
  CodeBracketIcon,
  SparklesIcon,
  CheckBadgeIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

// 🛠️ DATA CONFIG (Hero only)
const stats = [
  { num: "50+", label: "Projects", icon: CodeBracketIcon },
  { num: "4.9⭐", label: "Rating", icon: SparklesIcon },
  { num: "100%", label: "Success", icon: CheckBadgeIcon },
];

// 🔥 GLOBAL ANIMATION VARIANTS (Explicitly Typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "spring" } 
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  } 
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.3 } 
  },
};

// 🌪️ HERO PROPS INTERFACE
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

// 🪐 SIMPLIFIED FLOATING ORBS (Blue theme)
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute top-[-8%] left-[-3%] w-125 h-125 bg-linear-to-br from-blue-500/20 to-cyan-500/15 backdrop-blur-xl rounded-full opacity-70"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
      />
      <motion.div 
        className="absolute bottom-[8%] right-[-3%] w-112.5 h-112.5 bg-linear-to-br from-blue-600/15 to-slate-600/10 backdrop-blur-2xl rounded-full opacity-60"
        animate={{ scale: [1, 1.1, 1], rotate: [360, 0] }}
        transition={{ scale: { duration: 16, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-slate-900/20 backdrop-blur-3xl rounded-full opacity-50"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// 🪐 HERO COMPONENT
const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end start"] 
  });
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -40]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-32 overflow-hidden bg-slate-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <FloatingOrbs />

      <motion.div style={{ y: heroY }} className="relative z-20 w-full max-w-7xl mx-auto text-center px-4 text-slate-200">
        {/* Badge */}
        <motion.div 
          variants={slideInLeft} 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border-2 border-blue-800/50 shadow-2xl mb-12 lg:mb-20 w-fit mx-auto"
          transition={{ delay: 0.4 }}
        >
          <BeakerIcon className="w-6 h-6 text-blue-400" />
          <span className="text-sm font-black tracking-[0.2em] uppercase text-slate-300">Lab-Proven Innovation</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          variants={fadeInUp} 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.88] mb-10 lg:mb-16 bg-linear-to-r from-slate-100 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-4xl font-['Inter']"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={fadeInUp} 
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto mb-16 lg:mb-24 px-6 lg:px-12 leading-[1.6] backdrop-blur-sm font-medium"
          transition={{ delay: 1.2 }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={staggerContainer} 
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center mb-24 lg:mb-32"
          transition={{ delay: 1.6 }}
        >
          <motion.a 
            href="/contact" 
            variants={fadeInUp} 
            className="px-14 py-7 lg:px-16 lg:py-8 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-xl lg:text-2xl shadow-3xl backdrop-blur-xl border border-blue-500/50 shadow-blue-500/30 transition-all duration-700 flex items-center gap-4 mx-auto lg:mx-0 w-fit hover:shadow-blue-400/50"
            transition={{ delay: 0 }}
          >
            Launch Project
            <ArrowRightIcon className="w-7 h-7" />
          </motion.a>
          
          <motion.a 
            href="/services" 
            variants={fadeInUp} 
            className="px-14 py-7 lg:px-16 lg:py-8 bg-slate-900/80 backdrop-blur-2xl border-2 border-slate-700/60 text-slate-300 rounded-4xl font-black text-xl lg:text-2xl shadow-2xl transition-all duration-700 flex items-center gap-4 mx-auto lg:mx-0 w-fit hover:border-blue-500/50 hover:text-blue-400"
            transition={{ delay: 0.2 }}
          >
            {ctaText}
            <PlayIcon className="w-7 h-7" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={staggerContainer} 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-20 sm:mt-24 md:mt-28 lg:mt-32 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 border-t border-slate-800/50 pt-12 sm:pt-16"
          transition={{ delay: 2.0 }}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 bg-slate-900/70 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-slate-800/60 shadow-lg sm:shadow-xl lg:shadow-2xl flex flex-col lg:flex-row items-center lg:items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 min-h-25 sm:min-h-30 transition-all duration-1000 text-center lg:text-left h-fit hover:border-blue-600/50 hover:shadow-blue-500/20"
              transition={{ delay: 0.1 * i }}
            >
              <motion.div 
                className="p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-5 shrink-0 bg-linear-to-br from-slate-800/80 to-blue-600/40 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl shadow-blue-500/20 mb-2 sm:mb-2 lg:mb-0 mx-auto lg:mx-0 w-14 sm:w-16 md:w-18 lg:w-20 xl:w-22 h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 flex items-center justify-center"
                animate={{ scale: [1, 1.03, 1], rotate: [0, 5, 0] }} 
                transition={{ scale: { duration: 4, repeat: Infinity }, rotate: { duration: 12, repeat: Infinity } }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-blue-300 drop-shadow-lg shrink-0" />
              </motion.div>
              
              <div className="flex-1 min-w-0 py-0.5 sm:py-1 px-1 sm:px-1.5">
                <div className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl xl:text-[2.125rem] 2xl:text-[2.5rem] font-black text-white drop-shadow-lg sm:drop-shadow-xl mb-1 sm:mb-1.5 md:mb-2 leading-tight tracking-tight">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-widest leading-none truncate">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
