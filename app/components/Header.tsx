import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 mix-blend-difference text-white">
      <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
        Thu Min
      </Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <Link href="/#services" className="hover:underline">
          Services
        </Link>
        <Link href="/#case-studies" className="hover:underline">
          Case Studies
        </Link>
        <Link href="/#process" className="hover:underline">
          How I Work
        </Link>
        <Link href="/#faq" className="hover:underline">
          FAQs
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
