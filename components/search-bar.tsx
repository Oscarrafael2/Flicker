"use client";

import { Search, X, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchMovie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
  releaseDate: string;
  rating: number;
}

interface SearchResponse {
  movies: SearchMovie[];
  total: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useSWR<SearchResponse>(
    query.length >= 2 ? `/api/search?q=${encodeURIComponent(query)}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar películas..."
          className="w-full h-14 pl-12 pr-12 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Buscando...</span>
            </div>
          ) : data?.movies && data.movies.length > 0 ? (
            <div className="divide-y divide-border">
              {data.movies.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/pelicula/${movie.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex gap-4 p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="relative w-16 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={movie.posterUrl || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : "N/A"}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {movie.overview || "Sin descripción disponible"}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-foreground">{movie.rating?.toFixed(1) || "N/A"}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No se encontraron películas para &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
