import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

const highlights = [
  {
    icon: Code2,
    value: "Full-Stack",
    label: "Development",
    description:
      "Hands-on experience building responsive web applications with React, Laravel, Node.js and REST APIs.",
  },
  {
    icon: BrainCircuit,
    value: "AI + CV",
    label: "Project Focus",
    description:
      "Worked on AI-assisted communication and computer vision features using MediaPipe and related technologies.",
  },
  {
    icon: Layers3,
    value: "4",
    label: "Projects",
    description:
      "Built projects covering full-stack applications, frontend development, APIs and AI-assisted solutions.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/5 bg-[#08090c] py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[20%] h-80 w-80 rounded-full bg-violet-600/8 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-indigo-600/8 blur-[140px]"
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who learns by building."
          description="MCA student with hands-on internship and project experience in frontend, backend and AI-assisted application development."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =========================
              ABOUT
          ========================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-violet-400/20 hover:bg-white/4 sm:p-9"
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl opacity-50 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Header + IMAGE */}
              <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Developer Profile */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10"
                  >
                    <Code2 className="text-violet-400" size={22} />
                  </motion.div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                      Developer Profile
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Full-Stack Developer
                    </h3>
                  </div>
                </div>

                {/* PROFILE IMAGE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 1,
                  }}
                  className="relative mx-auto sm:mx-0"
                >
                  {/* Image Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-2xl" />

                  {/* Image Border */}
                  <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-violet-400/25 bg-white/4 p-1 shadow-xl shadow-violet-500/10 sm:h-32 sm:w-32">
                    <img
                      src="/ree.jpeg"
                      alt="Reema Safreen"
                      className="h-full w-full rounded-xl object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Small Status Dot */}
                  <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-2 border-[#08090c] bg-violet-400 shadow-lg shadow-violet-500/50" />
                </motion.div>
              </div>

              {/* ABOUT TEXT */}

              <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
                <p>
                  I am an MCA student interested in full-stack web development,
                  modern frontend technologies and practical AI applications.
                </p>

                <p>
                  I have gained hands-on experience through internships and
                  academic projects, working with React.js, JavaScript, Laravel,
                  Node.js, MySQL, REST APIs and other web technologies.
                </p>

                <p>
                  My projects include full-stack applications, responsive
                  interfaces and an AI-assisted Voice2Sign system supporting
                  Voice → Sign and Sign → Voice communication.
                </p>
              </div>

              {/* Current Focus */}

              <div className="mt-8 border-t border-white/6 pt-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                  Current Focus
                </p>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Improving my full-stack development skills, building practical
                  projects and gaining experience with professional software
                  development workflows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================
              EDUCATION
          ========================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 p-7 backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/20 hover:bg-white/4 sm:p-9"
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl opacity-50 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -3,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10"
                >
                  <GraduationCap className="text-indigo-400" size={23} />
                </motion.div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Education
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Academic Journey
                  </h3>
                </div>
              </div>

              <div className="relative pl-7">
                {/* Timeline */}
                <div className="absolute left-1.25 top-2 h-[calc(100%-8px)] w-px bg-linear-to-b from-violet-500/70 via-indigo-500/40 to-transparent" />

                {/* MCA */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-6.75 top-1.5 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#08090c] shadow-lg shadow-violet-500/30" />

                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
                    2025 – 2027
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Master of Computer Applications
                  </h4>

                  <p className="mt-1 text-sm text-zinc-500">
                    Sri Sarada College
                  </p>

                  <p className="mt-2 text-sm font-medium text-violet-300">
                    86%
                  </p>
                </motion.div>

                {/* BA */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative mt-8"
                >
                  <span className="absolute -left-6.75 top-1.5 h-3 w-3 rounded-full border-2 border-zinc-600 bg-[#08090c]" />

                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    2023 – 2025
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    B.A. English Literature
                  </h4>

                  <p className="mt-1 text-sm text-zinc-500">
                    Sarah Tucker College
                  </p>

                  <p className="mt-2 text-sm font-medium text-zinc-400">60%</p>
                </motion.div>
              </div>

              <a
                href="#skills"
                className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-violet-300"
              >
                Explore my technical skills
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================
            HIGHLIGHTS
        ========================== */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/2 p-6 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/4 hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 4,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/7 bg-white/3"
                    >
                      <Icon size={19} className="text-violet-400" />
                    </motion.div>

                    <span className="text-2xl font-bold tracking-tight text-white">
                      {item.value}
                    </span>
                  </div>

                  <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    {item.label}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default About;
