import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"

import { createUser, findUserByEmail, findUserById, updateUserById, updateUserPassword } from "../repositories/users.repository.js"

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

async function updateUserByIdService(userId, { name, email }) {

  if (!name && !email) {
    throw new Error("Atualize ao menos um campo")
  }

  const user = await findUserById(userId)
  if (!user) {
    throw new Error("Usuário não encontrado")
  }

  await updateUserById(userId, {
    name: name ?? user.name,
    email: email ?? user.email
  })

  return { message: "Usuário atualizado com sucesso", user }
}

async function updatePasswordService(userId, { currentPassword, newPassword }) {

  const user = await findUserById(userId)
  if (!user) {
    throw new Error("Usuário não encontrado")
  }

  const passwordMatch = await bcrypt.compare(currentPassword, user.password)
  if (!passwordMatch) {
    throw new Error("Senha incorreta")
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  await updateUserPassword(userId, hashedPassword)

  return { message: "Senha atualizada com sucesso" }
}

export { createUserService, findUserByIdService, updateUserByIdService, updatePasswordService }

