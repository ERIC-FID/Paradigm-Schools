
import { useState } from "react";
import { motion } from "framer-motion";
import {
  UserRound,
  Mail,
  MessageSquare,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/mwllabww";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Message submission failed");
      }

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, we couldn't send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#0064C6] focus:bg-white focus:ring-4 focus:ring-blue-100";

  return (
    <main className="overflow-hidden bg-[#F8FAFC]">

      {/* PAGE INTRODUCTION */}
      <section className="relative overflow-hidden bg-[#172d4a] px-6 py-20 text-center text-white sm:py-24">

        {/* DECORATIVE BACKGROUND */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#0064C6]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl"
        >
          <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
            We're Here to Help
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get in <span className="text-[#74B9FF]">Touch</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-200 sm:text-base">
            Have questions about admissions, academics, or life at
            Paradigm Schools Minna? Our team is always happy to
            hear from you.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:p-9"
          >
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0064C6]">
                Contact Form
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#172d4a] sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Fill out the form below and we'll respond to your
                enquiry as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <MessageSquare
                    size={19}
                    className="pointer-events-none absolute left-4 top-4 text-slate-400"
                  />

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                    maxLength={5000}
                    className={`${inputClasses} resize-y`}
                  />
                </div>
              </div>

              {/* SUCCESS / ERROR NOTIFICATION */}
              {status.message && (
                <div
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live={status.type === "error" ? "assertive" : "polite"}
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={20}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { y: -2 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#0064C6] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-colors duration-300 hover:bg-[#004F9E] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs leading-6 text-slate-400">
                Your enquiry will be sent securely to our team.
              </p>
            </form>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0064C6]">
                Reach Out to Us
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#172d4a] sm:text-3xl">
                Let's Connect
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Whether you're a parent, prospective student, or
                visitor, we're here to provide the information
                and support you need.
              </p>
            </div>

            {/* PHONE CARD */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0064C6]">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#172d4a]">
                  Call Us
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Speak directly with our team.
                </p>

                <a
                  href="tel:07035380145"
                  className="mt-3 inline-flex items-center gap-1 font-semibold text-[#0064C6] hover:underline"
                >
                  07035380145
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* EMAIL CARD */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0064C6]">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#172d4a]">
                  Email Us
                </h3>

                <p className="mt-1 text-sm leading-7 text-slate-500">
                  Use the contact form to send us an email
                  enquiry. We'll be happy to respond.
                </p>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0064C6]">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#172d4a]">
                  Visit Our School
                </h3>

                <p className="mt-1 text-sm leading-7 text-slate-500">
                  Paradigm Schools Minna
                  <br />
                  Minna, Niger State, Nigeria
                </p>
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div className="rounded-2xl bg-[#172d4a] p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <Clock3 size={22} className="text-[#74B9FF]" />

                <h3 className="text-lg font-bold">
                  School Enquiries
                </h3>
              </div>

              <p className="mt-4 text-sm leading-8 text-slate-200">
                For admissions, academic enquiries, and
                general information, please contact our
                school administration.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
