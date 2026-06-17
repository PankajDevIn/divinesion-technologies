// pages/services/LogoBranding.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const LogoBranding: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/40 font-['Inter']">
      <Navbar />
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 lg:px-20 py-24 text-center bg-slate-950"
      >
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent">
          Logo & Branding
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mt-6">
          Custom vector logos with Inkscape. Complete brand identity systems and style guides.
        </motion.p>
      </motion.section>

      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto bg-slate-950">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"].map((logo, i) => (
            <div key={i} className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-2xl h-64 group hover:shadow-blue-500/30 transition-all">
              <div className="h-full bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
                {logo}
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.a 
          href="/contact" 
          className="mt-16 block w-fit mx-auto px-12 py-6 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-xl shadow-3xl hover:shadow-blue-500/50 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Design My Brand <ArrowRightIcon className="w-6 h-6 inline ml-2" />
        </motion.a>
      </section>

      <Footer />
    </div>
  );
};

export default LogoBranding;
