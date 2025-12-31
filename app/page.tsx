import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f0f0f0] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
      <Hero />
      <div className="h-[10vh]" />

      <div className="w-full py-8 overflow-hidden border-t border-b border-black/10 bg-white flex whitespace-nowrap bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
        {/* CONTAINER 1: Original Content */}
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 px-5">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[4vw] font-bold uppercase tracking-tighter text-black/20"
            >
              FULLSTACK - NODE.JS - REACT.JS - NEXT.JS - TYPESCRIPT - RESTFUL
              API - NEST.JS - PHP - LARAVEL - MYSQL - POSTGRES SQL - SUPABASE -
              AWS - DOCKER -
            </span>
          ))}
        </div>

        {/* CONTAINER 2: Duplicate Content (Required for the loop) */}
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 px-5">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[4vw] font-bold uppercase tracking-tighter text-black/20"
            >
              FULLSTACK - NODE.JS - REACT.JS - NEXT.JS - TYPESCRIPT - RESTFUL
              API - NEST.JS - PHP - LARAVEL - MYSQL - POSTGRES SQL - SUPABASE -
              AWS - DOCKER -
            </span>
          ))}
        </div>
      </div>

      <Services />

      <About />

      <WorkGallery />

      <footer className="bg-black text-white flex flex-col justify-between p-8 md:p-20 relative -mt-10 pt-32 rounded-t-[40px]">
        <div className="flex justify-between uppercase tracking-widest text-sm opacity-40 mt-20">
          <p>Bangkok, Thailand</p>
          <p>© 2025 Thu Min</p>
        </div>
      </footer>
    </main>
  );
}
