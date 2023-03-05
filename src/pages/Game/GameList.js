import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
const GameList = ({ gameData, state }) => {
  return (
    <>
      {gameData.map((v, i) => {
        if (v.gamesImages.length > 15) {
          console.log(v.gamesImages)
        }
        if (state.currentPage * 20 < i) return
        return (
          <div className="col game-card px-2" key={v.gamesSid}>
            <div className="position-relative">
              <Link to={`/game/${v.gamesSid}`}>
                <img
                  src={`${
                    v.gamesImages.length < 20
                      ? `/gamesImages/${v.gamesImages}`
                      : `${v.gamesImages}`
                  }`}
                  alt=""
                  className="w-100"
                  style={{
                    aspectRatio: '2/1',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderRadius: '20px',
                  }}
                />
              </Link>
              <div className="subtitle">
                <span>#{v.feature01}</span>
                <span>#{v.feature02}</span>
              </div>
            </div>
            <div
              className="game-card-body"
              style={{
                borderRadius: '0 0 20px 20px',
              }}
            >
              <div
                className="d-flex justify-content-evenly w-100"
                style={{ borderBottom: 'solid 1px gray' }}
              >
                <span>{v.gamesName}</span>
                <span className="d-flex align-items-center">
                  <FaStar style={{ fill: 'rgb(223, 223, 0)' }} />
                  暫無(暫無)
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
