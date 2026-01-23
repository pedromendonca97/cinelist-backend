import { Router } from "express"

import { discoverMoviesController, getMovieController, listeGenreController, listPopularMoviesController, searchMoviesController } from "../controllers/movies.controller.js"

const router = Router()

router.get("/movies/genres", listeGenreController) // List genre movie route

router.get("/movies/discover", discoverMoviesController) // Discover genre movie route

router.get("/movies/search", searchMoviesController) // Search movies route

router.get("/movies/:id", getMovieController) // Get movie route

router.get("/movies", listPopularMoviesController) // List movies route

export default router
