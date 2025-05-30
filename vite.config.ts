import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // (Optional, only if needed)
  },
  assetsInclude: ['**/*.pdf'], // 👈 Add this line to handle PDFs
});