import express from "express"
import cors from "cors"

import usersRoutes from "./routes/users.routes.js"
import authRoutes from "./routes/auth.routes.js"
import favoritesRoutes from "./routes/favorites.routes.js"
import moviesRoutes from "./routes/movies.routes.js"
import genresRoutes from "./routes/genres.routes.js"

const app = express()

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.use(express.json())

app.use(authRoutes)
app.use(usersRoutes)
app.use(moviesRoutes)

app.use(genresRoutes)
app.use(favoritesRoutes)

export default app
