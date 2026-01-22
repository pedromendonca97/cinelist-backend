import { getPopularMovies, getMoviesById, searchMovies } from "../services/tmdb.services.js"

async function listPopularMoviesController(req, res) {
  try {
    let page = parseInt(req.query.page, 10)

    if(isNaN(page) ?? page < 1) {
      page = 1
    }

    const data = await getPopularMovies(page)

    return res.json({
      page: data.page,
      totalPages: data.total_pages,
      movies: data.results
    })
  } catch (err) {
    console.error("TMDB ERROR:", err.response?.data ?? err.message)
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
    const q = req.query.q

    if (!q ?? q.trim() === "") {
      return res.status(400).json({ message: "Parâmetro q é obrigatório" })
    }

    let page = parseInt(req.query.page, 10)

    if (isNaN(page) ?? page < 1) {
      page = 1
    }

    const data = await searchMovies(q, page)

    return res.json({
      page: data.page,
      totalPages:data.total_pages,
      movies: data.results
    })

  } catch (err) {
    console.error("TMDB_ERROR:", err.response?.data ?? err.message)
    return res.status(500).json({ message: "Erro na busca" })
  }
}

export { listPopularMoviesController, getMovieController, searchMoviesController }
