import React, { useEffect, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Button } from '../ui/button'

import img1 from "@/assets/profile/profileImage/1.jpg"
import img2 from "@/assets/profile/profileImage/2.jpg"
import img3 from "@/assets/profile/profileImage/3.jpg"
import img4 from "@/assets/profile/profileImage/4.jpg"
import img5 from "@/assets/profile/profileImage/5.jpg"
import img6 from "@/assets/profile/profileImage/6.jpg"
import img7 from "@/assets/profile/profileImage/7.jpg"
import img8 from "@/assets/profile/profileImage/8.jpg"

const CATEGORIES = ["All projects", "Branding", "Web design", "App design", "Web app", "Dashboard"]

const PROJECTS = [
    {
        id: 1,
        title: "Brander",
        category: "Branding",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img1
    },
    {
        id: 2,
        title: "Vortex",
        category: "Branding",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img2
    },
    {
        id: 3,
        title: "Arcane",
        category: "Web design",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img3
    },
    {
        id: 4,
        title: "Optima",
        category: "Web design",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img4
    },
    {
        id: 5,
        title: "Hexium",
        category: "App design",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img5
    },
    {
        id: 6,
        title: "Virago",
        category: "Dashboard",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img6
    },
    {
        id: 7,
        title: "Cartorar",
        category: "Web app",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img7
    },
    {
        id: 8,
        title: "Learnovia",
        category: "Web app",
        tags: ["Branding", "Website", "Development"],
        description: "Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.",
        image: img8
    }
]

const Work = () => {
    const [activeCategory, setActiveCategory] = useState("All projects")

    const filteredProjects = activeCategory === "All projects"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);


    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground">
            <Header />
            <main className="flex flex-col pt-32 pb-20">
                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20">
                    <div className="max-w-5xl mb-12">
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-foreground mb-8">
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
                                <div className="flex flex-col gap-2">
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Work