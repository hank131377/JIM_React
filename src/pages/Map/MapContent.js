import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'

import { customIcon, nowIcon } from './MapIcons'
import { useState } from 'react'
import { FaPhoneAlt, FaLocationArrow, FaRegCalendarAlt } from 'react-icons/fa'
const MapContent = ({ mapData }) => {
  const [nowcenter, setNowcenter] = useState([
    25.03387410019818, 121.54339144016454,
  ])
  return (
    <MapContainer center={nowcenter} zoom="15">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
      // Group style
      // chunkedLoading
      // iconCreateFunction={markerClusterGroupIcon}
      >
        <Marker position={nowcenter} icon={nowIcon}>
          <Popup>
            <div>
              <p>現在的位置</p>
            </div>
          </Popup>
        </Marker>
        {mapData.map((v, i) => {
          return (
            <Marker
              onClick={() => {
                console.log(123)
              }}
              position={[+v.storelat, +v.storelon]}
              icon={customIcon}
              key={i}
            >
              <Popup
                onClick={() => {
                  console.log(123)
                }}
              >
                <div>
                  <div
                    className="position-relative map-card"
                    onClick={() => {
                      console.log(123)
                    }}
                  >
                    <div className="position-absolute top-0 start-0 translate-middle">
                      <img src={`/storeimages/${v.storeLogo}`} alt="" />
                    </div>
                    <h5 style={{ marginLeft: '30px' }}>{v.storeName}</h5>
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
