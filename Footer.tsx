import { Heart } from 'lucide-react';

const socials = [
  { label: 'Twitter', href: '#', icon: '🐦' },
  { label: 'Discord', href: '#', icon: '💬' },
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'TikTok', href: '#', icon: '🎵' },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Join', href: '#join' },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-banana-600 bg-cocoa-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-banana-100 font-display">
              <span className="text-3xl">🍌🐶</span>
              BANADOGE
            </div>
            <p className="mt-4 max-w-xs text-cocoa-300">
              Much banana. Very doge. Wow. The internet's goofiest brand, spreading joy one peel at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-cocoa-700 text-xl transition-all hover:scale-110 hover:bg-banana-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-banana-400">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cocoa-300 transition-colors hover:text-banana-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-banana-400">
              Our Mission
            </h4>
            <p className="mt-4 text-cocoa-300">
              10% of all Banadoge proceeds go to dog shelters worldwide. Every purchase helps a good boy find a forever home.
            </p>
            <div className="mt-6 rounded-2xl border border-banana-600/30 bg-cocoa-800 p-4">
              <p className="text-3xl font-bold text-banana-400 font-display">$42,069</p>
              <p className="text-sm text-cocoa-300">donated to shelters so far</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cocoa-700 pt-8 sm:flex-row">
          <p className="text-sm text-cocoa-400">
            © 2026 Banadoge. All wags reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-cocoa-400">
            Made with <Heart className="h-4 w-4 fill-banana-400 text-banana-400" /> and bananas
          </p>
        </div>
      </div>
    </footer>
  );
}
