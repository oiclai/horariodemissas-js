import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            external: ["fsevents"], // Ignora a dependência "fsevents"
            input: "./index.html", // Aponte para o arquivo de entrada
        },
    },
});
