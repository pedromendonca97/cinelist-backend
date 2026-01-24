import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"

import { createUser, findUserByEmail, findUserById, updateUserById } from "../repositories/users.repository.js"

async function createUserService({ name, email, password }) {

  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios")
  }

  const userExists = await findUserByEmail(email)

  if (userExists) {
    throw new Error("Email já cadastrado")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword
  }

  await createUser(user)

  return {
    id: user.id,
    name: user.name,
    email: user.email
  }
}

async function findUserByIdService(userId) {

  const user = await findUserById(userId)

  if (!user) {
    throw new Error("Usuário não encontrado")
  }

  return user
}

async function updateUserByIdService(userId, { name, email, password }) {

  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios")
  }

  const passwordHashed = await bcrypt.hash(password, 10)

  await updateUserById(userId, { name, email, password: passwordHashed })

  const user = await findUserById(userId)
  if (!user || !user.password) {
    throw new Error("Usuário não encontrado")
  }

  return { message: "Usuário atualizado com sucesso", user }
}

export { createUserService, findUserByIdService, updateUserByIdService }

