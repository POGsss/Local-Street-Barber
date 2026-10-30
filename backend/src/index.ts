import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.PORT ?? 3001)
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173'

app.use(cors({ origin: frontendOrigin }))
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'local-street-barber-api' })
})

app.listen(port, () => {
  console.log(`Local Street Barber API listening on http://localhost:${port}`)
})
