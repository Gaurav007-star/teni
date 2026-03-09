import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const GotoTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const [bottomOffset, setBottomOffset] = useState(32); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fullHeight = document.documentElement.scrollHeight;

            // Show after 20% scroll
            if (scrollY > (fullHeight * 0.2)) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // const footer = document.querySelector('footer');
            // if (footer) {
            //     const footerRect = footer.getBoundingClientRect();
            //     const viewportHeight = window.innerHeight;

            //     // Calculate how much of the footer is visible
            //     const footerVisibleHeight = Math.max(0, viewportHeight - footerRect.top);
            //     // We add the visible footer height to the default 32px bottom offset.
            //     setBottomOffset(32 + footerVisibleHeight);
            // } else {
            //     setBottomOffset(32);
            // }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed right-6 md:right-10 z-60 p-3 md:p-3.5 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center border border-border/10 cursor-pointer"
            style={{
                bottom: `32px`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out, visibility 0.3s'
            }}
            aria-label="Go to top"
        >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
    );
};
