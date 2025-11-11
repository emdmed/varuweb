"use client";

import { useEffect, useState } from "react";

const DEFAULT_ART = `
++++++++++++----------------------------....................................................................................................................-
++++++++++-+----------------------------....................................................................................................................-
++++++++++------------------------------..............................................................------.......-........................................-
++++++++-------------------------------...........................................................-.-----+--.-+-+++++++.....................................-
++++++---------------------------------......................................................++++----+++#++-+-+#+###+++++++++-...-..........................-
++++++--------------------------------.....................................................---+++++++########++++##+###+####+++...-..........................
+++----------------------------------.....................................................-+++++#########++####+###############+-++..........................
+-----------------------------------.-...................................................--+++#########+###+######################+--........................
+-----------------------------------..................................................--++++#########################################........................
------------------------------------................................................---++########++++################################-.......................
-----------------------------.........................--.............................--+########+####################################+-......................
-----------------.......................-----------------...........................-+++++++#########################################+---....................
---...................................-------------------..........................--+++++##++########+##################################-+-.................
---................................-..-------------+++++--..........................-+++#####+#######+###################################+-+#................
-.......................-------....-..---+++++++++++##++--......................-.--+++++######+############################################+................
..........----------------------...-..---++++++------++++-........................--++++########+#########################################+--................
.--...-++--------------------+--...-..---------------++++-........................---+++++-##+############################################+--................
------++++-----+++++++++###++---......---------------++++-.........................-.----++-++++############################################---..............
--+----++#######++++++-++##++---......----------------#++-.............................---+---++++##########################################+-...............
--+-----++++++++++++++++++#++---....-..---------------+++--............................-+-.-+---..-+######++################################-................
-------+-+++++++++++++++++##+----..--..---------------+++--.................................---....-++###-++-+#############################--................
-------+-++++++++++++++++++#+-------------------------+++--...................................+....--++++--+--#############################-.................
---------++++++++++++++++++#+-------------------------+++--........................................---+---+#+-###########################+-.-................
---------++++++++++++++++++#+-------------------------++++-......................................---------+-.-###########################++..................
---+------++++++++++++++++++#+------------------------++++-.....................................----------..-############################-...................
---+------++++++++++++++++++#+------------------------+++--.................................-....--------..+#+++########################+....................
----------++++++++++++++++++#+----------------------++#+----........................................-----.+++++++#######################-....................
--------+-++++++++++++++++++++-------------+++++++++--------.......................................------+++++++######################+-.....................
----------+++++++++++++++++++#-------------+----------------......................................------+++-+++####################+--.......................
-----------++++++++++++++++++#------------------------------......................................-----+++-----+###################-.........................
----+------++++++++++++++++++#+-----------------------------.....................................----++++-------+##############+--...........................
-----------++++++++++++++++++#+--------------------------++-.....................................--++++++---------++++++++++++++++++----------...............
-----------++++++++++++++++++++---------------------+++--+---....................................-++++++-------------+++++++++++++#+++#+++++++++-............
---------+-++++++++++++++++++++------------------------------...............................................-..----------+++++++++#+++######+++++++..........
---------+-+++++++++++++++++++#------------------------------......................................................------++++++##+##########++++++++.........
------------++++++++++++++++++#------------------------------..................................................---+++++++############++######++++++++........
------------++++++++++++++++++#+------+----------------------.................................................------++-++++++++++++#+##########++++++-.......
------------++++++++++++++++++#+-------------------------..................................................-------++++-+++++++++++++++++########++++++.......
----------+-++++++++++++++++++#+--------------------+++-................................................-------+++++++-++++++++++++++++############+++.......
----------+-++++++++++++++++++#+---------++---++++-++#+-..............................................--------++++++++++++++#++++++++++############+++-......
----------+-++++++++++++++++++#+----+++++++++++++---++-............................................--------++++++++++++++++#+#+++++++++#############+++......
----------++++++++++++++++++++#++---+++++++++++++-++++............................................-------++++++++++++#++#+#+#####++++++#############+++......
------------++++++++++++++++++#++---++++++++-+++##+++++----......................................----++++++++++++++++#+++##+#########++##############++-.....
-----------+++++++++++++++++++#++---+-+++++###+++--++++----....................................--+++++++++++++#++#+++#+################+#############++......
-----------+++++++++++++++++++#++---+###++++-----++++++----...................................--+++--++++++++#########################################+......
-----------++++++++++++++++++##+++------------++++++++-----.---..............................-+-+#+---++++++++##############################++#########......
-----------++###+++++++########++------+-+++++++++++++-----...----...........................+#-##----+++++++################################+#########+....-
-----------++++#####+++####++++--------++++++++++++++---++++++++++--------..................-+#+#------+++++#################################+##########...--
-----------+++########++++--++++++-----++++++++++++++++++++#+------+---------------+-+---...+++++------+++++#################################++#########-----
-----------+++###+++++++++++++++++-----++++++++++++++#+--.---+++----+++---------+++++++++++++#-+-------+++++##################################+#########+----
------------+++++++++++++++++++++------++++++++++##+--++++++-----++--+++---++---+##+#++++++++++--------+++++##################################+##########----
-------+----+++++#++++++++++++++++++++++++####+++++--------+++--++----+++----++#+--+###+++++-+-+------++++++##################################+##########----
-------+----+++++++#+++++++++###########+++-++++---------------+++++---++++++--------+#####-+--+------+++++###############################################---
####+++++++++#######+.............--++++++++---.-----------++-----+###+-----------++######+++-+------+++++++##############################################---
####################+-.......-------#++++++#++++-----+-----++++--++----------+++##########-+-+-.----++++++++##############################################---
########################+++.--------+--++--+#+++##-------+--++++++------+++++++##########--+++.-----++++++################################################---
`.trim();

