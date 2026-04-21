import type { ReactNode } from 'react';

export interface FeatureDetail {
    // Title can be a string or a React element (to handle the <br/> tags)
    title: string | ReactNode;
    description: string;
}

/** * Represents a high-level service category (e.g., SEO, PPC)
 */
export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    focusOnLabel: string;
    focusOnText: string;
    // CSS utility classes for layout control
    detailsGridClass: string;
    detailBoxClass: string;
    // Theme toggle for UI styling
    isDark: boolean;
    details: FeatureDetail[];
}

export const digitalMarketingDetailsData: FeatureItem[] = [
    {
        id: "seo",
        title: "1. Search Engine Optimization",
        description: "Being on page two of Google is like hiding a secret. We make sure your brand is front and center where your customers are actually looking.",
        focusOnLabel: "Focus On",
        focusOnText: "Long-term growth, organic visibility, and authority.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Keyword Strategy",
                description: "We don't just find words; we find intent. We target the terms that drive conversions, not just traffic."
            },
            {
                title: <>On-Page <br className="hidden md:block" /> & Tech SEO</>,
                description: "Optimizing your site’s architecture, speed, and metadata to satisfy both users and algorithms."
            },
            {
                title: "Authority Building",
                description: "High-quality backlink acquisition and content marketing that establishes your brand as a leader."
            }
        ]
    },
    {
        id: "ppc",
        title: "2. Pay-Per-Click (PPC)",
        description: "Our Ad Channels: Platforms and their specific goals. We prioritize precision targeting to capture high-value leads immediately.",
        focusOnLabel: "Focus On",
        focusOnText: "Immediate ROI, precision targeting, and scalability.",
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: false,
        details: [
            {
                title: "Google Ads",
                description: "Capture high-intent searchers at the precise moment of purchase."
            },
            {
                title: "Meta Ads",
                description: "Visual storytelling and highly granular demographic targeting."
            },
            {
                title: "LinkedIn Ads",
                description: "Precise B2B lead generation and professional networking."
            },
            {
                title: "Retargeting",
                description: "Bring \"window shoppers\" back to seamlessly complete their purchase."
            }
        ]
    },
    {
        id: "social-media",
        title: "3. Social Media Management",
        description: "Social media is the digital handshake of your business. We handle the always-on nature of platforms so you can focus on running your company.",
        focusOnLabel: "Focus On",
        focusOnText: "Community, brand voice, and engagement.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Content Creation",
                description: "Custom graphics, reels, and copy tailored to your brand’s unique persona."
            },
            {
                title: "Community Mgmt",
                description: "Engaging directly with your followers in real-time to build deep loyalty."
            },
            {
                title: "Analytics & Insights",
                description: "Monthly dynamic reports that show what’s resonating and driving reach."
            }
        ]
    },
    {
        id: "content-marketing",
        title: "4. Content Marketing",
        description: "Content isn't just stuff to read—it’s a sales tool. We create a strategic, interconnected ecosystem of powerful assets.",
        focusOnLabel: "Focus On",
        focusOnText: "Education, trust, and effective lead nurturing.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Blogs & Articles",
                description: "SEO-driven pieces that directly answer your customers' biggest questions."
            },
            {
                title: "Email Marketing",
                description: "Segmented campaigns that smoothly move leads through the funnel with $0 wasted."
            },
            {
                title: "Case Studies",
                description: "Detailed social proof that proves your methodology actually works in the real world."
            }
        ]
    },
    {
        id: "partner",
        title: "5. Why Partner With Us?",
        description: "Finding the right partner is critical. We prioritize robust data, complete transparency, and flawless agility above anything else.",
        focusOnLabel: "Focus On",
        focusOnText: "The \"Human Element\" and absolute results.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: true,
        details: [
            {
                title: "Data-Driven, Human-Led",
                description: "We track every click, but we never forget that there's a person on the other side."
            },
            {
                title: "Transparency First",
                description: "No vanity metrics. We report on numbers that impact your bottom line: Leads & Revenue."
            },
            {
                title: "Agile Strategy",
                description: "The landscape changes weekly. We pivot your strategy in real-time to keep you ahead."
            }
        ]
    }
];


