import { saveFavorite, getFavorites, deleteFavorite } from "../services/favorites.services.js"

async function createFavoriteController(req, res) {

  try {
    
    await saveFavorite(req.userId, req.body)

    return res.status(201).json({ message: "Favorito salvo" })
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
}

async function listFavoritesController(req, res) {

  try {
    
    const favorites = await getFavorites(req.userId)

    return res.json(favorites)
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }

}

async function removeFavoriteController(req, res) {

  try {
    
    await deleteFavorite(req.userId, req.params.movieId)

    return res.json({ message: "Favorito removido" })
  } catch (err) {
    return res.status(404).json({ message: err.message })
  }
}

export { createFavoriteController, listFavoritesController, removeFavoriteController }
