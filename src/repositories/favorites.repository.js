import { pool } from "../database/connection.js"

async function addFavorites({ userId, movieId, title, posterPath }) {
  await pool.query(`INSERT INTO favorites (user_id, movie_id, movie_title, poster_path) VALUES (?, ?, ?, ?)`, [userId, movieId, title, posterPath])
}

async function listFavoritesByUser(userId) {
  const [rows] = await pool.query(`SELECT movie_id, movie_title, poster_path, created_at FROM favorites WHERE user_id = ? ORDER BY created_at DESC`, [userId])

  return rows
}

async function removeFavorites(userId, movieId) {
  const [result] = await pool.query(`DELETE FROM favorites WHERE user_id = ? AND movie_id = ?`, [userId, movieId])

  return result.affectedRows
}

export { addFavorites, listFavoritesByUser, removeFavorites }
