import express from "express"

import usersRoutes from "./routes/users.routes.js"
import authRoutes from "./routes/auth.routes.js"
import favoritesRoutes from "./routes/favorites.routes.js"
import moviesRoutes from "./routes/movies.routes.js"

const app = express()

app.use(express.json())

app.use(usersRoutes)
app.use(authRoutes)
app.use(favoritesRoutes)
app.use(moviesRoutes)

export default app
