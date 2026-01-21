import { motion } from "framer-motion";
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

// Refined Animation Variants for Mobile + Desktop
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, // Faster stagger for mobile snappiness
      delayChildren: 0.1 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 }, // Smaller 'y' for mobile
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
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
  { label: "Projects delivered", value: "50+" },
  { label: "Avg. delivery", value: "~4 weeks" },
  { label: "Satisfaction", value: "95%" },
  { label: "Tech stack", value: "Full‑stack" },
];

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      
      <Hero
        title="About Divinesion"
        subtitle="Empowering businesses with scalable SaaS and modern web solutions — blending heritage with global polish."
      />

      {/* Story Section - Responsive Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <article className="order-2 md:order-1 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-indigo-600">Story</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Founded to make high-end technology accessible, 
                <span className="font-semibold text-slate-800"> Divinesion Technologies</span> began as a passion project to bridge the gap between local small businesses and enterprise-grade software. 
              </p>
              <p>
                We don’t just build apps; we craft solutions that solve cultural and operational bottlenecks.
              </p>
              <p className="italic text-indigo-600 font-medium border-l-4 border-indigo-200 pl-4">
                "Empowering every learner and entrepreneur with tools that scale globally."
              </p>
            </div>
          </article>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="order-1 md:order-2 w-full bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[2rem] h-64 md:h-[400px] flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <span className="relative text-white font-bold text-xl tracking-widest uppercase px-6 text-center">
                Innovation in Motion
              </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section - Card Stack for Mobile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Core Values</h2>
            <div className="h-1 w-12 bg-indigo-600 mx-auto mt-3 rounded-full" />
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 active:scale-95 md:active:scale-100 md:hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-indigo-600 rounded-xl text-white mb-5 shadow-indigo-100 shadow-lg">
                  <item.icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - 2x2 Grid on Mobile */}
      <section className="bg-slate-900 py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
        </div>
        
        <dl className="relative max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <dd className="text-3xl md:text-5xl font-black text-white mb-1">
                {stat.value}
              </dd>
              <dt className="text-[10px] md:text-xs text-indigo-300 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* CTA Section - Touch Optimized */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl shadow-indigo-200">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to build?
            </h2>
            <p className="text-indigo-100 text-base md:text-lg mb-10 opacity-90">
              Join 50+ partners who scaled their vision with our specialized development teams.
            </p>
            <motion.a
              href="/contact"
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}