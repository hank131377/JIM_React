import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
const ShowPage = ({ indexData, limit }) => {
  const [page, setPage] = useState(0)
  const changePage = (target) => {
    if (target) {
      if (page == limit - 1) {
        setPage(0)
      } else {
        setPage(page + 1)
      }
    } else {
      if (page == 0) {
        setPage(11)
      } else {
        setPage(page - 1)
      }
    }
  }
  return (
    <>
      {indexData?.map((v, i) => {
        if (page !== i) return
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
                  {[...Array(5)].map((q, j) => {
                    return (
                      <li className="me-4" key={j}>
                        {j < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                      </li>
                    )
                  })}
                </ul>
                <p className="text-center text-sm-start index-content">
                  {v.gamesContent}
                </p>
                <ul className="d-flex list-unstyled justify-content-sm-start justify-content-center index-item ">
                  <li className="px-3 my-3 mx-sm-0 me-sm-3 mx-3 btn btn-outline-danger index-sort">
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
                <p className=" btn btn-outline-danger w-75">{v.storeAddress}</p>
              </div>
            </div>
            <div className="text-center d-flex flex-column align-items-center index-show">
              <div className="position-relative w-100">
                <FaChevronCircleLeft
                  style={{
                    fontSize: '50px',
                    color: '#d01b1b',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '45%',
                  }}
                  onClick={() => {
                    changePage(false)
                  }}
                />
                <img
                  src={`${
                    v.gamesImages.length < 20
                      ? `/gamesImages/${v.gamesImages}`
                      : `${v.gamesImages}`
                  }`}
                  alt=""
                />
                <FaChevronCircleRight
                  style={{
                    fontSize: '50px',
                    color: '#d01b1b',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '0',
                    top: '45%',
                  }}
                  onClick={() => {
                    changePage(true)
                  }}
                />
              </div>
              <Link
                to={`/game/${v.gamesSid}`}
                className="btn btn-danger px-5 py-2 my-4 rounded-pill jim-bg-red"
                style={{ fontSize: '25px' }}
              >
                馬上預約
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShowPage
