import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Layers3,
  Sparkles,
  X,
  CheckCircle2,
  Target,
  Code2,
  Lightbulb,
  CloudSun,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { projects } from "../../data/projects";
import { fadeUp, staggerContainer } from "../../utils/animations";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/5 bg-[#08090c] py-28 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-violet-600/8 blur-[140px]" />

        <div className="absolute bottom-[10%] right-[-10%] h-96 w-96 rounded-full bg-indigo-600/8 blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}
        <SectionHeading
          eyebrow="Selected Projects"
          title="Things I've built."
          description="A selection of academic, internship and personal projects covering full-stack development, frontend engineering, API integration, AI and computer vision."
        />

        {/* ===================================================
            PROJECT LIST
        ==================================================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="space-y-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCaseStudy={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </Container>

      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, onCaseStudy }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] ${
        project.featured ? "lg:min-h-[430px]" : ""
      }`}
    >
      {/* Hover Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/10 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative grid ${
          project.featured
            ? "lg:grid-cols-[0.9fr_1.1fr]"
            : "lg:grid-cols-[220px_1fr]"
        }`}
      >
        {/* =================================================
            PROJECT VISUAL
        ================================================= */}

        <div
          className={`relative overflow-hidden border-b border-white/6 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-indigo-500/[0.06] p-7 ${
            project.featured
              ? "min-h-[280px] lg:border-b-0 lg:border-r"
              : "lg:border-b-0 lg:border-r"
          }`}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
          </div>

          <div className="relative flex h-full min-h-[230px] flex-col justify-between">
            {/* Number + Featured */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-600">
                / {project.number}
              </span>

              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                  <Sparkles size={11} />
                  Featured
                </span>
              )}
            </div>

            {/* Project Visual */}
            <div className="relative">
              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/20 shadow-2xl shadow-violet-900/20"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/8 bg-white/[0.03]">
                  <ProjectVisualIcon projectId={project.id} />
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/5" />
            </div>

            {/* Project ID */}
            <div className="mt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                Project
              </p>

              <p className="mt-1 font-mono text-xs text-zinc-500">
                {project.id}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            PROJECT CONTENT
        ================================================= */}

        <div className="flex flex-col justify-between p-7 sm:p-9">
          <div>
            {/* Category */}
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-3xl">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-sm font-medium text-zinc-300">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-xs text-zinc-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  {highlight}
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Button */}
          <div className="mt-8 border-t border-white/6 pt-6">
            <button
              type="button"
              onClick={onCaseStudy}
              className="group/case inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-300 hover:shadow-lg hover:shadow-violet-500/20"
            >
              View Case Study
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/case:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECT VISUAL ICON
========================================================= */

function ProjectVisualIcon({ projectId }) {
  if (projectId === "voice2sign") {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/10">
          <Sparkles size={28} strokeWidth={1.4} className="text-violet-400" />
        </div>

        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          AI + Vision
        </p>
      </div>
    );
  }

  if (projectId === "rilax-tiles") {
    return (
      <div className="flex flex-col items-center justify-center">
        <Layers3 size={42} strokeWidth={1.3} className="text-violet-400" />

        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          Surfaces
        </p>
      </div>
    );
  }

  if (projectId === "task-management") {
    return (
      <div className="flex flex-col items-center justify-center">
        <CheckCircle2 size={42} strokeWidth={1.4} className="text-violet-400" />

        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          Workflow
        </p>
      </div>
    );
  }

  if (projectId === "weather-app") {
    return (
      <div className="flex flex-col items-center justify-center">
        <CloudSun size={42} strokeWidth={1.4} className="text-violet-400" />

        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          API + JS
        </p>
      </div>
    );
  }

  return <Layers3 size={42} strokeWidth={1.3} className="text-violet-400" />;
}

/* =========================================================
   CASE STUDY MODAL
========================================================= */

function CaseStudyModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0c10] shadow-2xl shadow-black/50"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/6 bg-[#0b0c10]/95 px-6 py-5 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              Case Study
            </p>

            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {/* Intro */}
          <div className="rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
                <ProjectVisualIcon projectId={project.id} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-600">
                  {project.category}
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-300">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Objective */}
          <CaseStudySection icon={Target} title="Project Objective">
            <p>{project.objective}</p>
          </CaseStudySection>

          {/* Features */}
          <CaseStudySection icon={Lightbulb} title="Key Features">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.02] p-4"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-violet-400"
                  />

                  <span className="text-sm leading-6 text-zinc-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* Technology Stack */}
          <CaseStudySection icon={Code2} title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-violet-400/10 bg-violet-500/[0.05] px-3 py-2 text-xs font-medium text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </CaseStudySection>

          {/* Contribution */}
          <CaseStudySection icon={Sparkles} title="My Contribution">
            <p>{project.contribution}</p>
          </CaseStudySection>

          {/* Footer */}
          <div className="mt-8 border-t border-white/6 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   CASE STUDY SECTION
========================================================= */

function CaseStudySection({ icon: Icon, title, children }) {
  return (
    <div className="mt-9">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/7 bg-white/[0.03]">
          <Icon size={17} className="text-violet-400" />
        </div>

        <h4 className="text-base font-semibold text-white">{title}</h4>
      </div>

      <div className="text-sm leading-7 text-zinc-500">{children}</div>
    </div>
  );
}

export default Projects;
