import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sun, Moon, ArrowRight, LayoutGrid } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { useTheme } from '@/context/ThemeProvider';
import Logo from "@/assets/Teni_Logo-01.png";
import { useNavigate } from 'react-router';

// Define the shape of a navigation item
interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
  icon?: React.ElementType;
  children?: {
    title: string;
    desc: string;
    href: string;
  }[];
}


// Navigation Data Configuration
const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    hasDropdown: true,
    icon: LayoutGrid,
    children: [
      { title: "Digital Marketing", desc: "Boost organic traffic & rankings", href: "#" },
      { title: "Branding", desc: "Maximize ROI on paid ads", href: "#" },
      { title: "Creative Design", desc: "Tell your brand's story", href: "#" },
      { title: "Packaging", desc: "Build community & engagement", href: "#" },
      { title: "Web Development", desc: "Tell your brand's story", href: "#" },
      { title: "SEO", desc: "Tell your brand's story", href: "#" },
      { title: "Web Application", desc: "Tell your brand's story", href: "#" },

    ]
  },
  {
    label: "About",
    hasDropdown: false,
    href: "#",
    // icon: Users,
    // children: [
    //   { title: "Our Story", desc: "The journey since 2010", href: "#" },
    //   { title: "Team", desc: "Meet the digital experts", href: "#" },
    //   { title: "Culture", desc: "How we work together", href: "#" },
    // ]
  },
  {
    label: "Work",
    hasDropdown: false,
    href: "/work",
    // icon: Briefcase,
    // children: [
    //   { title: "Portfolio", desc: "Our recent masterpieces", href: "#" },
    //   { title: "Client List", desc: "Brands we've partnered with", href: "#" },
    // ]
  },
  { label: "Career", hasDropdown: false, href: "#" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

const DesktopNavItem: React.FC<{ item: NavItem }> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative flex items-center">
      <div
        onClick={() => item.href && navigate(item.href)}
        className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50"
      >
        {item.label}
        {item.hasDropdown && (
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-transform duration-300 group-hover:-rotate-180" />
        )}
      </div>

      {/* Desktop Dropdown Panel */}
      {item.hasDropdown && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 w-[280px]">

          {/* Dropdown Content - Solid Background */}
          <div className="dark:bg-muted bg-white rounded-xl p-1.5 border-2 border-secondary overflow-hidden">
            <div className="flex flex-col">
              {item.children?.map((child, idx) => (
                <a
                  key={idx}
                  href={child.href}
                  className="group/item flex items-start gap-3 p-2.5 rounded-lg hover:bg-secondary transition-all duration-200"
                >
                  <div className="mt-0.5 bg-secondary/50 p-1.5 rounded-md group-hover/item:bg-background shadow-sm border border-transparent group-hover/item:border-border transition-all">
                    {item.icon && <item.icon className="w-4 h-4 text-muted-foreground group-hover/item:text-foreground transition-colors" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground flex items-center gap-1">
                      {child.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-primary" />
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-2 font-medium opacity-80">{child.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavItem: React.FC<{ item: NavItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/20 last:border-0">
      {item.href ? (
        <a
          href={item.href}
          className="flex items-center justify-between w-full py-5 text-lg font-medium text-foreground hover:text-primary transition-colors"
        >
          <span className="flex items-center gap-4">
            {item.label}
          </span>
        </a>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-5 text-lg font-medium text-foreground hover:text-primary transition-colors"
        >
          <span className="flex items-center gap-4">
            {item.label}
          </span>
          {item.hasDropdown && (
            <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
          )}
        </button>
      )}

      {/* Mobile Dropdown Content */}
      <div className={cn(
        "grid transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="min-h-0">
          <div className="flex flex-col gap-2">
            {item.children?.map((child, idx) => (
              <a
                key={idx}
                href={child.href}
                className="py-3 px-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 text-sm transition-colors flex items-center justify-between group"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{child.title}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50 cursor-pointer group">
          {/* <div className="grid grid-cols-3 gap-0.5 w-6 h-6 transition-transform duration-500 group-hover:rotate-90">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full  " />
            <div className="w-1.5 h-1.5 bg-primary rounded-full " />
            <div className="w-1.5 h-1.5 bg-primary rounded-full " />
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-sans">MARQV</span> */}
          <img src={Logo} alt="Logo" className="w-20 h-auto" onClick={() => navigate("/")} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 h-full">
          {NAV_ITEMS.map((item, index) => (
            <DesktopNavItem key={index} item={item} />
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <Button variant={"ghost"} size={"lg"}>
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50 ">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out pt-28 px-6 overflow-y-auto",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col pb-10 gap-2">
          {NAV_ITEMS.map((item, index) => (
            <MobileNavItem key={index} item={item} />
          ))}

          <div className="mt-8">
            <Button variant={"ghost"}>
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};