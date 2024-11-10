import express from 'express'
import { connect } from './config/Database.js'

import userRoutes from './Routes/userRoutes.js'
import movieRoutes from './Routes/movieRoutes.js'
import ticketRoutes from './Routes/routestikes.js'
import authRoutes from './Routes/authRoutes.js'

const PORT = process.env.PORT || 3000

const api = express()

api.use(express.json())

// rutas
api.use('/api/v1/movies', movieRoutes)
api.use('/api/v1/tickets', ticketRoutes)
api.use('/api/v1', authRoutes)
api.use('/api/v1', userRoutes)



connect().then(() => {
  api.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}🧭🧭`)
  })
})