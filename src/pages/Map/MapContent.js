import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'

import { customIcon } from './MapIcons'

const MapContent = ({ mapData }) => {
  return (
    <MapContainer center={[25.023296, 121.492307]} zoom="19">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
      // Group style
      // chunkedLoading
      // iconCreateFunction={markerClusterGroupIcon}
      >
        {mapData.map((v, i) => {
          return (
            <Marker
              position={[+v.storelat, +v.storelon]}
              icon={customIcon}
              key={i}
            >
              <Popup>
                <div>
                  <div className="position-relative map-card">
                    <div className="position-absolute top-0 start-0 translate-middle">
                      <img src={`/storeimages/${v.storeLogo}`} alt="" />
                    </div>
                    <h5 style={{ marginLeft: '30px' }}>{v.storeName}</h5>
                    <p>
                      <i className="fa-solid fa-phone"></i>
                      {v.storeMobile}
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
                    <button className="btn btn-primary">了解更多</button>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default MapContent
