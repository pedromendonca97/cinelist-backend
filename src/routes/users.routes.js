import { Router } from "express"

import { createUserController, findUserByIdController } from "../controllers/users.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/register", createUserController) // Register route

router.get("/me", authMiddleware, findUserByIdController) // User route

export default router
