// Tipo para películas configuradas manualmente en cada género
export interface ConfiguredMovie {
  // Solo necesitas poner el nombre de la película
  // La API de TMDB obtendrá automáticamente: póster, sinopsis, actores
  name: string;
  
  // Link del video (Google Drive o Internet Archive)
  // Para Google Drive: usa el formato de embed o descarga directa
  // Para Internet Archive: usa el link directo .mp4
  videoUrl: string;
}

// Tipo para película con datos completos de TMDB
export interface FullMovie {
  name: string;
  videoUrl: string;
  tmdbId?: number;
  title?: string;
  overview?: string;
  posterUrl?: string;
  backdropUrl?: string;
  releaseDate?: string;
  rating?: number;
  runtime?: number;
  tagline?: string;
  cast?: {
    name: string;
    character: string;
    profileUrl: string;
  }[];
}

// Géneros disponibles
export type Genre = "terror" | "accion" | "comedia" | "romance" | "ciencia-ficcion";

export const genreNames: Record<Genre, string> = {
  terror: "Terror",
  accion: "Acción",
  comedia: "Comedia",
  romance: "Romance",
  "ciencia-ficcion": "Ciencia Ficción"
};

export const genreColors: Record<Genre, string> = {
  terror: "from-red-900/80 to-black",
  accion: "from-orange-900/80 to-black",
  comedia: "from-yellow-900/80 to-black",
  romance: "from-pink-900/80 to-black",
  "ciencia-ficcion": "from-blue-900/80 to-black"
};
