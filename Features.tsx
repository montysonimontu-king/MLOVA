import { Heart, Users, Gift, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Much Love',
    description: 'Every Banadoge product is crafted with pure good-boy energy. No bad vibes, only wags and peels.',
    color: 'bg-banana-400',
  },
  {
    icon: Users,
    title: 'Very Community',
    description: 'Join 69K+ fellow banana-doge enthusiasts. Vote on designs, events, and which shelter we support next.',
    color: 'bg-cocoa-300',
  },
  {
    icon: Gift,
    title: 'Such Rewards',
    description: 'Earn banana points for being active. Redeem them for exclusive merch, NFTs, and real dog treats.',
    color: 'bg-banana-300',
  },
  {
    icon: Shield,
    title: 'Wow Safe',
    description: 'We give 10% of every purchase to dog shelters worldwide. Your banana habit helps real pups.',
    color: 'bg-cocoa-200',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-banana-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-banana-600">
            Why Banadoge
          </p>
          <h2 className="text-4xl font-bold text-cocoa-900 sm:text-5xl">
            Such Features. <span className="text-banana-500">Very Wow.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cocoa-600">
            We are not just a meme. We are a movement. Here is what makes the pack tick.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-3xl border-2 border-cocoa-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cocoa-800 hover:shadow-xl"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${f.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                <f.icon className="h-8 w-8 text-cocoa-900" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-cocoa-900">{f.title}</h3>
              <p className="mt-3 text-cocoa-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
