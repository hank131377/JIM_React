import moment from 'moment/moment'

const MapSidebarTitle = () => {
  return (
    <div>
      <h2 className="p-2 map-title-font">JOIN IN ME</h2>
      <h3 className="p-2 time">
        {moment().format('dddd')}
        <span>{moment().format('YYYY-MM-DD')}</span>
      </h3>
      <div className="d-flex justify-content-around pb-3">
        <select className="searchSelect">
          <option>- - 請選擇市區 - -</option>
        </select>
        <select className="searchSelect">
          <option>- - 請選擇店名 - -</option>
        </select>
      </div>
      <div className="searchBar">
        <input type="text" className="search" placeholder="搜尋店名、遊戲" />
        <i className="fa-solid fa-magnifying-glass bar"></i>
      </div>
    </div>
  )
}

export default MapSidebarTitle
