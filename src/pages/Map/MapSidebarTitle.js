import moment from 'moment/moment'

import { useContextValue } from './MapDashbard'

const MapSidebarTitle = () => {
  const { searchKeyword, setSearchKeyword } = useContextValue()
  return (
    <div>
      <h2 className="p-2 map-title-font">JOIN IN ME</h2>
      <h3 className="p-2 time">
        {moment().format('dddd')}
        <span>{moment().format('YYYY-MM-DD')}</span>
      </h3>

      <div className="searchBar">
        <input
          type="text"
          className="search"
          placeholder="搜尋地區、店名"
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default MapSidebarTitle
