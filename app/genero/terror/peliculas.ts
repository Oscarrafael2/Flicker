import type { ConfiguredMovie } from "@/lib/types";

// ============================================================
// PELÍCULAS DE TERROR
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

export const peliculasTerror: ConfiguredMovie[] = [
  {
    name: "La hora de tu muerte",
    videoUrl: "https://drive.usercontent.google.com/download?id=1zqOikHpIoJR6b1EGtMz6vjYGj5d_IrXS&export=download&authuser=0&confirm=t&uuid=99206c1b-4897-47e2-8f26-87eb6352ed06&at=APcXIO07tOyq41BOkz3PBhP0zPbQ%3A1769978082352",
  },
  {
    name: "It",
    videoUrl: "https://drive.google.com/file/d/ejemplo123/view",
  },
  {
    name: "El Exorcista",
    videoUrl: "https://archive.org/download/ejemplo/exorcista.mp4",
  },
  {
    name: "Scream",
    videoUrl: "https://archive.org/download/ejemplo/scream.mp4",
  },
  // Agrega más películas aquí siguiendo el mismo formato
];
