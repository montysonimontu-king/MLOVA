import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Roadmap from '@/components/Roadmap';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-banana-50 font-body text-cocoa-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Gallery />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}
