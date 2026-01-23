import { Router } from "express"
import { listGenre } from "../controllers/genres.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/genres", authMiddleware, listGenre) // Genres list route

export default router