export const brandingDetailsData: FeatureItem[] = [
    {
        id: "brand-strategy",
        title: "1. Brand Strategy & Positioning",
        description: "Before we pick a font, we find your voice. We dive deep into your business DNA to uncover what makes you irreplaceable.",
        focusOnLabel: "Focus On",
        focusOnText: "Purpose, differentiation, and the \"Why.\"",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Market Research",
                description: "Analyzing the competitive landscape to find your \"Blue Ocean.\""
            },
            {
                title: "Brand Archetyping",
                description: "Defining your brand’s personality—are you the Explorer, the Sage, or the Rebel?"
            },
            {
                title: "Value Proposition",
                description: "Crafting a clear, punchy statement that tells customers exactly why they should choose you."
            }
        ]
    },
    {
        id: "visual-identity",
        title: "2. Visual Identity Design",
        description: "Your visual identity is your brand’s \"uniform.\" We ensure it’s tailored to perfection and impossible to ignore.",
        focusOnLabel: "Focus On",
        focusOnText: "Aesthetics, consistency, and recognition.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Logo Systems",
                description: "We create versatile marks—from primary logos to favicons—that work across billboards and smartwatches alike."
            },
            {
                // Utilizing the ReactNode typing for responsive text breaks just like the SEO example
                title: <>Typography <br className="hidden md:block" /> & Color Theory</>,
                description: "Selecting palettes and fonts that trigger the right emotional response."
            },
            {
                title: "Brand Style Guides",
                description: "A comprehensive \"Bible\" for your brand to ensure every piece of content stays on-brand, forever."
            }
        ]
    },
    {
        id: "brand-voice",
        title: "3. Brand Voice & Messaging",
        description: "What you say matters, but how you say it changes everything. We develop a linguistic framework that resonates with your target audience.",
        focusOnLabel: "Focus On",
        focusOnText: "Communication, tone, and storytelling.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Tagline Development",
                description: "Distilling your entire mission into a few unforgettable words."
            },
            {
                title: "Tone of Voice",
                description: "Ensuring your brand sounds the same whether it’s a formal proposal or a cheeky Instagram caption."
            },
            {
                title: "Storytelling Framework",
                description: "Turning your brand’s history and mission into a narrative that invites customers to be the hero."
            }
        ]
    },
    {
        id: "brand-experience",
        title: "4. Brand Experience (Touchpoints)",
        description: "Every time a customer interacts with you, they are experiencing your brand. We make sure those moments are seamless.",
        focusOnLabel: "Focus On",
        focusOnText: "Physical and digital presence.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Packaging Design",
                description: "Creating an \"unboxing\" experience that turns customers into advocates."
            },
            {
                title: "Stationery & Collateral",
                description: "Business cards, letterheads, and pitch decks that command authority."
            },
            {
                title: "Employer Branding",
                description: "Shaping your internal culture so your team is as excited about the brand as your customers are."
            }
        ]
    },
    {
        id: "why-branding-matters",
        title: "5. Why Branding Matters",
        description: "\"Products are created in the factory, but brands are created in the mind.\" A strong brand allows you to charge a premium, reduce acquisition costs, and build a legacy. We don't just make things look pretty; we make them mean something.",
        focusOnLabel: "Focus On",
        focusOnText: "The Transformation Process.",
        // Switched to a 4-column grid to perfectly accommodate the 4 phases of the Transformation Process
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true, // Set to true to act as a bold anchor section at the bottom, matching the previous array
        details: [
            {
                title: "1. Discovery",
                description: "Understanding your vision. Deliverable: Comprehensive Audit Report."
            },
            {
                title: "2. Strategy",
                description: "Defining your unique angle. Deliverable: Strategic Brand Roadmap."
            },
            {
                title: "3. Design",
                description: "Visualizing the identity. Deliverable: Custom Concepts & Moodboards."
            },
            {
                title: "4. Launch",
                description: "Introducing the new you. Deliverable: Full, ready-to-deploy Brand Kit."
            }
        ]
    }
];


