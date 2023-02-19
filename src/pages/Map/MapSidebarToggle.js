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
      <i
        className={
          sidebarState ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-left'
        }
      ></i>
    </div>
  )
}

export default MapSidebarToggle
