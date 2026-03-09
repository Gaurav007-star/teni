import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

// No need to register useGSAP here

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // We use a single timeline to orchestrate everything
    tl.from(".hero-badge", {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 1,
    })
      .from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
      }, "-=0.6") // Overlap by 0.6s
      .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "-=0.8")
      .from(".hero-btns", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-screen pt-20 flex flex-col justify-center bg-transparent">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 flex flex-col items-center text-center mt-12 md:mt-0">

        {/* Removed animate-in fade-in zoom-in classes */}
        <div className="hero-badge inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full py-1.5 px-2 pr-4 text-sm mb-12 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <div className="bg-secondary border border-border rounded-full px-3 py-1 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-semibold text-foreground text-xs">Available for 24/7</span>
          </div>
          <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 group">
            Explore our services
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Removed slide-in-from-bottom-4 duration-700 fade-in fill-mode-backwards */}
        <h1 className="hero-title text-6xl md:text-8xl font-medium tracking-tighter text-foreground mb-8 max-w-5xl leading-[0.95]">
          {/* Unlock <span className="text-primary">Digital</span> <br className="hidden md:block" /> Potential */}
          Planning <span className="text-primary">Developing</span> <br className="hidden md:block" /> Marketing
        </h1>

        {/* Removed animate-in slide-in-from-bottom-5 etc. */}
        <p className="hero-desc text-lg md:text-xl text-muted-foreground max-w-3xl mb-12">
          We are a digital solutions company offering Digital Marketing, Branding, Packaging, Creative Design, Web Development, Web Applications, and SEO. We help businesses grow and improve their online presence.
        </p>

        <div className="hero-btns flex items-center gap-6">
          <Button variant={'outline'} size={"lg"}>
            Learn more
          </Button>
          <Button size={"lg"} className='shadow-[0px_0px_40px_-5px_#9b5de0] transition-all duration-300 hover:scale-105'>
            Free Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};