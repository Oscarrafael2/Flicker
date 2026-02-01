import type { ConfiguredMovie } from "@/lib/types";

// ============================================================
// PELÍCULAS DE ROMANCE
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

export const peliculasRomance: ConfiguredMovie[] = [
  {
    name: "The Notebook",
    videoUrl: "https://archive.org/download/ejemplo/notebook.mp4",
  },
  {
    name: "Titanic",
    videoUrl: "https://drive.google.com/file/d/ejemplo123/view",
  },
  {
    name: "A Walk to Remember",
    videoUrl: "https://archive.org/download/ejemplo/walktoremember.mp4",
  },
  {
    name: "Pride and Prejudice",
    videoUrl: "https://archive.org/download/ejemplo/pride.mp4",
  },
  // Agrega más películas aquí siguiendo el mismo formato
];
