import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Layers, Zap, TrendingUp } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
    {
        icon: Layers,
        title: "Creative Expertise",
        description: "Over 10 years of experience in branding, print, packaging, and digital design."
    },
    {
        icon: Lightbulb,
        title: "Proven Results",
        description: "Successfully delivered 10,000+ projects across industries with consistent quality and clear visual communication."
    },
    {
        icon: TrendingUp,
        title: "Expert Team",
        description: "Skilled creative professionals focused on precision, detail, timely delivery, and long-term design support."
    },
    {
        icon: Zap,
        title: "Client Focus",
        description: "We understand client needs and deliver creative solutions that help brands grow and connect better."
    }
];

export const Stats = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".feature-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15
        })
            .from(".feature-item", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-24 md:py-32 bg-background">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Heading */}
                    <div className="w-full lg:w-[40%] flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
                        {/* Label */}
                        <div className="feature-header flex items-center gap-3">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                Why Choose Us
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="feature-header text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95]">
                            Your growth <br />
                            <span className="text-muted-foreground/50">partner.</span>
                        </h2>
                    </div>

                    {/* Right: Grid */}
                    <div className="w-full lg:w-[60%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item group flex flex-col gap-6 cursor-pointer">
                                    {/* Icon - No Card Style, Smooth Transition */}
                                    <div className="relative">
                                        <feature.icon
                                            className="w-12 h-12 text-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
