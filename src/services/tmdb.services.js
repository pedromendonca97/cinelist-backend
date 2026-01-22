import axios from "axios"

const tmdb = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "pt-BR"
  }
})

async function getPopularMovies() {
  const response = await tmdb.get("/movie/popular")

  return response.data.results
}

async function getMoviesById(movieId) {
  const response = await tmdb.get(`/movie/${movieId}`)
  return response.data
}

async function searchMovies(query) {
  const response = await tmdb.get("/search/movie", {
    params: { query }
  })

  return response.data.results
}

export { getPopularMovies, getMoviesById, searchMovies }