export const designDetailsData: FeatureItem[] = [
    {
        id: "graphic-design",
        title: "1. Graphic Design & Visual Storytelling",
        description: "We translate complex ideas into stunning visuals. Whether it’s for digital use or physical space, our designs are crafted to stop the scroll and start a conversation.",
        focusOnLabel: "Focus On",
        focusOnText: "Communication, impact, and clarity.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Marketing Collateral",
                description: "Brochures, flyers, and posters that demand attention."
            },
            {
                title: "Infographics",
                description: "Turning data-heavy information into digestible, beautiful visual narratives."
            },
            {
                title: "Presentation Design",
                description: "Pitch decks and Keynotes that help you win the room and close the deal."
            }
        ]
    },
    {
        id: "ui-ux",
        title: "2. UI/UX & Digital Product Design",
        description: "A beautiful website is useless if people can’t find the \"Buy\" button. We balance aesthetics with effortless functionality to create digital experiences users love.",
        focusOnLabel: "Focus On",
        focusOnText: "Usability, interface, and human-centric design.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "User Interface (UI)",
                description: "High-fidelity layouts, icons, and interactive elements."
            },
            {
                // Utilizing ReactNode for balanced typography on desktop
                title: <>User Experience <br className="hidden md:block" /> (UX)</>,
                description: "Wireframing, user flows, and prototyping to ensure a frictionless journey."
            },
            {
                title: "Responsive Design",
                description: "Ensuring your digital presence looks flawless on mobile, tablet, and desktop."
            }
        ]
    },
    {
        id: "print-editorial",
        title: "3. Print & Editorial Design",
        description: "In a digital world, the power of print is in its permanence. We handle the technical nuances of print to ensure your physical assets are as sharp as your digital ones.",
        focusOnLabel: "Focus On",
        focusOnText: "Tactile quality, layout, and precision.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Publication Layouts",
                description: "Magazine spreads, annual reports, and eBooks."
            },
            {
                title: "Packaging Design",
                description: "Creative structures and labels that stand out on a crowded shelf."
            },
            {
                title: "Large Format",
                description: "Banners, signage, and exhibition graphics for high-impact presence."
            }
        ]
    },
    {
        id: "motion-graphics",
        title: "4. Motion Graphics & Animation",
        description: "Static images tell a story; moving ones bring it to life. We use motion to add a layer of sophistication and engagement to your brand.",
        focusOnLabel: "Focus On",
        focusOnText: "Energy, movement, and engagement.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Explainer Videos",
                description: "Simplifying your product or service through 2D/3D animation."
            },
            {
                title: "Logo Animation",
                description: "Giving your brand mark a dynamic personality."
            },
            {
                title: "Social Assets",
                description: "High-energy motion snippets for Instagram, TikTok, and YouTube."
            }
        ]
    },
    {
        id: "creative-philosophy",
        title: "5. Our Creative Philosophy",
        description: "\"Design is the silent ambassador of your brand.\" We prioritize originality over templates, strategic thinking, and technical mastery (from CMYK to SVG) to distill your vision into a masterpiece.",
        focusOnLabel: "Focus On",
        focusOnText: "The Proven Workflow & Technical Mastery.",
        // 4-column grid layout applied here to house the 4 workflow steps
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true,
        details: [
            {
                title: "1. Moodboarding",
                description: "We set the visual tone and direction early to ensure complete alignment."
            },
            {
                title: "2. Iterative Sketching",
                description: "Exploring multiple concepts and angles to find the ultimate \"Big Idea.\""
            },
            {
                title: "3. Refinement",
                description: "Polishing the chosen direction iteratively until every single detail is perfect."
            },
            {
                title: "4. Handoff",
                description: "Delivering high-resolution, print-ready, and fully web-optimized assets."
            }
        ]
    }
];


