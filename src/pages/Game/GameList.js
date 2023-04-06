import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'

const GameList = ({ state, cardbodyRef, gameDataSort }) => {
  return (
    <div className="container mt-5">
      <div
        className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-3"
        ref={cardbodyRef}
      >
        {gameDataSort.map((v, i) => {
          return (
            <div className="col game-card" key={v.gamesSid}>
              <div>
                <Link
                  to={`/game/${v.gamesSid}`}
                  onClick={() => {
                    document.documentElement.scrollTop = 0
                  }}
                >
                  <img
                    src={`${
                      v.gamesImages.length < 20
                        ? `/gamesImages/${v.gamesImages}`
                        : `${v.gamesImages}`
                    }`}
                    alt=""
                    className="w-100"
                  />
                </Link>
              </div>
              <div className="game-card-body">
                <div className="subtitle">
                  <span>#{v.feature01}</span>
                  <span>#{v.feature02}</span>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-evenly w-100 mt-4 game-card-underline">
                  <h3 className="mt-2">{v.gamesName}</h3>
                  <div className="d-flex w-100 justify-content-around align-items-center">
                    <div className="d-flex game-blood mb-1">
                      {[...Array(5)].map((q, j) => {
                        return (
                          <span
                            className="d-flex align-items-center ms-1"
                            key={j}
                          >
                            {j < v.gamesDifficulty ? (
                              <BloodSvg />
                            ) : (
                              <UnfillBlood />
                            )}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly pb-1 w-100">
                  <span className="d-flex align-items-center">
                    <FaMapMarkerAlt />
                    {v.storeCity}
                  </span>
                  <span className="d-flex align-items-center">
                    <BsFillPeopleFill />
                    {v.gamesPeopleMin}-{v.gamesPeopleMax}
                  </span>
                  <span className="d-flex align-items-center">
                    <FaDollarSign />
                    {v.gamesPrice}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GameList
