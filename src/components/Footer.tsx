import { Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-background pt-10 pb-0 overflow-hidden text-foreground">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-10">

          {/* Left Side: Socials */}
          <div className="flex gap-6 items-center">
            <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6 fill-current" strokeWidth={0} onClick={() => window.open("https://www.linkedin.com/in/teni-teni-341424390/", "_blank")} />
            </a>
            <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" strokeWidth={2} onClick={() => window.open("https://www.instagram.com/teni_tech/", "_blank")} />
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-6 h-6 fill-current" strokeWidth={0} onClick={() => window.open("https://www.facebook.com/people/TENI/61580939469487/", "_blank")} />
            </a>
          </div>

          {/* Right Side: Addresses */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-24 text-sm leading-relaxed">
            <div>
              <h4 className="font-bold mb-4 font-sans text-base">Address</h4>
              <address className="flex flex-col text-muted-foreground not-italic hover:underline cursor-pointer" onClick={() => window.open("https://www.google.com/maps/place/22%C2%B046'19.6%22N+88%C2%B023'26.0%22E/@22.7721221,88.3879756,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7721221!4d88.3905505?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D", "_blank")}>
                <p>Barrackpore, Mohanpur(Senpukur)</p>
                <p>DIST-24 PGS North</p>
                <p>Kolkata-700121</p>
              </address>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-sans text-base">Contact</h4>
              <address className="flex flex-col gap-1 text-muted-foreground not-italic">
                <p>sarkar123@gmail.com</p>
                <p>+91 6291471106</p>
              </address>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Copyright */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-xs sm:text-sm text-muted-foreground font-medium mb-6">
          <span>©{new Date().getFullYear()} All rights reserved | Teni Digital</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>

      </div>

      {/* Bottom: Big Text */}

      <div className="w-full flex justify-center overflow-hidden leading-none mt-10">
        <h1 className="w-full h-max text-[30vw] font-bold tracking-tighter text-center select-none translate-y-[20%] dark:text-[#CDB2F0] text-[#1a1a1d]/90 origin-bottom">
          TENI
        </h1>
      </div>
    </footer>
  );
};
