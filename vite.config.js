import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    publicDir: false,
    server: {
        port: 5173,
        open: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                services: resolve(__dirname, 'services.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
            },
        },
    },
});
