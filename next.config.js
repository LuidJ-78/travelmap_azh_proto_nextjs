/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Active l'export statique
  distDir: 'out',   // Dossier de sortie pour l'export
  images: {
    unoptimized: true, // Désactive l'optimisation des images (nécessaire pour l'export statique)
  },
};

module.exports = nextConfig;
