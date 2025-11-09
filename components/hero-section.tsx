"use client";

import { Terminal, Github, ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsciiAnimation } from "@/components/ascii-animation";
import { useState } from "react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="relative z-10 mx-auto ">
        {/* Hero Content - Side by Side on Desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 mb-16">
          <div className="w-1/2 flex items-center justify-center opacity-50">
            <AsciiAnimation />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 max-w-2xl">
              <h1 className="font-sans text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Manage Your Node.js Projects
                <span className="block from-primary to-primary/60 bg-clip-text text-transparent">
                  From the Terminal
                </span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                An interactive command-line dashboard built with React and Ink.
                Monitor dev servers, manage dependencies, and navigate projects with vim-style shortcuts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-dark" asChild>
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

          {/* Terminal Installation */}
          <div className="w-full max-w-3xl">
            <div className="rounded-lg border border-border bg-card shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="font-mono text-xs text-muted-foreground">Installation</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="relative">
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground select-none">$</span>
                    <span className="flex-1">npm install -g varucli</span>
                  </div>
                  <div className="flex items-start gap-2 mt-4">
                    <span className="text-muted-foreground select-none">$</span>
                    <span className="flex-1">varucli</span>
                  </div>
                  <div className="mt-4 text-muted-foreground">
                    <span className="text-green-500">✓</span> Dashboard started successfully
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => copyToClipboard("npm install -g varucli")}
                  className="absolute top-4 right-4 rounded-md bg-muted/80 hover:bg-muted p-2 transition-colors"
                  aria-label="Copy installation command"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Vim-style Navigation",
              "Real-time Process Monitor",
              "Project Scanner",
              "Node Modules Cleanup",
              "Git Integration",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
