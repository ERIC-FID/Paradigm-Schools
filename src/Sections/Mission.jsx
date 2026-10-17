import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInScale,
  fadeIn,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/animations";

const missions = [
  "Provide a Good Learning Environment",
  "Employ Qualified and Committed Staff",
  "Promote Diligence and Good Behaviour",
  "Ensure Attractive Staff Welfare",
  "Uphold Academic Excellence and Merit",
];

function VisionMissionSection() {
  return (
    <section className="bg-[#172d4a] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION HEADING */}
        <motion.div
          variants={fadeInUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            What Guides Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Vision & Mission
          </h2>
        </motion.div>

        {/* VISION */}
        <motion.div
          variants={fadeInScale(0.1, 0.96)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto mb-16 max-w-3xl rounded-2xl border border-white/20 bg-white/20 px-6 py-10 text-center sm:px-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Our Vision
          </h3>

          <div className="mx-auto my-5 h-1 w-16 rounded-full bg-white" />

          <p className="text-lg leading-8 text-white sm:text-xl">
            To produce children with academic excellence
            and high moral rectitude.
          </p>
        </motion.div>

        {/* MISSION HEADING */}
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 flex items-center justify-center gap-5"
        >
          <div className="h-px flex-1 bg-blue-400/50" />

          <h3 className="shrink-0 text-2xl font-bold text-white sm:text-3xl">
            Our Mission
          </h3>

          <div className="h-px flex-1 bg-blue-400/50" />
        </motion.div>

        {/* MISSION ITEMS */}
        <motion.div
          variants={staggerContainer(0.12, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={staggerItem(20)}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[60px] items-stretch overflow-hidden rounded-l-xl rounded-r-full bg-white/20 pr-3 shadow-md transition-all duration-400 hover:shadow-xl cursor-default"
            >
              {/* NUMBER BOX */}
              <div className="flex w-[55px] shrink-0 items-center justify-center rounded-l-none rounded-r-xl bg-[#004a96] text-xl font-extrabold text-white transition-colors duration-300 group-hover:bg-[#0064C6]">
                {index + 1}
              </div>

              {/* MISSION TITLE */}
              <h4 className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white sm:text-sm">
                {mission}
              </h4>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default VisionMissionSection;