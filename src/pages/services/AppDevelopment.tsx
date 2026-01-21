// pages/services/AppDevelopment.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const AppDevelopment: React.FC = () => {
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
          App Development
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mt-6">
          Native iOS & Android apps with React Native. Offline-first architecture, push notifications, 
          and enterprise-grade performance.
        </motion.p>
      </motion.section>

      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              React Native Expertise
            </h2>
            <div className="space-y-4 text-xl text-slate-300">
              <div>• Offline-first apps with AsyncStorage & SQLite</div>
              <div>• Push notifications (FCM + APNs)</div>
              <div>• Native performance with Hermes engine</div>
              <div>• 90%+ code sharing across platforms</div>
              <div>• App Store + Play Store deployment</div>
            </div>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl font-black text-xl shadow-2xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Start Your App <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-2xl h-64">Mobile UI Mockup</div>
            <div className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-2xl h-64">App Analytics</div>
            <div className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-2xl col-span-2 h-64">Performance Chart</div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
