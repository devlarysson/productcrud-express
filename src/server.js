import express from 'express';
import dotenv from 'dotenv'

import routes from './routes';
import connectDatabase from './database/connection'

dotenv.config()

connectDatabase()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080)