export const packagingDetailsData: FeatureItem[] = [
    {
        id: "structural-packaging",
        title: "1. Structural Packaging Design",
        description: "Good design starts with a solid foundation. We don't just design the \"skin\"; we design the skeleton.",
        focusOnLabel: "Focus On",
        focusOnText: "Functionality, ergonomics, and protection.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Custom Die-Lines",
                description: "Creating unique shapes and opening experiences that set your product apart on the shelf."
            },
            {
                title: "Prototyping",
                description: "3D mockups and physical samples to test \"hand-feel,\" weight distribution, and durability."
            },
            {
                title: "Unboxing Experience",
                description: "Engineering that \"wow\" moment when a customer opens your product for the first time."
            }
        ]
    },
    {
        id: "visual-identity-graphics",
        title: "2. Visual Identity & Graphics",
        description: "We translate your brand’s soul into a 3D canvas. We ensure that your most important information is readable in the three seconds a consumer spends looking at a shelf.",
        focusOnLabel: "Focus On",
        focusOnText: "Shelf impact, hierarchy, and brand alignment.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Label Design",
                description: "Strategic placement of typography, regulatory info, and USPs (Unique Selling Points)."
            },
            {
                title: "Color Psychology",
                description: "Using finishes and palettes that trigger specific consumer behaviors and cravings."
            },
            {
                // Utilizing ReactNode for balanced typography on desktop
                title: <>Finish & <br className="hidden md:block" /> Texture</>,
                description: "Expert advice on spot UV, foil stamping, embossing, and soft-touch laminates to add a premium feel."
            }
        ]
    },
    {
        id: "sustainable-eco-friendly",
        title: "3. Sustainable & Eco-Friendly Solutions",
        description: "Today’s consumer votes with their wallet for the planet. We help you transition to \"Green\" without sacrificing style or safety.",
        focusOnLabel: "Focus On",
        focusOnText: "Ethics, modern trends, and material innovation.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Material Sourcing",
                description: "Utilizing FSC-certified papers, biodegradable plastics, and post-consumer recycled (PCR) materials."
            },
            {
                title: "Minimalist Engineering",
                description: "Reducing waste by optimizing the amount of material used without compromising product safety."
            },
            {
                title: "Plastic-Free Alternatives",
                description: "Innovative fiber-based solutions for inserts and protective layers."
            }
        ]
    },
    {
        id: "retail-ecommerce",
        title: "4. Retail & E-Commerce Optimization",
        description: "Packaging has to do more than look good—it has to survive the journey.",
        focusOnLabel: "Focus On",
        focusOnText: "Compliance, shipping, and logistics.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Shelf-Ready Packaging",
                description: "Designing for retail ease, ensuring your product is easy for staff to stock and easy for customers to grab."
            },
            {
                title: "SIOC Packaging",
                description: "Ships In Own Container: Reducing shipping costs and waste for D2C (Direct-to-Consumer) brands."
            },
            {
                title: "Regulatory Compliance",
                description: "Ensuring all nutritional facts, barcodes, and legal requirements are perfectly integrated into the design."
            }
        ]
    },
    {
        id: "why-invest-packaging",
        title: "5. Why Invest in Professional Packaging?",
        description: "\"Packaging is the only marketing tool that reaches 100% of your customers.\" A strategic package design protects your investment, projects your quality, and persuades the buyer. We bridge the gap between \"just a box\" and a powerful brand asset.",
        focusOnLabel: "Focus On",
        focusOnText: "Our \"Concept to Shelf\" Process.",
        // 4-column grid layout applied here to house the 4 process steps seamlessly
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true,
        details: [
            {
                title: "01. Discovery",
                description: "Analyzing product specs and target audience. Outcome: Comprehensive Design Brief."
            },
            {
                title: "02. Concepting",
                description: "Sketching shapes and visual directions. Outcome: Moodboards & Initial Sketches."
            },
            {
                title: "03. Development",
                description: "Creating the digital die-line and artwork. Outcome: High-Res 3D Renders."
            },
            {
                title: "04. Production",
                description: "Coordinating with printers and manufacturers. Outcome: Final Print-Ready Files."
            }
        ]
    }
];


