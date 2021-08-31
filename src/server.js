import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes';
import connectDatabase from './database/connection'

dotenv.config()

connectDatabase()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
