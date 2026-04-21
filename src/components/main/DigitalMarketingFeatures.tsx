import type { FeatureItem } from "@/constant/constant";

export const DigitalMarketingFeatures = ({featuresData}: {featuresData: FeatureItem[]}) => {
    return (
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20 space-y-20 md:space-y-24">
            {featuresData.map((feature) => (
                <section key={feature.id} className="scroll-animate flex flex-col gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className={`lg:col-span-8 p-8 md:p-12 rounded-[2rem] flex flex-col justify-center relative overflow-hidden group ${
                            feature.isDark 
                                ? "bg-zinc-950 text-white shadow-2xl" 
                                : "bg-secondary/30 border border-border/40"
                        }`}>
                            <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
                                feature.isDark 
                                    ? "bg-primary/20 group-hover:bg-primary/30" 
                                    : "bg-primary/10 group-hover:bg-primary/20"
                            }`} />
                            <h2 className="text-2xl md:text-5xl font-semibold mb-6 relative z-10">{feature.title}</h2>
                            <p className={`text-lg md:text-3xl font-medium leading-8 max-[450px]:leading-6 relative z-10 ${
                                feature.isDark 
                                    ? "text-white/90" 
                                    : "text-foreground"
                            }`}>
                                {feature.description}
                            </p>
                        </div>
                        <div className="lg:col-span-4 bg-primary text-primary-foreground p-6 md:p-12 rounded-[2rem] flex flex-col justify-center">
                            <span className="text-sm font-mono tracking-widest uppercase mb-4 opacity-80">{feature.focusOnLabel}</span>
                            <span className="text-lg md:text-2xl font-medium leading-relaxed">{feature.focusOnText}</span>
                        </div>
                    </div>
                    <div className={`grid gap-2 md:gap-6  ${feature.detailsGridClass}`}>
                        {feature.details.map((detail, index) => (
                            <div key={index} className={`bg-secondary/10 border border-border/20 rounded-[2rem] hover:bg-secondary/30 transition-colors ${feature.detailBoxClass}`}>
                                <strong className="block text-lg md:text-2xl font-medium text-foreground mb-4">{detail.title}</strong>
                                <span className="text-muted-foreground leading-relaxed text-base md:text-lg">{detail.description}</span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};
