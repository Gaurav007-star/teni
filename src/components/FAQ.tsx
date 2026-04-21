import { useRef, useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
    {
        id: 3,
        question: "What is your typical onboarding process?",
        answer: "Our onboarding typically takes 2 weeks. It involves a deep-dive discovery session, technical audits, strategy formulation, and setting up tracking infrastructure. We ensure we have a solid foundation before launching any campaigns."
    },
    {
        id: 4,
        question: "Do you offer flexible contract terms?",
        answer: "Yes, we believe in earning your business every month. While we recommend 6-month engagements for optimal SEO results, our paid media and content services are available on flexible terms designed to scale with your growth."
    },

    // Design Related
    {
        id: 6,
        question: "Do you offer UI/UX design services?",
        answer: "Yes, our design team creates modern, user-focused interfaces that improve usability and conversions. We combine research, wireframing, and usability testing to deliver designs that are both visually appealing and highly functional."
    },
    // {
    //     id: 7,
    //     question: "Can you redesign our existing website or product?",
    //     answer: "Absolutely. We analyze your current user experience, identify pain points, and redesign your platform with improved usability, visual consistency, and performance optimization."
    // },

    // Brand Related
    // {
    //     id: 8,
    //     question: "Do you help with brand identity development?",
    //     answer: "Yes. We help businesses build strong brand identities including logo design, brand guidelines, color systems, typography, and messaging frameworks to ensure consistency across all platforms."
    // },
    {
        id: 9,
        question: "Can you help position our brand in a competitive market?",
        answer: "Definitely. We conduct market research and competitor analysis to develop a clear brand positioning strategy that highlights your unique value and differentiates you from competitors."
    },

    // Support Related
    // {
    //     id: 10,
    //     question: "Do you provide ongoing support after project completion?",
    //     answer: "Yes, we offer ongoing maintenance, optimization, and support packages to ensure your marketing campaigns, website, and digital assets continue to perform at their best."
    // },
    {
        id: 11,
        question: "How can we reach your support team?",
        answer: "Our support team is available via email, chat, and scheduled calls. Clients also receive priority assistance through their dedicated account manager."
    }
];

const FAQItem = ({ item, isOpen, onClick }: { item: typeof faqs[0], isOpen: boolean, onClick: () => void }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power3.inOut"
            });
        }
    }, { dependencies: [isOpen] });

    return (
        <div className={cn(
            "group border-b border-border transition-all duration-300",
            isOpen ? "" : "hover:bg-secondary/10",
            item.id === faqs.length ? "border-none" : ""
        )}>
            <button
                onClick={onClick}
                className="w-full py-8 flex items-start justify-between gap-6 text-left px-4 md:px-6 cursor-pointer"
            >
                <div className="flex-1">
                    {/* Question */}
                    <h3 className={cn(
                        "text-xl md:text-2xl font-medium transition-colors duration-300 leading-snug tracking-tight pr-8",
                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    )}>
                        {item.question}
                    </h3>

                    {/* Answer */}
                    <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
                        <p className="pt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-normal max-w-3xl">
                            {item.answer}
                        </p>
                    </div>
                </div>

                {/* Icon */}
                <div className={cn(
                    "relative flex items-center justify-center w-8 h-8 rounded-full border border-border/50 transition-all duration-300 shrink-0 mt-0.5",
                    isOpen ? "bg-primary border-primary rotate-45" : "bg-transparent group-hover:border-primary"
                )}>
                    <Plus className={cn(
                        "w-5 h-5 transition-colors duration-300",
                        isOpen ? "text-white" : "text-muted-foreground group-hover:text-primary"
                    )} strokeWidth={1.5} />
                </div>
            </button>
        </div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".faq-header", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1
        })
            .from(".faq-list-item", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-20 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    {/* Header Side */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-10 faq-header">
                        <div className="flex flex-col gap-8">
                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                    FAQ
                                </span>
                            </div>

                            {/* Headings */}
                            <div>
                                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95] mb-6">
                                    Common <br />
                                    <span className="text-muted-foreground/50">Questions.</span>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-sm">
                                    Everything you need to know about our process, pricing, and deliverables before we start.
                                </p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <Button variant="link" className="h-14 px-8 text-base border-foreground/20 hover:border-foreground hover:bg-transparent transition-all duration-300 group">
                                See All FAQs
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* FAQ List Side */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col">
                            {faqs.map((faq, i) => (
                                <div key={i} className="faq-list-item">
                                    <FAQItem
                                        item={faq}
                                        isOpen={openIndex === i}
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
