import { useEffect, useRef } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTA } from '../CTA';
import { OurTechnologies } from './OurTechnologies';
import { ServiceHero } from './ServiceHero';
import { DigitalMarketingFeatures } from './DigitalMarketingFeatures';
import { packagingDetailsData } from '@/constant/constant';
import HeroImage from "@/assets/DetailsPageImage/Packaging.jpeg";
import SEO from '../SEO';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PackagingDetails = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.scroll-animate');

        sections.forEach((section) => {
            gsap.fromTo(section,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans overflow-x-hidden">
            <SEO 
                title="Premium Packaging Services" 
                description="A powerful package protects your product, projects quality, and persuades the buyer." 
            />
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-24">
                <ServiceHero
                    title="Premium Packaging"
                    description="Good design starts with a solid foundation. We don't just design the skin; we design the skeleton. A powerful package protects your product, projects quality, and persuades the buyer."
                    imageSrc={HeroImage}
                    imageAlt="Product Packaging Design"
                />

                <DigitalMarketingFeatures featuresData={packagingDetailsData} />

            </main>
            <OurTechnologies />
            <CTA />
            <Footer />
        </div>
    );
};

export default PackagingDetails;
