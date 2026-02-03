/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0A0A0A',
          950: '#000000',
        },
        accent: {
          light: '#4B5E40',
          DEFAULT: '#2D3A22',
          dark: '#1A2414',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F9FAFB',
        }
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.05), 0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.1), 0 30px 60px -12px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
