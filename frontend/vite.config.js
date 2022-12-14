import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: { 'pro-shop': path.resolve(__dirname, './src') },
    },
    server: {
      proxy: {
        '/api': 'http://localhost:8000/',
      },
    },
    plugins: [
      react(),
      {
        // do not fail on serve (i.e. local development)
        ...eslint({
          failOnWarning: false,
          failOnError: false,
        }),
        apply: 'serve',
        enforce: 'post',
      },
    ],
  });
};
