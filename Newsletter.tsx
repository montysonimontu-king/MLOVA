import { useState } from 'react';
import { Mail, CheckCircle2, PartyPopper } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email, much wow.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="join" className="relative overflow-hidden bg-banana-400 py-24">
      {/* Decorative floating emojis */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <span className="absolute left-[10%] top-[20%] text-5xl animate-float">🍌</span>
        <span className="absolute right-[12%] top-[15%] text-4xl animate-float-slow">🐶</span>
        <span className="absolute right-[8%] bottom-[20%] text-3xl animate-float">🦴</span>
        <span className="absolute left-[18%] bottom-[15%] text-4xl animate-float-slow">✨</span>
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-5 py-2 text-sm font-bold text-banana-200">
          <PartyPopper className="h-4 w-4" />
          Join the Pack
        </div>

        <h2 className="text-4xl font-bold text-cocoa-900 sm:text-5xl">
          Get Your Daily Banana
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-cocoa-700">
          Sign up for the Banadoge newsletter. Memes, merch drops, and shelter updates —
          straight to your inbox. No spam, only wags.
        </p>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-4 animate-pop-in">
            <CheckCircle2 className="h-16 w-16 text-cocoa-800" strokeWidth={2.5} />
            <p className="text-2xl font-bold text-cocoa-900">
              Much wow! You are in the pack!
            </p>
            <p className="text-cocoa-600">Check your inbox for a banana surprise. 🍌</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cocoa-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border-2 border-cocoa-300 bg-white py-4 pl-12 pr-4 text-cocoa-800 font-semibold outline-none transition-all placeholder:text-cocoa-400 focus:border-cocoa-800 focus:ring-4 focus:ring-cocoa-800/20"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-cocoa-800 px-8 py-4 font-bold text-banana-100 shadow-lg transition-all hover:scale-105 hover:bg-cocoa-900 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-sm font-semibold text-red-700">{error}</p>
        )}

        <p className="mt-6 text-xs font-semibold text-cocoa-600">
          By subscribing you agree to receive banana-themed emails. Unsubscribe anytime. No dogs were harmed.
        </p>
      </div>
    </section>
  );
}
