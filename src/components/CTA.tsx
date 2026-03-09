import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import BackgroundImage from "@/assets/customWhiteBackground.png";
import BackgroundImageDark from "@/assets/customBackground.png";

import { useTheme } from '@/context/ThemeProvider';

gsap.registerPlugin(ScrollTrigger, useGSAP);


export const CTA = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    return (
        <section ref={sectionRef} className="w-full rounded-t-3xl bg-background overflow-hidden relative">
            <div
                ref={contentRef}
                className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6 py-24 md:px-20 md:py-32 text-center isolate group origin-center will-change-transform"
            >

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={theme === 'dark' ? BackgroundImageDark : BackgroundImage}
                        alt="CTA Background"
                        className="w-full h-full object-cover"
                    />
                </div>


                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-10 max-w-5xl mx-auto">

                    {/* Badge */}
                    <div className="cta-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-primary dark:text-white font-medium backdrop-blur-md cursor-default transition-colors ">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 "></span>
                        </span>
                        Available for new projects
                    </div>

                    {/* Heading */}
                    <div className="cta-title text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter drop-shadow-2xl flex flex-col leading-[1] text-primary dark:text-white">
                        <span>Ready to scale your</span>
                        <span className="">brand  <span className="text-light-primary dark:text-primary">vision?</span></span>
                    </div>

                    {/* Subtext */}
                    <p className="cta-desc text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md text-primary dark:text-white">
                        We help ambitious brands build their digital future. <br className="hidden md:block" />
                        Stop chasing trends and start setting them.
                    </p>

                    {/* Buttons */}
                    <div className="cta-btns flex flex-col sm:flex-row items-center gap-6 pt-6">
                        <Button variant={"link"} className="h-16 px-12 text-lg group flex items-center gap-2 dark:text-white dark:hover:text-black text-primary hover:text-white">
                            View Portfolio
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button className="h-16 px-12 text-lg border-none shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
                            Get Your Free Proposal
                        </Button>


                    </div>
                </div>

            </div>
        </section>
    );
};