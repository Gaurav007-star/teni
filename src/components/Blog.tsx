import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgSeo from '../assets/blog_seo_strategy.png';
import imgBranding from '../assets/blog_brand_identity.png';
import imgWebDev from '../assets/blog_web_development.png';
import imgMarketing from '../assets/blog_digital_marketing.png';
import imgDesign from '../assets/blog_creative_design.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const blogPosts = [
    {
        category: "SEO Strategy",
        readTime: "5 min read",
        date: "March 12, 2025",
        title: "Why Technical SEO Is the Foundation of Every Successful Campaign",
        excerpt: "Without a strong technical foundation, even the best content strategy will underperform. We break down exactly what matters and why.",
        tag: "SEO",
        image: imgSeo
    },
    {
        category: "Brand Identity",
        readTime: "7 min read",
        date: "February 28, 2025",
        title: "How to Build a Brand That Speaks Before You Do",
        excerpt: "Great brands communicate values, trust, and personality in an instant. Here's the framework we use to craft identities that resonate.",
        tag: "Branding",
        image: imgBranding
    },
    {
        category: "Web Development",
        readTime: "6 min read",
        date: "January 15, 2025",
        title: "Performance-First Web Design: What Your Conversion Rate Is Telling You",
        excerpt: "Speed, structure, and UX aren't optional — they're the levers that drive conversions. Learn how we build websites that work hard.",
        tag: "Web Dev",
        image: imgWebDev
    },
    {
        category: "Digital Marketing",
        readTime: "8 min read",
        date: "December 03, 2024",
        title: "Paid Media in 2025: Smarter Targeting, Leaner Budgets, Better Returns",
        excerpt: "The paid media landscape has shifted. Here's how MARQV is helping clients adapt and outperform in a competitive ad environment.",
        tag: "Marketing",
        image: imgMarketing
    },
    {
        category: "Creative Design",
        readTime: "4 min read",
        date: "November 20, 2024",
        title: "Design Systems: The Secret Weapon of Scalable Digital Brands",
        excerpt: "From startups to enterprises, a robust design system is what keeps creativity consistent and production fast. Here's how we build them.",
        tag: "Design",
        image: imgDesign
    }
];

const tagGradients: Record<string, string> = {
    "SEO": "from-violet-500/20 to-purple-500/10",
    "Branding": "from-amber-500/20 to-orange-500/10",
    "Web Dev": "from-sky-500/20 to-blue-500/10",
    "Marketing": "from-emerald-500/20 to-teal-500/10",
    "Design": "from-pink-500/20 to-rose-500/10",
};

const tagColors: Record<string, string> = {
    "SEO": "text-violet-500 bg-violet-500/10",
    "Branding": "text-amber-500 bg-amber-500/10",
    "Web Dev": "text-sky-500 bg-sky-500/10",
    "Marketing": "text-emerald-500 bg-emerald-500/10",
    "Design": "text-pink-500 bg-pink-500/10",
};

export const Blog = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    useGSAP(() => {
        // Only animate the text header — never touch the cards so they always stay visible
        gsap.from(".blog-header", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
            }
        });


    }, { scope: sectionRef });

    const scroll = contextSafe((direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const firstCard = container.firstElementChild as HTMLElement;
            const cardWidth = firstCard ? firstCard.offsetWidth : 480;
            const gap = 24;
            const scrollAmount = cardWidth + gap;

            const targetScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            gsap.to(container, {
                scrollLeft: targetScrollLeft,
                duration: 1,
                ease: "power3.out"
            });
        }
    });

    return (
        <section ref={sectionRef} className="w-full py-10 md:py-32 bg-background overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">

                {/* ── Header Section ── */}
                <div className="mb-10 md:mb-24">
                    <div className="flex flex-col gap-10">

                        {/* Top Label */}
                        <div className="blog-header flex items-center gap-3">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                From the Blog
                            </span>
                        </div>

                        {/* Title + Nav Arrows */}
                        <div className="blog-header flex flex-col md:flex-row justify-between items-end gap-10">
                            <div className="max-w-4xl">
                                <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95] mb-6">
                                    Insights, strategies, <br />
                                    <span className="text-muted-foreground/50">and ideas worth reading.</span>
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                    Explore our latest thinking on design, marketing, and growth. No fluff — just perspectives that help you build smarter.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0 mb-2">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group cursor-pointer"
                                    aria-label="Previous blog post"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group cursor-pointer"
                                    aria-label="Next blog post"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── Blog Cards Carousel — original card design restored ── */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-0 md:pb-12 scrollbar-hide md:-mr-20 pr-6 md:pr-20"
                >
                    {blogPosts.map((post, i) => (
                        <div
                            key={i}
                            className="min-w-[320px] md:min-w-[480px] bg-secondary rounded-[2rem] overflow-hidden flex flex-col border border-transparent hover:border-border transition-colors duration-300 group cursor-pointer"
                        >
                            {/* ── Image Banner (top) ── */}
                            <div className="w-full h-44 relative overflow-hidden">
                                {/* Actual blog image */}
                                <img
                                    src={post.image}
                                    alt={post.category}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Brand-color gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tagGradients[post.tag] ?? 'from-primary/30 to-primary/10'} opacity-60`} />
                                {/* Bottom fade for text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                {/* Category Tag */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                                    <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-sm ${tagColors[post.tag] ?? 'text-primary bg-primary/10'}`}>
                                        {post.category}
                                    </span>
                                </div>

                                {/* Hover arrow */}
                                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* ── Card Body ── */}
                            <div className="p-10 flex flex-col flex-1 justify-between gap-6">
                                <div>
                                    {/* Meta row */}
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="flex items-center gap-1.5 text-muted-foreground/70">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span className="text-xs font-medium">{post.readTime}</span>
                                        </div>
                                        <div className="h-3 w-px bg-border"></div>
                                        <span className="text-xs font-medium text-muted-foreground/70">{post.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-foreground leading-snug tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary group/link w-fit">
                                    <span>Read Article</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
