"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Star, Loader2 } from "lucide-react";
import { VideoPlayer } from "./video-player";
import { CastList } from "./cast-list";
import { AIAssistant } from "./ai-assistant";
import type { FullMovie } from "@/lib/types";

interface MovieDetailClientProps {
  movieName: string;
  videoUrl: string;
  genre: string;
  genreName: string;
}

export function MovieDetailClient({ movieName, videoUrl, genre, genreName }: MovieDetailClientProps) {
  const [movie, setMovie] = useState<FullMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovie() {
      try {
        const res = await fetch(`/api/movie?name=${encodeURIComponent(movieName)}`);
        if (res.ok) {
          const data = await res.json();
          setMovie({
            name: movieName,
            videoUrl,
            ...data,
          });
        } else {
          setError("No se pudo cargar la información de la película");
        }
      } catch {
        setError("Error al cargar la película");
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [movieName, videoUrl]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Cargando película...</p>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">{error || "Película no encontrada"}</p>
          <Link
            href={`/genero/${genre}`}
            className="text-primary hover:underline"
          >
            Volver a {genreName}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Backdrop */}
      {movie.backdropUrl && (
        <div className="absolute top-0 left-0 right-0 h-[50vh] overflow-hidden">
          <Image
            src={movie.backdropUrl || "/placeholder.svg"}
            alt={movie.title || movie.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Back Button */}
        <Link
          href={`/genero/${genre}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver a {genreName}
        </Link>

        {/* Video Player */}
        <div className="mb-8">
          <VideoPlayer
            src={movie.videoUrl}
            title={movie.title || movie.name}
            poster={movie.backdropUrl}
          />
        </div>

        {/* Movie Info */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-72 rounded-xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
              <Image
                src={movie.posterUrl || "/placeholder-poster.jpg"}
                alt={movie.title || movie.name}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {movie.title || movie.name}
              </h1>
              {movie.tagline && (
                <p className="text-lg text-muted-foreground italic">{movie.tagline}</p>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              {movie.releaseDate && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(movie.releaseDate).getFullYear()}</span>
                </div>
              )}
              {movie.runtime && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                </div>
              )}
              {movie.rating && (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-foreground font-medium">{movie.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">/ 10</span>
                </div>
              )}
            </div>

            {/* Synopsis */}
            {movie.overview && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Sinopsis</h2>
                <p className="text-muted-foreground leading-relaxed">{movie.overview}</p>
              </div>
            )}

            {/* Cast */}
            {movie.cast && movie.cast.length > 0 && (
              <CastList cast={movie.cast} />
            )}
          </div>
        </div>
      </div>

      {/* AI Assistant with Movie Context */}
      <AIAssistant
        movieContext={{
          name: movie.title || movie.name,
          genre: genreName,
        }}
      />
    </div>
  );
}
