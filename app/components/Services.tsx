"use client";
import { useRef } from "react";
// Kept imports for future animation potential
import { useScroll, useTransform, motion } from "framer-motion";

const services = [
  // --- ROW 1: ARCHITECTURE & PLATFORMS ---
  {
    title: "Polyglot Backend Architecture",
    description:
      "I design service architectures that use the right language for each job, with clean boundaries, strong contracts, and future-proof scaling. From monoliths to microservices, the system stays coherent.",
    tags: ["System Design", "API Contracts", "PHP/Java/Node", "Scalability"],
  },
  {
    title: "Universal App Ecosystems",
    description:
      "Stop building twice. I engineer unified, offline-first applications that deploy simultaneously to Web, iOS, and Android from a single codebase without compromising native performance.",
    tags: ["React Native/Expo", "Offline-First", "Unified Codebase", "Sync"],
  },

  // --- ROW 2: DELIVERY & RELIABILITY ---
  {
    title: "Velociraptor MVPs",
    description:
      "Speed as a service. Leveraging AI-assisted coding and robust boilerplates to launch fully scalable, secure SaaS products in days, not months. Zero technical debt.",
    tags: ["Rapid Deployment", "Supabase", "Next.js", "AI Workflows"],
  },
  {
    title: "Performance & Reliability Engineering",
    description:
      "I make apps fast and stable end to end: profiling hot paths, tuning databases, tightening caches, and wiring SLOs so performance stays predictable under real load.",
    tags: ["Profiling", "Caching", "DB Tuning", "SLOs"],
  },

  // --- ROW 3: FULL-STACK EXECUTION ---
  {
    title: "Full-Stack Feature Delivery",
    description:
      "From UI to API to database, I ship cohesive features that feel polished on every layer. Frontend, backend, and devops move in lockstep to deliver value fast.",
    tags: ["React/Vue/Svelte", "REST/GraphQL", "Postgres", "CI/CD"],
  },
  {
    title: "Platform Integrations & Automation",
    description:
      "I connect products to the tools they depend on: auth, payments, CRMs, and internal systems. Solid integrations with observability, retries, and secure data flows.",
    tags: ["OAuth", "Webhooks", "Queues", "Payments"],
  },

  // --- ROW 4: MIGRATION & COMMERCE (NEW) ---
  {
    title: "Legacy Modernization",
    description:
      "I don't just patch; I transform. I use specialized AI agents to map, refactor, and migrate your decaying monolithic legacy code into scalable, modern microservices.",
    tags: ["AI Refactoring", "Migration Strategy", "Cloud Native", "Docker"],
  },
  {
    title: "Global Fintech Architecture",
    description:
      "Programmable money. I implement complex payment flows, subscription models, and crypto/fiat bridges that handle multi-currency compliance and automated taxation.",
    tags: ["Stripe Connect", "Solidity/Web3", "LemonSqueezy", "Fintech"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white text-black py-20 border-t border-neutral-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
    >
      {/* Section Header */}
      <div className="px-8 md:px-20 mb-12">
        <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter mb-8">
          Full-Spectrum <br /> Engineering
        </h2>
        <div className="w-full h-px bg-neutral-200" />
      </div>

      {/* Services Grid - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-200">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: any; index: number }) {
  // Border logic for grid (removing double borders)
  const isRightColumn = (index + 1) % 2 === 0;

  return (
    <div
      className={`
      group relative min-h-[300px] md:min-h-[400px] flex flex-col justify-between p-8 md:p-12 border-neutral-200
      border-t ${isRightColumn ? "md:border-l" : ""} 
      hover:bg-[#A3AEFF] transition-colors duration-500 ease-in-out cursor-default
    `}
    >
      {/* Icon / Top Marker */}
      <div className="flex justify-between items-start">
        <div className="text-4xl font-light group-hover:rotate-90 transition-transform duration-500">
          ✶
        </div>
        <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          0{index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 group-hover:-translate-y-2.5 transition-transform duration-500">
          {service.title}
        </h3>

        {/* Smooth Slide Down Animation */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-[300px] transition-[max-height] duration-500 ease-in-out">
          <p className="text-lg font-medium leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pb-2">
            {service.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 border border-black rounded-full text-xs uppercase tracking-widest bg-transparent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
