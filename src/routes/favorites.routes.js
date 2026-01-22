import { Router } from "express"

import { createFavoriteController, listFavoritesController, removeFavoriteController } from "../controllers/favorites.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.use(authMiddleware)

router.post("/favorites", createFavoriteController) // Add favorite route

router.get("/favorites", listFavoritesController) // List favorite route

router.delete("/favorites/movie:id", removeFavoriteController) // Delete favorite route

export default router
