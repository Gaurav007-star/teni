import { Marquee } from "@/components/ui/marquee";

import logo1 from "@/assets/Clients/Clients logos-01.png";
import logo2 from "@/assets/Clients/Clients logos-02.png";
import logo3 from "@/assets/Clients/Clients logos-03.png";
import logo4 from "@/assets/Clients/Clients logos-04.png";
import logo5 from "@/assets/Clients/Clients logos-05.png";
import logo6 from "@/assets/Clients/Clients logos-06.png";
import logo7 from "@/assets/Clients/Clients logos-07.png";
import logo8 from "@/assets/Clients/Clients logos-08.png";
import logo9 from "@/assets/Clients/Clients logos-09.png";
import logo10 from "@/assets/Clients/Clients logos-10.png";
import logo11 from "@/assets/Clients/Clients logos-11.png";
import logo12 from "@/assets/Clients/Clients logos-12.png";

const logos = [
  { id: "logo1", src: logo1 },
  { id: "logo2", src: logo2 },
  { id: "logo3", src: logo3 },
  { id: "logo4", src: logo4 },
  { id: "logo5", src: logo5 },
  { id: "logo6", src: logo6 },
  { id: "logo7", src: logo7 },
  { id: "logo8", src: logo8 },
  { id: "logo9", src: logo9 },
  { id: "logo10", src: logo10 },
  { id: "logo11", src: logo11 },
  { id: "logo12", src: logo12 },
];

export const LogoTicker = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-transparent py-20 max-[450px]:py-0">
      <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center px-4 ">
            <img 
              src={logo.src} 
              alt={`Client logo`} 
              className="h-16 sm:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        ))}
      </Marquee>

      {/* Optional: Side Gradients for a smoother fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
};