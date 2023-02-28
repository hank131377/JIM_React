import React, { useEffect, useMemo, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { useContextValue } from '../../ContextDashbard'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Index = () => {
  const getBackData = useContextValue()
  const [indexData, setIndexData] = useState()
  const [nowData, setNowData] = useState([])
  const [hotData, setHotData] = useState([])
  const [targetNum, setTargetNum] = useState(1)
  const [page, setPage] = useState(1)
  useEffect(() => {
    getBackData('http://localhost:3005/index/?litim=12', setIndexData)
  }, [])

  const getNowData = () => {
    setNowData(
      indexData?.filter((v, i) => {
        return i + 1 == targetNum
      })
    )
  }
  const getHotData = () => {
    const a = indexData?.slice((page - 1) * 4, page * 4)
    console.log(a)
    setHotData(a)
  }

  useEffect(() => {
    getNowData()
    getHotData()
  }, [indexData, targetNum, page])

  const changePage = (method) => {
    const limit = indexData.length / 4
    if (method) {
      setPage((page % limit) + 1)
    } else {
      page === 1 ? setPage(page * limit) : setPage((page - 1) % limit)
    }
  }

  return (
    <>
      <div className="index">
        <div className="d-flex align-items-center">
          <Logo />
          <div className="mx-5">
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
                        <img src={`gamesImages/${v.gamesImages}`} alt="" />
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
          </div>
        </div>
        <p className="index-hot-select">熱門推薦</p>
        <div className="index-cards">
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
                    backgroundImage: `url('gamesImages/${v.gamesImages}')`,
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
                            {i < v.gamesDifficulty ? (
                              <BloodSvg />
                            ) : (
                              <UnfillBlood />
                            )}
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
        </div>
      </div>
    </>
  )
}

export default Index
