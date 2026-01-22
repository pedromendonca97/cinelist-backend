import { createUserService, findUserByIdService } from "../services/users.services.js"

async function createUserController(req, res) {

  try {
    
    const user = await createUserService(req.body)

    return res.status(201).json({ user })
  } catch (err) {
    
    return res.status(400).json({ message: err.message })
  }

}

async function findUserByIdController(req, res) {

  try {
    
    const user = await findUserByIdService(req.userId)
    
    return res.json(user)
  } catch (err) {
    return res.status(401).json({ message: err.message })
  }

}

export { createUserController, findUserByIdController }
