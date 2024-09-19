import crypto from 'crypto';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const generateScopedName = (name: string, filename: string, css: string) => {
  const componentName = filename
    .replace(/\.\w+$/, '')
    .replace(/.module/, '')
    .split('/')
    .pop();
  const hash = crypto.createHash('md5').update(css).digest('hex').slice(0, 5);

  return `${componentName}__${name}__${hash}`;
};

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      style: path.resolve(__dirname, './src/styles'),
    },
  },
});
