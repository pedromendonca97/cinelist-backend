import { pool } from "../database/connection.js"

async function createUser({ id, name, email, password }) {

  await pool.query(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`, [id, name, email, password])

}

async function findUserByEmail(email) {
  const [rows] = await pool.query(`SELECT * FROM users WHERE email = ? LIMIT 1`, [email])

  return rows[0]
}

async function findUserById(id) {
  const [rows] = await pool.query(`SELECT id, name, email, password FROM users WHERE id = ? LIMIT 1`, [id])

  return rows[0]
}

async function updateUserById(id, { name, email, password }) {
  const [result] = await pool.query(`UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`, [name, email, password, id])

  return result
}

export { createUser, findUserByEmail, findUserById, updateUserById }

