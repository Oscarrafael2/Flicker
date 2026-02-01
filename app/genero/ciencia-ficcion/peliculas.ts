import type { ConfiguredMovie } from "@/lib/types";

// ============================================================
// PELÍCULAS DE CIENCIA FICCIÓN
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

export const peliculasCienciaFiccion: ConfiguredMovie[] = [
  {
    name: "Woody Woodpecker Goes to Camp",
    videoUrl: "https://ia600806.us.archive.org/22/items/ver-el-pajaro-loco-lio-en-el-campamento/Ver%20El%20P%C3%A1jaro%20Loco%20%C2%A1L%C3%ADo%20en%20el%20campamento.ia.mp4?cnt=0",
  },
  {
    name: "The Matrix",
    videoUrl: "https://drive.google.com/file/d/ejemplo123/view",
  },
  {
    name: "Blade Runner 2049",
    videoUrl: "https://archive.org/download/ejemplo/bladerunner.mp4",
  },
  {
    name: "Inception",
    videoUrl: "https://archive.org/download/ejemplo/inception.mp4",
  },
  // Agrega más películas aquí siguiendo el mismo formato
];
