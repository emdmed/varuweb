# ASCII Animation Examples

The `AsciiAnimation` component is now fully flexible and customizable. Here are some examples:

## Basic Usage

```tsx
import { AsciiAnimation } from "@/components/ascii-animation";

// Default VARU animation
<AsciiAnimation />
```

## Custom ASCII Art

```tsx
const myArt = `
█████╗ ██████╗ ████████╗
██╔══██╗██╔══██╗╚══██╔══╝
███████║██████╔╝   ██║
██╔══██║██╔══██╗   ██║
██║  ██║██║  ██║   ██║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
`;

<AsciiAnimation art={myArt} />
```

## Different Animation Types

### Chaos-Settle (Default)
```tsx
<AsciiAnimation animationType="chaos-settle" />
```

### Wave Effect (Top to Bottom)
```tsx
<AsciiAnimation animationType="wave" />
```

### Fade In
```tsx
<AsciiAnimation animationType="fade" />
```

### Instant (No Animation)
```tsx
<AsciiAnimation animationType="instant" />
```

## Customize Chaos Characters

```tsx
// Use different characters for the chaos effect
<AsciiAnimation chaosChars="█▓▒░" />

// Or more complex patterns
<AsciiAnimation chaosChars="!@#$%^&*(){}[]<>?/" />

// Binary-style
<AsciiAnimation chaosChars="01" />
```

## Timing Controls

```tsx
// Longer chaos phase
<AsciiAnimation chaosFrames={40} />

// Slower settling
<AsciiAnimation settlingFrames={60} />

// Slower frame rate
<AsciiAnimation frameInterval={100} />

// Combined
<AsciiAnimation
  chaosFrames={30}
  settlingFrames={40}
  frameInterval={75}
/>
```

## Colors and Styling

```tsx
// Different colors
<AsciiAnimation textColor="text-blue-400" />
<AsciiAnimation textColor="text-red-500" />
<AsciiAnimation textColor="text-purple-400" />

// Custom font sizes
<AsciiAnimation fontSize="text-sm sm:text-base md:text-lg" />

// Extra large
<AsciiAnimation fontSize="text-4xl sm:text-6xl md:text-8xl" />

// Custom container classes
<AsciiAnimation className="bg-black/50 rounded-xl border border-white/10" />
```

## Looping Animation

```tsx
// Animation repeats continuously
<AsciiAnimation loop={true} />
```

## Delayed Start

```tsx
// Wait 2 seconds before starting
<AsciiAnimation startDelay={2000} />
```

## Phase Change Callbacks

```tsx
<AsciiAnimation
  onPhaseChange={(phase) => {
    console.log('Animation phase:', phase);
    // Do something based on phase: "chaos" | "settling" | "complete"
  }}
/>
```

## Complete Custom Example

```tsx
const logo = `
╔═══╗
║ ▓ ║
╚═══╝
`;

<AsciiAnimation
  art={logo}
  chaosChars="░▒▓█"
  chaosFrames={25}
  settlingFrames={35}
  frameInterval={60}
  animationType="fade"
  textColor="text-cyan-400"
  fontSize="text-2xl md:text-4xl lg:text-6xl"
  className="border-2 border-cyan-400/30 rounded-lg"
  loop={false}
  startDelay={500}
  onPhaseChange={(phase) => {
    if (phase === "complete") {
      console.log("Animation finished!");
    }
  }}
/>
```

## Fullscreen Dynamic ASCII Background

```tsx
// Fills entire window with animated ASCII characters
<AsciiAnimation
  fullscreen={true}
  chaosChars="░▒▓█01"
  frameInterval={100}
  textColor="text-emerald-300/30"
  charWidth={10}
  charHeight={20}
/>
```

### Fullscreen Options

```tsx
// Fast-changing Matrix-style effect
<AsciiAnimation
  fullscreen={true}
  chaosChars="01"
  frameInterval={50}
  textColor="text-green-400/20"
/>

// Dense block characters
<AsciiAnimation
  fullscreen={true}
  chaosChars="█▓▒░ "
  frameInterval={150}
  textColor="text-cyan-400/40"
  charWidth={8}
  charHeight={16}
/>

// Custom character set
<AsciiAnimation
  fullscreen={true}
  chaosChars="!@#$%^&*(){}[]<>?/"
  frameInterval={80}
  textColor="text-purple-500/25"
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `art` | `string` | VARU logo | The final ASCII art to display |
| `chaosChars` | `string` | `'_+-.:,<>'` | Characters to use during chaos phase |
| `chaosFrames` | `number` | `20` | Number of frames for chaos phase |
| `settlingFrames` | `number` | `30` | Number of frames for settling phase |
| `frameInterval` | `number` | `50` | Frame interval in milliseconds |
| `animationType` | `'chaos-settle' \| 'wave' \| 'fade' \| 'instant'` | `'chaos-settle'` | Animation type |
| `textColor` | `string` | `'text-emerald-300'` | Tailwind text color class |
| `fontSize` | `string` | Responsive sizes | Tailwind font size classes |
| `className` | `string` | `''` | Custom className for container |
| `onPhaseChange` | `(phase: AnimationPhase) => void` | `undefined` | Callback when animation phase changes |
| `loop` | `boolean` | `false` | Whether to loop the animation |
| `startDelay` | `number` | `0` | Delay before starting animation in ms |
| `fullscreen` | `boolean` | `false` | Enable fullscreen mode - fills entire window |
| `charWidth` | `number` | `8` | Character width in pixels (fullscreen mode) |
| `charHeight` | `number` | `16` | Character height in pixels (fullscreen mode) |

## Tips

1. **Choose the right animation type**:
   - `chaos-settle`: Best for dramatic reveals
   - `wave`: Good for sequential reveals
   - `fade`: Smooth, professional feel
   - `instant`: When you don't want animation

2. **Balance timing**:
   - Short chaos (10-20 frames) for quick impact
   - Long settling (40-60 frames) for smooth transitions

3. **Character selection**:
   - Use similar-density characters for smooth transitions
   - Mix character types (symbols, blocks, letters) for variety

4. **Performance**:
   - Lower `frameInterval` = smoother but more CPU
   - Higher `frameInterval` = choppier but lighter
