import express from 'express'
import { connect } from './config/Database.js'


const PORT = process.env.PORT || 3000

const api = express()

api.use(express.json())

// rutas




connect().then(() => {
  api.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}🧭🧭`)
  })
})