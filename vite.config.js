import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Aadvarks-Digital/', // Assurez-vous que c'est le bon chemin
  plugins: [react()],
});

