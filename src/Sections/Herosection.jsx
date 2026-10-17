import desktophero from "../assets/laptop.webp";
import Mobilehero from "../assets/mobile.webp";
import { motion } from "framer-motion";
import { smoothEase } from "../utils/animations";

function Herosection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[650px] overflow-hidden">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={Mobilehero}
        />

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: smoothEase }}
          src={desktophero}
          alt="Paradigm Schools campus"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-[#172d4a]/65 md:bg-linear-to-r md:from-[#172d4a]/85 md:via-[#172d4a]/40 md:to-transparent"></div>

      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-6 py-16 text-center text-white md:min-h-[650px] md:items-start md:px-12 md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: smoothEase, delay: 0.2 }}
          className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Welcome to
          <span className="block text-[#0064C6]">
            Paradigm Schools
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: smoothEase, delay: 0.45 }}
          className="mx-auto mt-5 max-w-xl font-bold text-sm leading-relaxed text-white/90 sm:text-base md:mx-0 md:text-lg"
        >
          Nurturing excellence, inspiring young minds, and preparing
          tomorrow's leaders through quality education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: smoothEase, delay: 0.7 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
        >
          <motion.a
            href="#admissions"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg bg-[#0064C6] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-[#0052A3]"
          >
            Apply for Admission
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-white px-8 py-4 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#172d4a]"
          >
            Explore Our School
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Herosection;