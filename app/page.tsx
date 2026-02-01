import { Header } from "@/components/header";
import { SearchBar } from "@/components/search-bar";
import { GenreCard } from "@/components/genre-card";
import { AIAssistant } from "@/components/ai-assistant";
import { Film, Play, Star, Users, Sparkles } from "lucide-react";

const genres = [
  {
    id: "terror",
    name: "Terror",
    description: "Películas que te harán temblar",
    gradient: "from-red-600 to-red-900",
    icon: "skull",
  },
  {
    id: "accion",
    name: "Acción",
    description: "Adrenalina y explosiones",
    gradient: "from-orange-600 to-orange-900",
    icon: "zap",
  },
  {
    id: "comedia",
    name: "Comedia",
    description: "Risas garantizadas",
    gradient: "from-yellow-600 to-yellow-900",
    icon: "smile",
  },
  {
    id: "romance",
    name: "Romance",
    description: "Historias de amor",
    gradient: "from-pink-600 to-pink-900",
    icon: "heart",
  },
  {
    id: "ciencia-ficcion",
    name: "Ciencia Ficción",
    description: "Viajes al futuro y más allá",
    gradient: "from-blue-600 to-blue-900",
    icon: "rocket",
  },
];

const features = [
  {
    icon: Film,
    title: "Catálogo Organizado",
    description: "Películas ordenadas por género para encontrar lo que buscas fácilmente",
  },
  {
    icon: Play,
    title: "Reproductor Integrado",
    description: "Mira tus películas directamente sin salir de la aplicación",
  },
  {
    icon: Star,
    title: "Información Completa",
    description: "Sinopsis, actores y calificaciones de cada película",
  },
  {
    icon: Users,
    title: "Datos de TMDB",
    description: "Información actualizada gracias a The Movie Database",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Tu Plataforma de <span className="text-primary">Películas</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Explora nuestra colección de películas organizadas por género. Busca, descubre y disfruta.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-16">
            <SearchBar />
          </div>

          {/* Genre Cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Explorar por Género</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {genres.map((genre) => (
                <GenreCard key={genre.id} {...genre} />
              ))}
            </div>
          </div>

          {/* AI Assistant Feature */}
          <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Asistente con IA</h3>
                <p className="text-muted-foreground">
                  Preguntale a CineBot por recomendaciones, busca peliculas por descripcion 
                  o haz cualquier pregunta sobre cine. Haz clic en el boton flotante para empezar.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Caracteristicas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>Datos proporcionados por TMDB (The Movie Database)</p>
          <p className="mt-2">CineApp - Tu plataforma personal de peliculas</p>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
