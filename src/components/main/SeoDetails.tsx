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
import { seoDetailsData } from '@/constant/constant';
import HeroImage from "@/assets/DetailsPageImage/SEO.jpg";
import SEO from '../SEO';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SeoDetails = () => {
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
                title="NextGen SEO Services" 
                description="We build a flawless technical foundation and targeted authority strategies to ensure your brand is front and center." 
            />
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-24">
                <ServiceHero
                    title="NextGen SEO"
                    description="Being on page two of Google is like hiding a secret. We build a flawless technical foundation and targeted authority strategies to ensure your brand is front and center where your customers are looking."
                    imageSrc={HeroImage}
                    imageAlt="SEO Optimization Analytics"
                />

                <DigitalMarketingFeatures featuresData={seoDetailsData} />

            </main>
            <OurTechnologies />
            <CTA />
            <Footer />
        </div>
    );
};

export default SeoDetails;
