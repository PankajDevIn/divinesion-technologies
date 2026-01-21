import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import {
  GlobeAltIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Services data
const services = [
  { title: "Mobile Apps", desc: "iOS & Android", icon: CpuChipIcon, color: "from-slate-400 to-violet-400" },
  { title: "Websites", desc: "Fast & Scalable", icon: GlobeAltIcon, color: "from-violet-500 to-indigo-500" },
  { title: "AI Tools", desc: "Automation", icon: SparklesIcon, color: "from-purple-500 to-violet-500" },
  { title: "Cloud", desc: "AWS Experts", icon: RocketLaunchIcon, color: "from-slate-500 to-zinc-400" },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Tailwind", "TypeScript"];

// 🔥 SAME ANIMATION VARIANTS AS HERO
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "spring" } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.3 } 
  },
};

type Props = {};

function Home({}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-900 text-slate-200 selection:bg-violet-500/50 font-['Inter'] overflow-x-hidden">
      
      <Navbar />
      
      {/* 🚀 HERO - Already themed */}
      <Hero 
        title="Divinesion Technologies" 
        subtitle="Speed • Reliability • Innovation" 
        ctaText="Explore Our Services"
      />

      {/* 🛠️ TECH STACK MARQUEE - Hero theme */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={staggerContainer}
        className="py-20 border-y border-slate-900/50 bg-gradient-to-br from-slate-950/90 via-violet-950/20 to-slate-900/90 backdrop-blur-2xl overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 px-8 sm:px-20 lg:px-32 whitespace-nowrap items-center"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <motion.span
              key={i}
              className="text-3xl lg:text-4xl font-black text-slate-300/80 backdrop-blur-xl uppercase tracking-wider animate-pulse drop-shadow-lg"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* 🎨 SERVICES SECTION - Hero theme */}
      <section id="services" className="py-40 px-8 lg:px-20 max-w-8xl mx-auto bg-slate-950/50 backdrop-blur-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="text-center mb-32"
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-[-0.02em] bg-gradient-to-r from-slate-200 via-white to-violet-500 bg-clip-text text-transparent drop-shadow-4xl"
          >
            Core Competencies
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-32 h-1 mx-auto bg-gradient-to-r from-violet-600 to-purple-600 rounded-full shadow-lg shadow-violet-500/50"
          />
          <motion.p 
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto mt-12 leading-relaxed font-medium backdrop-blur-sm"
          >
            Precision-engineered solutions for enterprise scale
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative p-12 lg:p-16 rounded-[3rem] bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800/70 backdrop-blur-xl shadow-3xl shadow-slate-900/50 hover:shadow-violet-500/20 group transition-all duration-1000 min-h-[320px] overflow-hidden"
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 ${service.color} blur-xl`}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative z-10 p-8 rounded-3xl mb-12 shadow-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/50"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                transition={{ scale: { duration: 6, repeat: Infinity }, rotate: { duration: 10, repeat: Infinity } }}
              >
                <service.icon className="w-16 h-16 text-white drop-shadow-2xl" />
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-8 text-white drop-shadow-xl animate-pulse bg-gradient-to-r from-slate-200 to-slate-100 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium backdrop-blur-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🚀 FINAL CTA - Hero theme */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-40 px-8 lg:px-24 bg-gradient-to-br from-slate-950/80 via-violet-950/10 to-slate-900/80 backdrop-blur-xl"
      >
        <motion.div 
          variants={fadeInUp}
          className="relative max-w-6xl mx-auto p-16 lg:p-24 rounded-[5rem] bg-gradient-to-br from-violet-700/90 via-purple-700/80 to-slate-900/95 backdrop-blur-3xl border border-violet-600/50 shadow-4xl shadow-violet-500/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/8 to-transparent opacity-60 backdrop-blur-xl" />
          
          <div className="relative z-20 text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[6rem] font-black mb-12 text-white drop-shadow-4xl leading-[0.9] bg-gradient-to-r from-white to-slate-200 bg-clip-text -webkit-bg-clip-text"
            >
              Ready to Build?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl lg:text-3xl mb-16 text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto backdrop-blur-sm"
            >
              Q1 2026 - Limited project slots available
            </motion.p>
            
            <motion.a
              href="/contact"
              variants={fadeInUp}
              className="inline-block px-20 py-10 bg-white/95 text-slate-900 rounded-4xl font-black text-2xl lg:text-3xl shadow-4xl backdrop-blur-2xl border-4 border-white/40 shadow-violet-500/30 hover:shadow-violet-400/50 transition-all duration-1000 w-fit mx-auto flex items-center gap-6 group"
              animate={{ scale: [1, 1.02, 1], rotate: [-1, 1, 0] }}
              transition={{ scale: { duration: 3, repeat: Infinity }, rotate: { duration: 5, repeat: Infinity } }}
              whileHover={{ scale: 1.05 }}
            >
              Start Collaboration
              <ArrowRightIcon className="w-8 h-8 animate-bounce group-hover:animate-none group-hover:translate-x-1 transition-all duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
