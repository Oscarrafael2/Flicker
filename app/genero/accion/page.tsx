import { Header } from "@/components/header";
import { GenreMovieGrid } from "@/components/genre-movie-grid";
import { peliculasAccion } from "./peliculas";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Películas de Acción - CineApp",
  description: "Las mejores películas de acción llenas de adrenalina",
};

export default function AccionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-xl bg-orange-600/20">
              <Zap className="h-8 w-8 text-orange-500" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Acción</h1>
              <p className="text-muted-foreground">Adrenalina y explosiones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <GenreMovieGrid movies={peliculasAccion} genre="accion" />
        </div>
      </section>
    </div>
  );
}
