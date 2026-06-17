import React from "react";
import { motion } from "framer-motion"; // ✅ Imported Variants interface safely
import type { Variants } from "framer-motion"; // ✅ Explicitly imported Variants type
import {
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Animation Variants (Explicitly Typed)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 120, damping: 18 } // ✅ Added "as const" literal fix
  },
};

const values = [
  { title: "Reliability", icon: ShieldCheckIcon, description: "Speed and human-centered design in every product we ship." },
  { title: "Innovation", icon: BoltIcon, description: "Rapid prototyping with solid architecture for real-world impact." },
  { title: "Client-first", icon: UserGroupIcon, description: "We design around your workflows, not the other way around." },
  { title: "Security & Trust", icon: LockClosedIcon, description: "Best practices for data safety and dependable performance." },
  { title: "Global Mindset", icon: GlobeAltIcon, description: "Local roots, global polish — built for international audiences." },
];

const stats = [
  { label: "Projects delivered", value: 50 },
  { label: "Avg. delivery time (days)", value: 28 },
  { label: "Client satisfaction (%)", value: 95 },
  { label: "Tech stack", value: "Full‑stack" },
];

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <Hero
        title="About Divinesion Technologies"
        subtitle="Empowering businesses with scalable SaaS and modern web solutions — blending local heritage with global professionalism."
        ctaText="Explore Our Services" // ✅ Clean alignment mapping for required prop
      />

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-indigo-600">Story</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded to make high-end technology accessible, 
              <span className="font-semibold text-slate-800"> Divinesion Technologies</span> began as a passion project to bridge the gap between 
              local small businesses and enterprise-grade software. 
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We don’t just build apps; we craft solutions that solve cultural and operational 
              bottlenecks, ensuring your digital presence is both authentic and world-class.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed italic">
              Our founder’s vision: to empower every learner and entrepreneur with tools that scale globally.
            </p>
          </article>
          <div className="bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl h-64 md:h-full flex items-center justify-center border-2 border-dashed border-indigo-200">
             {/* Placeholder for an About Image or Illustration */}
             <span className="text-indigo-400 font-medium italic">Our Vision in Motion</span>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built on Core Values</h2>
            <div className="h-1.5 w-20 bg-indigo-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-500 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-purple-500 rounded-full blur-[80px]" />
        </div>
        
        <dl className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <dt className="order-2 mt-2 text-indigo-300 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </dt>
              <motion.dd
                className="order-1 text-5xl font-extrabold text-white tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              >
                {typeof stat.value === "number" ? `${stat.value}+` : stat.value}
              </motion.dd>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-indigo-50"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
          Ready to digitize your vision?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          From AI automation to creative branding, we provide the tech muscle your business needs to scale.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg shadow-indigo-200 font-bold hover:bg-indigo-700 transition-all"
          aria-label="Start your project with Divinesion Technologies"
        >
          Start Your Project
          <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
        </motion.a>
      </motion.section>

      <Footer />
    </div>
  );
}
