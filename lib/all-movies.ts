// Este archivo recopila todas las peliculas de todos los generos
// para que la IA pueda saber que peliculas estan disponibles

import { peliculasTerror } from "@/app/genero/terror/peliculas";
import { peliculasAccion } from "@/app/genero/accion/peliculas";
import { peliculasComedia } from "@/app/genero/comedia/peliculas";
import { peliculasRomance } from "@/app/genero/romance/peliculas";
import { peliculasCienciaFiccion } from "@/app/genero/ciencia-ficcion/peliculas";

export interface AvailableMovie {
  name: string;
  genre: string;
  genreSlug: string;
}

export function getAllAvailableMovies(): AvailableMovie[] {
  const movies: AvailableMovie[] = [];

  peliculasTerror.forEach((m) => {
    movies.push({ name: m.name, genre: "Terror", genreSlug: "terror" });
  });

  peliculasAccion.forEach((m) => {
    movies.push({ name: m.name, genre: "Accion", genreSlug: "accion" });
  });

  peliculasComedia.forEach((m) => {
    movies.push({ name: m.name, genre: "Comedia", genreSlug: "comedia" });
  });

  peliculasRomance.forEach((m) => {
    movies.push({ name: m.name, genre: "Romance", genreSlug: "romance" });
  });

  peliculasCienciaFiccion.forEach((m) => {
    movies.push({
      name: m.name,
      genre: "Ciencia Ficcion",
      genreSlug: "ciencia-ficcion",
    });
  });

  return movies;
}

export function getMoviesList(): string {
  const movies = getAllAvailableMovies();
  return movies.map((m) => `- ${m.name} (${m.genre})`).join("\n");
}

export function findMovieByName(
  searchName: string
): AvailableMovie | undefined {
  const movies = getAllAvailableMovies();
  const searchLower = searchName.toLowerCase();

  return movies.find(
    (m) =>
      m.name.toLowerCase() === searchLower ||
      m.name.toLowerCase().includes(searchLower) ||
      searchLower.includes(m.name.toLowerCase())
  );
}
