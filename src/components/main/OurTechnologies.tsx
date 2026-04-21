import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Technology SVG assets
import flipkart from '@/assets/technologies/Flipkart.svg';
import lin from '@/assets/technologies/LIN.svg';
import photoshop from '@/assets/technologies/Photoshop.svg';
import whatsapp from '@/assets/technologies/Whats APP.svg';
import ads from '@/assets/technologies/ads.svg';
import afterEffects from '@/assets/technologies/after-effects.svg';
import amazon from '@/assets/technologies/amazon.svg';
import facebook from '@/assets/technologies/facebook.svg';
import google from '@/assets/technologies/google_.svg';
import html from '@/assets/technologies/html.svg';
import illustrator from '@/assets/technologies/illustrator.svg';
import instagram from '@/assets/technologies/instagram.svg';
import php from '@/assets/technologies/php.svg';
import premierePro from '@/assets/technologies/premiere-pro.svg';
import reactJs from '@/assets/technologies/react js.svg';
import wordpress from '@/assets/technologies/wordpress.svg';
import youtube from '@/assets/technologies/you tube.svg';

const iconsData = [
  { src: flipkart,    label: 'Flipkart' },
  { src: lin,         label: 'LinkedIn' },
  { src: photoshop,   label: 'Photoshop' },
  { src: whatsapp,    label: 'WhatsApp' },
  { src: ads,         label: 'Google Ads' },
  { src: afterEffects,label: 'After Effects' },
  { src: amazon,      label: 'Amazon' },
  { src: facebook,    label: 'Facebook' },
  { src: google,      label: 'Google' },
  { src: html,        label: 'HTML5' },
  { src: illustrator, label: 'Illustrator' },
  { src: instagram,   label: 'Instagram' },
  { src: php,         label: 'PHP' },
  { src: premierePro, label: 'Premiere Pro' },
  { src: reactJs,     label: 'React JS' },
  { src: wordpress,   label: 'WordPress' },
  { src: youtube,     label: 'YouTube' },
];

interface TechNode {
  id: number;
  imgSrc: string;
  label: string;
  angle: number;
  radiusX: number;
  radiusY: number;
  orbitDuration: number;
  scatterX: number;
  scatterY: number;
  floatDuration: number;
  floatDelay: number;
  orbitDirection: number;
}

