import { NextRequest, NextResponse } from "next/server";
import { searchMovies, getPosterUrl } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Se requiere un término de búsqueda" }, { status: 400 });
  }

  try {
    const result = await searchMovies(query);

    const movies = result.results.slice(0, 12).map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterUrl: getPosterUrl(movie.poster_path),
      releaseDate: movie.release_date,
      rating: movie.vote_average,
    }));

    return NextResponse.json({ movies, total: result.total_results });
  } catch (error) {
    console.error("Error searching movies:", error);
    return NextResponse.json({ error: "Error buscando películas" }, { status: 500 });
  }
}
