import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/animations";

import schoolLogo from "../assets/PS logo.webp";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Achievements", href: "#achievements" },
  { name: "Gallery", href: "#gallery" },
];

const schoolLinks = [
  { name: "Pre-Nursery & Nursery", href: "#programmes" },
  { name: "Primary Education", href: "#programmes" },
  { name: "Secondary Education", href: "#programmes" },
  { name: "Admissions", href: "#admissions" },
];

function Footer() {
  return (
    <footer className="bg-[#172d4a] text-white overflow-hidden">

      {/* ADMISSIONS CALL TO ACTION */}
      <div className="bg-[#0064C6]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12 md:py-12">

          <motion.div
            variants={fadeInLeft(0.1, 24)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="max-w-2xl"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              Give Your Child a Brighter Future
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-100 md:text-base">
              Join a learning community dedicated to academic
              excellence, character development, and nurturing
              the potential of every child.
            </p>
          </motion.div>

          <motion.a
            href="#admissions"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#172d4a] transition-colors duration-300 hover:bg-[#f7f4ed] hover:shadow-lg"
          >
            Explore Admissions
            <ArrowUpRight size={19} />
          </motion.a>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-12">

        <motion.div
          variants={staggerContainer(0.12, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >

          {/* SCHOOL BRAND */}
          <motion.div variants={staggerItem(15)}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl p-2">
                <img
                  src={schoolLogo}
                  alt="Paradigm Schools Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-tight">
                  Paradigm Schools
                </h3>
                <p className="mt-1 text-xs text-blue-200">
                  Progressing in Excellence
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-300">
              At Paradigm Schools, we are committed to
              providing quality education, building strong
              character, and inspiring every child to
              achieve their full potential.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex items-center gap-3">

              <motion.a
                href="#"
                aria-label="Facebook"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors duration-300 hover:border-[#0064C6] hover:bg-[#0064C6] hover:text-white"
              >
                <FaFacebookF size={18} />
              </motion.a>

              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors duration-300 hover:border-[#0064C6] hover:bg-[#0064C6] hover:text-white"
              >
                <FaInstagram size={18} />
              </motion.a>

            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={staggerItem(15)}>
            <h3 className="mb-6 text-base font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-slate-300 transition-colors duration-300 hover:text-blue-300 hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OUR SCHOOL */}
          <motion.div variants={staggerItem(15)}>
            <h3 className="mb-6 text-base font-bold">
              Our School
            </h3>

            <ul className="space-y-4">
              {schoolLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-sm text-slate-300 transition-colors duration-300 hover:text-blue-300 hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div variants={staggerItem(15)}>
            <h3 className="mb-6 text-base font-bold">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-blue-300"
                />
                <p className="text-sm leading-7 text-slate-300">
                  Maitumbi Minna, Niger State, Nigeria
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-blue-300"
                />
                <p className="text-sm leading-7 text-slate-300">
                  07035380145
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-blue-300"
                />
                <p className="text-sm leading-7 text-slate-300">
                  paradigmschools222@gmail.com
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* COPYRIGHT */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-7 text-center md:flex-row md:text-left">

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Paradigm Schools.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            Developed by CipherW@re-09032627726
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
