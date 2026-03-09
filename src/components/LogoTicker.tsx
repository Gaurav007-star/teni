import { Box, Command, Hexagon, Layers, Zap, Activity } from 'lucide-react';
import { Marquee } from "@/components/ui/marquee";

const LogoItem = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="flex items-center justify-center gap-2 text-foreground opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
    <Icon className="w-8 h-8 sm:w-10 sm:h-10 fill-current" strokeWidth={1.5} />
    {name && <span className="text-lg sm:text-xl font-bold tracking-tight hidden sm:block">{name}</span>}
  </div>
);

const logos = [
  {
    id: "ipsum",
    component: (
      <div className="flex items-center gap-1 group cursor-pointer justify-center text-foreground opacity-80 hover:opacity-100 grayscale hover:grayscale-0">
        <div className="flex gap-0.5">
          <div className="h-6 w-1.5 bg-foreground skew-x-[-20deg]"></div>
          <div className="h-6 w-1.5 bg-foreground skew-x-[-20deg]"></div>
          <div className="h-6 w-1.5 bg-foreground skew-x-[-20deg]"></div>
          <div className="h-6 w-3 bg-foreground skew-x-[-20deg]"></div>
        </div>
        <span className="font-black text-xl italic tracking-tighter ml-1">IPSUM</span>
      </div>
    )
  },
  { id: "command", component: <LogoItem icon={Command} name="Command" /> },
  {
    id: "logo-ipsum",
    component: (
      <div className="flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 justify-center grayscale hover:grayscale-0 text-foreground">
        <div className="border-2 border-foreground rounded-full p-0.5">
          <Box className="w-6 h-6 stroke-[1.5]" />
        </div>
        <span className="font-medium text-lg">logo-ipsum</span>
      </div>
    )
  },
  {
    id: "logoipsum-hex",
    component: (
      <div className="flex items-center gap-2 cursor-pointer font-bold text-xl opacity-80 hover:opacity-100 justify-center grayscale hover:grayscale-0 text-foreground">
        <Hexagon className="w-8 h-8 fill-foreground text-foreground" />
        Logoipsum
      </div>
    )
  },
  { id: "layers", component: <LogoItem icon={Layers} name="Layers" /> },
  {
    id: "activity",
    component: (
      <div className="flex items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 justify-center grayscale hover:grayscale-0 text-foreground">
        <Activity className="w-8 h-8 border-2 border-foreground rounded-full p-1" />
        <Zap className="w-8 h-8" />
      </div>
    )
  }
];

export const LogoTicker = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-transparent py-20">
      <Marquee pauseOnHover  className="[--duration:30s] [--gap:4rem] md:[--gap:6rem]">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center px-4">
            {logo.component}
          </div>
        ))}
      </Marquee>

      {/* Optional: Side Gradients for a smoother fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
};