const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: { id: number; name: string }[];
  tagline: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieCredits {
  cast: Cast[];
}

export interface SearchResult {
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export function getPosterUrl(path: string | null, size: "w185" | "w342" | "w500" | "original" = "w500"): string {
  if (!path) return "/placeholder-poster.jpg";
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getBackdropUrl(path: string | null, size: "w780" | "w1280" | "original" = "w1280"): string {
  if (!path) return "/placeholder-backdrop.jpg";
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getProfileUrl(path: string | null, size: "w185" | "h632" | "original" = "w185"): string {
  if (!path) return "/placeholder-actor.jpg";
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export async function searchMovies(query: string): Promise<SearchResult> {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=es-MX`
  );
  if (!response.ok) throw new Error("Error buscando películas");
  return response.json();
}

export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=es-MX`
  );
  if (!response.ok) throw new Error("Error obteniendo detalles de la película");
  return response.json();
}

export async function getMovieCredits(movieId: number): Promise<MovieCredits> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=es-MX`
  );
  if (!response.ok) throw new Error("Error obteniendo créditos de la película");
  return response.json();
}

export async function searchMovieByName(name: string): Promise<{ movie: MovieDetails; cast: Cast[] } | null> {
  const searchResult = await searchMovies(name);
  if (searchResult.results.length === 0) return null;
  
  const movieId = searchResult.results[0].id;
  const [movie, credits] = await Promise.all([
    getMovieDetails(movieId),
    getMovieCredits(movieId)
  ]);
  
  return {
    movie,
    cast: credits.cast.slice(0, 10)
  };
}
