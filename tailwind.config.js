export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Glass-metal palette
        "gm-bg": {
          DEFAULT: "#0a0c10",
          light: "#11151c",
          lighter: "#1a1f2e",
        },
        "gm-surface": {
          DEFAULT: "rgba(255,255,255,0.05)",
          hover: "rgba(255,255,255,0.09)",
          active: "rgba(255,255,255,0.12)",
        },
        "gm-accent": {
          DEFAULT: "#7b8cff",
          light: "#a5b0ff",
          dark: "#5a6ae0",
        },
        "gm-gold": {
          DEFAULT: "#d4a853",
          light: "#e8c97a",
          dark: "#b8912e",
        },
        "gm-chrome": {
          DEFAULT: "#c0c8d4",
          light: "#e2e6ee",
          dark: "#8a94a6",
        },
        "gm-glass": {
          DEFAULT: "rgba(255,255,255,0.06)",
          border: "rgba(255,255,255,0.10)",
          strong: "rgba(255,255,255,0.12)",
        },
      },
      backgroundImage: {
        "gm-gradient": "linear-gradient(135deg, #0a0c10 0%, #11151c 30%, #0f121a 60%, #0a0c10 100%)",
        "gm-card-shine": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
        "gm-metal-accent": "linear-gradient(135deg, #7b8cff 0%, #a78bfa 50%, #7b8cff 100%)",
        "gm-metal-gold": "linear-gradient(135deg, #d4a853 0%, #f0d78c 50%, #b8912e 100%)",
        "gm-header-shine": "linear-gradient(180deg, rgba(123,140,255,0.12) 0%, rgba(123,140,255,0.02) 100%)",
      },
      boxShadow: {
        "gm": "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset",
        "gm-lg": "0 16px 48px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.1) inset",
        "gm-btn": "0 4px 16px rgba(123,140,255,0.25), 0 1px 0 rgba(255,255,255,0.15) inset",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};