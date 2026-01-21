// pages/services/WebsiteDevelopment.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const WebsiteDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/40 font-['Inter']">
      <Navbar />
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 lg:px-20 py-24 text-center bg-slate-950"
      >
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
          Website Development
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mt-6">
          Lightning-fast sites with Next.js 15, Vite + Tailwind. SEO-optimized PWAs with 100ms load times.
        </motion.p>
      </motion.section>

      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto bg-slate-950">
        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Modern Web Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {["Next.js 15", "Vite", "Tailwind CSS", "TypeScript", "React 19", "Framer Motion"].map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-slate-900 rounded-2xl border border-slate-800 text-sm font-bold text-blue-300">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.a 
            href="/contact" 
            className="block w-fit mx-auto px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-xl shadow-3xl hover:shadow-blue-500/50 transition-all mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            Build My Website <ArrowRightIcon className="w-6 h-6 inline ml-2" />
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
