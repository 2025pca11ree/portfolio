import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "../common/Container";

const FOOTER = {
  name: "Reema Safreen S S",
  role: "Full-Stack Developer | Frontend Developer | React Developer | Laravel Developer",
  email: "reemasafreen0711@gmail.com",
  github: "https://github.com/safreen0711",
};

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#07080a]">
      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-violet-600/6 blur-[120px]"
      />

      <Container className="relative z-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="Back to home"
            >
              {/* LOGO IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{ duration: 0.25 }}
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-white/3 shadow-lg shadow-violet-500/5"
              >
                <img
                  src="/logo1.png"
                  alt="Reema Safreen Logo"
                  className="h-full w-full object-contain p-1"
                />
              </motion.div>

              {/* Name */}
              <div>
                <p className="text-sm font-bold tracking-wide text-white">
                  REEMA SAFREEN
                </p>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Developer Portfolio
                </p>
              </div>
            </a>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
              {FOOTER.role}. I build responsive web applications using modern
              frontend and backend technologies, with hands-on experience
              through internships and academic projects.
            </p>

            {/* Email */}
            <a
              href={`mailto:${FOOTER.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
            >
              <Mail size={16} />
              {FOOTER.email}
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Navigation
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-zinc-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Connect
            </p>

            <div className="mt-5 flex gap-3">
              {/* GitHub */}
              <motion.a
                href={FOOTER.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 text-zinc-500 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-white"
              >
                <FaGithub size={17} />
              </motion.a>
            </div>

            <p className="mt-6 max-w-xs text-xs leading-6 text-zinc-700">
              Open to suitable Full-Stack, Frontend, React and Laravel Developer
              opportunities.
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-xs text-zinc-700">
            © {currentYear} {FOOTER.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* Tech Stack */}
            <p className="text-xs text-zinc-700">
              Built with React • Tailwind CSS • Framer Motion
            </p>

            {/* Back To Top */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/2.5 text-zinc-500 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-white"
            >
              <ArrowUp
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
