import { Router } from "express"

import { createUserController, findUserByIdController, updatePasswordController, updateUserByIdController } from "../controllers/users.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/register", createUserController) // Register route

router.get("/me", authMiddleware, findUserByIdController) // User route

router.patch("/update", authMiddleware, updateUserByIdController) // Update user route

router.patch("/update-password", authMiddleware, updatePasswordController) // Update user password route

export default router
