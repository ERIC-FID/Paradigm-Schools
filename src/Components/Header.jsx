import { Menu, X, House, Images, Info, GraduationCap } from "lucide-react";
import logo from "../assets/PS logo.webp";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/animations";

function Header() {
  const [openMenu, setopenMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="bg-white px-6 py-4 shadow-sm relative z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="flex gap-3 items-center group">
            <img
              src={logo}
              alt="paradigm school logo"
              className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-950 block leading-tight">
                PARADIGM
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#0064C6] block">
                Schools Minna
              </span>
            </div>
          </Link>

          <nav className="hidden gap-8 md:flex items-center">
            <Link
              to="/"
              className={`relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6] ${
                location.pathname === "/" ? "font-semibold text-[#0064C6]" : ""
              }`}
            >
              Home
              {location.pathname === "/" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0064C6] rounded-full"
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6] ${
                location.pathname === "/about" ? "font-semibold text-[#0064C6]" : ""
              }`}
            >
              About
              {location.pathname === "/about" && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0064C6] rounded-full"
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />
              )}
            </Link>

            <a
              href="#programmes"
              className="relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6]"
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6]"
            >
              Admissions
            </a>
            <a
              href="#contact"
              className="relative py-1 text-slate-700 transition-colors duration-300 hover:text-[#0064C6]"
            >
              Contact
            </a>
          </nav>

          <motion.a
            href="#admissions"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="hidden px-4 py-2 text-sm font-semibold text-white bg-[#172d4a] hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all md:flex"
          >
            E-Exam Portal
          </motion.a>

          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setopenMenu(true)}
            aria-label="Open mobile menu"
            className="md:hidden p-2 cursor-pointer"
          >
            <Menu className="h-6 w-6 text-[#172d4a]" />
          </motion.button>
        </div>
      </header>

      {/* MOBILE DRAWER & BACKDROP */}
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setopenMenu(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-[2px] z-40 md:hidden"
              aria-hidden="true"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed bottom-0 right-0 h-[90%] w-[80%] max-w-80 bg-white z-50 py-4 border-l border-gray-200 md:hidden shadow-2xl flex flex-col"
            >
              <div className="px-4 py-4 bg-[#172d4a] text-white flex justify-between items-center">
                <span className="font-semibold text-sm tracking-wide">Paradigm Menu</span>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setopenMenu(false)}
                  aria-label="Close mobile menu"
                  className="p-2 cursor-pointer"
                >
                  <X className="h-6 w-6 text-white" />
                </motion.button>
              </div>

              <div className="px-6 py-6 overflow-y-auto">
                <motion.nav
                  className="flex flex-col gap-4 text-large font-semibold"
                  variants={staggerContainer(0.06, 0.05)}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-3 text-[#172d4a] border-b border-gray-200 pb-2"
                  >
                    <House />
                    <Link
                      to="/"
                      onClick={() => setopenMenu(false)}
                      className="block py-3 text-[#172d4a] hover:text-blue-300 transition-colors"
                    >
                      Home
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 text-[#172d4a] border-b border-gray-200 pb-2"
                  >
                    <Info />
                    <Link
                      to="/about"
                      onClick={() => setopenMenu(false)}
                      className="block py-3 text-[#172d4a] transition-colors hover:text-blue-300"
                    >
                      About
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 text-[#172d4a] border-b border-gray-200 pb-2"
                  >
                    <Images />
                    <a
                      href="#gallery"
                      onClick={() => setopenMenu(false)}
                      className="hover:text-blue-300 transition-colors py-3"
                    >
                      Gallery
                    </a>
                  </motion.div>

                  <motion.div
                    variants={staggerItem(10)}
                    className="flex items-center gap-4 text-[#172d4a] border-b border-gray-200 pb-2"
                  >
                    <GraduationCap />
                    <a
                      href="#admissions"
                      onClick={() => setopenMenu(false)}
                      className="hover:text-blue-300 transition-colors py-3"
                    >
                      Admission
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
