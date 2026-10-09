import React from "react";
import { ArrowUp, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Container from "../Common/Container";
import Logo from "../Common/Logo";
import SocialIcons from "../Hero/SocialIcons";
import founderImage from "../../../assets/img/mitul.png";

interface FooterProps {
  onOpenVolunteerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="bg-[#080811] text-white py-4 relative overflow-hidden font-sans"
    >
      {/* Subtle Background Accent Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-2 border-b border-gray-800/80 items-start">
          {/* Left Column: Brand & Info */}
          <div className="lg:col-span-6 space-y-6">
            <Logo
              className="gap-3"
              imageClassName="h-10 rounded-2xl"
              titleClassName="text-white"
              subtitleClassName="text-gray-400"
            />

            {/* Direct Text Contact Info */}
            <div className="space-y-1 text-base font-medium">
              <p className="text-gray-200">
                <span className="text-[#e6007e]">Mail:</span>{" "}
                <a
                  href="mailto:risylab.info@gmail.com"
                  className="hover:text-pink-400 transition-colors"
                >
                  risylab.info@gmail.com
                </a>
              </p>
              <p className="text-gray-200">
                <span className="text-[#e6007e]">What's app:</span>{" "}
                <a
                  href="https://wa.me/8801742299472"
                  className="hover:text-pink-400 transition-colors"
                >
                  +8801742299472
                </a>
              </p>
            </div>

            {/* Main Social Links */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider block mb-3">
                Follow Our Publications & Media
              </span>
              <SocialIcons variant="light" />
            </div>
          </div>

          {/* Right Column: Founder's Talk Section */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <div className="max-w-md">
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-start text-left shrink-0">
                  {/* Tagline / Message */}

                  <h3 className="text-2xl font-bold text-white mb-6">
                    Founder’s Talk
                  </h3>

                  <div className="text-lg font-medium text-gray-200 max-w-[200px] leading-snug">
                    Empowering youth to make a Green World
                  </div>

                  <p className="text-xs text-pink-100 font-light mt-2">Follow:</p>

                  {/* Founder Social Media Bar */}
                  <div className="flex items-center gap-2 bg-[#0d0f1d] p-2 rounded-2xl mt-4 border border-gray-800/60 shadow-lg">
                    <a
                      href="https://www.facebook.com/sabbirhmitul"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-[#181a29] text-gray-300 hover:text-white hover:bg-[#e6007e] rounded-xl transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/sabbirhmitul/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-[#181a29] text-gray-300 hover:text-white hover:bg-[#e6007e] rounded-xl transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@sabbirhmitul"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-[#181a29] text-gray-300 hover:text-white hover:bg-[#e6007e] rounded-xl transition-all"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sabbirhmitul/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center bg-[#181a29] text-gray-300 hover:text-white hover:bg-[#e6007e] rounded-xl transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                {/* Founder Card Container */}
                <div className="flex flex-col items-center">
                  {/* Parent wrapper needs 'relative' so the pink banner positions correctly */}
                  <div className="relative flex flex-col items-center pb-4">
                    {/* Founder Image Box */}
                    <div className="w-44 h-44 bg-white rounded-[2rem] overflow-hidden shadow-2xl">
                      <img
                        src={founderImage}
                        alt="Sabbir H mitul"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Pink Overlay Badge at the Bottom Corner / Overlap */}
                    <div className="absolute -bottom-1 w-[90%] bg-[#e6007e] text-white p-3 rounded-2xl shadow-lg z-10 text-left">
                      <p className="font-bold text-base text-center leading-tight">
                        Sabbir H Mitul
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} RISY Team Organization. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gray-900 hover:bg-pink-600 hover:text-white text-gray-400 transition-all border border-gray-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
