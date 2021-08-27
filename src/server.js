import express from 'express';

import routes from './routes';
import connectDb from './database/connection'

connectDb()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080)
