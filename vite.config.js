import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Ajoutez ici les modules problématiques
        'react',
        'react-dom',
        'react-icons',
        // Autres dépendances qui causent des erreurs
      ],
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})