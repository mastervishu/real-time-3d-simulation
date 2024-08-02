import express, { Express } from 'express'
import cors from 'cors'


const app: Express = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

export { app }