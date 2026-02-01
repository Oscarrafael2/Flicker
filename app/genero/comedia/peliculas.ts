import type { ConfiguredMovie } from "@/lib/types";

// ============================================================
// PELÍCULAS DE COMEDIA
// ============================================================
// Para agregar una película:
// 1. Copia el objeto de ejemplo
// 2. Cambia "name" por el nombre EXACTO de la película (como aparece en TMDB)
// 3. Agrega el link del video (Google Drive o Internet Archive)
//
// Ejemplo Google Drive:
//   videoUrl: "https://drive.google.com/file/d/TU_ID_AQUI/view"
//
// Ejemplo Internet Archive:
//   videoUrl: "https://archive.org/download/nombre-archivo/video.mp4"
// ============================================================

export const peliculasComedia: ConfiguredMovie[] = [
  {
    name: "Superbad",
    videoUrl: "https://archive.org/download/ejemplo/superbad.mp4",
  },
  {
    name: "The Hangover",
    videoUrl: "https://drive.google.com/file/d/ejemplo123/view",
  },
  {
    name: "Dumb and Dumber",
    videoUrl: "https://archive.org/download/ejemplo/dumbanddumber.mp4",
  },
  {
    name: "Bridesmaids",
    videoUrl: "https://archive.org/download/ejemplo/bridesmaids.mp4",
  },
  // Agrega más películas aquí siguiendo el mismo formato
];
