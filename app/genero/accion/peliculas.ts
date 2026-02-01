import type { ConfiguredMovie } from "@/lib/types";

// ============================================================
// PELÍCULAS DE ACCIÓN
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

export const peliculasAccion: ConfiguredMovie[] = [
  {
    name: "John Wick",
    videoUrl: "https://archive.org/download/ejemplo/johnwick.mp4",
  },
  {
    name: "Fast & Furious",
    videoUrl: "https://drive.google.com/file/d/ejemplo123/view",
  },
  {
    name: "Mad Max: Fury Road",
    videoUrl: "https://archive.org/download/ejemplo/madmax.mp4",
  },
  {
    name: "Misión Imposible",
    videoUrl: "https://archive.org/download/ejemplo/mision.mp4",
  },
  // Agrega más películas aquí siguiendo el mismo formato
];
