/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#1F1F1F', // Dark background
                foreground: '#FFFFFF', // Light foreground for text
                card: {
                    DEFAULT: '#2A2A2A', // Dark card background
                    foreground: '#F15A24', // Warm Orange for card text
                },
                popover: {
                    DEFAULT: '#333333', // Slightly lighter for popovers
                    foreground: '#F15A24', // Warm Orange for popover text
                },
                primary: {
                    DEFAULT: '#F15A24', // Warm Orange
                    foreground: '#FFFFFF', // Light text on primary
                },
                secondary: {
                    DEFAULT: '#FFC107', // Amber for secondary
                    foreground: '#333333', // Dark text on secondary
                },
                accent: {
                    DEFAULT: '#4DC1E0', // Light Blue for accents (optional)
                    foreground: '#1F1F1F', // Dark text on accent
                },
                muted: {
                    DEFAULT: '#444444', // Muted dark color
                    foreground: '#F15A24', // Warm Orange for muted text
                },
                destructive: {
                    DEFAULT: '#FF5722', // Red for destructive actions
                    foreground: '#FFFFFF', // Light text on destructive
                },
                border: '#333333', // Dark border color
                input: '#444444', // Input background
                ring: '#F15A24', // Warm Orange for focus rings
                text: {
                    DEFAULT: '#FFFFFF', // Light text
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
