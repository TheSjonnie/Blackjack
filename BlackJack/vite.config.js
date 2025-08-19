import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
      server: {
    host: "127.0.0.1",   // 👈 ipv6 [::1] omzeilen
    port: 5173
  },
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        // livewire(),

    ],
});
