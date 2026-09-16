import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ArrowLeft,
  Layers3,
  Sparkles,
  X,
  CheckCircle2,
  Target,
  Code2,
  Lightbulb,
  CloudSun,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import { projects } from "../../data/projects";
import { fadeUp, staggerContainer } from "../../utils/animations";

/* =========================================================
   PROJECTS
========================================================= */

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  /* =======================================================
     CLOSE MODAL WITH ESC
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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

        <div className="absolute left-[45%] top-[45%] h-72 w-72 rounded-full bg-fuchsia-600/5 blur-[130px]" />
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
  const hasImage = Boolean(project.coverImage);

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] ${
        project.featured ? "lg:min-h-[440px]" : ""
      }`}
    >
      {/* ===================================================
          HOVER GLOW
      ==================================================== */}

      <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-violet-600/10 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative z-10 grid ${
          project.featured
            ? "lg:grid-cols-[0.95fr_1.05fr]"
            : "lg:grid-cols-[330px_1fr]"
        }`}
      >
        {/* =================================================
            PROJECT VISUAL
        ================================================= */}

        <div
          className={`relative overflow-hidden border-b border-white/6 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-indigo-500/[0.06] ${
            project.featured
              ? "min-h-[300px] p-6 lg:min-h-[430px] lg:border-b-0 lg:border-r"
              : "min-h-[270px] p-6 lg:min-h-[300px] lg:border-b-0 lg:border-r"
          }`}
        >
          {/* Grid Background */}

          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
          </div>

          {/* Number + Featured */}

          <div className="relative z-20 flex items-center justify-between">
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

          {/* =================================================
              IMAGE / FALLBACK ICON
          ================================================= */}

          <div className="relative z-10 mt-5 flex min-h-[220px] items-center justify-center">
            {hasImage ? (
              <ProjectImage
                src={project.coverImage}
                alt={project.title}
                featured={project.featured}
              />
            ) : (
              <FallbackProjectVisual projectId={project.id} />
            )}
          </div>

          {/* Project ID */}

          <div className="relative z-20 mt-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
              Project
            </p>

            <p className="mt-1 font-mono text-xs text-zinc-500">{project.id}</p>
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
              {project.highlights?.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-xs text-zinc-500"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                  {highlight}
                </div>
              ))}
            </div>

            {/* Technologies */}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/7 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              CASE STUDY BUTTON
          ================================================= */}

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
   PROJECT IMAGE
========================================================= */

function ProjectImage({ src, alt, featured }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group/image relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/30 ${
        featured ? "h-[225px] w-full sm:h-[260px]" : "h-[215px] w-full"
      }`}
    >
      {/* Image */}

      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.04]"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      {/* Bottom Gradient */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Top Glass */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-violet-500/[0.06]" />

      {/* Preview Label */}

      <div className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
        Project Preview
      </div>

      {/* Corner Glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
    </motion.div>
  );
}

/* =========================================================
   FALLBACK PROJECT VISUAL
========================================================= */

function FallbackProjectVisual({ projectId }) {
  if (projectId === "voice2sign") {
    return (
      <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/30 shadow-2xl shadow-violet-900/20">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/8 bg-white/[0.03]">
          <Sparkles size={42} strokeWidth={1.3} className="text-violet-400" />

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            AI + Vision
          </p>
        </div>

        <div className="absolute h-52 w-52 rounded-full border border-violet-400/5" />
      </div>
    );
  }

  if (projectId === "rilax-tiles") {
    return (
      <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/30 shadow-2xl shadow-violet-900/20">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/8 bg-white/[0.03]">
          <Layers3 size={42} strokeWidth={1.3} className="text-violet-400" />

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Surfaces
          </p>
        </div>

        <div className="absolute h-52 w-52 rounded-full border border-violet-400/5" />
      </div>
    );
  }

  if (projectId === "task-management") {
    return (
      <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/30 shadow-2xl shadow-violet-900/20">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/8 bg-white/[0.03]">
          <ClipboardCheck
            size={42}
            strokeWidth={1.4}
            className="text-violet-400"
          />

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Workflow
          </p>
        </div>

        <div className="absolute h-52 w-52 rounded-full border border-violet-400/5" />
      </div>
    );
  }

  if (projectId === "student-management") {
    return (
      <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/30 shadow-2xl shadow-violet-900/20">
        <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-white/8 bg-white/[0.03]">
          <GraduationCap
            size={42}
            strokeWidth={1.4}
            className="text-violet-400"
          />

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-violet-300">
            EduManage
          </p>
        </div>

        <div className="absolute h-52 w-52 rounded-full border border-violet-400/5" />
      </div>
    );
  }

  return (
    <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-violet-400/15 bg-black/30">
      <Layers3 size={42} strokeWidth={1.3} className="text-violet-400" />
    </div>
  );
}

/* =========================================================
   CASE STUDY MODAL
========================================================= */

function CaseStudyModal({ project, onClose }) {
  const gallery =
    project.images?.length > 0
      ? project.images
      : project.coverImage
        ? [project.coverImage]
        : [];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6"
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
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0c10] shadow-2xl shadow-black/60"
      >
        {/* =================================================
            MODAL HEADER
        ================================================== */}

        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/6 bg-[#0b0c10]/95 px-5 py-4 backdrop-blur-xl sm:px-8 sm:py-5">
          <div className="min-w-0 pr-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              Case Study
            </p>

            <h3 className="mt-1 truncate text-xl font-bold text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        {/* =================================================
            MODAL CONTENT
        ================================================== */}

        <div className="p-5 sm:p-8">
          {/* =================================================
              PROJECT IMAGE GALLERY
          ================================================== */}

          {gallery.length > 0 && (
            <div className="mb-8">
              {/* Main Image */}

              <div className="group/gallery relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <div className="absolute left-4 top-4 z-10 rounded-lg border border-white/10 bg-black/55 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md">
                  Project Showcase
                </div>

                <motion.img
                  key={gallery[activeImage]}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  src={gallery[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="max-h-[520px] w-full object-contain"
                />

                {/* Image Gradient */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Image Counter */}

                {gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 rounded-lg border border-white/10 bg-black/55 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                    {activeImage + 1} / {gallery.length}
                  </div>
                )}
              </div>

              {/* =================================================
                  THUMBNAILS
              ================================================== */}

              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                  {gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative aspect-video overflow-hidden rounded-xl border transition-all duration-300 ${
                        activeImage === index
                          ? "border-violet-400/60 ring-2 ring-violet-500/20"
                          : "border-white/8 opacity-60 hover:border-white/20 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* =================================================
              INTRO
          ================================================== */}

          <div className="rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10">
                <ProjectVisualIcon projectId={project.id} />
              </div>

              <div className="min-w-0">
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

          {/* =================================================
              OBJECTIVE
          ================================================== */}

          <CaseStudySection icon={Target} title="Project Objective">
            <p>{project.objective}</p>
          </CaseStudySection>

          {/* =================================================
              KEY FEATURES
          ================================================== */}

          <CaseStudySection icon={Lightbulb} title="Key Features">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features?.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.02] p-4 transition-colors hover:border-violet-400/10 hover:bg-violet-500/[0.025]"
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

          {/* =================================================
              TECHNOLOGY STACK
          ================================================== */}

          <CaseStudySection icon={Code2} title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-violet-400/10 bg-violet-500/[0.05] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/20 hover:bg-violet-500/10"
                >
                  {technology}
                </span>
              ))}
            </div>
          </CaseStudySection>

          {/* =================================================
              HIGHLIGHTS
          ================================================== */}

          <CaseStudySection icon={Sparkles} title="Project Highlights">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.highlights?.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] p-4"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400 shadow-lg shadow-violet-500/30" />

                  <span className="text-sm text-zinc-400">{highlight}</span>
                </div>
              ))}
            </div>
          </CaseStudySection>

          {/* =================================================
              CONTRIBUTION
          ================================================== */}

          <CaseStudySection icon={Sparkles} title="My Contribution">
            <p>{project.contribution}</p>
          </CaseStudySection>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                Project ID
              </p>

              <p className="mt-1 font-mono text-xs text-zinc-500">
                {project.id}
              </p>
            </div>

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
   PROJECT VISUAL ICON
========================================================= */

function ProjectVisualIcon({ projectId }) {
  if (projectId === "voice2sign") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Sparkles size={24} strokeWidth={1.4} className="text-violet-400" />
      </div>
    );
  }

  if (projectId === "rilax-tiles") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Layers3 size={24} strokeWidth={1.3} className="text-violet-400" />
      </div>
    );
  }

  if (projectId === "task-management") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <ClipboardCheck
          size={24}
          strokeWidth={1.4}
          className="text-violet-400"
        />
      </div>
    );
  }

  if (projectId === "student-management") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <GraduationCap
          size={24}
          strokeWidth={1.4}
          className="text-violet-400"
        />
      </div>
    );
  }

  if (projectId === "weather-app") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <CloudSun size={24} strokeWidth={1.4} className="text-violet-400" />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Layers3 size={24} strokeWidth={1.3} className="text-violet-400" />
    </div>
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
