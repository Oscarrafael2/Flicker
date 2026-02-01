import { Header } from "@/components/header";
import { MovieDetailClient } from "@/components/movie-detail-client";
import { peliculasCienciaFiccion } from "../peliculas";
import { notFound } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CienciaFiccionMoviePage({ params }: PageProps) {
  const { slug } = await params;
  
  // Buscar la película por slug
  const movie = peliculasCienciaFiccion.find((m) => slugify(m.name) === slug);

  if (!movie) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MovieDetailClient
        movieName={movie.name}
        videoUrl={movie.videoUrl}
        genre="ciencia-ficcion"
        genreName="Ciencia Ficción"
      />
    </div>
  );
}

export async function generateStaticParams() {
  return peliculasCienciaFiccion.map((movie) => ({
    slug: slugify(movie.name),
  }));
}
