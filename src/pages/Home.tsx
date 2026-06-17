
import { motion} from "framer-motion"; // ✅ Imported Variants type cleanly
import type { Variants } from "framer-motion"; // ✅ Explicitly imported Variants type
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import {
  GlobeAltIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Services data - Blue theme
const services = [
  { title: "Mobile Apps", desc: "iOS & Android", icon: CpuChipIcon, color: "from-blue-400 to-cyan-400" },
  { title: "Websites", desc: "Fast & Scalable", icon: GlobeAltIcon, color: "from-cyan-500 to-blue-500" },
  { title: "AI Tools", desc: "Automation", icon: SparklesIcon, color: "from-blue-500 to-indigo-500" },
  { title: "Cloud", desc: "AWS Experts", icon: RocketLaunchIcon, color: "from-slate-500 to-blue-600" },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Tailwind", "TypeScript"];

// 🔥 SAME ANIMATION VARIANTS AS HERO (Explicitly Typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: "spring" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.3 } 
  },
};

type Props = {};

function Home({}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/40 font-['Inter'] overflow-x-hidden">
      
      <Navbar />
      
      {/* 🚀 HERO - Already blue themed */}
      <Hero 
        title="Divinesion Technologies" 
        subtitle="Speed • Reliability • Innovation" 
        ctaText="Explore Our Services"
      />

      {/* 🛠️ TECH STACK MARQUEE - Solid blue */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={staggerContainer}
        className="py-20 border-y border-slate-900/50 bg-slate-950/90"
      >
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 px-8 sm:px-20 lg:px-32 whitespace-nowrap items-center"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <motion.span
              key={i}
              className="text-3xl lg:text-4xl font-black text-slate-400 uppercase tracking-wider"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* 🎨 SERVICES SECTION - Solid blue theme */}
      <section id="services" className="py-40 px-8 lg:px-20 max-w-8xl mx-auto bg-slate-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="text-center mb-32"
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-[-0.02em] bg-linear-to-r from-slate-200 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-4xl"
          >
            Core Competencies
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-32 h-1 mx-auto bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
          />
          <motion.p 
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto mt-12 leading-relaxed font-medium"
          >
            Precision-engineered solutions for enterprise scale
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-12"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative p-12 lg:p-16 rounded-[3rem] bg-slate-900 border-2 border-slate-800 shadow-2xl hover:shadow-blue-500/30 hover:border-blue-600/50 group transition-all duration-1000 min-h-80"
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              <motion.div
                className={`absolute inset-0 bg-linear-to-br opacity-0 ${service.color} blur-xl`}
                animate={{ opacity: [0, 0.08, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative z-10 p-8 rounded-3xl mb-12 shadow-2xl bg-slate-900/90 border border-slate-800"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                transition={{ scale: { duration: 6, repeat: Infinity }, rotate: { duration: 10, repeat: Infinity } }}
              >
                <service.icon className="w-16 h-16 text-blue-300 drop-shadow-xl" />
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-8  drop-shadow-xl bg-linear-to-r from-slate-200 to-blue-300 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🚀 FINAL CTA - Solid blue */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-40 px-8 lg:px-24 bg-slate-950"
      >
        <motion.div 
          variants={fadeInUp}
          className="relative max-w-6xl mx-auto p-16 lg:p-24 rounded-[5rem] bg-slate-900 border-4 border-slate-800 shadow-4xl"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-transparent rounded-[5rem]" />
          
          <div className="relative z-10 text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[6rem] font-black mb-12 text-white drop-shadow-4xl leading-[0.9] bg-linear-to-r from-slate-100 to-blue-300 bg-clip-text"
            >
              Ready to Build?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl lg:text-3xl mb-16 text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto"
            >
              Q1 2026 - Limited project slots available
            </motion.p>
            
            <motion.a
              href="/contact"
              variants={fadeInUp}
              className="inline-block px-20 py-10 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-4xl font-black text-2xl lg:text-3xl shadow-4xl border-4 border-blue-500/50 hover:shadow-blue-500/50 transition-all duration-1000 w-fit mx-auto items-center gap-6 group"
              whileHover={{ scale: 1.05 }}
            >
              Start Collaboration
              <ArrowRightIcon className="w-8 h-8 m-auto group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
