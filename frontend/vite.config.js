import { defineConfig, loadEnv } from 'vite';
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
        '/api': 'http://localhost:5000/',
      },
    },
    plugins: [react()],
  });
};
