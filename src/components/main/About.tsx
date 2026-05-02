import { useEffect, useRef } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { CTA } from '../CTA'
import SEO from '../SEO'
import teamCheering from '@/assets/images/team_cheering.png'
import laptopReview from '@/assets/images/laptop_review.png'
// import founderProfile from '@/assets/images/founder_profile.png'
import {Palette, Monitor, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const storyRef = useRef<HTMLElement>(null);
    // const statsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        const rows = gsap.utils.toArray<HTMLElement>('.content-row');

        rows.forEach((row) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            tl.fromTo(row.querySelectorAll('.anim-header'),
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.15 }
            ).fromTo(row.querySelectorAll('.anim-item'),
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
                "-=0.6"
            );
        });

        // Force a scrolltrigger refresh after layouts apply
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans overflow-x-hidden">
            <SEO 
                title="About Us" 
                description="Learn more about Teni, our mission, and what makes us different in the digital service space." 
            />
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-0">

                {/* Hero Section */}
                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 mb-8 md:mb-12">
                    <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 md:gap-12 animate-fade-in-up">
                        <h1 className="w-full text-left text-5xl md:text-8xl lg:text-[8rem] font-medium tracking-tight leading-[0.9] text-foreground">
                            Meet <br />
                            <span className="relative inline-block mt-2 md:mt-4 z-10 w-fit">
                                Our Stories
                                <motion.div
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    whileHover={{ rotate: 180, scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.4 }}
                                    className="absolute max-[450px]:hidden -top-8 -right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-16 cursor-pointer z-[-1]"
                                >
                                    <svg className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 drop-shadow-2xl" viewBox="0 0 24 24" fill="url(#starGradient)">
                                        <defs>
                                            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#f1f2f2" />
                                                <stop offset="100%" stopColor="#9b5de0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z" />
                                    </svg>
                                </motion.div>
                            </span>
                        </h1>
                        <div className="md:max-w-xs flex flex-col gap-5 md:mb-4 lg:mb-8">
                            <p className="text-foreground text-lg md:text-xl font-medium leading-snug">
                                Creating impact with purpose and clarity.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Hero Images Area */}
                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 mb-20 md:mb-32">
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
                        <div className="md:col-span-7 h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl relative group">
                            <img
                                src={teamCheering}
                                alt="Team cheering"
                                className="w-full h-full object-cover object-center grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                        </div>
                        <div className="md:col-span-5 max-[450px]:hidden h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl relative group">
                            <img
                                src={laptopReview}
                                alt="Colleagues reviewing work on laptop"
                                className="w-full h-full object-cover object-center grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                        </div>
                    </section>
                </div>

                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 space-y-24 md:space-y-32">

                    {/* Row 1: Our Story */}
                    <section className="content-row flex flex-col lg:flex-row gap-10 lg:gap-12">
                        {/* Left: Heading */}
                        <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start lg:pt-1.5">
                            <div className="anim-header flex items-center gap-3">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                    The Mission
                                </span>
                            </div>
                            <h2 className="anim-header text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95]">
                               Who We Are
                            </h2>
                        </div>

                        {/* Right: Text Content */}
                        <div className="w-full lg:w-[65%] flex flex-col gap-6 md:gap-8 pt-2 lg:pl-8 xl:pl-16">
                            <p className="anim-item text-foreground text-2xl md:text-3xl font-semibold leading-[1.3] tracking-tight">
                                At TENI Digital, we believe every business has a great story—sometimes it just needs the right voice to tell it.
                            </p>
                            <p className="anim-item text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                                We are a full-service creative and technical agency dedicated to helping brands stand out in a crowded digital world. We don’t just offer services; we build the tools and identities that help your business grow.
                            </p>
                            <p className="anim-item text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                                From the very first sketch of a logo to the complex code of a web application, we handle the details so you can focus on the big picture.
                            </p>
                        </div>
                    </section>

                    {/* Row 2: What We Do */}
                    <section className="content-row flex flex-col gap-0 mb-8">
                        {/* Top Header Label */}
                        <div className="anim-header flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                Focus Areas
                            </span>
                        </div>

                        {/* Intro Text */}
                        <div className="anim-header flex flex-col gap-6 mb-12">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95]">
                                What We Do
                            </h2>
                            <p className="text-foreground text-xl md:text-2xl font-semibold leading-snug tracking-normal max-w-3xl">
                                We bridge the gap between creativity and technology. Our team works across multiple disciplines to ensure your brand is consistent, visible, and high-performing.
                            </p>
                        </div>

                        {/* Table Rows */}
                        <div className="anim-item group transition-all duration-500 hover:bg-secondary/30 flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-6 md:px-10 border-t border-border -mx-6 md:-mx-10 cursor-pointer">
                            <h3 className="flex items-center gap-6 md:gap-8 text-4xl md:text-5xl font-medium tracking-tight mb-4 md:mb-0 w-full md:w-1/2 transition-all duration-500 group-hover:text-primary group-hover:translate-x-4">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                                    <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-[135deg] group-hover:scale-105 flex items-center justify-center">
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl transition-colors duration-500" />
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl rotate-45 transition-colors duration-500" />
                                    </div>
                                    <Palette className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-foreground/70 group-hover:text-primary-foreground transition-colors duration-500" />
                                </div>
                                Creative & Branding
                            </h3>
                            <p className="text-foreground/80 text-lg md:text-xl w-full md:w-1/2 font-medium transition-colors duration-500 group-hover:text-foreground">
                                We design memorable logos, stunning visuals, and unique Packaging Design that makes your products pop off the shelf.
                            </p>
                        </div>

                        <div className="anim-item group transition-all duration-500 hover:bg-secondary/30 flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-6 md:px-10 border-t border-border -mx-6 md:-mx-10 cursor-pointer">
                            <h3 className="flex items-center gap-6 md:gap-8 text-4xl md:text-5xl font-medium tracking-tight mb-4 md:mb-0 w-full md:w-1/2 transition-all duration-500 group-hover:text-primary group-hover:translate-x-4">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                                    <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-[135deg] group-hover:scale-105 flex items-center justify-center">
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl transition-colors duration-500" />
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl rotate-45 transition-colors duration-500" />
                                    </div>
                                    <Monitor className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-foreground/70 group-hover:text-primary-foreground transition-colors duration-500" />
                                </div>
                                Web & Tech
                            </h3>
                            <p className="text-foreground/80 text-lg md:text-xl w-full md:w-1/2 font-medium transition-colors duration-500 group-hover:text-foreground">
                                We build everything from sleek, responsive websites to powerful Web Applications tailored to your specific business needs.
                            </p>
                        </div>

                        <div className="anim-item group transition-all duration-500 hover:bg-secondary/30 flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-6 md:px-10 border-t border-b group-hover:border-b-transparent border-border -mx-6 md:-mx-10 cursor-pointer">
                            <h3 className="flex items-center gap-6 md:gap-8 text-4xl md:text-5xl font-medium tracking-tight mb-4 md:mb-0 w-full md:w-1/2 transition-all duration-500 group-hover:text-primary group-hover:translate-x-4">
                                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                                    <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-[135deg] group-hover:scale-105 flex items-center justify-center">
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl transition-colors duration-500" />
                                        <div className="absolute w-[75%] h-[75%] bg-secondary group-hover:bg-primary rounded-xl rotate-45 transition-colors duration-500" />
                                    </div>
                                    <TrendingUp className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-foreground/70 group-hover:text-primary-foreground transition-colors duration-500" />
                                </div>
                                Growth & Strategy
                            </h3>
                            <p className="text-foreground/80 text-lg md:text-xl w-full md:w-1/2 font-medium transition-colors duration-500 group-hover:text-foreground">
                                Through expert SEO and Digital Marketing, we make sure your target audience finds you first, staying ahead of the competition.
                            </p>
                        </div>
                    </section>

                    {/* Row 3: Why Choose Us */}
                    <section className="content-row flex flex-col gap-6 mb-16 mt-16 md:mt-24">

                        {/* Header Label */}
                        <div className="anim-header flex items-center gap-3 mb-2">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                                The Difference
                            </span>
                        </div>

                        {/* Title & Main Text */}
                        <div className="anim-header flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 mb-4">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-[0.95] md:w-[45%]">
                                Why Choose <span className="text-muted-foreground/50">TENI Digital.</span>
                            </h2>
                            <div className="flex flex-col gap-8 md:w-[55%] pt-2">
                                <p className="text-foreground text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] tracking-tight">
                                    The digital landscape moves fast, but we move faster. We combine "big agency" expertise with the personal touch of a dedicated partner.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-medium max-w-2xl">
                                    Whether you’re a startup looking for your first identity or an established company ready for a digital overhaul, we are here to turn your vision into a reality.
                                </p>
                            </div>
                        </div>

                        {/* Interactive CTA Block */}
                        {/* <div className="anim-item mt-10 md:mt-16 w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[3rem] cursor-pointer group flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl transition-all duration-500">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight w-full md:w-auto text-center md:text-left transition-transform duration-500 group-hover:translate-x-2">
                                Let’s build something great.
                            </h3>
                            
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-current shrink-0 group-hover:bg-background group-hover:text-primary transition-colors duration-500">
                                <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 group-hover:-rotate-45 transition-transform duration-500" />
                            </div>
                        </div> */}

                    </section>
                </div>

            </main>
            <CTA />
            <Footer />
        </div>
    )
}

export default About
