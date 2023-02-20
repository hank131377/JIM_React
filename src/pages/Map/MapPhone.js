import { useMemo } from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  FaHome,
  FaAngleDoubleDown,
  FaPhoneAlt,
  FaLocationArrow,
  FaRegCalendarAlt,
  FaTrophy,
  FaFeatherAlt,
  FaDollarSign,
  FaStar,
} from 'react-icons/fa'

import { useContextValue } from './MapDashbard'
const MapPhone = ({ mapData }) => {
  const { searchKeyword, setNowcenter, setSearchKeyword } = useContextValue()
  const searchData = useMemo(() => {
    return [...mapData].filter((v, i) => {
      return (
        v.storeName.includes(searchKeyword) ||
        v.storeCity.includes(searchKeyword)
      )
    })
  })
  return (
    <div className="PhoneSidebar">
      <div className="searchBar">
        <input
          type="text"
          className="search"
          value={searchKeyword}
          placeholder="搜尋店名、遊戲"
          onChange={(e) => {
            setSearchKeyword(e.target.value)
          }}
        />
        <FaSearch className="search-icon" />
      </div>
      <div
        className="d-flex flex-column"
        style={{
          overflowX: 'scroll',
          height: '30vh',
          width: '100vw',
          marginBottom: '10px',
        }}
      >
        {[...searchData].map((v, i) => {
          return (
            <div className="accordion-item" key={v.storeSid}>
              <h2
                className="accordion-header game-title"
                id={`flush-heading${v.storeSid}`}
              >
                <img src={`/storeimages/${v.storeLogo}`} alt="" />
                <button
                  className="map-basic-style accordion-button collapsed d-block"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${i}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${i}`}
                  onClick={() => {
                    setNowcenter([+v.storelat, +v.storelon])
                  }}
                >
                  <p>
                    <FaHome style={{ marginRight: '10px' }} />
                    <span>{v.storeName}</span>
                    <FaAngleDoubleDown style={{ float: 'right' }} />
                  </p>
                  <p>
                    <FaPhoneAlt style={{ marginRight: '10px' }} />
                    {v.storeMobile}
                  </p>
                  <p>
                    <FaLocationArrow style={{ marginRight: '10px' }} />
                    {v.storeAddress}
                  </p>
                  <p>
                    <FaRegCalendarAlt style={{ marginRight: '10px' }} />
                    營業時間：{v.storeTime}
                    {v.storeRest ? `,休息日：${v.storeRest}` : ''}
                  </p>
                </button>
              </h2>
              <div
                id={`flush-collapse${i}`}
                className="accordion-collapse collapse map"
                aria-labelledby={`flush-heading${i}`}
                data-bs-parent="#accordionFlushExample"
              >
                {[...v.game].map((k, i) => {
                  return (
                    <div
                      className="accordion-body d-flex game-body"
                      key={i}
                      style={{ background: '#FFFFFF' }}
                    >
                      <div className="left me-3">
                        <img src={`/gamesImages/${k.gamesImages}`} alt="" />
                      </div>
                      <div className="right">
                        <p>
                          <FaTrophy style={{ marginRight: '10px' }} />
                          {k.gamesName}
                        </p>
                        <p>
                          <FaFeatherAlt style={{ marginRight: '10px' }} />
                          等敘述
                        </p>
                        <p>
                          <FaDollarSign style={{ marginRight: '10px' }} />
                          {k.gamesPrice}
                          <FaStar
                            style={{ marginRight: '10px', marginLeft: '10px' }}
                          />
                          5(565)
                        </p>
                        <button className="btn btn-outline-secondary">
                          立刻前往
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MapPhone
