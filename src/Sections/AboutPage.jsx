import { ArrowRight, MapPin } from "lucide-react";
import schoolImage from "../assets/AboutImg.webp";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, defaultViewport } from "../utils/animations";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 text-[#172d4a] md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE: ABOUT US CONTENT */}
          <motion.div
            variants={fadeInLeft(0.1, 28)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0064C6]">
              About Our School
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#172d4a] md:text-4xl">
              Welcome to Paradigm Schools
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              At Paradigm Schools, we believe that every child
              deserves a strong foundation for a brighter future.
              From Pre-Nursery through Primary to Secondary
              education, we are committed to nurturing young minds
              through quality learning, creativity, discipline,
              and character development.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600 mb-4">
              We encourage every child to discover his or her potentials,
              build confidence, and develop the knowledge and skills
              needed to succeed.
            </p>

            <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0064C6] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0052A3]">
                Discover More
                <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"/>
            </Link>
          </motion.div>

          {/* RIGHT SIDE: IMAGE CONTAINER */}
          <motion.div
            variants={fadeInRight(0.2, 28)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="group relative"
          >
            {/* Decorative background frame */}
            <div
              className="absolute -inset-2.5 -rotate-1 rounded-3xl bg-gradient-to-tr from-[#0064C6]/15 via-white/40 to-[#172d4a]/10 transition-transform duration-500 ease-out group-hover:rotate-0 sm:-inset-4 sm:rounded-[2rem]"
              aria-hidden="true"
            />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-[#172d4a] shadow-2xl shadow-[#172d4a]/15 sm:rounded-3xl">
              <img
                src={schoolImage}
                alt="Paradigm Schools campus"
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Image gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172d4a]/85 via-[#172d4a]/20 to-transparent" />

              {/* Location badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-[#172d4a]/85 px-4 py-2 text-white shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />

                <span className="text-xs font-semibold tracking-wide sm:text-sm">
                  Minna, Niger State
                </span>

                <span className="hidden text-white/40 sm:inline">
                  •
                </span>

                <span className="hidden text-xs text-slate-200 sm:inline">
                  Paradigm Schools Campus
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