const TechIcon = ({ node, index, inView }: { node: TechNode; index: number; inView: boolean }) => {
  const positionControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      if (!isMounted) return;

      if (inView) {
        // 1. Reset/Initial state - strictly inside safe boundary offsets
        positionControls.set({
          x: node.scatterX,
          y: node.scatterY,
          scale: 0.2,
          opacity: 0
        });

        // 2. Gather to center with stagger
        await positionControls.start({
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: index * 0.08,
          },
        });

        if (!isMounted) return;

        // 3. Short pause at center
        await new Promise(resolve => setTimeout(resolve, 200));
        if (!isMounted) return;

        // 4. Burst outward to starting point on their designated elliptical track
        const startRad = node.angle * (Math.PI / 180);
        const startX = node.radiusX * Math.cos(startRad);
        const startY = node.radiusY * Math.sin(startRad);

        await positionControls.start({
          x: startX,
          y: startY,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
          },
        });

        if (!isMounted) return;

        // 5. Orbit continuously using precalculated intrinsic keyframes
        // This ensures the path stays perfectly elliptical without relying on rotated container limits.
        const steps = 60;
        const xFrames = [];
        const yFrames = [];

        for (let i = 1; i <= steps; i++) {
          const currAngle = node.angle + (360 * node.orbitDirection * (i / steps));
          const rad = currAngle * (Math.PI / 180);
          xFrames.push(node.radiusX * Math.cos(rad));
          yFrames.push(node.radiusY * Math.sin(rad));
        }

        positionControls.start({
          x: xFrames,
          y: yFrames,
          transition: {
            repeat: Infinity,
            duration: node.orbitDuration,
            ease: 'linear',
          },
        });

      } else {
        // Reset when out of view
        positionControls.stop();
        positionControls.start({
          x: node.scatterX,
          y: node.scatterY,
          scale: 0.2,
          opacity: 0,
          transition: { duration: 0.5 }
        });
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, [inView, index, node, positionControls]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 origin-center"
      animate={positionControls}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        {/* Subtle floating inner motion */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: node.floatDuration,
            delay: node.floatDelay,
            ease: 'easeInOut',
          }}
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-background border border-border/40 shadow-xl rounded-2xl relative group"
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          />
          <img
            src={node.imgSrc}
            alt={node.label}
            className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const OurTechnologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "-20% 0px -20% 0px", once: true });
  const [nodes, setNodes] = useState<TechNode[]>([]);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    let w = isClient ? window.innerWidth : 1024;
    let h = isClient ? window.innerHeight : 800;

    if (containerRef.current) {
      w = containerRef.current.clientWidth;
      h = containerRef.current.clientHeight;
    }

    // 1. Calculate boundaries 
    // Max half-size of icon + float tolerance + visual padding = ~60px
    const PADDING = 60;
    const maxRx = Math.max(10, (w / 2) - PADDING);
    const maxRy = Math.max(10, (h / 2) - PADDING);

    const isMobile = w < 768;
    // 2. Determine safe zones around center to not overlap text
    const minRxTextSafe = isMobile ? Math.max(80, (w / 2) - 80) : 340;
    const minRyTextSafe = isMobile ? 180 : 200;

    const generatedNodes = iconsData.map((data, i) => {
      const angleGap = 360 / iconsData.length;
      const angle = (i * angleGap) + (Math.random() * 20 - 10);

      // 3. Constrain the exact orbital radiuses to fall strictly within [TextBoundary, ScreenBoundary]
      const minRx = Math.min(maxRx, minRxTextSafe);
      const minRy = Math.min(maxRy, minRyTextSafe);

      const radiusX = minRx + Math.random() * Math.max(0, maxRx - minRx);
      const radiusY = minRy + Math.random() * Math.max(0, maxRy - minRy);

      // 4. Ensure initial scatter coordinates don't overflow bounds either
      const scatterX = (Math.random() * 2 - 1) * maxRx;
      const scatterY = (Math.random() * 2 - 1) * maxRy;

      return {
        id: i,
        imgSrc: data.src,
        label: data.label,
        angle,
        radiusX,
        radiusY,
        orbitDuration: 20 + Math.random() * 20,
        orbitDirection: Math.random() > 0.5 ? 1 : -1,
        scatterX,
        scatterY,
        floatDuration: 3 + Math.random() * 2,
        floatDelay: Math.random() * 2,
      };
    });
    setNodes(generatedNodes);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen max-[450px]:h-max flex max-[450px]:flex-col items-center justify-center overflow-hidden bg-background py-20 max-[450px]:py-0"
    >
      {/* Background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vh] h-[60vh] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Center Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-2xl px-6 text-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
      >
        <span className="text-sm tracking-[0.2em] font-semibold text-primary mb-6 uppercase">Tech Stack</span>
        <h2 className="text-4xl md:text-7xl font-semibold mb-6 text-foreground">
          Our Technologies
        </h2>
        <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-xl">
          We leverage cutting-edge tools to build robust, scalable, and high-performance digital experiences.
        </p>
      </motion.div>

      {/* Orbiting Icons */}
      <div className="absolute inset-0 pointer-events-none max-[450px]:hidden">
        {nodes.map((node, i) => (
          <div key={node.id} className="pointer-events-auto">
            <TechIcon node={node} index={i} inView={inView} />
          </div>
        ))}
      </div>

      {/* Mobile logo section */}
      <div className="mobile-technology-center w-full h-max flex items-start justify-center flex-wrap p-2 gap-2 sm:hidden mt-5">
        {
          iconsData.map((item, i) => (
            <div key={i} className="flex items-center justify-center p-2 bg-primary/10 rounded-xl">
              <img src={item.src} alt={item.label} className="size-10 object-contain" />
            </div>
          ))
        }
      </div>
    </section>
  );
};
