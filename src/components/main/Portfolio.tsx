import React, { useEffect, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Button } from '../ui/button'

// ── Branding (7) ──────────────────────────────────────────────────────────────
import branding1 from '../../assets/portfolio/sectionWise/Branding/1.jpg'
import branding2 from '../../assets/portfolio/sectionWise/Branding/2.jpg'
import branding3 from '../../assets/portfolio/sectionWise/Branding/3.jpg'
import branding4 from '../../assets/portfolio/sectionWise/Branding/4.jpg'
import branding5 from '../../assets/portfolio/sectionWise/Branding/5.jpg'
import branding6 from '../../assets/portfolio/sectionWise/Branding/6.jpg'
import branding7 from '../../assets/portfolio/sectionWise/Branding/7.jpg'

// ── Creative Design (12) ──────────────────────────────────────────────────────
import creative1 from '../../assets/portfolio/sectionWise/Creative design/1.jpg'
import creative2 from '../../assets/portfolio/sectionWise/Creative design/2.jpg'
import creative3 from '../../assets/portfolio/sectionWise/Creative design/3.jpg'
import creative4 from '../../assets/portfolio/sectionWise/Creative design/4.jpg'
import creative5 from '../../assets/portfolio/sectionWise/Creative design/5.jpg'
import creative6 from '../../assets/portfolio/sectionWise/Creative design/6.jpg'
import creative7 from '../../assets/portfolio/sectionWise/Creative design/7.jpg'
import creative8 from '../../assets/portfolio/sectionWise/Creative design/8.jpg'
import creative9 from '../../assets/portfolio/sectionWise/Creative design/9.jpg'
import creative10 from '../../assets/portfolio/sectionWise/Creative design/10.jpg'
import creative11 from '../../assets/portfolio/sectionWise/Creative design/11.jpg'
import creative12 from '../../assets/portfolio/sectionWise/Creative design/12.jpg'

// ── Online Application (3) ────────────────────────────────────────────────────
import online1 from '../../assets/portfolio/sectionWise/Online Application/1.jpg'
import online2 from '../../assets/portfolio/sectionWise/Online Application/2.jpg'
import online3 from '../../assets/portfolio/sectionWise/Online Application/3.jpg'

// ── Packaging (8) ─────────────────────────────────────────────────────────────
import packaging1 from '../../assets/portfolio/sectionWise/Packaging/1.jpg'
import packaging2 from '../../assets/portfolio/sectionWise/Packaging/2.jpg'
import packaging3 from '../../assets/portfolio/sectionWise/Packaging/3.jpg'
import packaging4 from '../../assets/portfolio/sectionWise/Packaging/4.jpg'
import packaging5 from '../../assets/portfolio/sectionWise/Packaging/5.jpg'
import packaging6 from '../../assets/portfolio/sectionWise/Packaging/6.jpg'
import packaging7 from '../../assets/portfolio/sectionWise/Packaging/7.jpg'
import packaging8 from '../../assets/portfolio/sectionWise/Packaging/8.jpg'

// ── Print (5) ─────────────────────────────────────────────────────────────────
import print1 from '../../assets/portfolio/sectionWise/Print/1.jpg'
import print2 from '../../assets/portfolio/sectionWise/Print/2.jpg'
import print3 from '../../assets/portfolio/sectionWise/Print/3.jpg'
import print4 from '../../assets/portfolio/sectionWise/Print/4.jpg'
import print5 from '../../assets/portfolio/sectionWise/Print/5.jpg'

// ── Social Media (12) ─────────────────────────────────────────────────────────
import social1 from '../../assets/portfolio/sectionWise/Social Media/1.jpg'
import social2 from '../../assets/portfolio/sectionWise/Social Media/2.jpg'
import social3 from '../../assets/portfolio/sectionWise/Social Media/3.jpg'
import social4 from '../../assets/portfolio/sectionWise/Social Media/4.jpg'
import social5 from '../../assets/portfolio/sectionWise/Social Media/5.jpg'
import social6 from '../../assets/portfolio/sectionWise/Social Media/6.jpg'
import social7 from '../../assets/portfolio/sectionWise/Social Media/7.jpg'
import social8 from '../../assets/portfolio/sectionWise/Social Media/8.jpg'
import social9 from '../../assets/portfolio/sectionWise/Social Media/9.jpg'
import social10 from '../../assets/portfolio/sectionWise/Social Media/10.jpg'
import social11 from '../../assets/portfolio/sectionWise/Social Media/11.jpg'
import social12 from '../../assets/portfolio/sectionWise/Social Media/12.jpg'

