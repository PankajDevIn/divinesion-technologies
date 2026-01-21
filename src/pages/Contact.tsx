import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Quiet animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // 3D Orb positions & animation
  const orbs = [
    { x: 10, y: 20, size: 200, speed: 0.5, color: "from-blue-500/20 to-cyan-500/10" },
    { x: 80, y: 60, size: 150, speed: 0.3, color: "from-cyan-400/15 to-blue-600/10" },
    { x: 30, y: 80, size: 100, speed: 0.7, color: "from-blue-600/10 to-indigo-500/20" },
  ];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/40 font-['Inter'] relative overflow-hidden">
      
      {/* 🌌 3D FLOATING ORBS BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {orbs.map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute bg-gradient-to-r ${orb.color} rounded-full blur-3xl shadow-2xl shadow-blue-500/25`}
            style={{
              left: `${orb.x}vw`,
              top: `${orb.y}vh`,
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* 🎯 HERO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 lg:px-20 py-24 text-center relative z-10"
      >
        <motion.div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/90 backdrop-blur-sm border-2 border-blue-800/50 shadow-2xl mb-8">
          <SparklesIcon className="w-5 h-5 text-blue-400" />
          <span className="text-xs font-bold tracking-wide uppercase text-slate-300">Start Your Project</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-slate-100 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Build Together
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Free consultation for your next project. Connect with our team today.
        </motion.p>
      </motion.section>

      {/* 📞 CONTACT SECTION */}
      <section className="py-24 px-6 lg:px-20 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 📱 Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-200 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Reach out directly or send us a message.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div className="group flex items-start gap-4 p-6 bg-slate-900/80 backdrop-blur-sm rounded-3xl border-2 border-slate-800 hover:border-blue-600 hover:bg-blue-900/20 transition-all duration-700 cursor-pointer">
                <EnvelopeIcon className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:mulikp792@gmail.com" className="text-slate-200 hover:text-blue-400 font-semibold text-lg transition-colors block">
                    mulikp792@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="group flex items-start gap-4 p-6 bg-slate-900/80 backdrop-blur-sm rounded-3xl border-2 border-slate-800 hover:border-emerald-600 hover:bg-emerald-900/20 transition-all duration-700 cursor-pointer">
                <PhoneIcon className="w-8 h-8 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919730246521" className="text-slate-200 hover:text-emerald-500 font-semibold text-lg transition-colors block">
                    +91 9730246521
                  </a>
                </div>
              </motion.div>

              <motion.div className="group flex items-start gap-4 p-6 bg-slate-900/80 backdrop-blur-sm rounded-3xl border-2 border-slate-800 hover:border-amber-600 hover:bg-amber-900/20 transition-all duration-700 cursor-pointer">
                <MapPinIcon className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-slate-300 font-semibold text-lg">Karad, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 📝 FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form onSubmit={onSubmit} className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-800 shadow-2xl">
              <div className="space-y-6">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-900/95 border-2 border-emerald-500/60 rounded-3xl p-8 text-center backdrop-blur-sm"
                  >
                    <CheckCircleIcon className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-emerald-300 mb-3">Message Sent Successfully!</h4>
                    <p className="text-emerald-200 text-lg">We'll respond within 24 hours.</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-900/95 border-2 border-red-500/60 rounded-3xl p-8 text-center backdrop-blur-sm"
                  >
                    <h4 className="text-2xl font-bold text-red-300 mb-3">Submission Failed</h4>
                    <p className="text-red-200 text-lg">Please try again or email directly.</p>
                  </motion.div>
                )}

                {submitStatus === "idle" && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-800/70 backdrop-blur-sm rounded-2xl border-2 border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-slate-200 placeholder-slate-500 transition-all duration-400 text-lg"
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-800/70 backdrop-blur-sm rounded-2xl border-2 border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-slate-200 placeholder-slate-500 transition-all duration-400 text-lg"
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-800/70 backdrop-blur-sm rounded-2xl border-2 border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-slate-200 placeholder-slate-500 resize-vertical transition-all duration-400 text-lg"
                        placeholder="Tell us about your project..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-xl rounded-3xl shadow-2xl border-2 border-blue-500 hover:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-400 flex items-center justify-center gap-3 backdrop-blur-sm"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
