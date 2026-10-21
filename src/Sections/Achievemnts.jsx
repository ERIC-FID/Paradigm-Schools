import {
  Award,
  BookOpenCheck,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/animations";

// School photos
import competitionImage from "../assets/competition.webp";
import waecImage from "../assets/waec-results.webp";
import Waec from "../assets/Waec.png";

const achievements = [
  {
    icon: Trophy,
    image: competitionImage,
    title: "Spelling Bee & Debate Victories",
    description:
      "Our students have consistently emerged victorious in inter-school Spelling Bee and Debate competitions, showcasing their confidence, communication skills, knowledge, and dedication to excellence.",
  },
  {
    icon: BookOpenCheck,
    image: waecImage,
    title: "Excellent WAEC Results",
    description:
      "Paradigm Schools takes pride in the excellent performance of its students in WAEC examinations. These achievements reflect their hard work, determination, and the dedication of our teaching staff.",
  },
];

function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-white py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION HEADER */}
        <motion.div
          variants={fadeInUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#0064C6]">
            Our Achievements
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#172d4a] md:text-4xl">
            Celebrating Excellence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Every achievement tells a story of dedication,
            hard work, and the pursuit of excellence.
          </p>
        </motion.div>

        {/* FEATURED ACHIEVEMENT */}
        <motion.div
          variants={fadeInScale(0.1, 0.97)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative overflow-hidden rounded-2xl bg-[#172d4a] p-8 text-white shadow-lg md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0064C6]/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Award size={18} />
              An Important Academic Milestone
            </div>

            <img
              src={Waec}
              alt="WAEC Logo"
              className="mb-5 text-white object-contain w-16 h-16"
            />

            <h3 className="text-2xl font-bold md:text-3xl">
              WAEC & NECO Approved Examination Centre
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Paradigm Schools is proudly recognised as an
              approved WAEC examination centre, marking an
              important milestone in our commitment to
              academic excellence and quality education.
            </p>

            {/* NECO APPROVAL STATUS */}
            <div className="mt-7 rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-blue-200">
                NECO
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-200">
                In addition to being a WAEC-approved examination centre, Paradigm Schools is also an approved NECO examination centre, further strengthening our commitment to academic excellence and providing students with greater examination opportunities in a conducive and well-equipped learning environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SUPPORTING ACHIEVEMENTS */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={staggerItem(24)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-[#F0F7FF] shadow-sm transition-all duration-400 hover:shadow-xl"
              >
                {/* ACHIEVEMENT IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-7 md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0064C6]/10 text-[#0064C6] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-[#172d4a]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AchievementsSection;
