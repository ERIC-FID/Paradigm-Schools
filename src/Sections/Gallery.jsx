import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  smoothEase,
  defaultViewport,
} from "../utils/animations";

import publicSpeaking from "../assets/student-public-speaking.webp";
import sportsTeams from "../assets/school-sports-teams.webp";
import groupActivities from "../assets/schoolyard-group-activities.webp";
import scienceLab from "../assets/science-laboratory-practicals.webp";
import certificate from "../assets/certificate-presentation.webp";
import happyPupils from "../assets/happy-paradigm-pupils.webp";
import computerLab from "../assets/computer-laboratory.webp";

const galleryImages = [
  {
    id: 1,
    image: publicSpeaking,
    title: "Student Public Speaking",
  },
  {
    id: 2,
    image: sportsTeams,
    title: "Our Sports Teams",
  },
  {
    id: 3,
    image: groupActivities,
    title: "Schoolyard Activities",
  },
  {
    id: 4,
    image: scienceLab,
    title: "Science Laboratory Practicals",
  },
  {
    id: 5,
    image: certificate,
    title: "Celebrating Achievements",
  },
  {
    id: 6,
    image: happyPupils,
    title: "Life at Paradigm Schools",
  },
  {
    id: 7,
    image: computerLab,
    title: "Our Computer Laboratory",
  },
];

function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, 6);

  const closeLightbox = () => setActiveImage(null);

  const nextImage = () => {
    setActiveImage((current) =>
      (current + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section id="gallery" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* SECTION HEADING */}
        <motion.div
          variants={fadeInUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0064C6]">
            Our Photo Gallery
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#172d4a] sm:text-4xl md:text-5xl">
            Life at Paradigm Schools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Capturing the moments, achievements, and experiences
            that make our school community special.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <motion.div
          layout
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.85, ease: smoothEase }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View ${item.title}`}
                className="group relative block h-[280px] w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-md transition-shadow duration-400 hover:shadow-xl sm:h-[300px] lg:h-[320px]"
              >
                {/* PHOTO */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* BOTTOM NAVY OVERLAY */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172d4a] via-[#172d4a]/85 to-transparent px-5 pb-5 pt-16">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-2 h-[3px] w-10 rounded-full bg-[#60a5fa] transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW MORE / VIEW LESS */}
        {galleryImages.length > 6 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowAll((current) => !current)}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#172d4a] px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#0064C6]"
            >
              {showAll ? "View Less Photos" : "View More Photos"}

              <ArrowRight
                size={19}
                className={`transition-transform duration-300 ${
                  showAll
                    ? "rotate-180"
                    : "group-hover:translate-x-1"
                }`}
              />
            </motion.button>
          </div>
        )}

      </div>

      {/* FULLSCREEN PHOTO VIEWER */}
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-16 backdrop-blur-xs"
          >
            {/* CLOSE BUTTON */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={closeLightbox}
              aria-label="Close photo"
              className="absolute right-5 top-5 z-20 cursor-pointer rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
            >
              <X size={24} />
            </motion.button>

            {/* PREVIOUS BUTTON */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:left-6 sm:p-3"
            >
              <ChevronLeft size={26} />
            </motion.button>

            {/* ENLARGED PHOTO */}
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="flex max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={galleryImages[activeImage].image}
                alt={galleryImages[activeImage].title}
                className="max-h-[75vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
              />

              <h3 className="mt-5 text-center text-lg font-semibold text-white sm:text-xl">
                {galleryImages[activeImage].title}
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                {activeImage + 1} / {galleryImages.length}
              </p>
            </motion.div>

            {/* NEXT BUTTON */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 sm:right-6 sm:p-3"
            >
              <ChevronRight size={26} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;
