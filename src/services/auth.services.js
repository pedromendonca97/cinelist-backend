import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { findUserByEmail } from "../repositories/users.repository.js"

async function loginUser({ email, password }) {

  if (!email ?? !password) {
    throw new Error("Email e senha são obrigatórios")
  }

  const user = await findUserByEmail(email)

  if (!user) {
    throw new Error("Email ou senha inválidos")
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error("Email ou senha inválidos")
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" })


  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    },
    token
  }

}

export { loginUser }
