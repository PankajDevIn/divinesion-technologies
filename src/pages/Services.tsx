// pages/Services.tsx
import React from "react";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; 
import { useNavigate } from "react-router-dom";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  BuildingOfficeIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Service interface
interface Service {
  title: string;
  slug: string;
  description: string;
  Icon: React.ComponentType<any>;
  color: string;
  stats: string;
}

// Enhanced services data with slugs for routing
const services: Service[] = [
  {
    title: "App Development",
    slug: "app-development",
    description: "Native iOS & Android apps with React Native. Offline-first, push notifications, and seamless performance.",
    Icon: DevicePhoneMobileIcon,
    color: "from-blue-400 to-cyan-400",
    stats: "50+ Apps Delivered",
  },
  {
    title: "Website Development",
    slug: "website-development",
    description: "Lightning-fast sites with Next.js, Vite & Tailwind. SEO-optimized, fully responsive, PWA-ready.",
    Icon: GlobeAltIcon,
    color: "from-cyan-500 to-blue-500",
    stats: "100% Uptime",
  },
  {
    title: "Logo & Branding",
    slug: "logo-branding",
    description: "Custom logos & brand identities using Inkscape. Vector graphics, brand guidelines, and style systems.",
    Icon: PaintBrushIcon,
    color: "from-blue-500 to-indigo-500",
    stats: "200+ Brands Created",
  },
  {
    title: "Enterprise Apps",
    slug: "enterprise-apps",
    description: "Scalable business applications with secure authentication, role-based access, and API integrations.",
    Icon: BuildingOfficeIcon,
    color: "from-slate-500 to-blue-600",
    stats: "99.9% Reliability",
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "AWS deployments, serverless architecture, CI/CD pipelines, and cost-optimized infrastructure.",
    Icon: CloudIcon,
    color: "from-blue-600 to-cyan-600",
    stats: "24/7 Monitoring",
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    description: "Intelligent workflows with AI/ML models, chatbots, data processing, and business automation.",
    Icon: CpuChipIcon,
    color: "from-indigo-500 to-blue-500",
    stats: "70% Efficiency Gain",
  },
];

// ✅ Explicit casting on array types maps correctly to structural transitions
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94] as const 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/40 font-['Inter'] overflow-x-hidden">
      <Navbar />

      {/* 🎯 HERO SECTION */}
      <motion.section 
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-32 text-center bg-slate-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-[-0.02em] bg-linear-to-r from-slate-100 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-4xl"
        >
          Our Services
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Premium development services engineered for businesses ready to scale and dominate
        </motion.p>
        <motion.a
          href="/contact"
          variants={fadeInUp}
          className="px-12 py-6 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-xl shadow-3xl border-2 border-blue-500/50 shadow-blue-500/30 hover:shadow-blue-400/50 transition-all duration-700 flex items-center gap-4 w-fit mx-auto"
          whileHover={{ scale: 1.05 }}
        >
          Get Free Consultation
          <ArrowRightIcon className="w-6 h-6" />
        </motion.a>
      </motion.section>

      {/* 🛠️ SERVICES GRID */}
      <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-20 max-w-8xl mx-auto bg-slate-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group relative p-8 lg:p-12 rounded-3xl bg-slate-900 border-2 border-slate-800 shadow-2xl hover:shadow-blue-500/30 hover:border-blue-600/50 transition-all duration-700 overflow-hidden min-h-80 flex flex-col justify-between"
              whileHover={{ y: -8 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 blur-xl`}
                animate={{ opacity: [0, 0.08, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Icon */}
              <motion.div 
                className="relative z-10 p-6 rounded-2xl mb-8 shadow-2xl bg-slate-900/90 border border-slate-800 w-fit mx-auto"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ scale: { duration: 4, repeat: Infinity }, rotate: { duration: 8, repeat: Infinity } }}
              >
                <service.Icon className="w-12 h-12 text-blue-300 drop-shadow-xl" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                <h3 className="text-2xl lg:text-3xl font-black mb-4 bg-linear-to-r from-slate-200 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <div className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-6">
                  {service.stats}
                </div>
               <motion.button
                  className="px-6 py-3 bg-linear-to-r from-blue-600/90 to-cyan-600/90 text-white rounded-2xl font-black text-sm border border-blue-500/50 shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 group"
                  onClick={() => handleLearnMore(service.slug)}
                  whileHover={{ scale: 1.05 }}
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
        className="py-20 px-6 sm:px-12 lg:px-20 bg-slate-950 border-y border-slate-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center"
          />
        </div>
      </motion.section>
      
      {/* ✅ Cleanly terminated Footer instance */}
      <Footer />
    </div>
  );
};

export default Services;