export type AnimationType = "chaos-settle" | "wave" | "fade" | "instant";
export type AnimationPhase = "chaos" | "settling" | "complete";

export interface AsciiAnimationProps {
  /** The final ASCII art to display */
  art?: string;
  /** Characters to use during chaos phase */
  chaosChars?: string;
  /** Number of frames for chaos phase (default: 20) */
  chaosFrames?: number;
  /** Number of frames for settling phase (default: 30) */
  settlingFrames?: number;
  /** Frame interval in milliseconds (default: 50) */
  frameInterval?: number;
  /** Animation type (default: "chaos-settle") */
  animationType?: AnimationType;
  /** Text color (default: "text-emerald-300") */
  textColor?: string;
  /** Font size classes (default: responsive sizes) */
  fontSize?: string;
  /** Custom className for the container */
  className?: string;
  /** Callback when animation phase changes */
  onPhaseChange?: (phase: AnimationPhase) => void;
  /** Whether to loop the animation (default: false) */
  loop?: boolean;
  /** Delay before starting animation in ms (default: 0) */
  startDelay?: number;
  /** Padding around the ASCII art in lines/characters. Set to 0 to disable padding (default: 0) */
  padding?: number;
  /** Enable fullscreen mode - fills entire window with dynamic ASCII characters (default: false) */
  fullscreen?: boolean;
  /** Character width in pixels for fullscreen mode (default: 8) */
  charWidth?: number;
  /** Character height in pixels for fullscreen mode (default: 16) */
  charHeight?: number;
}

