import { useEffect, useState } from 'react';
import { Menu, X, Bone } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Join', href: '#join' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-banana-400/95 shadow-lg shadow-banana-600/20 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-cocoa-800 font-display">
          <span className="text-3xl">🍌🐶</span>
          <span className="tracking-tight">BANADOGE</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-cocoa-700 font-semibold transition-colors hover:text-cocoa-900 hover:underline decoration-banana-600 decoration-2 underline-offset-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#join"
          className="hidden items-center gap-2 rounded-full bg-cocoa-800 px-5 py-2.5 font-bold text-banana-100 shadow-md transition-all hover:scale-105 hover:bg-cocoa-900 active:scale-95 md:flex"
        >
          <Bone className="h-4 w-4" />
          Get Started
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-cocoa-800 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 bg-banana-300 px-6 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-bold text-cocoa-800"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-5 py-2.5 font-bold text-banana-100"
            >
              <Bone className="h-4 w-4" />
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
