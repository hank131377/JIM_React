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
              <p className="m-0 d-flex align-items-center p-2">
                <FaMapMarkerAlt />
                {v.storeCity}
              </p>
              <div className="p-3 index-carousel-text">
                <ul className="d-flex list-unstyled m-0 index-blood-phone">
                  {[...Array(5)].map((n, i) => {
                    return (
                      <li className="me-3 mb-3 index-carousel-card" key={i}>
                        {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                      </li>
                    )
                  })}
                </ul>
                <h3 className="index-carousel-phone">{v.gamesName}</h3>
                <div className="d-flex index-carousel-phone">
                  <span className="d-flex align-items-center">
                    <BsFillPeopleFill className="index-carousel-phone" />
                    {v.gamesPeopleMin}-{v.gamesPeopleMax}
                  </span>
                  <span className="d-flex align-items-center ps-3">
                    <FaClock className="index-carousel-phone" /> {v.Time}
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
