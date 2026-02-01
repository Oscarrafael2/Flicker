import { Header } from "@/components/header";
import { GenreMovieGrid } from "@/components/genre-movie-grid";
import { peliculasCienciaFiccion } from "./peliculas";
import { Rocket } from "lucide-react";

export const metadata = {
  title: "Películas de Ciencia Ficción - CineApp",
  description: "Las mejores películas de ciencia ficción y aventuras espaciales",
};

export default function CienciaFiccionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-xl bg-blue-600/20">
              <Rocket className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Ciencia Ficción</h1>
              <p className="text-muted-foreground">Viajes al futuro y más allá</p>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <GenreMovieGrid movies={peliculasCienciaFiccion} genre="ciencia-ficcion" />
        </div>
      </section>
    </div>
  );
}
