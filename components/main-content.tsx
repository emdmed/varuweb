"use client";

import { Terminal, Zap, Eye, Trash2, GitBranch, Keyboard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Keyboard,
    title: "Vim-style Navigation",
    description: "Navigate your projects with familiar vim keybindings. Fast, efficient, and keyboard-centric workflow.",
    color: "text-emerald-400",
  },
  {
    icon: Eye,
    title: "Real-time Process Monitor",
    description: "Monitor your dev servers, build processes, and Node.js applications in real-time with live updates.",
    color: "text-blue-400",
  },
  {
    icon: Terminal,
    title: "Project Scanner",
    description: "Automatically discover and organize all your Node.js projects across your filesystem.",
    color: "text-purple-400",
  },
  {
    icon: Trash2,
    title: "Node Modules Cleanup",
    description: "Quickly identify and clean up unused node_modules directories to free up disk space.",
    color: "text-orange-400",
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "View branch status, recent commits, and manage your repositories without leaving the terminal.",
    color: "text-pink-400",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with performance in mind. React-based UI with Ink for smooth terminal rendering.",
    color: "text-yellow-400",
  },
];

export function MainContent() {
  return (
    <div className="relative py-20 px-6 max-w-7xl mx-auto">
      {/* Features Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Manage Node.js Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful terminal dashboard that brings modern UI patterns to your command line workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-muted hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Installation Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Quick Start</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in Seconds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Install via npm and start managing your projects immediately
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <code className="text-emerald-400">npm install -g varu-cli</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Launch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <code className="text-blue-400">varu</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section>
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Workflow</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamlined Terminal Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with React and Ink to deliver a modern, interactive dashboard right in your terminal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-emerald-400">1</span>
            </div>
            <h3 className="text-xl font-semibold">Scan Projects</h3>
            <p className="text-muted-foreground">
              Automatically detect all Node.js projects in your workspace
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-400">2</span>
            </div>
            <h3 className="text-xl font-semibold">Navigate & Monitor</h3>
            <p className="text-muted-foreground">
              Use vim keybindings to navigate and monitor running processes
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-semibold">Manage & Clean</h3>
            <p className="text-muted-foreground">
              Clean up dependencies, check git status, and manage your workflow
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
