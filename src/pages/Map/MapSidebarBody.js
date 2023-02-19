const MapSidebarBody = ({ mapData }) => {
  console.log(mapData)
  return (
    <div>
      <div
        className="accordion accordion-flush game-card"
        id="accordionFlushExample"
      >
        {[...mapData].map((v, i) => {
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
                >
                  <p>
                    <i className="fa-solid fa-shop"></i>
                    <span>{v.storeName}</span>
                    <i className="fa-solid fa-angles-down float-end"></i>
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i> {v.storeMobile}
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                    {v.storeAddress}
                  </p>
                  <p>
                    <i className="fa-regular fa-calendar-days"></i>
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
                  console.log(k)
                  return (
                    <div className="accordion-body d-flex game-body">
                      <div className="left me-3">
                        <img src={`/gamesImages/${k.gamesImages}`} alt="" />
                      </div>
                      <div className="right">
                        <p>
                          <i className="fa-solid fa-trophy"></i>
                          {k.gamesName}
                        </p>
                        <p>
                          <i className="fa-solid fa-feather-pointed"></i>
                          等敘述
                        </p>
                        <p>
                          <i className="fa-solid fa-dollar-sign"></i>{' '}
                          {k.gamesPrice}
                          <i className="fa-solid fa-star ps-2"></i>5(565)
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
        {/* {[...Array(1)].map((v, i) => {
          return (
            <div className="accordion-item" key={i}>
              <h2
                className="accordion-header game-title"
                id={`flush-heading${i}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1676707695430-b63389a77216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <button
                  className="map-basic-style accordion-button collapsed d-block"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${i}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${i}`}
                >
                  <p>
                    <i className="fa-solid fa-shop"></i>
                    <span>這個Case有點Big</span>
                    <i className="fa-solid fa-angles-down float-end"></i>
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>02-2552-9422
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                    台北市大同區延平北路二段202號3樓
                  </p>
                  <p>
                    <i className="fa-regular fa-calendar-days"></i>
                    平日：09:00-23:00；假日：09:00-23:00
                  </p>
                </button>
              </h2>
              <div
                id={`flush-collapse${i}`}
                className="accordion-collapse collapse map"
                aria-labelledby={`flush-heading${i}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body d-flex game-body">
                  <div className="left me-3">
                    <img
                      src="https://images.unsplash.com/photo-1676702147204-5fd9e7abbecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <p>
                      <i className="fa-solid fa-trophy"></i>
                      等一個人盜墓
                    </p>
                    <p>
                      <i className="fa-solid fa-feather-pointed"></i>特色
                    </p>
                    <p>
                      <i className="fa-solid fa-dollar-sign"></i>500
                      <i className="fa-solid fa-star"></i>5(565)
                    </p>
                    <button className="btn btn-outline-secondary">
                      立刻前往
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default MapSidebarBody
