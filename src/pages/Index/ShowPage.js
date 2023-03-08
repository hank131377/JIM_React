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
                className="d-flex flex-xl-row flex-column align-items-center justify-content-between text-sm-start text-center index-body"
                key={i}
              >
                <div>
                  <h2 className="index-title">熱門推薦</h2>
                  <div>
                    <h3 className="index-header">{v.gamesName}</h3>
                    <ul className="d-flex list-unstyled justify-content-sm-start justify-content-center">
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
                    <p className="index-content text-center text-sm-start">
                      {v.gamesContent}
                    </p>
                    <ul className="d-flex list-unstyled index-item justify-content-sm-start justify-content-center">
                      <li className="px-3 my-3 mx-sm-3 mx-3 btn btn-outline-danger index-sort">
                        {v.feature01}
                      </li>
                      <li className="px-3 my-3 mx-3 btn btn-outline-danger index-sort">
                        {v.feature02}
                      </li>
                      <li className="px-3 my-3 mx-3 btn btn-outline-danger index-sort">
                        {v.gamesPeopleMin}-{v.gamesPeopleMax}人
                      </li>
                      <li className="px-3 my-3 mx-3 btn btn-outline-danger index-sort">
                        {v.Time}分鐘
                      </li>
                    </ul>
                    <p className=" btn btn-outline-danger w-75 ms-3">
                      {v.storeAddress}
                    </p>
                  </div>
                </div>
                <div className="text-center d-flex flex-column align-items-center index-show">
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
