import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Model from '@/components/Model';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Hero Section - Full screen video introduction */}
      <section id="home">
        <Hero />
      </section>

      {/* Highlights Section - Video carousel showcasing key features */}
      <section id="highlights" className="w-full">
        <Highlights />
      </section>

      {/* Model Section - Interactive 3D iPhone showcase */}
      <section id="model" className="w-full">
        <Model />
      </section>

      {/* Features Section - Detailed product features */}
      <section id="features" className="w-full">
        <Features />
      </section>

      {/* How It Works Section - Technical specifications and capabilities */}
      <section id="how-it-works" className="w-full">
        <HowItWorks />
      </section>

      {/* Footer Section - Links and company information */}
      <Footer />
    </main>
  );
}
