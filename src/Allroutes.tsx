import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Portfolio from './components/main/Portfolio'
import { GotoTop } from './components/GotoTop'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './components/main/Contact'
import DigitalServiceDetails from './components/main/DigitalServiceDetails'
import BrandingDetails from './components/main/BrandingDetails'
import DesignDetails from './components/main/DesignDetails'
import PackagingDetails from './components/main/PackagingDetails'
import WebDevDetails from './components/main/WebDevDetails'
import SeoDetails from './components/main/SeoDetails'
import WebAppDetails from './components/main/WebAppDetails'
import About from './components/main/About'
import Career from './components/main/Career'

const Allroutes = () => {

    const lenis = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenisInstance = new Lenis({
            duration: 1, // Control the duration of the scroll
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
        });

        lenis.current = lenisInstance;

        // Synchronize Lenis with GSAP ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update);

        // Use GSAP ticker for animation loop
        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000); // Convert to milliseconds
        });

        gsap.ticker.lagSmoothing(0);


        // Cleanup on unmount
        return () => {
            lenisInstance.destroy();
            lenis.current = null;
        };
    }, []);



    return (
        <BrowserRouter>
            <GotoTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services/digital' element={<DigitalServiceDetails />} />
                <Route path='/services/branding' element={<BrandingDetails />} />
                <Route path='/services/design' element={<DesignDetails />} />
                <Route path='/services/packaging' element={<PackagingDetails />} />
                <Route path='/services/web-development' element={<WebDevDetails />} />
                <Route path='/services/seo' element={<SeoDetails />} />
                <Route path='/services/web-application' element={<WebAppDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/career' element={<Career />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Allroutes