import { useEffect } from "react"
import Cesium from "./component/cesium.component"
import { socket } from "./utils/socket"
import { socketFeedTypes } from "./types"
import Aircraft from "./component/aircraft.component"
import { Cartesian3, JulianDate, SampledPositionProperty } from 'cesium'

function App() {
  const aircraftPosition = new SampledPositionProperty()

  const receiveFeed = function (value: socketFeedTypes) {
    const time = JulianDate.addSeconds(JulianDate.now(), value.payload.duration, JulianDate.now())
    const position = Cartesian3.fromDegrees(value.payload.lon, value.payload.lat, value.payload.height)
    aircraftPosition?.addSample(time, position)
  }


  useEffect(() => {
    socket.on("feed", receiveFeed)

    return function () {
      socket.on("feed", receiveFeed)
    }
  }, [])

  return (
    <Cesium className="relative">
      <div className="absolute top-2 left-2 flex items-center justify-center gap-2 px-2 shadow-2xl bg-gray-800/50 rounded" style={{ zIndex: 1500 }}>
        <div className="size-2 bg-red-500 animate-pulse rounded-full"></div>
        <div className="font-mono font-bold text-gray-300">Live</div>
      </div>
      <Aircraft
        aircraftPosition={aircraftPosition}
        tracked={true}

      />
    </Cesium>
  )
}

export default App
