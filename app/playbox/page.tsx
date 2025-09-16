// app/playbox/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innogyan Playbox - Spark Creativity Early',
  description: 'Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.',
};

export default function PlayboxPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Spark Creativity Early — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">One Box at a Time.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.
          </p>

          <div className="bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-cyan-400 text-2xl font-bold mb-4">Start Their Playbox Journey</h3>
            <div className="text-cyan-400 text-3xl font-bold mb-6">₹1,999/month</div>
            <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-full font-semibold text-lg w-full mb-4 hover:scale-105 transition-all">
              Subscribe Now
            </button>
            <ul className="text-sm text-white/80 space-y-2">
              <li>✦ Surprise box delivered every 15 days</li>
              <li>✦ Screen-free, hands-on projects</li>
              <li>✦ Cancel anytime</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">How It Works</h2>
        <p className="text-xl">Interactive sections coming soon...</p>
      </section>

      <section className="py-20 text-center bg-black/20">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">What Your Child Builds</h2>
        <p className="text-xl">Amazing projects showcase coming soon...</p>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Safety First</h2>
        <p className="text-xl">Safety features coming soon...</p>
      </section>
    </main>
  );
}
