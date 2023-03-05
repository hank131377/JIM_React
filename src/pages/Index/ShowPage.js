import React from 'react'
import { Link } from 'react-router-dom'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
const ShowPage = ({ nowData }) => {
  return (
    <>
      {' '}
      {!!nowData
        ? nowData?.map((v, i) => {
            return (
              <div
                className="d-flex align-items-center justify-content-between index-hot"
                key={i}
              >
                <div>
                  <p className="index-hot-text">熱門推薦</p>
                  <div>
                    <h3 className="index-hot-header">{v.gamesName}</h3>
                    <ul className="d-flex list-unstyled">
                      {[...Array(5)].map((n, i) => {
                        return (
                          <li className="me-4" key={i}>
                            {i < v.gamesDifficulty ? (
                              <BloodSvg />
                            ) : (
                              <UnfillBlood />
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <p className="index-content-text">{v.gamesContent}</p>
                    <ul className="d-flex list-unstyled index-item">
                      <li className="px-3 mx-2 btn btn-outline-danger index-item-btn">
                        {v.feature01}
                      </li>
                      <li className="px-3 mx-2 btn btn-outline-danger index-item-btn">
                        {v.feature02}
                      </li>
                      <li className="px-3 mx-2 btn btn-outline-danger index-item-btn">
                        {v.gamesPeopleMin}-{v.gamesPeopleMax}人
                      </li>
                      <li className="px-3 mx-2 btn btn-outline-danger index-item-btn">
                        {v.Time}分鐘
                      </li>
                    </ul>
                    <p className=" mx-2 btn btn-outline-danger">
                      {v.storeAddress}
                    </p>
                  </div>
                </div>
                <div className="text-center d-flex flex-column index-header-body">
                  <img
                    src={`${
                      v.gamesImages.length < 20
                        ? `/gamesImages/${v.gamesImages}`
                        : `${v.gamesImages}`
                    }`}
                    alt=""
                  />
                  <Link
                    to={`/game/${v.gamesSid}`}
                    className="btn btn-danger px-5 py-2 my-4 rounded-pill"
                    style={{ fontSize: '25px' }}
                  >
                    馬上預約
                  </Link>
                </div>
              </div>
            )
          })
        : ''}
    </>
  )
}

export default ShowPage
