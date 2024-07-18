import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
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
        'primary': '#DC0A2D',
        bug: '#A7B723',
        'bug-light': '#C1D743',
        dark: '#75574C',
        'dark-light': '#8E6E5E',
        dragon: '#7037FF',
        'dragon-light': '#8950FF',
        electric: '#F9CF30',
        'electric-light': '#F9E250',
        fairy: '#E69EAC',
        'fairy-light': '#E6B5C2',
        fighting: '#C12239',
        'fighting-light': '#D13C52',
        fire: '#F57D31',
        'fire-light': '#F59550',
        flying: '#A891EC',
        'flying-light': '#B2A1EC',
        ghost: '#70559B',
        'ghost-light': '#8870B1',
        normal: '#AAA67F',
        'normal-light': '#BFBFA0',
        grass: '#74CB48',
        'grass-light': '#8ED964',
        ground: '#DEC16B',
        'ground-light': '#E6D288',
        ice: '#9AD6DF',
        'ice-light': '#B2E6EC',
        poison: '#A43E9E',
        'poison-light': '#B558B0',
        psychic: '#FB5584',
        'psychic-light': '#FC729A',
        rock: '#B69E31',
        'rock-light': '#C6B154',
        steel: '#B7B9D0',
        'steel-light': '#C9CCDD',
        water: '#6493EB',
        'water-light': '#7DA9F1',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config