export const webDevDetailsData: FeatureItem[] = [
    {
        id: "custom-web-dev",
        title: "1. Custom Web Application Development",
        description: "Off-the-shelf templates often come with \"bloat\" that slows you down. We build bespoke web solutions tailored to your specific workflow.",
        focusOnLabel: "Focus On",
        focusOnText: "Functionality, scalability, and unique business logic.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Full-Stack Excellence",
                description: "Expert development across front-end (what users see) and back-end (the engine)."
            },
            {
                title: "API Integration",
                description: "Seamlessly connecting your site with CRM tools, payment gateways, and third-party software."
            },
            {
                title: "Scalable Architecture",
                description: "Building a foundation that grows with your traffic, from 100 visitors to 1,000,000."
            }
        ]
    },
    {
        id: "responsive-design",
        title: "2. Responsive & \"Mobile-First\" Design",
        description: "Over 60% of web traffic now happens on mobile devices. If your site doesn't look perfect on a phone, you're losing customers.",
        focusOnLabel: "Focus On",
        focusOnText: "Accessibility, screen adaptability, and reach.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Fluid Layouts",
                description: "Designs that automatically snap into place on desktops, tablets, and smartphones."
            },
            {
                // Utilizing ReactNode for balanced typography on desktop
                title: <>Cross-Browser <br className="hidden md:block" /> Compatibility</>,
                description: "Ensuring a consistent experience across Chrome, Safari, Firefox, and Edge."
            },
            {
                title: "Touch-Optimized UI",
                description: "Buttons and navigation designed for thumbs, not just mouse clicks."
            }
        ]
    },
    {
        id: "ecommerce-dev",
        title: "3. E-Commerce Development",
        description: "We turn \"browsers\" into \"buyers.\" Our e-commerce builds focus on reducing friction at the checkout and maximizing your average order value.",
        focusOnLabel: "Focus On",
        focusOnText: "Conversion, security, and user journey.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Platform Expertise",
                description: "Specialized development in Shopify, WooCommerce, Magento, and custom headless commerce."
            },
            {
                title: "Secure Payments",
                description: "Implementing top-tier encryption and secure processing to protect customer data."
            },
            {
                title: "Inventory Management",
                description: "Smart back-ends that make managing products, stock, and shipping a breeze."
            }
        ]
    },
    {
        id: "performance-vitals",
        title: "4. Performance & Core Web Vitals",
        description: "A one-second delay in page load time can lead to a 7% drop in conversions. We build for speed and technical health.",
        focusOnLabel: "Focus On",
        focusOnText: "Speed, SEO, and technical health.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Optimized Loading",
                description: "Minimizing code, compressing assets, and utilizing lazy loading for instant rendering."
            },
            {
                title: "SEO-Friendly Structure",
                description: "Clean HTML5 and Schema markup that helps search engines crawl and rank your site."
            },
            {
                title: "Ongoing Maintenance",
                description: "Regular security patches and performance audits to keep your site running at peak efficiency."
            }
        ]
    },
    {
        id: "tech-stack-process",
        title: "5. Our Process & Tech Stack",
        description: "We don't just \"build websites.\" We build digital experiences that convert. By combining technical rigor with modern tech stacks (React, Node.js, Headless CMS), we ensure your web presence is a true reflection of your brand's excellence.",
        focusOnLabel: "Focus On",
        focusOnText: "The User-Centric Process.",
        // 4-column grid layout applied here to house the phases seamlessly
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true,
        details: [
            {
                title: "01. Design & Strategy",
                description: "Wireframing the user journey and creating an intuitive, beautiful UI/UX."
            },
            {
                title: "02. Development",
                description: "Turning designs into high-performance, bug-free code using the right tools for the job."
            },
            {
                title: "03. QA & Testing",
                description: "Rigorous testing across devices and browsers to ensure absolute perfection."
            },
            {
                title: "04. Launch & Support",
                description: "Deploying your site and providing long-term technical care and maintenance."
            }
        ]
    }
];

