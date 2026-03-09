import { useRef } from 'react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import firstImage from "@/assets/profile/7.jpg";
import secondImage from "@/assets/profile/8.jpg";
import thirdImage from "@/assets/profile/profileImage/16.jpg";
import fourthImage from "@/assets/profile/4.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "BRANDING",
    tags: ["Marketing"],
    image: firstImage
  },
  {
    title: "UI/UX",
    tags: ["PPC", "SEO"],
    image: secondImage
  },
  {
    title: "WEB DEV",
    tags: ["Social Media"],
    image: thirdImage
  },
  {
    title: "APP DEV",
    tags: ["Marketing"],
    image: fourthImage
  }
];

export const LatestWork = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".work-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15
    })
      .from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15
      }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-24 md:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">

        {/* Header Section */}
        <div className="mb-20 md:mb-24">
          <div className="flex flex-col gap-10">
            {/* Top Label */}
            <div className="work-header flex items-center gap-3">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Our Work
              </span>
            </div>

            {/* Title and Controls */}
            <div className="work-header flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground max-w-4xl leading-[0.95]">
                Selected <br />
                <span className="text-muted-foreground/50">projects.</span>
              </h2>

              <Button variant="ghost" className="border-border text-foreground hover:bg-secondary px-8 h-12">
                Explore More
              </Button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="project-card group cursor-pointer flex flex-col gap-4">
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-secondary rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-center mt-4 px-2">
                <h3 className="text-2xl font-medium text-foreground tracking-tight">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground uppercase tracking-wide hover:bg-secondary transition-colors bg-transparent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}