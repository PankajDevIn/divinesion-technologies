import React from "react";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  BuildingOfficeIcon,
  CloudIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Enhanced services data
const services = [
  {
    title: "App Development",
    description: "Native iOS & Android apps with React Native. Offline-first, push notifications, and seamless performance.",
    Icon: DevicePhoneMobileIcon,
    color: "from-indigo-500 to-violet-500",
    stats: "50+ Apps Delivered",
  },
  {
    title: "Website Development",
    description: "Lightning-fast sites with Next.js, Vite & Tailwind. SEO-optimized, fully responsive, PWA-ready.",
    Icon: GlobeAltIcon,
    color: "from-purple-500 to-pink-500",
    stats: "100% Uptime",
  },
  {
    title: "Logo & Branding",
    description: "Custom logos & brand identities using Inkscape. Vector graphics, brand guidelines, and style systems.",
    Icon: PaintBrushIcon,
    color: "from-pink-500 to-rose-500",
    stats: "200+ Brands Created",
  },
  {
    title: "Enterprise Apps",
    description: "Scalable business applications with secure authentication, role-based access, and API integrations.",
    Icon: BuildingOfficeIcon,
    color: "from-amber-500 to-orange-500",
    stats: "99.9% Reliability",
  },
  {
    title: "Cloud Solutions",
    description: "AWS deployments, serverless architecture, CI/CD pipelines, and cost-optimized infrastructure.",
    Icon: CloudIcon,
    color: "from-emerald-500 to-teal-500",
    stats: "24/7 Monitoring",
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows with AI/ML models, chatbots, data processing, and business automation.",
    Icon: CpuChipIcon,
    color: "from-blue-500 to-cyan-500",
    stats: "70% Efficiency Gain",
  },
];

// Animation variants (matching Hero)
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-900 text-slate-200 selection:bg-violet-500/50 font-['Inter'] overflow-x-hidden">
      
      <Navbar />

      {/* 🎯 HERO SECTION */}
      <motion.section 
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-[-0.02em] bg-gradient-to-r from-white via-slate-100 to-violet-400 bg-clip-text text-transparent drop-shadow-4xl"
        >
          Our Services
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto mb-12 backdrop-blur-sm font-medium leading-relaxed"
        >
          Premium development services engineered for businesses ready to scale and dominate
        </motion.p>
        <motion.a
          href="/contact"
          variants={fadeInUp}
          className="px-12 py-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-4xl font-black text-xl shadow-3xl backdrop-blur-xl border border-white/20 shadow-violet-500/30 hover:shadow-violet-400/50 transition-all duration-700 flex items-center gap-4 w-fit mx-auto"
          whileHover={{ scale: 1.05 }}
        >
          Get Free Consultation
          <ArrowRightIcon className="w-6 h-6" />
        </motion.a>
      </motion.section>

      {/* 🛠️ SERVICES GRID */}
      <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-20 max-w-8xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/70 backdrop-blur-xl shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/50 transition-all duration-700 overflow-hidden min-h-[320px] flex flex-col justify-between"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-xl`}
                animate={{ opacity: [0, 0.08, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Icon */}
              <motion.div 
                className="relative z-10 p-6 rounded-2xl mb-8 shadow-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 w-fit mx-auto"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ scale: { duration: 4, repeat: Infinity }, rotate: { duration: 8, repeat: Infinity } }}
              >
                <service.Icon className="w-12 h-12 text-white drop-shadow-xl" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                <h3 className="text-2xl lg:text-3xl font-black mb-4 bg-gradient-to-r from-slate-200 to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed backdrop-blur-sm max-w-md">
                  {service.description}
                </p>
                <div className="text-sm font-bold text-violet-400 uppercase tracking-wider mb-4">
                  {service.stats}
                </div>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-white rounded-2xl font-black text-sm backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-violet-500/30 transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.9)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✅ TRUST INDICATORS */}
      <motion.section 
        className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-950/50 backdrop-blur-xl border-y border-slate-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/60 shadow-2xl mb-12"
          >
            <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
            <span className="text-sm font-black tracking-[0.2em] uppercase text-slate-300">
              Trusted by 50+ Enterprises
            </span>
          </motion.div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join leading businesses transforming their digital presence with our proven development expertise
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
