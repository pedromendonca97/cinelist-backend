import { loginUser } from "../services/auth.services.js"

async function loginController(req, res) {

  try {
    
    const result = await loginUser(req.body)

    return res.status(200).json(result)
  } catch (err) {
    
    return res.status(401).json({ message: err.message })
  }
}

export { loginController }

