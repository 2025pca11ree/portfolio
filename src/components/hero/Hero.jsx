import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";

import { FaReact, FaPython, FaLaravel } from "react-icons/fa";

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToAbout = () => {
    const section = document.getElementById("about");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07080a] pt-20"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute right-[5%] top-[20%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/5 blur-[140px]" />
      </div>

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-20">
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="relative z-20">
          {/* Status */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-sm text-violet-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            MCA Student • Full-Stack Developer
          </motion.div>

          {/* Hello */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-400"
          >
            <Sparkles size={16} />
            Hello, I'm
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Reema{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Safreen
            </span>
          </motion.h1>

          {/* Role */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-5 text-2xl font-semibold leading-tight text-zinc-200 sm:text-3xl"
          >
            Full-Stack Developer
            <span className="mx-2 text-violet-500">|</span>
            React Developer
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            MCA student with hands-on internship and project experience in
            React.js, JavaScript, Laravel, Node.js, MySQL and REST APIs. I build
            responsive web applications and practical software solutions,
            including an AI-assisted Voice2Sign communication platform.
          </motion.p>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            {/* Projects */}

            <button
              type="button"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-violet-300 hover:shadow-xl hover:shadow-violet-500/20"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Resume */}

            <a
              href="/Resume1.pdf"
              download="Reema-Safreen-Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>

          {/* =================================================
              TECHNOLOGY STACK
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <span className="mr-2 text-xs font-medium uppercase tracking-wider text-zinc-600">
              Technologies
            </span>

            {/* React */}

            <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-zinc-400 transition hover:border-cyan-400/20 hover:bg-white/[0.04] hover:text-white">
              <FaReact className="text-cyan-400" />
              React
            </div>

            {/* Python */}

            <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-zinc-400 transition hover:border-yellow-400/20 hover:bg-white/[0.04] hover:text-white">
              <FaPython className="text-yellow-400" />
              Python
            </div>

            {/* Laravel */}

            <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-zinc-400 transition hover:border-red-400/20 hover:bg-white/[0.04] hover:text-white">
              <FaLaravel className="text-red-400" />
              Laravel
            </div>
          </motion.div>

          {/* =================================================
              MINI STATS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/5 pt-7"
          >
            <div>
              <div className="text-xl font-bold text-white">4</div>

              <div className="mt-1 text-xs text-zinc-600">Projects</div>
            </div>

            <div>
              <div className="text-xl font-bold text-white">2</div>

              <div className="mt-1 text-xs text-zinc-600"></div>
            </div>

            <div>
              <div className="text-xl font-bold text-white">Full-Stack</div>

              <div className="mt-1 text-xs text-zinc-600">Development</div>
            </div>

            <div>
              <div className="text-xl font-bold text-white">AI</div>

              <div className="mt-1 text-xs text-zinc-600">Computer Vision</div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            RIGHT — PROFILE PHOTO
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto h-[420px] w-full max-w-[520px] lg:h-[560px]"
        >
          {/* Photo Glow */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

          {/* Photo Card */}

          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            {/* Gradient Border */}

            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-500/20" />

            {/* Photo */}

            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <img
                src="/ree.jpeg"
                alt="Developer"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
              />

              {/* Photo Overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* =================================================
              FULL-STACK BADGE
          ================================================== */}

          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[18%] rounded-xl border border-white/10 bg-[#0c0d11]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">
              Specialization
            </p>

            <p className="mt-1 text-sm font-semibold text-white">Full-Stack</p>
          </motion.div>

          {/* =================================================
              AI BADGE
          ================================================== */}

          <motion.div
            animate={{
              y: [6, -6, 6],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[17%] left-0 rounded-xl border border-white/10 bg-[#0c0d11]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-wider text-zinc-500">
              Project Focus
            </p>

            <p className="mt-1 text-sm font-semibold text-white">AI & ML</p>
          </motion.div>

          {/* =================================================
              DECORATIVE ORBS
          ================================================== */}

          <motion.div
            animate={{
              y: [-12, 12, -12],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[15%] top-[15%] h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-500/50"
          />

          <motion.div
            animate={{
              y: [12, -12, 12],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] right-[18%] h-1.5 w-1.5 rounded-full bg-indigo-400"
          />

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[20%] top-[10%] h-1 w-1 rounded-full bg-purple-300"
          />
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 transition hover:text-zinc-300 md:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}

export default Hero;
