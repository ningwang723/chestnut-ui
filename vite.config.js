import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'chestnut-ui'
        },
        target: 'esnext',
        assetsInlineLimit: 100000000,
        chunkSizeWarningLimit: 100000000,
        cssCodeSplit: false,
        brotliSize: false,
        rollupOptions: {
            external: ['vue'],
            inlineDynamicImports: true,
            output: {
                globals: {
                    vue: 'Vue'
                },
                manualChunks: () => 'everything.js'
            }
        }
    }
});
