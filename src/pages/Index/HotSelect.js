import {
  FaMapMarkerAlt,
  FaClock,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { Link } from 'react-router-dom'
const HotSelect = ({ hotData, changePage, setTargetNum }) => {
  return (
    <>
      <p className="index-hot">熱門推薦</p>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <FaChevronCircleLeft
            style={{
              fontSize: '50px',
              color: '#d01b1b',
              cursor: 'pointer',
            }}
            onClick={() => {
              changePage(false)
            }}
          />
        </div>
        <div className="d-flex flex-column flex-xxl-row index-carousels">
          {hotData?.map((v, i) => {
            return (
              <Link to={`/game/${v.gamesSid}`} key={v.gamesSid}>
                <div
                  className="index-carousel"
                  style={{
                    backgroundImage: `${
                      v.gamesImages.length < 20
                        ? `url('gamesImages/${v.gamesImages}')`
                        : `url('${v.gamesImages}')`
                    }`,
                  }}
                  onClick={() => {
                    setTargetNum(v.gamesSid)
                  }}
                >
                  <p className="d-flex align-items-center p-3 fs-6">
                    <FaMapMarkerAlt />
                    {v.storeCity}
                  </p>
                  <div className="index-carousel-text p-3 fs-6">
                    <ul className="d-flex list-unstyled m-0">
                      {[...Array(5)].map((q, j) => {
                        return (
                          <li className="me-3 mb-3" key={j}>
                            {j < v.gamesDifficulty ? (
                              <BloodSvg />
                            ) : (
                              <UnfillBlood />
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <h3>{v.gamesName}</h3>
                    <div className="d-flex">
                      <span className="d-flex align-items-center">
                        <BsFillPeopleFill />
                        {v.gamesPeopleMin}-{v.gamesPeopleMax}
                      </span>
                      <span className="d-flex align-items-center ps-3">
                        <FaClock /> {v.Time}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div>
          <FaChevronCircleRight
            style={{
              fontSize: '50px',
              color: '#d01b1b',
              cursor: 'pointer',
            }}
            onClick={() => {
              changePage(true)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default HotSelect
