import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import aboutHeroImage from "../assets/about-hero.webp";
import { motion } from "framer-motion";
import { fadeInUp, smoothEase } from "../utils/animations";

function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#172d4a] py-16 text-white sm:min-h-[400px] md:min-h-[480px] md:py-24">
      {/* BACKGROUND IMAGE */}
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: smoothEase }}
        src={aboutHeroImage}
        alt="Students of Paradigm Schools"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {/* FULL IMAGE OVERLAY */}
      <div className="absolute inset-0 bg-[#172d4a]/75" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center sm:px-8 md:px-12">
        {/* BREADCRUMB */}
        <motion.nav
          variants={fadeInUp(0.15, 15, 0.9)}
          initial="hidden"
          animate="visible"
          aria-label="Breadcrumb"
          className="mb-5 flex items-center justify-center gap-2 text-xs font-medium sm:text-sm"
        >
          <Link
            to="/"
            className="text-blue-200 transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-blue-200"
          />

          <span className="text-white">
            About Us
          </span>
        </motion.nav>

        {/* MAIN HEADING */}
        <motion.h1
          variants={fadeInUp(0.35, 26, 1.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Discover Paradigm Schools
        </motion.h1>

        {/* SUBHEADING */}
        <motion.p
          variants={fadeInUp(0.55, 20, 1.05)}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base md:mt-6 md:text-lg md:leading-8"
        >
          A community where young minds are inspired
          to learn, grow, and achieve excellence
          through quality education and strong values.
        </motion.p>

        {/* DECORATIVE ACCENT LINE */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75, ease: smoothEase }}
          className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#60a5fa] md:mt-8 md:w-20"
        />
      </div>
    </section>
  );
}

export default AboutHeroSection;