export const seoDetailsData: FeatureItem[] = [
    {
        id: "technical-seo",
        title: "1. Technical SEO & Site Architecture",
        description: "A beautiful website is useless if search engines can’t read it. We build a flawless technical foundation that ensures your site is indexed faster and ranked higher.",
        focusOnLabel: "Focus On",
        focusOnText: "Crawlability, speed, and the \"Core Web Vitals\" of 2026.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Core Web Vitals",
                description: "Ensuring ultra-fast loading speeds and visual stability to meet Google’s strictest performance standards."
            },
            {
                title: "Advanced Schema",
                description: "Implementing structured data so AI engines (like Gemini and ChatGPT) can accurately extract and cite your information."
            },
            {
                title: "Crawl Budget",
                description: "Streamlining your site’s architecture to ensure search bots prioritize your most important, high-converting pages."
            }
        ]
    },
    {
        id: "content-strategy-eeat",
        title: "2. Content Strategy & E-E-A-T",
        description: "In the age of AI-generated noise, authenticity is your competitive advantage. We create content that proves to both humans and algorithms that you are a leader in your field.",
        focusOnLabel: "Focus On",
        focusOnText: "Experience, Expertise, Authoritativeness, and Trustworthiness.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Topic Clusters",
                description: "Moving beyond single keywords to build \"Topical Authority\" through interconnected, deep-dive content hubs."
            },
            {
                title: "Expert-Led Content",
                description: "Developing articles backed by real-world data, case studies, and verified author profiles to boost your E-E-A-T signals."
            },
            {
                // Utilizing ReactNode to keep the long AEO title balanced
                title: <>Answer Engine <br className="hidden md:block" /> Optimization (AEO)</>,
                description: "Structuring content specifically to win \"Position Zero\" and appear in AI-generated search summaries."
            }
        ]
    },
    {
        id: "off-page-authority",
        title: "3. Off-Page Authority & Digital PR",
        description: "Your reputation outside your website is just as important as what’s on it. We build the \"digital bridges\" that drive referral traffic and authority.",
        focusOnLabel: "Focus On",
        focusOnText: "Trust signals, brand mentions, and high-quality backlinks.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Strategic Link Building",
                description: "Eschewing \"spammy\" tactics for high-authority placements on reputable industry news sites and blogs."
            },
            {
                title: "Brand Mentions",
                description: "Increasing your brand’s footprint across the web to reinforce your status as a trusted entity."
            },
            {
                title: "Competitor Analysis",
                description: "Identifying where your rivals are winning and outmaneuvering them with superior outreach and content."
            }
        ]
    },
    {
        id: "specialized-seo",
        title: "4. Specialized SEO Services",
        description: "We apply targeted strategies tailored to your exact industry and target market to ensure maximum visibility where it counts.",
        focusOnLabel: "Focus On",
        focusOnText: "Hyper-local and industry-specific growth.",
        // 4-column grid layout applied here to house the 4 specialized services seamlessly
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: false,
        details: [
            {
                title: "Local SEO",
                description: "Dominating \"near me\" searches and Google Business Profile optimization."
            },
            {
                title: "E-Commerce SEO",
                description: "Optimizing product feeds, category pages, and reducing \"Zero-Click\" abandonment."
            },
            {
                title: "GEO (Generative SEO)",
                description: "Ensuring your brand is the primary source for AI chat responses."
            },
            {
                title: "International SEO",
                description: "Scaling your reach across borders with hreflang tags and localized strategy."
            }
        ]
    },
    {
        id: "strategy-roadmap",
        title: "5. The 2026 Strategy Roadmap",
        description: "\"SEO is not a one-time project; it is a continuous race to relevance.\" The algorithms of 2026 reward clarity, speed, and trust. We use data-driven, sustainable methods that future-proof your digital presence against every algorithm update.",
        focusOnLabel: "Focus On",
        focusOnText: "Continuous Relevance & Future-Proofing.",
        // 4-column grid layout applied here to house the roadmap steps
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true,
        details: [
            {
                title: "1. Comprehensive Audit",
                description: "We identify the \"invisible\" technical hurdles holding you back."
            },
            {
                title: "2. Keyword & Intent",
                description: "We don't just target high-volume words; we target buying intent."
            },
            {
                title: "3. On-Page Optimization",
                description: "Transforming headers, meta-data, and UX for maximum engagement."
            },
            {
                title: "4. Transparency Reports",
                description: "Detailed monthly insights into your rankings, traffic quality, and leads generated."
            }
        ]
    }
];


