import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

import { MapSidebarToggle, MapSidebar, MapContent, MapPhone } from './Index'
import MapDashbard from './MapDashbard'
import './Map.css'

const Map = () => {
  const [mapData, setMapData] = useState([])

  const getData = async () => {
    try {
      const r = await axios.get('http://localhost:3005/getmap')
      console.log(r.data)
      setMapData(r.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <MapDashbard>
      <MapSidebarToggle />
      <MapSidebar mapData={mapData} />
      <MapContent mapData={mapData} />
      <MapPhone mapData={mapData} />
    </MapDashbard>
  )
}

export default Map
