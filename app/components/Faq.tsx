const faqs = [
  {
    question: "What types of projects do you take?",
    answer:
      "I focus on full-stack products, internal tools, and workflow automation—especially where reliability, performance, and clean UX matter.",
  },
  {
    question: "What is your typical timeline?",
    answer:
      "MVPs usually take 2–6 weeks depending on scope. I provide a clear milestone plan after a short discovery call.",
  },
  {
    question: "Do you work under NDA?",
    answer:
      "Yes. I regularly work on internal tools and confidential systems, and can sign an NDA before we start.",
  },
  {
    question: "How do you price projects?",
    answer:
      "Fixed-scope for MVPs, monthly retainers for ongoing work, or time & materials for R&D-heavy builds.",
  },
  {
    question: "What time zone do you work in?",
    answer:
      "Bangkok (ICT, UTC+7). I keep overlap hours with clients in Asia, Europe, and US mornings.",
  },
  {
    question: "What do you need to get started?",
    answer:
      "A short brief, access to key stakeholders, and your success metrics. I handle the rest.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="bg-white text-black py-24 border-t border-neutral-200 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
    >
      <div className="px-8 md:px-20 mb-12">
        <h2 className="text-[6vw] leading-[0.9] font-bold uppercase tracking-tighter mb-6">
          FAQs
        </h2>
        <p className="text-sm uppercase tracking-widest opacity-60 max-w-2xl">
          Clear answers, less back-and-forth.
        </p>
        <div className="w-full h-px bg-neutral-200 mt-8" />
      </div>

      <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border border-neutral-200 p-8 md:p-10 hover:bg-[#A3AEFF] transition-colors duration-500"
          >
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-4">
              {faq.question}
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
