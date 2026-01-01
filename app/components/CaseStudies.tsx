const caseStudies = [
  {
    title: "Financial Clearance Workflow",
    problem:
      "Finance teams spent hours chasing documents, with no real-time visibility.",
    impact: [
      "-80% manual follow-up time",
      "95% signatures within 7 days",
      "100% completion for all transactions",
    ],
    stack: ["Next.js", "React Native (EXPO)", "Supabase", "Notion API"],
  },
  {
    title: "Supply Chain Command Center",
    problem:
      "Fragmented tools and spreadsheets caused data conflicts and slow approvals.",
    impact: [
      "Reclaim 60–70% admin time",
      "Multi-currency ops (USD, THB, CNY, MMK)",
      "Real-time budget vs. actual visibility",
    ],
    stack: ["Next.js", "Supabase", "RBAC"],
  },
  {
    title: "Freelancing & Hiring Platform",
    problem:
      "Clients struggled to find the right freelancers without knowing exact roles.",
    impact: ["-55% time-to-shortlist", "+38% search-to-match conversion"],
    stack: ["Next.js", "Java", "Spring Boot", "Supabase"],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-white text-black py-24 border-t border-neutral-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
    >
      <div className="px-8 md:px-20 mb-12">
        <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter mb-6">
          Case Studies <br /> (Anonymized)
        </h2>
        <div className="w-full h-px bg-neutral-200 mt-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
        {caseStudies.map((item) => (
          <div
            key={item.title}
            className="border border-neutral-200 bg-white p-8 md:p-10 hover:bg-[#A3AEFF] transition-colors duration-500"
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
                {item.title}
              </h3>
              <span className="text-xs uppercase tracking-widest opacity-60">
                Internal Tool
              </span>
            </div>

            <p className="mt-6 text-lg font-medium leading-relaxed max-w-xl">
              {item.problem}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-3">
                Impact
              </p>
              <div className="flex flex-wrap gap-3">
                {item.impact.map((impact) => (
                  <span
                    key={impact}
                    className="px-3 py-1 border border-black rounded-full text-xs uppercase tracking-widest bg-transparent"
                  >
                    {impact}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-black rounded-full text-xs uppercase tracking-widest bg-transparent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
