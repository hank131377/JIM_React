import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { useContextValue } from '../../ContextDashbard'
import { MapSidebar, MapContent } from './MapComponent'
import MapDashbard from './MapDashbard'

const Map = () => {
  const [mapData, setMapData] = useState([])
  const { getBackData } = useContextValue()

  useEffect(() => {
    getBackData('http://localhost:3005/map', setMapData)
  }, [])

  return (
    <MapDashbard>
      <MapSidebar mapData={mapData} />
      <MapContent mapData={mapData} />
    </MapDashbard>
  )
}

export default Map
