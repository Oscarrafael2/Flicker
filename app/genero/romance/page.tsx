import { Header } from "@/components/header";
import { GenreMovieGrid } from "@/components/genre-movie-grid";
import { peliculasRomance } from "./peliculas";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Películas de Romance - CineApp",
  description: "Las mejores películas románticas para soñar",
};

export default function RomancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-xl bg-pink-600/20">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Romance</h1>
              <p className="text-muted-foreground">Historias de amor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <GenreMovieGrid movies={peliculasRomance} genre="romance" />
        </div>
      </section>
    </div>
  );
}
