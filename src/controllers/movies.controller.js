import { getPopularMovies, getMoviesById, searchMovies } from "../services/tmdb.services.js"

async function listPopularMoviesController(req, res) {

  try {
    const movies = await getPopularMovies()
    return res.json(movies)
  } catch (err) {
    return res.status(500).json({ message: "Erro ao buscar filmes" })
  }
}

async function getMovieController(req, res) {

  try {
    const movie = await getMoviesById(req.params.id)
    return res.json(movie)
  } catch (err) {
    return res.status(404).json({ message: "Filme não encontrado" })
  }
}

async function searchMoviesController(req, res) {

  try {
    const { q } = req.query
    const movies = await searchMovies(q)
    return res.json(movies)
  } catch (err) {
    return res.status(500).json({ message: "Erro na busca" })
  }
}

export { listPopularMoviesController, getMovieController, searchMoviesController }
