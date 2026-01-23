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
  const response = await tmdb.get(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits,videos"
    }
  })
  return response.data
}

async function searchMovies(query, page = 1) {

  try {
    const response = await tmdb.get("/search/movie", {
      params: {
        query,
        page,
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

  return response.data.genres
}

async function discoverMovies({ page = 1, genres = "" }) {
  const response = await tmdb.get("/discover/movie", {
    params: {
      page,
      with_genres: genres
    }
  })

  return response.data
}

export { getMovieGenre, getMoviesById, getPopularMovies, searchMovies, discoverMovies }

