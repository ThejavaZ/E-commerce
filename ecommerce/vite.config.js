import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/index.tsx"],
            refresh: true,
        }),

        react({
            jsxRuntime: "automatic",
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js/",
        },
    },
    server: {
        hmr: {
            host: "localhost",
        },
    },
    optimizeDeps: {
        include: ["react", "react-dom"],
    },
});
