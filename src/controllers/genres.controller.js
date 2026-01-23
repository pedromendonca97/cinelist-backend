import { getMovieGenre } from "../services/tmdb.services.js"

async function listGenre(req, res) {

  try {
    const genres = await getMovieGenre()

    res.json(genres)
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar gêneros" })
  }

}

export { listGenre }
