import  { useRef } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
    {
        quote: "A thorough report was done on our financial situation of what insurance covers etc existing. Better deals were found. These were processed on our behalf, which took a lot of stress away. Updates were given as required and outstanding responses chased after.",
        name: "Jeannie Grant",
        date: "June 01, 2023",
        rating: 5
    },
    {
        quote: "I have been a client of MARQV for 8 years now and have always found the advice provided by the team excellent. They always take the time to explain things really clearly to me and ensures I understand and am well informed and therefore able to make appropriate decisions.",
        name: "Derval Russell",
        date: "November 09, 2023",
        rating: 5
    },
    {
        quote: "Claire was absolutely constant with her concise advice and mortgage process. She ensured I understood and was well informed and therefore able to make appropriate decisions regarding our future investments.",
        name: "Sophie",
        date: "October 15, 2023",
        rating: 5
    },
    {
        quote: "The strategic insights provided by MARQV completely revitalized our online presence. The team is professional, responsive, and truly cares about our success. We've seen a 200% increase in qualified leads.",
        name: "Marcus Thorne",
        date: "January 20, 2024",
        rating: 5
    }
];

export const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".testimonial-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15
        })
            .from(".testimonial-card", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.15
            }, "-=0.8");

    }, { scope: sectionRef });

    const scroll = contextSafe((direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            // Calculate scroll amount based on first card width + gap to ensure alignment
            const firstCard = container.firstElementChild as HTMLElement;
            const cardWidth = firstCard ? firstCard.offsetWidth : 320;
            const gap = 24; // gap-6 = 24px
            const scrollAmount = cardWidth + gap;

            const targetScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            gsap.to(container, {
                scrollLeft: targetScrollLeft,
                duration: 1, // Slightly longer duration for smoothness
                ease: "power3.out" // Smoother easing curve
            });
        }
    });

    return (
        <section ref={sectionRef} className="w-full py-32 bg-background overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">

                {/* Header Section - Matched to Services Layout */}
                <div className="mb-24">
                    <div className="flex flex-col gap-10">
                        {/* Top Label */}
                        <div className="testimonial-header flex items-center gap-3">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                Testimonials
                            </span>
                        </div>

                        {/* Title and Controls */}
                        <div className="testimonial-header flex flex-col md:flex-row justify-between items-end gap-10">
                            <div className="max-w-4xl">
                                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95] mb-6">
                                    Don't take our word for it, <br />
                                    <span className="text-muted-foreground/50">see what our clients say.</span>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                    We're honored by the feedback, and it fuels our commitment to delivering exceptional services. Read the reviews to hear firsthand how MARQV is making a positive impact.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 mb-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group cursor-pointer"
                                    aria-label="Previous testimonial"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group cursor-pointer"
                                    aria-label="Next testimonial"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide -mr-6 md:-mr-20 pr-6 md:pr-20"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="testimonial-card min-w-[320px] md:min-w-[480px] bg-secondary rounded-[2rem] p-10 flex flex-col justify-between h-auto border border-transparent hover:border-border transition-colors duration-300"
                        >
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="bg-primary w-6 h-6 flex items-center justify-center rounded-[2px]">
                                            <Star className="w-3.5 h-3.5 fill-white text-white" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg leading-relaxed text-foreground/90 mb-12">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-lg mb-1">{t.name}</h4>
                                <span className="text-sm text-muted-foreground font-medium">{t.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};