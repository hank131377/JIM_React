import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { MapSidebarToggle, MapSidebar, MapContent, MapPhone } from './Index'
import './Map.css'

const Map = () => {
  const [sidebarState, setSidebarState] = useState(false)

  const [mapData, setMapData] = useState([])

  const getData = async () => {
    try {
      const r = await fetch('http://localhost:3005/getmap')
      const row = await r.json()
      // console.log(row)
      setMapData(row)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  // Group style
  // const markerClusterGroupIcon = (v) => {
  //   return new divIcon({
  //     html: `<div className="cluster-icon">${v.getChildCount()}</div>`,
  //     className: 'custom-marker-cluster',
  //     iconSize: point(33, 33, true),
  //   })
  // }
  return (
    <div className="d-flex position-relative">
      <MapSidebarToggle
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      />
      <MapSidebar sidebarState={sidebarState} mapData={mapData} />
      <MapContent mapData={mapData} />
      {/* phone */}
      <MapPhone />
    </div>
  )
}

export default Map
