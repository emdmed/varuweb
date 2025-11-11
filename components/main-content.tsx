"use client";

import {
  Terminal,
  Zap,
  Eye,
  Trash2,
  GitBranch,
  Keyboard,
  Search,
  Server,
  PackageCheck,
  GitFork,
  Settings,
  Folder
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AsciiAnimation } from "./ascii-animation";
import { useEffect, useRef, useState } from "react";


const neovim_ascii = `
	                                                                       
	  ██████   █████                   █████   █████  ███                  
	 ░░██████ ░░███                   ░░███   ░░███  ░░░                   
	  ░███░███ ░███   ██████   ██████  ░███    ░███  ████  █████████████   
	  ░███░░███░███  ███░░███ ███░░███ ░███    ░███ ░░███ ░░███░░███░░███  
	  ░███ ░░██████ ░███████ ░███ ░███ ░░███   ███   ░███  ░███ ░███ ░███  
	  ░███  ░░█████ ░███░░░  ░███ ░███  ░░░█████░    ░███  ░███ ░███ ░███  
	  █████  ░░█████░░██████ ░░██████     ░░███      █████ █████░███ █████ 
	 ░░░░░    ░░░░░  ░░░░░░   ░░░░░░       ░░░      ░░░░░ ░░░░░ ░░░ ░░░░░  
	                                                                       
`
const book_ascii = `
              _,-'|
           ,-'._  |
 .||,      |####\\ |
\\.\`',/     \\####| |
= ,. =      |###| |
/ || \\    ,-'\\#/,'.\`
  ||     ,'   \`,,. \`.
  ,|____,' , ,;' \\| |
 (3|\\    _/|/'   _| |
  ||/,-''  | >-'' _,\\\\
  ||'      ==\\ ,-'  ,'
  ||       |  V \\ ,|
  ||       |    |\` |
  ||       |    |   \\
  ||       |    \\    \\
  ||       |     |    \\
  ||       |      \\_,-'
  ||       |___,,--")_\\
  ||         |_|   ccc/
  ||        ccc/
  ||                hjm
`
const unicorn_ascii = `\
  \\,
   \\\\,^,.,,.
   ,;7~((\\))\`;;,,
   ,(@') ;)\`))\\;;',
    )  . ),((  ))\\;,
   /;\`,,/7),)) )) )\\,,      ,,,... ,
  (& \`   (,((,((;( ))\\,_,,;'\`    \`\\,
   \`"    \` ), ))),/( (            \`)\\,
          '1/';/;  \`               ))),
           (, (     /         )    ((/,
          / \\                /     ((('
         ( 6--\\%  ,>     ,,,(     /')))\\'
          \\,\\,/ ,\`----~\`\\   \\    >,))))'
            \\/ /          \`--7>' /((((('
            (,9             // /'('((\\\\,
             \\ \\,,         (/,/   '\\\\\\\\
              \`\\_)1        (_)Kk    \\\`\\
                \`\\|         \\Z          \`\\
                  \`          "            \`
`;

const inspector_ascii = `
           ___
     _..--"\\  \`|\\""--___
  .-'       \\  |        \`'-.
 /           \\_|___...----'\`\\
|__,,..--""\`\`(_)--..__      |
'\\     _.--'\`.I._     ''--..'
  \`''"\\",#JGS/_|_\\###,---'\`
    ,#'  _.\`___\`:-._ '#,
   #'  ,~'-;(oIo);-'~, '#
   #   \`~-(  |    )=~\`  #
   #       | |_  |      #
   #       ; ._. ;      #
   #  _..-;|\\ - /|;-._  #
   #-'   /_ \\\\_// _\\  '-#
 \`#    ; /__\\-'__\\;    #\`\\
;  #\\.--|  |O  O   |'-./#  ;
|__#/   \\ _;O__O___/   \\#__|
 | #\\    [I_[_]__I]    /# |
 \\_(#   /  |O  O   \\   #)_/
       /   |        \\
      /    |         \\
     /    /\\          \\
    /     | \`\\         ;
   ;      \\   '.       |
    \\-._.__\\     \\_..-'/
     '.\\  \\-.._.-/  /'\`
        \\_.\\    /._/
         \\_.;  ;._/
       .-'-./  \\.-'-.
      (___.'    '.___)
`;

