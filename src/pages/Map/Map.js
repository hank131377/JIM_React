import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { useContextValue } from '../../ContextDashbard'
import { MapSidebar, MapContent, MapPhone } from './MapComponent'
import MapDashbard from './MapDashbard'
import './Map.css'

const Map = () => {
  const [mapData, setMapData] = useState([])
  const getBackData = useContextValue()

  // const getData = async () => {
  //   try {
  //     const r = await axios.get('http://localhost:3005/getmap')
  //     setMapData(r.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    getBackData('http://localhost:3005/getmap', setMapData)
    // getData()
  }, [])

  return (
    <MapDashbard>
      <MapSidebar mapData={mapData} />
      <MapContent mapData={mapData} />
      <MapPhone mapData={mapData} />
    </MapDashbard>
  )
}

export default Map
