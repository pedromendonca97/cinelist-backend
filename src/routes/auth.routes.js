import { Router } from "express"

import { loginController } from "../controllers/auth.controller.js"

const router = Router()

router.post("/login", loginController) // Login route

export default router
