import React, { useState } from "react";
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

// Animation variants (matching Hero)
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      
      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-900 text-slate-200 selection:bg-violet-500/50 font-['Inter'] overflow-x-hidden">
      
      <Navbar />

      {/* 🚀 HERO SECTION */}
      <motion.section 
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/60 shadow-2xl mb-8"
        >
          <SparklesIcon className="w-6 h-6 text-violet-400" />
          <span className="text-sm font-black tracking-[0.2em] uppercase text-slate-300">
            Ready to Start Your Project?
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-[-0.02em] bg-gradient-to-r from-white via-slate-100 to-violet-400 bg-clip-text text-transparent drop-shadow-4xl"
        >
          Let's Build Together
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto mb-12 backdrop-blur-sm font-medium leading-relaxed"
        >
          Connect with our team for a free consultation. We'll help you transform your vision into reality.
        </motion.p>
      </motion.section>

      {/* 📞 CONTACT CONTENT */}
      <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* 📱 Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black bg-gradient-to-r from-slate-200 to-violet-400 bg-clip-text text-transparent drop-shadow-xl">
                Get In Touch
              </h3>
              <p className="text-xl text-slate-800 leading-relaxed backdrop-blur-sm">
                Ready to discuss your project? Reach out directly or fill out the form.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div 
                className="group flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 hover:border-violet-500/50 transition-all duration-500"
                whileHover={{ x: 8 }}
              >
                <EnvelopeIcon className="w-8 h-8 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:mulikp792@gmail.com" className="text-slate-200 hover:text-violet-400 font-semibold text-lg transition-colors">
                    mulikp792@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="group flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 hover:border-violet-500/50 transition-all duration-500"
                whileHover={{ x: 8 }}
              >
                <PhoneIcon className="w-8 h-8 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919730246521" className="text-slate-200 hover:text-emerald-400 font-semibold text-lg transition-colors">
                    +91 9730246521
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="group flex items-start space-x-4 p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 hover:border-violet-500/50 transition-all duration-500"
                whileHover={{ x: 8 }}
              >
                <MapPinIcon className="w-8 h-8 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-slate-300 font-semibold text-lg">Karad, Maharashtra, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 📝 Contact Form */}
          <motion.div variants={fadeInUp}>
            <motion.form
              onSubmit={onSubmit}
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-800/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-emerald-900/80 border border-emerald-500/50 backdrop-blur-xl rounded-2xl p-6 text-center"
                  >
                    <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h4 className="text-2xl font-black text-emerald-300 mb-2">Message Sent!</h4>
                    <p className="text-emerald-200">We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-rose-900/80 border border-rose-500/50 backdrop-blur-xl rounded-2xl p-6 text-center"
                  >
                    <h4 className="text-2xl font-black text-rose-300 mb-2">Something went wrong</h4>
                    <p className="text-rose-200">Please try again or email us directly.</p>
                  </motion.div>
                )}

                {submitStatus === "idle" && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/50 text-slate-200 placeholder-slate-500 transition-all duration-300"
                        placeholder="What's your name?"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/50 text-slate-200 placeholder-slate-500 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/50 text-slate-200 placeholder-slate-500 resize-vertical transition-all duration-300"
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-black text-xl rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 shadow-violet-500/30 hover:shadow-violet-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center gap-3"
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
                          <ArrowRightIcon className="w-6 h-6" />
                        </>
                      )}
                    </motion.button>
                  </>
                )}
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
