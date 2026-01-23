import axios from "axios"

const tmdb = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "pt-BR"
  }
})

async function getPopularMovies(page = 1, genre) {
  try {
    const response = await tmdb.get("/movie/popular", {
      params: {
        page,
        with_genres: genre
      }
    })

    return response.data
  } catch (err) {
    throw err
  }
}

async function getMoviesById(movieId) {
  const response = await tmdb.get(`/movie/${movieId}`)
  return response.data
}

async function searchMovies(query, page = 1, genre) {

  try {
    const response = await tmdb.get("/search/movie", {
      params: {
        query,
        page,
        with_genres: genre
      }
    })

    return response.data
  } catch (err) {
    console.error("TMDB SEARCH SERVICE ERROR:", err.response?.data)
    throw err
  }
}

async function getMovieGenre() {
  const response = await tmdb.get("/genre/movie/list")

  return response.data
}

export { getMovieGenre, getMoviesById, getPopularMovies, searchMovies }

