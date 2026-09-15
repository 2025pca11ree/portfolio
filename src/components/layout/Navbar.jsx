import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

/* =========================================================
   CONTACT DETAILS
========================================================= */

const CONTACT = {
  email: "reemasafreen0711@gmail.com",
  github: "https://github.com/safreen0711",
  linkedin: "",
  resume: "/Resume1.pdf",
};

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =======================================================
     SCROLL HANDLER
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id),
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 160;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  /* =======================================================
     DOWNLOAD RESUME
  ======================================================= */

  const downloadResume = () => {
    const link = document.createElement("a");

    link.href = CONTACT.resume;
    link.download = "Reema-Safreen-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#07080a]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* =================================================
              BRAND / LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            {/* =================================================
                RS LOGO
            ================================================== */}

            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-violet-400/30
                bg-[#07080a]
                shadow-lg
                shadow-violet-500/10
                transition-all
                duration-300
                group-hover:border-violet-400/60
                group-hover:shadow-violet-500/20
              "
            >
              <img
                src="/logo1.png"
                alt="RS - Reema Safreen"
                className="
                  h-full
                  w-full
                  object-contain
                  p-1
                "
              />

              {/* Subtle glass overlay */}

              <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/[0.02]" />

              {/* Inner border */}

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>

            {/* =================================================
                NAME
            ================================================== */}

            <div className="hidden text-left sm:block">
              <div className="text-sm font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-violet-300">
                Reema Safreen
              </div>

              <div className="text-xs text-zinc-500">Full-Stack Developer</div>
            </div>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-violet-500"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            {/* GITHUB */}

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-500/40
                hover:bg-violet-500/10
                hover:text-white
              "
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={17} />
            </a>

            {/* LINKEDIN */}

            {CONTACT.linkedin ? (
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-white
                "
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={17} />
              </a>
            ) : null}

            {/* EMAIL */}

            <a
              href={`mailto:${CONTACT.email}`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-500/40
                hover:bg-violet-500/10
                hover:text-white
              "
              aria-label="Email"
              title="Email"
            >
              <Mail size={17} />
            </a>

            {/* RESUME */}

            <button
              type="button"
              onClick={downloadResume}
              className="
                ml-2
                flex
                items-center
                gap-2
                rounded-lg
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-violet-400
                hover:shadow-lg
                hover:shadow-violet-500/20
              "
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen((previous) => !previous)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              text-zinc-300
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:bg-violet-500/10
              hover:text-white
              lg:hidden
            "
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                >
                  <X size={21} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                >
                  <Menu size={21} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                overflow-hidden
                border-t
                border-white/10
                bg-[#07080a]/95
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
                {/* MOBILE NAVIGATION */}

                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        type="button"
                        key={item.id}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-violet-500/10 text-white"
                            : "text-zinc-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* MOBILE SOCIAL LINKS */}

                <div className="mt-5 flex gap-2 border-t border-white/10 pt-5">
                  {/* GITHUB */}

                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      py-3
                      text-sm
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-violet-500/30
                      hover:bg-violet-500/10
                      hover:text-white
                    "
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  {/* LINKEDIN */}

                  {CONTACT.linkedin ? (
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        py-3
                        text-sm
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:border-violet-500/30
                        hover:bg-violet-500/10
                        hover:text-white
                      "
                    >
                      <FaLinkedinIn size={17} />
                      LinkedIn
                    </a>
                  ) : null}
                </div>

                {/* MOBILE EMAIL */}

                <a
                  href={`mailto:${CONTACT.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    py-3
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <Mail size={16} />
                  Contact Me
                </a>

                {/* MOBILE RESUME */}

                <button
                  type="button"
                  onClick={() => {
                    downloadResume();
                    setMobileOpen(false);
                  }}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-violet-400
                    hover:shadow-lg
                    hover:shadow-violet-500/20
                  "
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
