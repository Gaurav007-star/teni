import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import Work from './components/main/Work'
import { GotoTop } from './components/GotoTop'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './components/main/Contact'

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
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Allroutes