import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'serif-display': ['"Playfair Display"', 'serif'],
        'sans-body': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors
        charcoal: {
          deep: "hsl(var(--charcoal-deep))",
          medium: "hsl(var(--charcoal-medium))",
          light: "hsl(var(--charcoal-light))",
        },
        white: {
          pure: "hsl(var(--white-pure))",
          warm: "hsl(var(--white-warm))",
          architectural: "hsl(var(--white-architectural))",
        },
        blueprint: {
          DEFAULT: "hsl(var(--blue-blueprint))",
          glow: "hsl(var(--blue-blueprint-glow))",
          dark: "hsl(var(--blue-blueprint-dark))",
        },
        amber: {
          golden: "hsl(var(--amber-golden))",
          warm: "hsl(var(--amber-warm))",
          glow: "hsl(var(--amber-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "draw-line": "draw-line 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-blueprint': 'var(--gradient-blueprint)',
        'gradient-amber-subtle': 'var(--gradient-amber-subtle)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'glow-blue': 'var(--shadow-glow-blue)',
        'glow-amber': 'var(--shadow-glow-amber)',
        'card': 'var(--shadow-card)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
