
import {
  Menu,
  X,
  House,
  Images,
  Info,
  GraduationCap,
  ContactRound,
} from "lucide-react";

import logo from "../assets/PS logo.webp";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

function Header() {
  const [openMenu, setopenMenu] = useState(false);
  const location = useLocation();

  const closeMenu = () => setopenMenu(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* SCHOOL LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Paradigm Schools Minna logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div>
              <span className="block text-xl font-bold leading-tight tracking-tight text-slate-950">
                PARADIGM
              </span>

              <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#0064C6]">
                Schools Minna
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">

            {/* HOME */}
            <Link
              to="/"
              className={`relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6] ${
                location.pathname === "/"
                  ? "font-semibold text-[#0064C6]"
                  : ""
              }`}
            >
              Home

              {location.pathname === "/" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0064C6]"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                />
              )}
            </Link>

            {/* ABOUT US */}
            <Link
              to="/about"
              className={`relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6] ${
                location.pathname === "/about"
                  ? "font-semibold text-[#0064C6]"
                  : ""
              }`}
            >
              About Us

              {location.pathname === "/about" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0064C6]"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                />
              )}
            </Link>

            {/* GALLERY */}
            <Link
              to="/about#gallery"
              className="relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6]"
            >
              Gallery
            </Link>

            {/* CONTACT US */}
            <Link
              to="/contact"
              className={`relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6] ${
                location.pathname === "/contact"
                  ? "font-semibold text-[#0064C6]"
                  : ""
              }`}
            >
              Contact Us

              {location.pathname === "/contact" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0064C6]"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                />
              )}
            </Link>
          </nav>

          {/* E-EXAM PORTAL BUTTON */}
          <motion.a
            href="#admissions"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="hidden rounded-lg bg-[#172d4a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow md:flex"
          >
            E-Exam Portal
          </motion.a>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setopenMenu(true)}
            aria-label="Open mobile menu"
            aria-expanded={openMenu}
            className="cursor-pointer p-2 md:hidden"
          >
            <Menu className="h-6 w-6 text-[#172d4a]" />
          </motion.button>

        </div>
      </header>

      {/* MOBILE DRAWER AND BACKDROP */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* DARK BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] md:hidden"
              aria-hidden="true"
            />

            {/* MOBILE DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 26,
              }}
              className="fixed bottom-0 right-0 z-50 flex h-full w-[80%] max-w-80 flex-col border-l border-gray-200 bg-white shadow-2xl md:hidden"
            >

              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between bg-[#172d4a] px-4 py-4 text-white">
                <span className="text-sm font-semibold tracking-wide">
                  Menu
                </span>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={closeMenu}
                  aria-label="Close mobile menu"
                  className="cursor-pointer p-2"
                >
                  <X className="h-6 w-6 text-white" />
                </motion.button>
              </div>

              {/* MOBILE NAVIGATION */}
              <div className="overflow-y-auto px-6 py-6">
                <motion.nav
                  className="flex flex-col gap-4 text-lg"
                  variants={staggerContainer(0.06, 0.05)}
                  initial="hidden"
                  animate="visible"
                >

                  {/* HOME */}
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 border-b border-gray-200 pb-2 text-[#172d4a]"
                  >
                    <House />

                    <Link
                      to="/"
                      onClick={closeMenu}
                      className="block py-3 transition-colors hover:text-[#0064C6]"
                    >
                      Home
                    </Link>
                  </motion.div>

                  {/* ABOUT US */}
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 border-b border-gray-200 pb-2 text-[#172d4a]"
                  >
                    <Info />

                    <Link
                      to="/about"
                      onClick={closeMenu}
                      className="block py-3 transition-colors hover:text-[#0064C6]"
                    >
                      About Us
                    </Link>
                  </motion.div>

                  {/* GALLERY */}
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 border-b border-gray-200 pb-2 text-[#172d4a]"
                  >
                    <Images />

                    <Link
                      to="/about#gallery"
                      onClick={closeMenu}
                      className="block py-3 transition-colors hover:text-[#0064C6]"
                    >
                      Gallery
                    </Link>
                  </motion.div>

                  {/* CONTACT US */}
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 border-b border-gray-200 pb-2 text-[#172d4a]"
                  >
                    <ContactRound />

                    <Link
                      to="/contact"
                      onClick={closeMenu}
                      className="block py-3 transition-colors hover:text-[#0064C6]"
                    >
                      Contact Us
                    </Link>
                  </motion.div>

                  {/* E-EXAM - LAST ITEM */}
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 border-b border-gray-200 pb-2 text-[#172d4a]"
                  >
                    <GraduationCap />

                    <a
                      href="#admissions"
                      onClick={closeMenu}
                      className="block py-3 transition-colors hover:text-[#0064C6]"
                    >
                      E-Exam
                    </a>
                  </motion.div>

                </motion.nav>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
