import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { smoothEase } from "../utils/animations";

function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: smoothEase }}
      className="bg-[#172d4a] py-2.5 px-4 text-xs text-[#f7f4ed] sm:px-8 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href="tel:+2348000000000"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+234 (0) 7035380145</span>
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a
            href="mailto:admissions@paradigm.edu.ng"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>paradigmschools222@gamil.com</span>
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mon - Fri: 7:45 AM - 4:30 PM</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-[#f7f4ed] text-[11px] font-medium border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            2026/2027 Admissions Open
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Topbar;