import { streamText, convertToModelMessages, UIMessage } from "ai";
import { getMoviesList, findMovieByName } from "@/lib/all-movies";

export const maxDuration = 30;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(req: Request) {
  const {
    messages,
    movieContext,
  }: { messages: UIMessage[]; movieContext?: { name: string; genre: string } } =
    await req.json();

  const availableMovies = getMoviesList();

  let systemPrompt = `Eres CineBot, un asistente de peliculas amigable y conocedor. 
Tu trabajo es ayudar a los usuarios a encontrar peliculas, dar recomendaciones y responder preguntas sobre cine.

PELICULAS DISPONIBLES EN LA APP:
${availableMovies}

REGLAS IMPORTANTES:
1. Cuando recomiendes o menciones una pelicula, SIEMPRE indica si esta disponible en la app o no.
2. Si la pelicula ESTA disponible, dilo claramente y menciona en que genero esta.
3. Si la pelicula NO esta disponible, dilo tambien pero igual puedes dar informacion sobre ella.
4. Se amigable, usa un tono casual y entusiasta sobre el cine.
5. Puedes dar recomendaciones basadas en generos, estados de animo, o peliculas similares.
6. Si te preguntan por una descripcion vaga (ej: "pelicula donde un tipo queda atrapado en el mismo dia"), 
   intenta identificar la pelicula y di si esta disponible.
7. Responde siempre en espanol.`;

  // Si hay contexto de pelicula, agregarlo al prompt
  if (movieContext?.name) {
    systemPrompt += `

CONTEXTO ACTUAL:
El usuario esta viendo la pagina de la pelicula "${movieContext.name}" (genero: ${movieContext.genre}).
Cuando te hagan preguntas, asume que se refieren a ESTA pelicula a menos que mencionen otra especificamente.
Puedes responder sobre:
- La trama y sinopsis
- Los actores y director
- Datos curiosos
- Peliculas similares
- Cualquier cosa relacionada con "${movieContext.name}"`;
  }

  const result = streamText({
    model: "openai/gpt-4o-mini",
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  });

  return result.toUIMessageStreamResponse();
}
