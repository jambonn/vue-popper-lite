import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

const genStub: Plugin = {
  name: 'gen-stub',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'ssr-stub.js',
      source: 'module.exports = {}',
    });
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), genStub],
  build: {
    target: 'esnext',
    minify: true,
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      name: 'VuePopperLite',
      formats: ['es', 'umd'],
      fileName: (format: string) => {
        const name = `vue-popper-lite.${format}`;
        const extension = format === 'es' ? 'mjs' : 'js';
        return `${name}.${extension}`;
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
