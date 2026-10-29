import { useState } from "react";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  smoothEase,
  defaultViewport,
} from "../utils/animations";

import proprietorImg from "../assets/proprietor.webp";
import proprietressImg from "../assets/proprietress.webp";

function LeadershipSection() {
  const [showProprietor, setShowProprietor] = useState(false);
  const [showProprietress, setShowProprietress] = useState(false);

  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION HEADING */}
        <motion.div
          variants={fadeInUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0064C6]">
            Meet Our Leadership
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#172d4a] sm:text-4xl md:text-5xl">
            Messages From Our Leadership
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Inspiring excellence, nurturing character, and
            shaping the future of every child.
          </p>
        </motion.div>

        {/* ================= PROPRIETOR ================= */}
        <div className="mb-16 grid items-center gap-8 md:mb-24 md:grid-cols-2 md:gap-12">

          {/* PROPRIETOR PHOTO: Reveals from the left */}
          <motion.div
            variants={fadeInLeft(0.1, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative h-[430px] overflow-hidden rounded-2xl shadow-lg sm:h-[500px] md:h-[560px]"
          >
            <img
              src={proprietorImg}
              alt="Proprietor of Paradigm Schools"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />

            {/* NAVY OVERLAY */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172d4a] via-[#172d4a]/90 to-transparent px-6 pb-6 pt-16">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Pastor Martins Ilelakinwa
              </h3>

              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-blue-200">
                Proprietor
              </p>
            </div>
          </motion.div>

          {/* PROPRIETOR MESSAGE: Reveals from the right */}
          <motion.div
            variants={fadeInRight(0.2, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0064C6]">
              A Vision of Excellence and Continuous Growth
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#172d4a] md:text-4xl">
              From the Proprietor's Desk
            </h3>

            <Quote
              size={42}
              className="mt-6 text-blue-200"
            />

            <div className="mt-2 space-y-4 text-base leading-8 text-slate-600">
              <p>
                At Paradigm Schools, we are committed to
                providing quality education, nurturing good
                character, and preparing our students for a
                successful future. Our journey has been made
                possible through God's grace, the dedication
                of our staff, and the unwavering
                support of the parents and guardians.
              </p>

              <p>
                We take pride in the achievements of our
                students, both academically and in character,
                and remain committed to raising the standard
                of education. We encourage our students to
                remain focused, hardworking, and determined
                to achieve greater heights.
              </p>

              {/* EXPANDED MESSAGE */}
              <AnimatePresence>
                {showProprietor && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p>
                      As we continue to grow, our vision remains
                      to build a school where excellence, discipline,
                      and innovation thrive.
                    </p>

                    <p className="font-semibold italic text-[#172d4a]">
                      Together, we will continue to progress
                      in excellence.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* READ MORE BUTTON */}
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowProprietor((prev) => !prev)}
              aria-expanded={showProprietor}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#172d4a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0064C6]"
            >
              {showProprietor ? "Read Less" : "Read More"}

              {showProprietor ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.button>

            <div className="mt-7 h-1 w-16 rounded-full bg-[#0064C6]" />
          </motion.div>
        </div>

        {/* ================= PROPRIETRESS ================= */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          {/* PROPRIETRESS PHOTO: Reveals from the right */}
          <motion.div
            variants={fadeInRight(0.1, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative h-[430px] overflow-hidden rounded-2xl shadow-lg sm:h-[500px] md:order-2 md:h-[560px]"
          >
            <img
              src={proprietressImg}
              alt="Proprietress of Paradigm Schools"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />

            {/* NAVY OVERLAY */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172d4a] via-[#172d4a]/90 to-transparent px-6 pb-6 pt-16">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Mrs. Christiana Olamide Ilelakinwa
              </h3>

              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-blue-200">
                Proprietress
              </p>
            </div>
          </motion.div>

          {/* PROPRIETRESS MESSAGE: Reveals from the left */}
          <motion.div
            variants={fadeInLeft(0.2, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="md:order-1"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0064C6]">
              Progressing in Excellence
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#172d4a] md:text-4xl">
              From the Proprietress's Desk
            </h3>

            <Quote
              size={42}
              className="mt-6 text-blue-200"
            />

            <div className="mt-2 space-y-4 text-base leading-8 text-slate-600">
              <p>
                At Paradigm Schools, our journey began in
                September 2004, driven by my passion for
                raising children and nurturing young minds.
                From the beginning, our vision has been to
                provide quality education, promote academic
                excellence, and develop students with strong
                moral values.
              </p>

              <p>
                The name Paradigm represents a model or
                pattern to follow, reflecting our commitment
                to setting a standard of excellence in
                education.
              </p>

              {/* EXPANDED MESSAGE */}
              <AnimatePresence>
                {showProprietress && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p>
                      Our desire is to see every child grow
                      academically, morally, and socially,
                      becoming a responsible future leader who
                      will positively impact society. We believe
                      that achieving this vision requires the
                      dedication of our teachers, the support
                      of parents, and the grace of God.
                    </p>

                    <p>
                      As we continue to grow, we remain committed
                      to providing an environment where every
                      child can discover his or her potentials and
                      achieve excellence.
                    </p>

                    <p className="font-semibold italic text-[#172d4a]">
                      Together, we will keep progressing in
                      excellence.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* READ MORE BUTTON */}
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowProprietress((prev) => !prev)}
              aria-expanded={showProprietress}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#172d4a] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0064C6]"
            >
              {showProprietress ? "Read Less" : "Read More"}

              {showProprietress ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.button>

            <div className="mt-7 h-1 w-16 rounded-full bg-[#0064C6]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default LeadershipSection;
