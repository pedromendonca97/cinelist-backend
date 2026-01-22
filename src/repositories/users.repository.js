import { pool } from "../database/connection.js"

async function createUser({ id, name, email, password }) {

  await pool.query(`INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`, [id, name, email, password])

}

async function findUserByEmail(email) {
  const [rows] = await pool.query(`SELECT * FROM users WHERE email = ? LIMIT 1`, [email])

  return rows[0]
}

async function findUserById(id) {
  const [rows] = await pool.query(`SELECT id, name, email FROM users WHERE id = ? LIMIT 1`, [id])

  return rows[0]
}

export { createUser, findUserByEmail, findUserById }
