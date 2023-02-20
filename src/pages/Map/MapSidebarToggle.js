import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const MapSidebarToggle = ({ sidebarState, setSidebarState }) => {
  const sidebarToggle = (e) => {
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
