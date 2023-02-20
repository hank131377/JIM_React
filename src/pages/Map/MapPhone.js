import { FaSearch } from 'react-icons/fa'
const MapPhone = () => {
  return (
    <div className="PhoneSidebar">
      <div className="searchBar">
        <input type="text" className="search" placeholder="搜尋店名、遊戲" />
        <FaSearch className="search-icon" />
      </div>
    </div>
  )
}

export default MapPhone
