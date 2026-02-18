import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: "#e0e5ec",
                "neumorph-shadow-light": "#ffffff",
                "neumorph-shadow-dark": "#a3b1c6",
                "fresh-blue": {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9", // Primary Fresh Blue
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                },
                "orange-accent": {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316", // Primary Orange
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },
            },
            boxShadow: {
                neumorph: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)",
                "neumorph-inset": "inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)",
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },

    plugins: [forms],
};
