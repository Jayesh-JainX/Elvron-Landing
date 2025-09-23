import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neuro: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['"Open Sans"', 'sans-serif'],
				inter: ['"Inter"', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.96)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'scale-out': {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0.96)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'bounce-sm': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'ping-slow': {
					'75%, 100%': { transform: 'scale(2)', opacity: '0' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-top': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				"gradient-shift": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				"float-coin": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
				"float-slow": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"50%": { transform: "translate(10px, -10px)" },
				},
				"float-medium": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"50%": { transform: "translate(-15px, -15px)" },
				},
				"float-fast": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"50%": { transform: "translate(20px, -5px)" },
				},
				"float-diagonal": {
					"0%, 100%": { transform: "translate(0, 0)" },
					"50%": { transform: "translate(15px, 15px)" },
				},
				"shadow-pulse": {
					"0%, 100%": {
						transform: "translate(-50%, 50%) scale(0.9)",
						opacity: "0.6"
					},
					"50%": {
						transform: "translate(-50%, 50%) scale(1.1)",
						opacity: "0.3"
					},
				},
				"shadow-stretch": {
					"0%, 100%": {
						transform: "translateX(-50%) scaleX(1)",
						opacity: "0.5"
					},
					"50%": {
						transform: "translateX(-50%) scaleX(0.8)",
						opacity: "0.3"
					},
				},
				"shine": {
					"0%": {
						transform: "translateX(-100%) skewX(-15deg)"
					},
					"100%": {
						transform: "translateX(200%) skewX(-15deg)"
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-sm': 'bounce-sm 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'ripple': 'ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
				'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
				'slide-in-top': 'slide-in-top 0.5s ease-out',
				"gradient-shift": "gradient-shift 8s ease infinite",
				"float-coin": "float-coin 3s ease-in-out infinite",
				"float-slow": "float-slow 7s ease-in-out infinite",
				"float-medium": "float-medium 5s ease-in-out infinite",
				"float-fast": "float-fast 4s ease-in-out infinite",
				"float-diagonal": "float-diagonal 6s ease-in-out infinite",
				"shadow-pulse": "shadow-pulse 3s ease-in-out infinite",
				"shadow-stretch": "shadow-stretch 3s ease-in-out infinite",
				"shine": "shine 3s ease-in-out infinite",
			},
			backdropBlur: {
				xs: '2px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.3) 50%, transparent 75%)',
				'hero-pattern': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
				'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
				'grid-black': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
				'dots-light': "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
				'dots-dark': "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
			},
			boxShadow: {
				'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
				'glass': '0 10px 30px rgba(0, 0, 0, 0.1)',
				'neon': '0 0 20px rgba(99, 102, 241, 0.5)',
				'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
				'card': '0 8px 24px rgba(0, 0, 0, 0.08)',
				'dropdown': '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
				'glow': '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
				'neon-sm': '0 0 5px rgba(99, 102, 241, 0.3)',
				'neon-lg': '0 0 30px rgba(99, 102, 241, 0.6)',
				'inner-glow': 'inset 0 0 10px rgba(99, 102, 241, 0.3)',
			},
			backgroundSize: {
				'200%': '200% 200%',
				'400%': '400% 400%',
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						a: {
							fontWeight: '500',
							textDecoration: 'none',
							'&:hover': {
								opacity: '0.8',
							},
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
