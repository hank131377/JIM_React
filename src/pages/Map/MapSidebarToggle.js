import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import { useContextValue } from './MapDashbard'

const MapSidebarToggle = () => {
  const { sidebarState, setSidebarState } = useContextValue()
  const sidebarToggle = () => {
    sidebarState ? setSidebarState(false) : setSidebarState(true)
  }
  return (
    <div
      onClick={sidebarToggle}
      className={
        sidebarState ? 'toggle togglebutton close' : 'toggle togglebutton'
      }
    >
      {sidebarState ? <FaAngleRight /> : <FaAngleLeft />}
    </div>
  )
}

export default MapSidebarToggle
