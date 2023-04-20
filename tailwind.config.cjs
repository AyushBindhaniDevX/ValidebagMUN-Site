/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {},
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                vmun: {
                    "primary": "#778DA9",
                    "secondary": "#1B263B",
                    "accent": "#415A77",
                    "neutral": "#0D1B2A",
                    "base-100": "#E0E1DD",
                },
            },
        ],
    },
}
