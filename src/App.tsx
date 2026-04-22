import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Stats } from './components/Stats';
import { LatestWork } from './components/LatestWork';
import { Services } from './components/Services';
import { CTA } from './components/CTA';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';

function App() {

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-muted selection:text-foreground">
      <Header />
      <main className="flex flex-col">
        {/* Shared Wrapper for Hero and LogoTicker to blend sections */}
        <div className="relative w-full overflow-hidden">
          {/* Continuous Grid Background - Centered spotlight effect */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_75%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.04] dark:opacity-[0.05] pointer-events-none"></div>

          <Hero />
        </div>
        <LogoTicker />

        <Stats />
        <LatestWork />
        <Services />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;