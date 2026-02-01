"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  slug: string;
  title: string;
  posterUrl: string;
  year?: string;
  rating?: number;
  genre: string;
}

export function MovieCard({ slug, title, posterUrl, year, rating, genre }: MovieCardProps) {
  return (
    <Link
      href={`/genero/${genre}/${slug}`}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={posterUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-4 rounded-full bg-primary text-primary-foreground">
            <Play className="h-8 w-8" fill="currentColor" />
          </div>
        </div>
        {/* Rating badge */}
        {rating && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-white text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        {year && <p className="text-sm text-muted-foreground">{year}</p>}
      </div>
    </Link>
  );
}

// Componente para mostrar cuando no hay datos de TMDB
export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-card border border-border">
      <div className="aspect-[2/3] bg-muted animate-pulse" />
      <div className="p-3 space-y-2">
        <div className="h-5 bg-muted rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}
