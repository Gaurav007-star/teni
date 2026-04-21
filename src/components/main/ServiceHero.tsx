import React from 'react';

interface ServiceHeroProps {
    title: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <>
            {/* Hero Section */}
            <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 mb-12 md:mb-20">
                <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 animate-fade-in-up">
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-normal leading-[0.9] text-foreground">
                        {title}
                    </h1>
                    <div className="md:max-w-md flex flex-col gap-5 ">
                        <p className="text-foreground text-lg font-medium leading-tight">
                            {description}
                        </p>
                    </div>
                </section>
            </div>

            {/* Hero Image */}
            <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 mb-20 md:mb-32 max-[450px]:hidden">
                <section className="scroll-animate w-full relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-xl">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="object-cover w-full h-full grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </section>
            </div>
        </>
    );
};
