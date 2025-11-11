"use client";

import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiAnimation } from "@/components/ascii-animation";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();

  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-9">

      <div className="relative z-10 ">
        {/* Hero Content - Side by Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-16">

          <div className="flex flex-col items-center justify-center text-start space-y-4 sm:space-y-6 lg:space-y-8 ">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="majormono text-2xl sm:text-3xl lg:text-4xl tracking-tight text-emerald-300 ">Varu cli</h1>
              <h2 className="font-sans font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                Manage Your Node.js Projects
                <span className="block text-primary">
                  <span className="opacity-50 text-2xl sm:text-3xl lg:text-4xl">From the </span> <span className="majormono text-2xl sm:text-3xl lg:text-4xl text-emerald-300">terminal</span>
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-foreground opacity-70 ">
                An interactive command-line dashboard built with React and Ink.
                Monitor dev servers, manage dependencies, and navigate projects with vim-style shortcuts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-start flex-col sm:flex-row gap-4 w-full">
              <Button size="lg" className="group" onClick={scrollToGetStarted}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="" asChild>
                <a
                  href="https://github.com/emdmed/varu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

          </div>
          <Card className={`bg-background m-1 p-1 sm:m-2 sm:p-2 overflow-hidden ${isMobile ? "border-0 max-w-[90vw] max-h-[40vh]" : ""}`}>
            <CardContent className={`p-1 ${isMobile ? "overflow-hidden max-h-[40vh]" : ""}`}>
              <div className={isMobile ? "scale-75 origin-top-left" : ""}>
                <AsciiAnimation fontSize={isMobile ? "0.4rem" : "0.75rem"} />
              </div>
            </CardContent>
          </Card>

        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
