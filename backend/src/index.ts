import { createServer } from 'http'
import { Server } from 'socket.io'
import { app } from './app'
import { getRandomPosition } from './utils/generatePosition'

const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})

const makeAircraftFeed = function () {
    const { lat, lon } = getRandomPosition(40.07100559563492, 9.151360832077174, 57.63619172315341, 96.82683007227139);
    const height = Math.floor(Math.random() * 10000) + 1
    io.emit("feed", { payload: { lat, lon, height, duration: 20 } })
}

io.on("connection", () => {
    makeAircraftFeed()
    setInterval(makeAircraftFeed, 20 * 1000)
})

httpServer.listen(7001, () => {
    console.log(' [+] Server running on port 7001')
})


