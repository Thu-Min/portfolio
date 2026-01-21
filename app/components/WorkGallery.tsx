"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    name: "SaaS Ops Console",
    category: "Internal Platform",
    src: "/projects/saas_ops_console_vertical.png",
    speed: -100,
    details: {
      summary:
        "Operations console that centralizes approvals, workflows, and reporting for SaaS teams.",
      highlights: [
        "RBAC-driven access and approval flows",
        "Workflow state machine with audit-friendly activity trails",
        "Configurable modules for onboarding, billing, and ops",
        "Real-time dashboards with operational KPIs",
      ],
      stack: ["Next.js", "TypeScript", "Postgres", "Nest.js", "RBAC"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Thu-Min/saas-ops-console",
        },
      ],
    },
  },
  {
    name: "Coming Soon",
    category: "Static Web",
    src: "/",
    speed: 50,
  },
];

export default function WorkGallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      id="work"
      ref={container}
      className="min-h-[150vh] bg-black text-white py-24 relative z-20 rounded-t-[40px] mt-10"
    >
      <div className="px-8 md:px-20 mb-32 flex justify-between items-end">
        <h2 className="text-[8vw] uppercase font-bold tracking-tighter leading-none">
          Selected <br /> Works
        </h2>
        <p className="hidden md:block text-sm uppercase tracking-widest mb-4 opacity-70">
          Backend & Frontend
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-32 px-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            container={container}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, container, index }: any) {
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Parallax logic
  const y = useTransform(scrollYProgress, [0, 1], [0, project.speed]);
  const hasDetails =
    project.details &&
    (project.details.summary ||
      project.details.highlights?.length ||
      project.details.stack?.length ||
      project.details.links?.length);

  return (
    <motion.div
      style={{ y }}
      className={`relative w-full md:w-[35vw] aspect-3/4 ${
        index % 2 === 0 ? "mt-0" : "md:mt-40"
      }`}
    >
      <div className="w-full h-full relative overflow-hidden group rounded-sm bg-neutral-900">
        {/* Image would go here */}
        <Image
          fill
          src={project.src}
          alt={project.name}
          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-8 left-8 z-10 text-white mix-blend-difference">
          <p className="text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {project.category}
          </p>
          <h3 className="text-4xl font-bold uppercase tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {project.name}
          </h3>
        </div>

        {hasDetails ? (
          <div className="absolute inset-0 z-20 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
              {project.details?.summary ? (
                <p className="text-sm md:text-base font-medium leading-relaxed mb-5">
                  {project.details.summary}
                </p>
              ) : null}

              {project.details?.highlights?.length ? (
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                    Highlights
                  </p>
                  <ul className="text-sm leading-relaxed space-y-1">
                    {project.details.highlights.map((item: string) => (
                      <li key={item} className="opacity-90">
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.details?.stack?.length ? (
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-white/30 rounded-full text-xs uppercase tracking-widest bg-transparent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.details?.links?.length ? (
                <div className="flex flex-wrap gap-4">
                  {project.details.links.map(
                    (link: { label: string; href: string }) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs uppercase tracking-widest border-b border-white/50 hover:border-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center">
            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white">
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
