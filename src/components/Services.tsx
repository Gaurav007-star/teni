import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ServiceData {
    title: string;
    description: string;
    points: string[];
}

const services: ServiceData[] = [
    {
        title: "Search Engine Optimization",
        description: "Through careful keyword research and white hat SEO practices, we help you achieve higher rankings. We analyze your current position and chart a path to the top.",
        points: ["Keyword Strategy", "On-Page Optimization", "Technical Audits"]
    },
    {
        title: "Brand Design",
        description: "We craft compelling visual identities that reflect your brand’s values and resonate with your target audience, ensuring your business stands out in a crowded marketplace.",
        points: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
        title: "Promotion Design",
        description: "We create eye-catching promotional materials that grab attention and drive action, ensuring your message stands out and engages your audience.",
        points: ["Flyer Design", "Poster Design", "Social Media Graphics"]
    },
    {
        title: "Custom Website Design",
        description: "Capture your target audiences' attention with a professional custom web design that highlights your unique value and converts visitors into loyal customers.",
        points: ["UI/UX Design", "Responsive Layouts", "Brand Integration"]
    },
    {
        title: "Web Design & Development",
        description: "Thrive builds custom, mobile-ready and search engine optimized websites tailored to your business objectives, ensuring a robust digital foundation.",
        points: ["Full-Stack Development", "CMS Integration", "Performance Tuning"]
    },
    {
        title: "Social Media Marketing",
        description: "Ready to expand and market to your audiences on social media? We build campaigns that grow your brand and foster genuine community engagement.",
        points: ["Content Strategy", "Community Management", "Paid Social Ads"]
    }
];

interface ServiceItemProps {
    service: ServiceData;
    index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    const onEnter = contextSafe(() => {
        // Expand content
        gsap.to(contentRef.current, {
            height: 'auto',
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            overwrite: 'auto'
        });

        // Rotate Arrow & Color
        gsap.to(arrowRef.current, {
            rotate: 90,
            color: 'var(--primary)',
            duration: 0.3,
            overwrite: 'auto'
        });

        // Gradient Fade In
        gsap.to(bgRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: 'auto'
        });
    });

    const onLeave = contextSafe(() => {
        // Collapse content - Switched to power3.out for smoother immediate reaction
        gsap.to(contentRef.current, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out", // Changed from power3.inOut to remove sluggish start
            overwrite: 'auto'
        });

        // Reset Arrow
        gsap.to(arrowRef.current, {
            rotate: 0,
            color: 'inherit',
            duration: 0.3,
            overwrite: 'auto'
        });

        // Gradient Fade Out
        gsap.to(bgRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: 'auto'
        });
    });

    return (
        <div
            ref={containerRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="service-item w-full border-t border-border group cursor-pointer relative overflow-hidden"
        >
            {/* Gradient Background Layer */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-primary/10 opacity-0 pointer-events-none transition-none z-0"
            />

            <div className="py-8 md:py-12 grid grid-cols-12 gap-4 items-start relative z-10 px-2 md:px-4">

                {/* 01. Number */}
                <div className="col-span-2 md:col-span-1">
                    <span className="relative z-30 font-mono text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 block pt-1">
                        0{index + 1}
                    </span>
                </div>

                {/* 02. Title */}
                <div className="col-span-8 md:col-span-4 lg:col-span-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-[0.95]">
                        {service.title}
                    </h3>
                </div>

                {/* 03. Content (Hidden initially) */}
                <div className="col-span-12 md:col-span-6 lg:col-span-6 md:pl-12">
                    <div ref={contentRef} className="h-0 opacity-0 overflow-hidden will-change-[height,opacity]">
                        {/* Wrapper for padding to ensure smooth height animation */}
                        <div className="pt-8 flex flex-col gap-8 items-start max-w-lg">
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                                {service.description}
                            </p>

                            {/* Bullet points */}
                            <ul className="flex flex-col gap-3 text-sm text-muted-foreground/80">
                                {service.points.map((point: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button size={"lg"}>
                                <span className="relative z-10 text-sm">Leave a Request</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 04. Arrow */}
                <div className="col-span-2 md:col-span-1 flex justify-end">
                    <div ref={arrowRef} className="text-muted-foreground transition-colors duration-300">
                        <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export const Services = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".services-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15
        })
            .from(".service-item", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-background text-foreground py-24 md:py-32 selection:bg-primary selection:text-white">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">

                {/* Header Section */}
                <div className="mb-24">
                    <div className="flex flex-col gap-10">
                        {/* Top Label */}
                        <div className="services-header flex items-center gap-3">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                Our Services
                            </span>
                        </div>

                        {/* Title and Subtext */}
                        <div className="services-header flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground max-w-4xl leading-[0.95]">
                                Building brand <br />
                                <span className="text-muted-foreground/50">recognition.</span>
                            </h2>

                            <div className="text-right hidden md:block">
                                <span className="text-xs font-mono text-muted-foreground leading-relaxed block">
                                    Complete solution <br /> from 0 to 100%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services List with Side Blur Effect */}
                <div className="relative">
                    {/* Side Gradient Masks for Blur Blend Effect - Adjusted width to not obscure numbers */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                    <div className="flex flex-col relative z-10">
                        {services.map((service, index) => (
                            <ServiceItem key={index} service={service} index={index} />
                        ))}
                        {/* Bottom border for last item */}
                        <div className="w-full h-px bg-border" />
                    </div>
                </div>

            </div>
        </section>
    );
};