"use client";

import { useEffect, useState } from "react";
import { MovieCard, MovieCardSkeleton } from "./movie-card";
import type { ConfiguredMovie, FullMovie } from "@/lib/types";

interface GenreMovieGridProps {
  movies: ConfiguredMovie[];
  genre: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function GenreMovieGrid({ movies, genre }: GenreMovieGridProps) {
  const [loadedMovies, setLoadedMovies] = useState<FullMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const results: FullMovie[] = [];

      for (const movie of movies) {
        try {
          const res = await fetch(`/api/movie?name=${encodeURIComponent(movie.name)}`);
          if (res.ok) {
            const data = await res.json();
            results.push({
              name: movie.name,
              videoUrl: movie.videoUrl,
              ...data,
            });
          } else {
            // Si no se encuentra, agregar con datos mínimos
            results.push({
              name: movie.name,
              videoUrl: movie.videoUrl,
              title: movie.name,
              posterUrl: "/placeholder-poster.jpg",
            });
          }
        } catch {
          results.push({
            name: movie.name,
            videoUrl: movie.videoUrl,
            title: movie.name,
            posterUrl: "/placeholder-poster.jpg",
          });
        }
      }

      setLoadedMovies(results);
      setLoading(false);
    }

    loadMovies();
  }, [movies]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (loadedMovies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No hay películas configuradas en este género.</p>
        <p className="text-sm text-muted-foreground mt-2">
          Edita el archivo peliculas.ts para agregar películas.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {loadedMovies.map((movie) => (
        <MovieCard
          key={movie.name}
          slug={slugify(movie.name)}
          title={movie.title || movie.name}
          posterUrl={movie.posterUrl || "/placeholder-poster.jpg"}
          year={movie.releaseDate ? new Date(movie.releaseDate).getFullYear().toString() : undefined}
          rating={movie.rating}
          genre={genre}
        />
      ))}
    </div>
  );
}