// ── Web Design (13) ───────────────────────────────────────────────────────────
import web1 from '../../assets/portfolio/sectionWise/Web Design/1.jpg'
import web2 from '../../assets/portfolio/sectionWise/Web Design/2.jpg'
import web3 from '../../assets/portfolio/sectionWise/Web Design/3.jpg'
import web4 from '../../assets/portfolio/sectionWise/Web Design/4.jpg'
import web5 from '../../assets/portfolio/sectionWise/Web Design/5.jpg'
import web6 from '../../assets/portfolio/sectionWise/Web Design/6.jpg'
import web7 from '../../assets/portfolio/sectionWise/Web Design/7.jpg'
import web8 from '../../assets/portfolio/sectionWise/Web Design/8.jpg'
import web9 from '../../assets/portfolio/sectionWise/Web Design/9.jpg'
import web10 from '../../assets/portfolio/sectionWise/Web Design/10.jpg'
import web11 from '../../assets/portfolio/sectionWise/Web Design/11.jpg'
import web12 from '../../assets/portfolio/sectionWise/Web Design/12.jpg'
import web13 from '../../assets/portfolio/sectionWise/Web Design/13.jpg'

// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    "All projects",
    "Branding",
    "Creative Design",
    "Web Application",
    "Packaging",
    "Print",
    "Social Media",
    "Web Design",
]

