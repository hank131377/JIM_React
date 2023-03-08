import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
const GameList = ({ gameData, state }) => {
  return (
    <>
      {gameData.map((v, i) => {
        if (state.currentPage * 20 < i) return
        return (
          <div className="col game-card" key={v.gamesSid}>
            <div>
              <Link to={`/game/${v.gamesSid}`}>
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
                <span>{v.gamesName}</span>
                <span className="d-flex align-items-center">
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  (525)
                </span>
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
    </>
  )
}

export default GameList
