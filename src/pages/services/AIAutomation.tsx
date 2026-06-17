// pages/services/AIAutomation.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  SparklesIcon,
  Cog6ToothIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const AIAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/40 font-['Inter']">
      <Navbar />

      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 lg:px-20 py-24 text-center bg-slate-950"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-black bg-linear-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent"
        >
          AI & Automation
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mt-6"
        >
          Intelligent workflows powered by AI agents, chatbots, and process
          automation to reduce manual work and unlock new revenue.
        </motion.p>
      </motion.section>

      {/* Features / Cards */}
      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* AI Assistants */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-3xl border-2 border-slate-800 shadow-2xl"
          >
            <SparklesIcon className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-black mb-4 text-white">
              AI Assistants
            </h3>
            <ul className="text-slate-400 space-y-2 text-lg">
              <li>• Custom chatbots for support and sales</li>
              <li>• Knowledge-base powered Q&amp;A</li>
              <li>• Multichannel experiences (web, WhatsApp, email)</li>
            </ul>
          </motion.div>

          {/* Workflow Automation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-3xl border-2 border-slate-800 shadow-2xl"
          >
            <Cog6ToothIcon className="w-16 h-16 text-emerald-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-black mb-4 text-white">
              Workflow Automation
            </h3>
            <ul className="text-slate-400 space-y-2 text-lg">
              <li>• End-to-end business process automation</li>
              <li>• CRM, email, and billing integrations</li>
              <li>• Event-driven and scheduled workflows</li>
            </ul>
          </motion.div>

          {/* Insights + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-2xl mb-4">
              <ChartBarIcon className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-black mb-3 text-white">
                Data & Insights
              </h3>
              <ul className="text-slate-400 space-y-1.5 text-base">
                <li>• AI-driven analytics and reporting</li>
                <li>• Lead scoring and personalization</li>
                <li>• Continuous improvement with feedback loops</li>
              </ul>
            </div>

            <motion.a
              href="/contact"
              className="block w-full px-10 py-6 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-xl text-center shadow-3xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Automate Your Business
              <ArrowRightIcon className="w-7 h-7 inline ml-3 align-middle" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomation;
