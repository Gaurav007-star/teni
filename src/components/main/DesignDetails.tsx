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
import { designDetailsData } from '@/constant/constant';
import HeroImage from "@/assets/DetailsPageImage/Creative Design.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DesignDetails = () => {
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
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-24">
                <ServiceHero
                    title="Creative Design"
                    description="We translate complex ideas into stunning visuals. Whether it’s for digital use or physical space, our designs are crafted to stop the scroll and start a conversation, creating a lasting impact on your audience."
                    imageSrc={HeroImage}
                    imageAlt="Creative Design Workspace"
                />

                <DigitalMarketingFeatures featuresData={designDetailsData} />

            </main>
            <OurTechnologies />
            <CTA />
            <Footer />
        </div>
    );
};

export default DesignDetails;