export const webAppDetailsData: FeatureItem[] = [
    {
        id: "enterprise-web-apps",
        title: "1. Custom Enterprise Web Applications",
        description: "We build the digital infrastructure that powers your operations. From internal dashboards to complex management systems, we create tools that fit your business like a glove.",
        focusOnLabel: "Focus On",
        focusOnText: "Efficiency, internal tools, and business logic.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "CRM & ERP Solutions",
                description: "Custom-built platforms to manage customer relationships and resource planning without the monthly \"per-user\" fees of SaaS."
            },
            {
                title: "Legacy Modernization",
                description: "Refactoring and migrating aging applications to modern frameworks while preserving your vital data."
            },
            {
                title: "Workflow Automation",
                description: "Turning manual, repetitive tasks into automated digital processes that save hundreds of man-hours."
            }
        ]
    },
    {
        id: "saas-development",
        title: "2. SaaS (Software as a Service) Development",
        description: "Have a disruptive idea for the next big software platform? We specialize in building robust, multi-tenant SaaS products ready for market.",
        focusOnLabel: "Focus On",
        focusOnText: "Multi-tenancy, monetization, and user growth.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Subscription & Billing",
                description: "Seamless handling of tiered pricing, trials, and global payment gateways (Stripe, PayPal, etc.)."
            },
            {
                title: "Scalable Cloud Architecture",
                description: "Using AWS, Azure, or Google Cloud to ensure your app scales automatically as your user base explodes."
            },
            {
                title: <>Identity & Access <br className="hidden md:block" /> Mgmt (IAM)</>,
                description: "Secure login systems with Multi-Factor Authentication (MFA) and role-based permissions."
            }
        ]
    },
    {
        id: "progressive-web-apps",
        title: "3. Progressive Web Apps (PWA)",
        description: "Get the best of both worlds: the reach of the web and the feel of a native mobile app. PWAs are the future of mobile engagement without the high cost of App Store development.",
        focusOnLabel: "Focus On",
        focusOnText: "Mobile reach, offline access, and cost-efficiency.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Offline Functionality",
                description: "Service workers that allow users to interact with the app even without an internet connection."
            },
            {
                title: "Push Notifications",
                description: "Re-engage users directly on their home screens with timely alerts."
            },
            {
                title: "App-Like UX",
                description: "Smooth transitions, high-speed loading, and an \"Add to Home Screen\" prompt for instant access."
            }
        ]
    },
    {
        id: "api-integration",
        title: "4. API Development & Third-Party Integration",
        description: "No application is an island. We ensure your software communicates fluently with the rest of the digital ecosystem.",
        focusOnLabel: "Focus On",
        focusOnText: "Connectivity and data synergy.",
        detailsGridClass: "grid-cols-1 md:grid-cols-3",
        detailBoxClass: "p-8 md:p-10",
        isDark: false,
        details: [
            {
                title: "Restful & GraphQL APIs",
                description: "Building secure, well-documented APIs that allow other softwares to connect with your platform."
            },
            {
                title: "Third-Party Synergy",
                description: "Integrating your app with tools like Slack, Twilio, Salesforce, or specialized industry hardware."
            },
            {
                title: "Data Migration",
                description: "Safely moving large-scale datasets from old systems into your new, high-performance application."
            }
        ]
    },
    {
        id: "development-lifecycle",
        title: "5. The Development Lifecycle",
        description: "\"We don't just write code; we build assets.\" We prioritize clean, maintainable code backed by a modern 2026 tech stack (Next.js, Python, PostgreSQL) so it won’t become \"technical debt.\" Whether an MVP or a global enterprise solution, we deliver software that performs.",
        focusOnLabel: "Focus On",
        focusOnText: "Agile Execution & Absolute Security.",
        // 4-column grid layout applied here to house the core lifecycle phases
        detailsGridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        detailBoxClass: "p-8",
        isDark: true,
        details: [
            {
                title: "1. Strategy & Prototyping",
                description: "We consult to refine your app’s logic, delivering high-fidelity UI/UX wireframes you can \"feel.\""
            },
            {
                title: "2. Agile Development",
                description: "Working in two-week sprints with regular demos, ensuring you are always in the loop."
            },
            {
                title: "3. Security Testing",
                description: "Rigorous penetration testing and data encryption to ensure your application is unhackable."
            },
            {
                title: "4. Deploy & Monitor",
                description: "Launching via Docker/Kubernetes on optimized servers with 24/7 cloud uptime monitoring."
            }
        ]
    }
];










