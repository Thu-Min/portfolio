const skills = [
  "RESTFUL API",
  "NEXT.JS",
  "BACKEND",
  "CREATIVE",
  "PERFORMANCE",
  "UX-LED",
];

export default function SkillMarquee() {
  return (
    <section className="w-full border-t border-b border-black/10 bg-white py-8 overflow-hidden relative">
      <div className="flex w-max gap-10 whitespace-nowrap animate-marquee px-5">
        {skills.map((skill) => (
          <span
            key={`skill-${skill}-primary`}
            className="text-[4vw] font-bold uppercase tracking-tighter text-black/20"
          >
            {skill} —
          </span>
        ))}
      </div>

      <div
        className="flex w-max gap-10 whitespace-nowrap animate-marquee px-5 absolute top-0 left-0"
        aria-hidden="true"
        style={{ animationDelay: "-12.5s" }}
      >
        {skills.map((skill) => (
          <span
            key={`skill-${skill}-secondary`}
            className="text-[4vw] font-bold uppercase tracking-tighter text-black/20"
          >
            {skill} —
          </span>
        ))}
      </div>
    </section>
  );
}
