import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-banana-300 opacity-50 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cocoa-200 opacity-40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-banana-200 opacity-60 blur-3xl" />
      </div>

      {/* Floating emojis */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <span className="absolute left-[8%] top-[25%] text-5xl animate-float-slow">🍌</span>
        <span className="absolute right-[12%] top-[20%] text-4xl animate-float">🐶</span>
        <span className="absolute left-[15%] bottom-[18%] text-3xl animate-float">🦴</span>
        <span className="absolute right-[8%] bottom-[25%] text-5xl animate-float-slow">🍌</span>
        <span className="absolute left-[45%] top-[12%] text-2xl animate-float">✨</span>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2">
        {/* Left content */}
        <div className="animate-pop-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-4 py-2 text-sm font-bold text-banana-200">
            <Sparkles className="h-4 w-4" />
            The #1 Banana-Doge Brand in the Universe
          </div>

          <h1 className="text-6xl font-bold leading-[1.05] text-cocoa-900 sm:text-7xl lg:text-8xl">
            Much Banana.
            <br />
            <span className="text-banana-500 text-stroke-cocoa">Very Doge.</span>
            <br />
            <span className="text-cocoa-700">Wow.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-cocoa-600 sm:text-xl">
            Banadoge is the goofiest, gooiest, most tail-wagging brand on the internet.
            We put a banana on your doge and call it a day. Such simplicity. Very meme.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-full bg-banana-400 px-8 py-4 text-lg font-bold text-cocoa-900 shadow-lg shadow-banana-600/30 transition-all hover:scale-105 hover:bg-banana-300 active:scale-95"
            >
              Join the Pack
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa-300 px-8 py-4 text-lg font-bold text-cocoa-700 transition-all hover:scale-105 hover:border-cocoa-500 hover:bg-cocoa-100 active:scale-95"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {['🐶', '🐕', '🦮', '🐩'].map((e, i) => (
                <div
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-banana-50 bg-banana-200 text-xl shadow-sm"
                >
                  {e}
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-cocoa-600">
              <span className="text-lg font-extrabold text-cocoa-800">69,420+</span>
              <br />
              happy pack members
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 animate-wobble rounded-[3rem] bg-cocoa-800 opacity-20 blur-2xl" />
            <div className="relative rounded-[3rem] border-4 border-cocoa-800 bg-gradient-to-br from-banana-300 via-banana-400 to-banana-500 p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/16730750/pexels-photo-16730750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Happy Shiba Inu"
                className="h-[400px] w-[400px] rounded-[2rem] object-cover shadow-xl"
              />
              <div className="absolute -top-6 -right-6 animate-bounce-fast rounded-2xl bg-cocoa-800 px-5 py-3 text-center shadow-xl">
                <p className="text-3xl font-bold text-banana-300 font-display">WOW</p>
                <p className="text-xs font-semibold text-banana-100">such banana</p>
              </div>
              <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl bg-white px-4 py-3 shadow-xl">
                <p className="text-sm font-bold text-cocoa-800">🍌 + 🐶 = 💛</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 C 240 120, 480 0, 720 40 C 960 80, 1200 120, 1440 60 L 1440 120 L 0 120 Z"
          fill="#fef3c7"
        />
      </svg>
    </section>
  );
}
