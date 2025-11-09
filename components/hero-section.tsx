"use client";

import { Terminal, Github, ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiAnimation } from "@/components/ascii-animation";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function HeroSection() {

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden p-9">

      <div className="relative z-10 ">
        {/* Hero Content - Side by Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 mb-16">
          <Card className="bg-background m-2 p-2">
            <CardContent className="p-1">
              <AsciiAnimation />
            </CardContent>
          </Card>
          <div className="flex flex-col items-center justify-center text-start space-y-8 ">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="majormono text-4xl tracking-tight text-emerald-300 ">Varu cli</h1>
              <h2 className="font-sans font-bold tracking-tight text-5xl">
                Manage Your Node.js Projects
                <span className="block text-primary opacity-50">
                  From the Terminal
                </span>
              </h2>

              <p className="text-lg text-foreground opacity-70 ">
                An interactive command-line dashboard built with React and Ink.
                Monitor dev servers, manage dependencies, and navigate projects with vim-style shortcuts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-start flex-col sm:flex-row gap-4 w-full">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="" asChild>
                <a
                  href="https://github.com/yourusername/varucli"
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


        </div>

        {/* Full Width Sections Below */}
        <div className="flex flex-col items-center text-center space-y-8">


          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Vim-style Navigation",
              "Real-time Process Monitor",
              "Project Scanner",
              "Node Modules Cleanup",
              "Git Integration",
            ].map((feature) => (
              <Badge
                key={feature}
                variant="outline"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
