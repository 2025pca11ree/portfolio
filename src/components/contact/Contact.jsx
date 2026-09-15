import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  BriefcaseBusiness,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const CONTACT = {
  name: "Reema Safreen S S",
  email: "reemasafreen0711@gmail.com",
  phone: "+91 81485 58828",
  whatsapp: "918148558828",
  location: "Tirunelveli, Tamil Nadu, India",

  github: "https://github.com/safreen0711",

  // Add the real LinkedIn profile URL when available.
  linkedin: "",
};

/* =========================================================
   ROLES
========================================================= */

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Laravel Developer",
];

/* =========================================================
   PREFERRED LOCATIONS
========================================================= */

const preferredLocations = [
  "Tirunelveli",
  "Coimbatore",
  "Chennai",
  "Pondicherry",
];

/* =========================================================
   CONTACT COMPONENT
========================================================= */

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =======================================================
     HANDLE FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");

    const body = encodeURIComponent(
      `Hello Reema,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Sent from Reema Safreen's portfolio website.`,
    );

    /*
      This opens the visitor's default email application.
      It does not send the email automatically.
    */

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/5 bg-[#08090c] py-28 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute bottom-[5%] right-[-10%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's connect."
          description="I'm open to suitable opportunities in frontend and full-stack web development where I can contribute my current skills and continue learning."
        />

        {/* =====================================================
            AVAILABILITY CTA
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-indigo-500/[0.08] p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Open to Opportunities
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Open to suitable developer opportunities.
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                I'm interested in frontend and full-stack development
                opportunities involving React, JavaScript, Laravel and related
                web technologies.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black opacity-100 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-300 hover:text-black hover:shadow-xl hover:shadow-violet-500/20"
            >
              <span className="text-black">Contact Me</span>

              <ArrowUpRight
                size={16}
                className="text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT AREA
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =================================================
              LEFT CONTACT DETAILS
          ================================================= */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="space-y-4"
          >
            {/* EMAIL */}

            <motion.a
              variants={fadeUp}
              href={`mailto:${CONTACT.email}`}
              className="group block rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                  <Mail size={19} className="text-violet-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                    {CONTACT.email}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                />
              </div>
            </motion.a>

            {/* PHONE */}

            <motion.a
              variants={fadeUp}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="group block rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                  <Phone size={19} className="text-violet-400" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                    {CONTACT.phone}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-zinc-700 transition-all duration-300 group-hover:text-violet-400"
                />
              </div>
            </motion.a>

            {/* WHATSAPP */}

            <motion.a
              variants={fadeUp}
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hello Reema, I came across your portfolio and would like to connect with you.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
                  <FaWhatsapp size={20} className="text-emerald-400" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                    {CONTACT.phone}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-zinc-700 transition-all duration-300 group-hover:text-emerald-400"
                />
              </div>
            </motion.a>

            {/* LOCATION */}

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10">
                  <MapPin size={19} className="text-indigo-400" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Based In
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {CONTACT.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SOCIAL LINKS */}

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 backdrop-blur-xl"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Find Me Online
              </p>

              <div className="mt-4 flex gap-3">
                {/* GitHub */}

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-white"
                >
                  <FaGithub size={19} />
                </a>

                {/* LinkedIn */}

                {CONTACT.linkedin && (
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                <Send size={19} className="text-violet-400" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Fill out the form and your default email application will open
                with the message prepared.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-zinc-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/8 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.03]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-zinc-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/8 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.03]"
                  />
                </div>
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-zinc-400"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity / Project enquiry"
                  className="w-full rounded-xl border border-white/8 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.03]"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-zinc-400"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full resize-none rounded-xl border border-white/8 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-zinc-700 transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.03]"
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-300 hover:shadow-xl hover:shadow-violet-500/20"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={17} />
                    Message Prepared
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            ROLES + PREFERRED LOCATIONS
        ====================================================== */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* ROLES */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                <BriefcaseBusiness size={18} className="text-violet-400" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400">
                  Roles I'm Interested In
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Areas I'm exploring
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition hover:border-violet-400/20 hover:text-zinc-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* LOCATIONS */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10">
                <MapPin size={18} className="text-indigo-400" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  Preferred Locations
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                  Where I'm looking
                </h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {preferredLocations.map((location) => (
                <span
                  key={location}
                  className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition hover:border-indigo-400/20 hover:text-zinc-200"
                >
                  {location}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FOOTER MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center"
        >
          <p className="text-sm font-medium text-zinc-400">
            Thanks for taking the time to explore my portfolio.
          </p>

          <p className="text-xs text-zinc-700">
            Reema Safreen S S • Full-Stack Developer • Tirunelveli, Tamil Nadu
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
