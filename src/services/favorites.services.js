import { addFavorites, listFavoritesByUser, removeFavorites } from "../repositories/favorites.repository.js"

async function saveFavorite(userId, data) {
  const { movieId, title, posterPath } = data

  if (!movieId ?? !title) {
    throw new Error("Dados do filme são obrigatórios")
  }

  try {
    
    await addFavorites({
      userId,
      movieId,
      title,
      posterPath
    })

  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      throw new Error("Filme já está nos favoritos")
    }
    throw err
  }
}

async function getFavorites(userId) {
  return await listFavoritesByUser(userId)
}

async function deleteFavorite(userId, movieId) {
  const removed = await removeFavorites(userId, movieId)

  if (!removed) {
    throw new Error("Favorito não encontrado")
  }
}

export { saveFavorite, getFavorites, deleteFavorite }
