import React from 'react'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
const HotSelect = ({ hotData, changePage, setTargetNum }) => {
  return (
    <>
      <FaRegArrowAltCircleLeft
        className="index-arrow-left"
        onClick={() => {
          changePage(false)
        }}
      />
      {hotData?.map((v, i) => {
        return (
          <React.Fragment key={v.gamesSid}>
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
              <p className="d-flex align-items-center p-3 fs-2">
                <FaMapMarkerAlt />
                {v.storeCity}
              </p>
              <div className="p-3 index-carousel-text">
                <ul className="d-flex list-unstyled m-0 index-blood">
                  {[...Array(5)].map((n, i) => {
                    return (
                      <li className="me-3 mb-3" key={i}>
                        {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                      </li>
                    )
                  })}
                </ul>
                <h3 className="index-carousel-icon">{v.gamesName}</h3>
                <div className="d-flex index-carousel-icon">
                  <span className="d-flex align-items-center">
                    <BsFillPeopleFill className="index-carousel-icon" />
                    {v.gamesPeopleMin}-{v.gamesPeopleMax}
                  </span>
                  <span className="d-flex align-items-center ps-3">
                    <FaClock className="index-carousel-icon" /> {v.Time}
                  </span>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
      <FaRegArrowAltCircleRight
        className="index-arrow-right"
        onClick={() => {
          changePage(true)
        }}
      />
    </>
  )
}

export default HotSelect
