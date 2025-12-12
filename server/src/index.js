import express from 'express'
import connect from './db/connection.js'
import cors from 'cors'
import userRouter from './routes/user.js'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const app = express()

connect()
app.use(cors())
app.use(express.json()) 

app.use(userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})