const computer_ascii = `
                  .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         \`.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   \`.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     \`.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^\`;:::       \`.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
\`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  \`..........:::::::::::::::::::::::;iof688888888888b.     \`YBBBP^'
    \`........::::::::::::::::;iof688888888888888888888b.     \`
      \`......:::::::::;iof688888888888888888888888888888b.
        \`....:::;iof688888888888888888888888888888888899fT!
          \`..::!8888888888888888888888888888888899fT|!^"'
            \`' !!988888888888888888888888899fT|!^"'
                \`!!8888888888888888899fT|!^"'
                  \`!988888888899fT|!^"'
                    \`!9899fT|!^"'
                      \`!^"'
`;

const bulb_ascii = `
         ____
     ---        ---
  ---              ---
 --        _         --
--         |>         --
--         |<         --
 --        |>        --
  --       |<       --
   --      |>      --
    --     ||-    --
     --    ||    --
      --   ||   --
      |__________|
      <__________>
      <__________>
           \/
`

const features = [
  {
    icon: Keyboard,
    title: "Vim-Inspired Navigation",
    description: "Master your workflow with familiar vim keybindings. j/k to move, gg for top, G for bottom, / to search. Muscle memory that translates.",
    badge: "Navigation",
    color: "text-emerald-300",
    ascii: neovim_ascii
  },
  {
    icon: Search,
    title: "Smart Project Discovery",
    description: "Automatically scan and detect Node.js projects. Intelligent framework recognition for Vite, Next.js, React with rich package.json metadata extraction.",
    badge: "Intelligence",
    color: "text-emerald-300",
    ascii: book_ascii
  },
  {
    icon: Server,
    title: "One-Key Server Control",
    description: "Start and stop dev servers instantly with 's'. Automatic command detection from package.json with support for npm, yarn, and pnpm.",
    badge: "Process",
    color: "text-emerald-300",
    ascii: unicorn_ascii
  },
  {
    icon: Eye,
    title: "Real-Time Process Monitor",
    description: "Live tracking of running dev servers, open editors, and active ports. See what's running at a glance with 500ms polling.",
    badge: "Monitoring",
    color: "text-emerald-300",
    ascii: inspector_ascii
  },
  {
    icon: PackageCheck,
    title: "Dependency Management",
    description: "Scan node_modules sizes, clean up stale dependencies (30+ days inactive), and reclaim gigabytes of disk space with smart validation.",
    badge: "Cleanup",
    color: "text-emerald-300",
    ascii: computer_ascii
  },
  {
    icon: GitFork,
    title: "Smart Git Clone",
    description: "Clone repositories with clipboard auto-detection. Supports HTTPS, SSH, git:// formats with automatic project selection after clone.",
    badge: "Repository",
    color: "text-emerald-300",
    ascii: bulb_ascii
  }
];

function FeatureRow({ feature, index }: { feature: typeof features[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={rowRef}
      className="flex py-4 opacity-0 transition-opacity duration-700 border-t-4 border-double"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="w-1/2">
        {isVisible && feature.ascii && (
          <AsciiAnimation
            art={feature.ascii}
            animationType="fade"
            chaosFrames={10}
            settlingFrames={10}
            frameInterval={50}
          />
        )}
      </div>
      <div className="flex flex-col items-start justify-center w-1/2">
        <span className="majormono text-xl font-bold mb-2">{feature.title.toLocaleLowerCase()}</span>
        <span className="text-sm opacity-70">{feature.description}</span>
      </div>
    </div>
  );
}

export function MainContent() {
  return (
    <div className="relative py-20 px-10 mx-auto">
      {/* Installation Section */}
      <section id="get-started" className="mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 majormono">
            get started in seconds
          </h2>
        </div>

        {/* 2-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Screenshot */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-double border-emerald-300">
              <Image
                src="/varu-terminal-screenshot.png"
                alt="Varu Terminal Interface Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right column - Installation */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-background outline-0 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-300">
                  <Terminal className="h-5 w-5" />
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code>npm install -g varu-cli</code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background outline-0 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-300">
                  <Zap className="h-5 w-5" />
                  Launch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code>varu</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        {features.map((feature, index) => (
          <FeatureRow key={index} feature={feature} index={index} />
        ))}
      </section>

    </div>
  );
}
