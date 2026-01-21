// pages/services/EnterpriseApps.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, ShieldCheckIcon, KeyIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const EnterpriseApps: React.FC = () => {
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
          Enterprise Apps
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mt-6">
          Scalable business applications with JWT auth, role-based access, and enterprise integrations.
        </motion.p>
      </motion.section>

      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-900 p-12 rounded-3xl border-2 border-slate-800 shadow-2xl">
            <ShieldCheckIcon className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-black mb-4 text-white">Enterprise Security</h3>
            <ul className="text-slate-400 space-y-2 text-lg">
              <li>• JWT Authentication</li>
              <li>• Role-based Access Control</li>
              <li>• Data encryption at rest</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-900 p-12 rounded-3xl border-2 border-slate-800 shadow-2xl">
            <KeyIcon className="w-16 h-16 text-emerald-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-black mb-4 text-white">API Integrations</h3>
            <ul className="text-slate-400 space-y-2 text-lg">
              <li>• Stripe Payments</li>
              <li>• AWS Services</li>
              <li>• Custom REST APIs</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="lg:col-span-1">
            <motion.a 
              href="/contact" 
              className="block w-full px-12 py-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-2xl shadow-3xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Build Enterprise Solution <ArrowRightIcon className="w-8 h-8 inline ml-3" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseApps;
