import MapSidebarBody from './MapSidebarBody'
import MapSidebarTitle from './MapSidebarTitle'

const MapSidebar = ({ sidebarState, mapData }) => {
  return (
    <div
      className={
        sidebarState
          ? 'map-basic-style sidebar close'
          : 'map-basic-style sidebar'
      }
    >
      <MapSidebarTitle />
      <MapSidebarBody mapData={mapData} />
    </div>
  )
}

export default MapSidebar
