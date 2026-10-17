import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/animations";

const reasons = [
  {
    title: "Quality Education",
    description:
      "We provide a strong academic foundation through engaging lessons, practical learning, and a well-structured curriculum that helps every student develop knowledge and confidence.",
  },
  {
    title: "Excellent Academic Performance",
    description:
      "Our commitment to academic excellence prepares students to perform confidently in examinations and develop the skills needed for higher education and future success.",
  },
  {
    title: "Outstanding Competition Achievements",
    description:
      "Our students participate in inter-school competitions, demonstrating their talents, creativity, teamwork, and academic abilities while representing the school with pride.",
  },
  {
    title: "Character and Discipline",
    description:
      "Beyond classroom learning, we nurture responsible individuals by promoting discipline, integrity, respect, leadership, and strong moral values in everyday school activities.",
  },
  {
    title: "Supportive Learning Environment",
    description:
      "We create a welcoming and encouraging atmosphere where students feel valued, teachers provide guidance, and every child is inspired to discover and develop their potential.",
  },
];

function WhyChooseUs() {
  // The first dropdown is open by default
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="why-choose-us"
      className="bg-[#0064C6]/5 py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* SECTION HEADING */}
        <motion.div
          variants={fadeInUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#0064C6]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#172d4a] md:text-4xl">
            Why Choose Paradigm Schools?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Discover what makes Paradigm Schools a place where
            academic excellence, character development, and
            individual growth come together.
          </p>
        </motion.div>

        {/* ACCORDION CARDS */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto max-w-5xl space-y-4"
        >
          {reasons.map((reason, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={staggerItem(20)}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-xl border shadow-sm transition-all duration-400 hover:shadow-md ${
                  isOpen
                    ? "border-[#0064C6]/20"
                    : "border-slate-200"
                }`}
              >
                {/* CLICKABLE HEADING */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`reason-panel-${index}`}
                  className={`flex w-full cursor-pointer items-center justify-between gap-4 border-l-4 px-5 py-5 text-left transition-colors duration-400 md:px-7 ${
                    isOpen
                      ? "border-[#0064C6] bg-[#172d4a]"
                      : "border-[#0064C6] bg-[#172d4a] hover:bg-[#0064C6]"
                  }`}
                >
                  <h3 className="text-base font-bold text-white md:text-lg">
                    {reason.title}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN DESCRIPTION */}
                <div
                  id={`reason-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-l-4 border-[#0064C6] bg-white px-5 py-5 md:px-7">
                      <p className="text-sm leading-7 text-gray-600 md:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
