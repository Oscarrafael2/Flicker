import { NextRequest, NextResponse } from "next/server";
import { searchMovieByName, getPosterUrl, getBackdropUrl, getProfileUrl } from "@/lib/tmdb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Se requiere el nombre de la película" }, { status: 400 });
  }

  try {
    const result = await searchMovieByName(name);

    if (!result) {
      return NextResponse.json({ error: "Película no encontrada" }, { status: 404 });
    }

    const { movie, cast } = result;

    return NextResponse.json({
      tmdbId: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterUrl: getPosterUrl(movie.poster_path),
      backdropUrl: getBackdropUrl(movie.backdrop_path),
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      runtime: movie.runtime,
      tagline: movie.tagline,
      cast: cast.map((c) => ({
        name: c.name,
        character: c.character,
        profileUrl: getProfileUrl(c.profile_path),
      })),
    });
  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json({ error: "Error obteniendo datos de la película" }, { status: 500 });
  }
}
