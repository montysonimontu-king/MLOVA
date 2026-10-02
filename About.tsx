import { Check } from 'lucide-react';

const stats = [
  { value: '69K+', label: 'Pack Members' },
  { value: '1M+', label: 'Bananas Peelled' },
  { value: '420', label: 'Doge Memes' },
  { value: '100%', label: 'Good Boys' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] border-4 border-cocoa-800 bg-white p-4 shadow-xl">
              <img
                src="https://images.pexels.com/photos/13062502/pexels-photo-13062502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Adorable Shiba Inu with tongue out"
                className="h-[440px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 animate-float rounded-2xl border-4 border-cocoa-800 bg-banana-400 px-5 py-4 text-center shadow-lg">
              <p className="text-4xl font-bold text-cocoa-900 font-display">🍌</p>
              <p className="text-xs font-bold text-cocoa-700">organic meme</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-banana-600">
              What is Banadoge?
            </p>
            <h2 className="text-4xl font-bold leading-tight text-cocoa-900 sm:text-5xl">
              A banana. A doge. <br />
              <span className="text-banana-500">Together at last.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cocoa-600">
              Banadoge was born from a simple question: what if you put a banana on a doge?
              The answer changed everything. We are a community-first brand celebrating the
              joyful absurdity of internet culture — one peel, one wag, one wow at a time.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Community-driven — every decision voted on by the pack',
                'Charity-first — 10% of all proceeds go to dog shelters',
                '100% organic memes — no artificial flavors, ever',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-banana-400 text-cocoa-900">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-cocoa-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border-2 border-cocoa-200 bg-white p-4 text-center shadow-sm transition-all hover:scale-105 hover:border-banana-400 hover:shadow-md"
                >
                  <p className="text-2xl font-bold text-banana-600 font-display sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-cocoa-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
