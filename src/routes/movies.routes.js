import { Router } from "express"

import { listPopularMoviesController, getMovieController, searchMoviesController } from "../controllers/movies.controller.js"

const router = Router()

router.get("/movies", listPopularMoviesController) // List movies route

router.get("/movies/search", searchMoviesController) // Search movies route

router.get("/movies/:id", getMovieController) // Get movie route

export default router
