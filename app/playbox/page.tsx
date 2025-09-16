// app/playbox/page.tsx
import { Metadata } from 'next';
import PlayboxHero from '@/components/sections/playbox/PlayboxHero';
import HowItWorksSection from '@/components/sections/playbox/HowItWorksSection';
import BuildsSection from '@/components/sections/playbox/BuildsSection';
import PeekInsideSection from '@/components/sections/playbox/PeekInsideSection';
import IndependentPlaySection from '@/components/sections/playbox/IndependentPlaySection';
import BuildSkillsPlaybox from '@/components/sections/playbox/BuildSkillsPlaybox';
import LifetimeSkillsCarousel from '@/components/sections/playbox/LifetimeSkillsCarousel';
import SafetySection from '@/components/sections/playbox/SafetySection';
import ParticleSystem from '@/components/playbox/ParticleSystem';

export const metadata: Metadata = {
  title: 'Innogyan Playbox - Spark Creativity Early',
  description: 'Hands-on science and innovation kits delivered home every 15 days — turning kids into confident young creators.',
};

export default function PlayboxPage() {
  return (
    <>
      <ParticleSystem />
      <main className="overflow-x-hidden bg-black">
        <PlayboxHero />
        <HowItWorksSection />
        <BuildsSection />
        <PeekInsideSection />
        <IndependentPlaySection />
        <LifetimeSkillsCarousel />
        <BuildSkillsPlaybox />
        <SafetySection />
      </main>
    </>
  );
}
