const steps = [
  {
    title: "Discovery",
    detail:
      "We map the problem, constraints, and success metrics. You get a clear scope before any build starts.",
  },
  {
    title: "Prototype",
    detail:
      "I validate the approach with a lean prototype or system design spec to de-risk the build.",
  },
  {
    title: "Build",
    detail:
      "Weekly progress, tight feedback loops, and clean, testable code that scales with your team.",
  },
  {
    title: "Launch",
    detail:
      "Deployment, monitoring, and documentation so the project ships with confidence.",
  },
  {
    title: "Support",
    detail:
      "Post-launch fixes, performance tuning, and iterative improvements based on real usage.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black text-white py-24 border-t border-neutral-900"
    >
      <div className="px-8 md:px-20 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter">
          How I Work
        </h2>
        <p className="text-sm uppercase tracking-widest opacity-60 max-w-md">
          Transparent cadence, ruthless clarity, zero surprises.
        </p>
      </div>

      <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="border border-neutral-800 p-6 md:p-8 hover:bg-white hover:text-black transition-colors duration-500"
          >
            <p className="text-xs uppercase tracking-widest opacity-60 mb-4">
              0{index + 1}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">
              {step.title}
            </h3>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
