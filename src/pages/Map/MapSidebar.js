import { useState } from 'react'
import MapSidebarBody from './MapSidebarBody'
import MapSidebarTitle from './MapSidebarTitle'

const MapSidebar = ({
  sidebarState,
  mapData,
  searchKeyword,
  setSearchKeyword,
}) => {
  return (
    <div
      className={
        sidebarState
          ? 'map-basic-style sidebar close'
          : 'map-basic-style sidebar'
      }
    >
      <MapSidebarTitle
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <MapSidebarBody mapData={mapData} searchKeyword={searchKeyword} />
    </div>
  )
}

export default MapSidebar