export function AsciiAnimation({
  art = DEFAULT_ART,
  chaosChars = '-_.                                                                                   ',
  chaosFrames = 20,
  settlingFrames = 30,
  frameInterval = 50,
  animationType = "fade",
  textColor = "text-emerald-300",
  fontSize = "1rem",
  className = "",
  onPhaseChange,
  loop = false,
  startDelay = 0,
  padding = 0,
  fullscreen = false,
  charWidth = 8,
  charHeight = 9,
}: AsciiAnimationProps) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<AnimationPhase>("chaos");
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  // Fullscreen mode: track window dimensions and update grid
  useEffect(() => {
    if (!fullscreen) return;

    const updateDimensions = () => {
      const cols = Math.floor(window.innerWidth / charWidth);
      const rows = Math.floor(window.innerHeight / charHeight);
      setDimensions({ cols, rows });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [fullscreen, charWidth, charHeight]);

  // Fullscreen mode: generate and animate dynamic ASCII grid
  useEffect(() => {
    if (!fullscreen || dimensions.cols === 0 || dimensions.rows === 0) return;

    let animationId: NodeJS.Timeout;

    const generateGrid = () => {
      const grid: string[] = [];
      for (let row = 0; row < dimensions.rows; row++) {
        let line = '';
        for (let col = 0; col < dimensions.cols; col++) {
          line += chaosChars[Math.floor(Math.random() * chaosChars.length)];
        }
        grid.push(line);
      }
      return grid.join('\n');
    };

    const startAnimation = () => {
      animationId = setInterval(() => {
        setDisplay(generateGrid());
      }, frameInterval);
    };

    const delayTimeout = setTimeout(() => {
      startAnimation();
    }, startDelay);

    return () => {
      clearTimeout(delayTimeout);
      if (animationId) clearInterval(animationId);
    };
  }, [fullscreen, dimensions, chaosChars, frameInterval, startDelay]);

  // Regular art animation mode
  useEffect(() => {
    if (fullscreen) return; // Skip if in fullscreen mode
    const lines = art.split("\n");
    const artMaxLength = Math.max(...lines.map((l) => l.length));

    let paddedLines: string[];
    let maxLength: number;

    if (padding === 0) {
      // No padding - use art as-is
      paddedLines = lines;
      maxLength = artMaxLength;
    } else {
      // Create a larger canvas - add padding around the art
      const canvasHeight = lines.length + padding;
      const canvasWidth = artMaxLength + padding;
      maxLength = canvasWidth;

      // Center the art vertically
      const verticalPadding = Math.floor((canvasHeight - lines.length) / 2);

      // Pad the art with empty lines and spaces to center it
      paddedLines = [];
      for (let i = 0; i < canvasHeight; i++) {
        if (i < verticalPadding || i >= verticalPadding + lines.length) {
          paddedLines.push(' '.repeat(maxLength));
        } else {
          const artLine = lines[i - verticalPadding];
          const horizontalPadding = Math.floor((maxLength - artLine.length) / 2);
          const paddedLine = ' '.repeat(horizontalPadding) + artLine + ' '.repeat(maxLength - horizontalPadding - artLine.length);
          paddedLines.push(paddedLine);
        }
      }
    }

    let frameCount = 0;
    let animationId: NodeJS.Timeout;

    const startAnimation = () => {
      animationId = setInterval(() => {
        frameCount++;

        switch (animationType) {
          case "chaos-settle":
            if (frameCount <= chaosFrames) {
              // Pure chaos phase
              if (phase !== "chaos") {
                setPhase("chaos");
                onPhaseChange?.("chaos");
              }
              const chaosText = paddedLines
                .map(() =>
                  Array.from({ length: maxLength }, () =>
                    chaosChars[Math.floor(Math.random() * chaosChars.length)]
                  ).join("")
                )
                .join("\n");
              setDisplay(chaosText);
            } else if (frameCount <= chaosFrames + settlingFrames) {
              // Settling phase - gradually reveal real characters
              if (phase !== "settling") {
                setPhase("settling");
                onPhaseChange?.("settling");
              }
              const progress = (frameCount - chaosFrames) / settlingFrames;

              const settlingText = paddedLines
                .map((line, lineIndex) => {
                  return Array.from({ length: maxLength }, (_, charIndex) => {
                    const targetChar = line[charIndex] || " ";

                    // Create a wave effect - characters settle from left to right with some randomness
                    const settlePoint = progress * maxLength + (Math.sin(lineIndex) * 5);
                    const shouldSettle = charIndex < settlePoint;

                    if (shouldSettle && Math.random() > 0.2) {
                      return targetChar;
                    } else {
                      return chaosChars[Math.floor(Math.random() * chaosChars.length)];
                    }
                  }).join("");
                })
                .join("\n");

              setDisplay(settlingText);
            } else {
              // Complete - show final art
              if (phase !== "complete") {
                setPhase("complete");
                onPhaseChange?.("complete");
              }
              setDisplay(paddedLines.join("\n"));

              if (loop) {
                frameCount = 0;
              } else {
                clearInterval(animationId);
              }
            }
            break;

          case "wave":
            // Wave effect from top to bottom
            if (frameCount <= chaosFrames + settlingFrames) {
              const progress = frameCount / (chaosFrames + settlingFrames);
              const waveText = paddedLines
                .map((line, lineIndex) => {
                  const lineProgress = Math.max(0, Math.min(1, (progress * paddedLines.length - lineIndex) / 2));

                  return Array.from({ length: maxLength }, (_, charIndex) => {
                    const targetChar = line[charIndex] || " ";
                    if (Math.random() < lineProgress) {
                      return targetChar;
                    } else {
                      return chaosChars[Math.floor(Math.random() * chaosChars.length)];
                    }
                  }).join("");
                })
                .join("\n");
              setDisplay(waveText);
            } else {
              setPhase("complete");
              setDisplay(paddedLines.join("\n"));
              if (!loop) clearInterval(animationId);
              else frameCount = 0;
            }
            break;

          case "fade":
            // Gradual reveal with increasing probability
            if (frameCount <= chaosFrames + settlingFrames) {
              const progress = frameCount / (chaosFrames + settlingFrames);
              const fadeText = paddedLines
                .map((line) => {
                  return Array.from({ length: maxLength }, (_, charIndex) => {
                    const targetChar = line[charIndex] || " ";
                    if (Math.random() < progress) {
                      return targetChar;
                    } else {
                      return chaosChars[Math.floor(Math.random() * chaosChars.length)];
                    }
                  }).join("");
                })
                .join("\n");
              setDisplay(fadeText);
            } else {
              setPhase("complete");
              setDisplay(paddedLines.join("\n"));
              if (!loop) clearInterval(animationId);
              else frameCount = 0;
            }
            break;

          case "instant":
            setPhase("complete");
            setDisplay(paddedLines.join("\n"));
            clearInterval(animationId);
            break;
        }
      }, frameInterval);
    };

    // Start animation after delay
    const delayTimeout = setTimeout(() => {
      startAnimation();
    }, startDelay);

    return () => {
      clearTimeout(delayTimeout);
      if (animationId) clearInterval(animationId);
    };
  }, [art, chaosChars, chaosFrames, settlingFrames, frameInterval, animationType, loop, startDelay, onPhaseChange, padding]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none ${className}`}>
      <pre
        className={`
          ${fontSize} ${textColor}
          transition-all duration-300
          ${phase === "chaos" ? "" : ""}
          ${phase === "settling" ? "" : ""}
          ${phase === "complete" ? "" : ""}
        `}
        style={{
          fontFamily: '"Courier New", Courier, "Lucida Console", monospace',
          fontVariantLigatures: 'none',
          fontFeatureSettings: '"liga" 0, "calt" 0',
          letterSpacing: '0',
          whiteSpace: 'pre',
          textAlign: 'left',
          display: 'inline-block',
          fontWeight: 'normal',
          lineHeight: '1',
          maxWidth: '100%',
          fontSize,
        }}
      >
        {display}
      </pre>

    </div>
  );
}