const PROJECTS = [
    // ── Branding ──
    { id: 1, title: "Sara Smith", category: "Branding", tags: ["Branding", "Identity", "Strategy"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding1 },
    { id: 2, title: "Dream Studio", category: "Branding", tags: ["Branding", "Logo", "Typography"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding2 },
    { id: 3, title: "Laura Ford", category: "Branding", tags: ["Branding", "Identity", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding3 },
    { id: 4, title: "Michal", category: "Branding", tags: ["Branding", "Colour", "Strategy"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding4 },
    { id: 5, title: "Violet", category: "Branding", tags: ["Branding", "Logo", "Mark"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding5 },
    { id: 6, title: "Brandive", category: "Branding", tags: ["Branding", "Identity", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding6 },
    { id: 7, title: "Company", category: "Branding", tags: ["Branding", "Design", "Mark"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: branding7 },

    // ── Creative Design ──
    { id: 8, title: "Diwali", category: "Creative Design", tags: ["Creative", "Design", "Art"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative1 },
    { id: 9, title: "Luna & Love", category: "Creative Design", tags: ["Creative", "Visual", "Art"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative2 },
    { id: 10, title: "Festival", category: "Creative Design", tags: ["Creative", "Design", "Layout"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative3 },
    { id: 11, title: "Navratri", category: "Creative Design", tags: ["Creative", "Colour", "Art"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative4 },
    { id: 12, title: "Natasha", category: "Creative Design", tags: ["Creative", "Visual", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative5 },
    { id: 13, title: "Gala Timber", category: "Creative Design", tags: ["Creative", "Concept", "Art"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative6 },
    { id: 14, title: "Brand", category: "Creative Design", tags: ["Creative", "3D", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative7 },
    { id: 15, title: "Wow Magazine", category: "Creative Design", tags: ["Creative", "Design", "Fusion"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative8 },
    { id: 16, title: "Corporate", category: "Creative Design", tags: ["Creative", "Colour", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative9 },
    { id: 17, title: "Cover Template", category: "Creative Design", tags: ["Creative", "Art", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative10 },
    { id: 18, title: "Travel", category: "Creative Design", tags: ["Creative", "Visual", "Art"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative11 },
    { id: 19, title: "Mioprox", category: "Creative Design", tags: ["Creative", "Design", "Light"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: creative12 },

    // ── Online Application ──
    { id: 20, title: "AppFlow", category: "Web Application", tags: ["App", "UX", "Product"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: online1 },
    { id: 21, title: "CloudSync", category: "Web Application", tags: ["App", "Cloud", "SaaS"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: online2 },
    { id: 22, title: "WebLaunch", category: "Web Application", tags: ["App", "Platform", "UX"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: online3 },

    // ── Packaging ──
    { id: 23, title: "Bogen", category: "Packaging", tags: ["Packaging", "Print", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging1 },
    { id: 24, title: "Sweetpea", category: "Packaging", tags: ["Packaging", "Label", "Branding"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging2 },
    { id: 25, title: "Mockup", category: "Packaging", tags: ["Packaging", "Print", "Identity"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging3 },
    { id: 26, title: "Paper Box", category: "Packaging", tags: ["Packaging", "Branding", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging4 },
    { id: 27, title: "Pack", category: "Packaging", tags: ["Packaging", "Label", "Print"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging5 },
    { id: 28, title: "Coffee", category: "Packaging", tags: ["Packaging", "Design", "Identity"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging6 },
    { id: 29, title: "Natural", category: "Packaging", tags: ["Packaging", "Branding", "Print"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging7 },
    { id: 30, title: "Gift Box", category: "Packaging", tags: ["Packaging", "Design", "Label"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: packaging8 },

    // ── Print ──
    { id: 31, title: "Fee The Fear", category: "Print", tags: ["Print", "Editorial", "Layout"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: print1 },
    { id: 32, title: "Ride Safe", category: "Print", tags: ["Print", "Book", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: print2 },
    { id: 33, title: "Everything Is Okay", category: "Print", tags: ["Print", "Editorial", "Typography"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: print3 },
    { id: 34, title: "Freedom", category: "Print", tags: ["Print", "Typography", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: print4 },
    { id: 35, title: "Victory", category: "Print", tags: ["Print", "Layout", "Editorial"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: print5 },

    // ── Social Media ──
    { id: 36, title: "Explore World", category: "Social Media", tags: ["Social", "Content", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social1 },
    { id: 37, title: "Dream Destination", category: "Social Media", tags: ["Social", "Instagram", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social2 },
    { id: 38, title: "Story", category: "Social Media", tags: ["Social", "Content", "Campaign"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social3 },
    { id: 39, title: "City Car", category: "Social Media", tags: ["Social", "Visual", "Branding"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social4 },
    { id: 40, title: "Best Car", category: "Social Media", tags: ["Social", "Video", "Content"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social5 },
    { id: 41, title: "Car For Rent", category: "Social Media", tags: ["Social", "Design", "Campaign"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social6 },
    { id: 42, title: "Christmas Season", category: "Social Media", tags: ["Social", "Branding", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social7 },
    { id: 43, title: "Curiosity", category: "Social Media", tags: ["Social", "Marketing", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social8 },
    { id: 44, title: "Ring", category: "Social Media", tags: ["Social", "Content", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social9 },
    { id: 45, title: "Arrival", category: "Social Media", tags: ["Social", "Design", "Branding"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social10 },
    { id: 46, title: "Summer Vibe", category: "Social Media", tags: ["Social", "Marketing", "Visual"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social11 },
    { id: 47, title: "Property Sales", category: "Social Media", tags: ["Social", "Identity", "Content"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: social12 },

    // ── Web Design ──
    { id: 48, title: "Mountain Biking", category: "Web Design", tags: ["Web", "UI", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web1 },
    { id: 49, title: "Sushi Parlour", category: "Web Design", tags: ["Web", "UX", "Product"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web2 },
    { id: 50, title: "Royal Hotel", category: "Web Design", tags: ["Web", "UI", "Landing"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web3 },
    { id: 51, title: "App Home", category: "Web Design", tags: ["Web", "Design", "UX"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web4 },
    { id: 52, title: "Layout", category: "Web Design", tags: ["Web", "UI", "Product"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web5 },
    { id: 53, title: "Design Layout", category: "Web Design", tags: ["Web", "Landing", "Design"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web6 },
    { id: 54, title: "Landscape", category: "Web Design", tags: ["Web", "UX", "UI"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web7 },
    { id: 55, title: "Mnmlst", category: "Web Design", tags: ["Web", "Design", "Product"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web8 },
    { id: 56, title: "Orbit", category: "Web Design", tags: ["Web", "UI", "Landing"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web9 },
    { id: 57, title: "Horizon", category: "Web Design", tags: ["Web", "Design", "UX"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web10 },
    { id: 58, title: "Hotel & Spa", category: "Web Design", tags: ["Web", "UI", "Product"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web11 },
    { id: 59, title: "Luxury Hotel", category: "Web Design", tags: ["Web", "Design", "Landing"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web12 },
    { id: 60, title: "Medical", category: "Web Design", tags: ["Web", "UX", "Interface"], description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.", image: web13 },
]

// ─────────────────────────────────────────────────────────────────────────────

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All projects")

    const filteredProjects = activeCategory === "All projects"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground">
            <Header />
            <main className="flex flex-col pt-32 pb-20">
                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20">
                    <div className="max-w-5xl mb-12">
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-foreground mb-8">
                            Our work speaks louder than words
                        </h1>

                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {CATEGORIES.map(category => (
                                <Button
                                    key={category}
                                    variant={activeCategory === category ? "default" : "outline"}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full px-6 py-5 text-sm md:text-base cursor-pointer transition-transform ${activeCategory === category
                                        ? "bg-primary text-background dark:text-white hover:bg-primary/80"
                                        : "bg-transparent text-foreground border-border/40 hover:border-foreground/20 hover:bg-secondary/40"
                                        }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 mt-16">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group cursor-pointer">
                                <div className="rounded-2xl overflow-hidden mb-5 bg-secondary aspect-[4/4] w-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                </div>
                                {/* <div className="flex flex-col gap-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                        <h3 className="text-3xl font-bold text-foreground tracking-tight">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                            {project.tags.map((tag, i) => (
                                                <React.Fragment key={tag}>
                                                    <span>{tag}</span>
                                                    {i < project.tags.length - 1 && <span className="w-1 h-1 rounded-full bg-foreground/40" />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground/90 mt-2 text-base leading-relaxed tracking-wide sm:w-[90%]">
                                        {project.description}
                                    </p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio