const items = [
  '🍌 BANANA',
  '🐶 DOGE',
  '🦴 MUCH WOW',
  '💛 VERY GOOFY',
  '✨ SO PEEL',
  '🐕 TAIL WAG',
  '🍌 BANADOG',
  '🤗 HAPPY PACK',
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-4 border-cocoa-800 bg-cocoa-800 py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 text-xl font-bold tracking-wide text-banana-300 font-display sm:text-2xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
