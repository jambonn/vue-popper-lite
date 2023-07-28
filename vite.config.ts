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
      fileName: (format) => `vue-popper-lite.${format}.js`,
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
