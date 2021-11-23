import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const svg = (options) => {
    return {
        name: 'vite-ckeditor-svg-raw-plugin',
        transform(code, id) {
            if (options.fileRegex.test(id)) {
                // eslint-disable-next-line no-param-reassign
                code = fs.readFileSync(id, 'utf8');

                const json = JSON.stringify(code)
                    .replace(/\u2028/g, '\\u2028')
                    .replace(/\u2029/g, '\\u2029');
                return {
                    code: `export default ${json}`,
                    map: { mappings: '' }
                };
            }
        },
        generateBundle(_, bundle) {
            for (const [filename, info] of Object.entries(bundle)) {
                if (options.fileRegex.test(info.name)) {
                    delete bundle[filename];
                }
            }
        }
    };
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'chestnut-ui'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
