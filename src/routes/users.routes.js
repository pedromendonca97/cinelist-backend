import { Router } from "express"

import { createUserController } from "../controllers/users.controller.js"

const router = Router()

router.post("/register", createUserController) // Register route

export default router
