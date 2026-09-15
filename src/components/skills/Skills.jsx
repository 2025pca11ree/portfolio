import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
} from "lucide-react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLaravel,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPytorch,
  SiOpencv,
  SiPostman,
} from "react-icons/si";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { fadeUp, staggerContainer } from "../../utils/animations";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    icon: Code2,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side application logic.",
    icon: Server,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: FaLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    title: "Databases",
    description: "Working with relational and NoSQL database systems.",
    icon: Database,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Practical AI and computer vision tools used in projects.",
    icon: BrainCircuit,
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "MediaPipe", icon: BrainCircuit },
      { name: "Computer Vision", icon: BrainCircuit },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools used for development, testing and version control.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: Code2 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/5 bg-[#07080a] py-28 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-80 w-80 rounded-full bg-indigo-600/7 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I use to build modern applications."
          description="A practical technology stack covering frontend development, backend development, databases, AI and development tools."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-5 lg:grid-cols-2"
        >
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                className={`group rounded-3xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-7 ${
                  index === skillGroups.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/10">
                    <GroupIcon
                      size={22}
                      className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group/skill inline-flex items-center gap-2.5 rounded-xl border border-white/7 bg-white/[0.025] px-3.5 py-2.5 text-sm text-zinc-300 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/8 hover:text-white"
                      >
                        <SkillIcon
                          size={17}
                          className="text-zinc-500 transition-all duration-300 group-hover/skill:text-violet-400"
                        />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-indigo-500/[0.06] p-7 sm:p-9"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <GitBranch size={19} className="text-violet-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  My Approach
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Learn. Build. Improve.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                I learn by building practical projects and improving my
                understanding of frontend development, APIs, databases and
                AI-based features.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              <div className="rounded-2xl border border-white/7 bg-black/20 px-4 py-4 text-center">
                <div className="text-xl font-bold text-white">5</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">
                  Areas
                </div>
              </div>

              <div className="rounded-2xl border border-white/7 bg-black/20 px-4 py-4 text-center">
                <div className="text-xl font-bold text-white">20+</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">
                  Skills
                </div>
              </div>

              <div className="rounded-2xl border border-white/7 bg-black/20 px-4 py-4 text-center">
                <div className="text-xl font-bold text-white">4</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-600">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Skills;
