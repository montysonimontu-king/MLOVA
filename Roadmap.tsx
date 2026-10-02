const phases = [
  {
    phase: 'Phase 1',
    title: 'The Peel',
    status: 'Complete',
    description: 'Launch the Banadoge brand, website, and community Discord. 69K members joined in week one.',
    emoji: '🍌',
    done: true,
  },
  {
    phase: 'Phase 2',
    title: 'The Wag',
    status: 'In Progress',
    description: 'Release the first Banadoge merch line — banana-doge tees, hoodies, and enamel pins.',
    emoji: '👕',
    done: false,
  },
  {
    phase: 'Phase 3',
    title: 'The Howl',
    status: 'Coming Soon',
    description: 'Launch Banadoge NFT collection with 10,000 unique banana-doge hybrids. Adopt your own.',
    emoji: '🎨',
    done: false,
  },
  {
    phase: 'Phase 4',
    title: 'The Forever Home',
    status: 'Planned',
    description: 'Open the first Banadoge Dog Shelter — fully funded by the community. Every dog gets a banana.',
    emoji: '🏠',
    done: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden bg-cocoa-800 py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[5%] top-[10%] text-6xl opacity-10">🍌</span>
        <span className="absolute right-[8%] top-[30%] text-5xl opacity-10">🐶</span>
        <span className="absolute left-[15%] bottom-[15%] text-4xl opacity-10">🦴</span>
        <span className="absolute right-[20%] bottom-[20%] text-5xl opacity-10">🍌</span>
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-banana-400">
            The Roadmap
          </p>
          <h2 className="text-4xl font-bold text-banana-100 sm:text-5xl">
            Much Plan. <span className="text-banana-400">Very Future.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa-200">
            From peel to forever home — here is where Banadoge is heading.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-banana-600/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((p, i) => (
              <div
                key={p.phase}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-cocoa-800 bg-banana-400 text-2xl shadow-lg md:left-1/2">
                  {p.emoji}
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="rounded-2xl border-2 border-banana-600/30 bg-cocoa-700 p-6 shadow-lg transition-all hover:border-banana-400 hover:shadow-xl">
                    <div className={`flex items-center gap-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="rounded-full bg-banana-400 px-3 py-1 text-xs font-bold text-cocoa-900">
                        {p.phase}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          p.done
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-banana-400/20 text-banana-300'
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-banana-100 font-display">{p.title}</h3>
                    <p className="mt-2 text-cocoa-200">{p.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
