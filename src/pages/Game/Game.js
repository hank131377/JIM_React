import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import './Game.css'
import {
  FaLongArrowAltDown,
  FaStar,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaMapMarkerAlt,
  FaDollarSign,
  FaSortUp,
  FaSortDown,
  FaClock,
} from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { useContextValue } from '../../ContextDashbard'
import Loading from '../../components/Loading/Loading'
import { Link, useSearchParams } from 'react-router-dom'
import GotopButton from '../../components/GotopButton/GotopButton'

const reducer = (state, action) => {
  switch (action.type) {
    case 'searchKey': {
      return { ...state, searchKey: action.payload }
    }
    case 'city': {
      return { ...state, city: action.payload }
    }
    case 'minLimit': {
      return { ...state, minLimit: action.payload }
    }
    case 'difficulty': {
      return { ...state, difficulty: action.payload }
    }
    case 'type': {
      return { ...state, type: action.payload }
    }
    case 'cash': {
      return { ...state, cash: action.payload }
    }
    case 'time': {
      return { ...state, time: action.payload }
    }
    case 'other': {
      return { ...state, other: action.payload }
    }
    case 'order': {
      return { ...state, order: action.payload }
    }
    case 'currentPage': {
      return { ...state, currentPage: action.payload }
    }
    case 'searchSwitch': {
      return { ...state, searchSwitch: action.payload }
    }
    default:
      return state
  }
}

const Searchreducer = (state, action) => {
  switch (action.type) {
    case 'searchKey': {
      return { ...state, searchKey: action.payload }
    }
    case 'city': {
      return { ...state, city: action.payload }
    }
    case 'minLimit': {
      return { ...state, minLimit: action.payload }
    }
    case 'difficulty': {
      return { ...state, difficulty: action.payload }
    }
    case 'type': {
      return { ...state, type: action.payload }
    }
    case 'cash': {
      return { ...state, cash: action.payload }
    }
    case 'time': {
      return { ...state, time: action.payload }
    }
    case 'other': {
      return { ...state, other: action.payload }
    }
    case 'order': {
      return { ...state, order: action.payload }
    }
    case 'currentPage': {
      return { ...state, currentPage: action.payload }
    }
    case 'searchSwitch': {
      return { ...state, searchSwitch: action.payload }
    }
    default:
      return state
  }
}

const Game = () => {
  const getBackData = useContextValue()
  const [gameData, setGameData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    searchKey: '',
    city: '請選擇縣市',
    minLimit: '請選擇人數',
    difficulty: 0,
    type: 0,
    cash: 0,
    time: 0,
    other: 0,
    order: 0,
    currentPage: 1,
    searchSwitch: false,
  })

  const [Searchstate, Searchdispatch] = useReducer(Searchreducer, {
    searchKey: '',
    city: '',
    minLimit: 10,
    difficulty: '',
    type: '',
    cash: 83727,
    time: '',
    other: '',
    order: 'gamesPrice',
    switch: 'ASC',
  })

  const [searchParam, setSearchParam] = useSearchParams()
  // {
  //   searchKey: '',
  //   city: '',
  //   minLimit: 1,
  //   difficulty: '',
  //   type: '',
  //   cash: 83727,
  //   time: '',
  //   other: '',
  //   order: 'gamesPrice',
  //   switch: 'ASC',
  // }
  const searchButtonRef = useRef(null)
  const searchbarRef = useRef(null)
  const cardbodyRef = useRef(null)
  useEffect(() => {
    getBackData(
      `http://localhost:3005/games/?${searchParam.toString()}`,
      setGameData
    )
  }, [state.currentPage, searchParam])

  useEffect(() => {
    setSearchParam({
      ...Searchstate,
    })
  }, [Searchstate])

  useEffect(() => {
    const clientMove = (e) => {
      console.log(cardbodyRef.current.offsetHeight)
      const height =
        window.window.scrollY >
        cardbodyRef.current.offsetHeight +
          cardbodyRef.current.offsetTop -
          window.innerHeight
      console.log(height, cardbodyRef.current.offsetHeight, gameData.length)
      if (
        cardbodyRef.current.offsetHeight < 11850 &&
        height &&
        gameData.length >= 200
      ) {
        setIsLoading(true)
        state.currentPage++
        dispatch({
          type: 'currentPage',
          value: state.currentPage,
        })
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    }
    window.addEventListener('scroll', clientMove, false)
    return () => window.removeEventListener('scroll', clientMove)
  }, [gameData, searchParam, Searchstate])

  useEffect(() => {
    const body = document.querySelector('body')
    if (isLoading) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }, [isLoading])

  const citySelect = useRef([
    '台北市',
    '新北市',
    '桃園市',
    '新竹市',
    '台中市',
    '高雄市',
  ])

  const minLimitSelect = useRef([2, 3, 4, 5, 6])

  const difficultySelect = useRef([
    { value: '', name: '全部難度' },
    { value: '入門', name: '入門' },
    { value: '簡單', name: '簡單' },
    { value: '普通', name: '普通' },
    { value: '困難', name: '困難' },
    { value: '挑戰', name: '挑戰' },
  ])

  const typeSelect = useRef([
    { value: '', name: '全部類型' },
    { value: '偵探推理', name: '偵探推理' },
    { value: '機關重重', name: '機關重重' },
    { value: '劇情厲害', name: '劇情厲害' },
    { value: '場景逼真', name: '場景逼真' },
    { value: '互動操作', name: '互動操作' },
    { value: '謎題邏輯', name: '謎題邏輯' },
    { value: '輕鬆歡樂', name: '輕鬆歡樂' },
    { value: '恐怖驚悚', name: '恐怖驚悚' },
    { value: '緊張刺激', name: '緊張刺激' },
    { value: '勾心鬥角', name: '勾心鬥角' },
    { value: '團隊合作', name: '團隊合作' },
    { value: '親子同遊', name: '親子同遊' },
    { value: '玩法特別', name: '玩法特別' },
    { value: '角色扮演', name: '角色扮演' },
  ])
  const cashSelect = useRef([
    { value: 83727, name: '全部類型' },
    { value: 300, name: 300 },
    { value: 400, name: 400 },
    { value: 500, name: 500 },
    { value: 600, name: 600 },
    { value: 700, name: 700 },
    { value: 800, name: 800 },
  ])

  const timeSelect = useRef([
    { value: '', name: '全部時間' },
    { value: 30, name: 30 },
    { value: 60, name: 60 },
    { value: 90, name: 90 },
    { value: 120, name: 120 },
  ])

  const otherSelect = useRef([
    { value: '', name: '全部玩法' },
    { value: '密室逃脫', name: '密室逃脫' },
    { value: '劇本殺', name: '劇本殺' },
    { value: '時境解謎', name: '時境解謎' },
  ])

  const orderSelect = useRef([
    { value: 'gamesPrice', name: '金額' },
    { value: 'gamesSid', name: '評價分數' }, //待分數
    { value: 'gamesOpen', name: '開幕日期' },
  ])

  return (
    <>
      <div className="index position-relative">
        <GotopButton />
        {isLoading ? <Loading /> : ''}
        <div className="container mt-5 d-block d-sm-flex">
          <input
            type="search"
            className="game-search"
            placeholder="請輸入關鍵字"
            value={state.searchKey}
            onChange={(e) => {
              dispatch({
                type: 'searchKey',
                payload: e.target.value,
              })
              setSearchParam({
                ...searchParam,
                searchKey: e.target.value,
              })
            }}
          />
          <div>
            <div className="d-flex d-sm-block">
              <select
                value={state.city}
                className="game-select mx-3"
                onChange={(e) => {
                  dispatch({
                    type: 'city',
                    payload: e.target.value,
                  })
                  setSearchParam({
                    ...searchParam,
                    city: e.target.value,
                  })
                }}
              >
                <option value="">全部地區</option>
                {citySelect.current.map((v, i) => {
                  return (
                    <React.Fragment key={v}>
                      <option value={v}>{v}</option>
                    </React.Fragment>
                  )
                })}
              </select>
              <select
                value={state.minLimit}
                className="game-select mx-3"
                onChange={(e) => {
                  dispatch({
                    type: 'minLimit',
                    payload: e.target.value,
                  })
                  setSearchParam({
                    ...searchParam,
                    minLimit: e.target.value,
                  })
                }}
              >
                <option value={100}>最少人數</option>
                {minLimitSelect.current.map((v, i) => {
                  return (
                    <React.Fragment key={v}>
                      <option value={v}>{v}人</option>
                    </React.Fragment>
                  )
                })}
              </select>
            </div>
          </div>

          <button
            className="btn btn-secondary game-toggle-button"
            onClick={() => {
              searchbarRef.current.classList.toggle('close')
              searchButtonRef.current.classList.toggle('btn-danger')
            }}
            ref={searchButtonRef}
          >
            進階篩選
          </button>
        </div>
        <div
          className="container align-items-center mt-3 game-searchbar close"
          ref={searchbarRef}
        >
          <p className="m-0 me-3">難度</p>
          <ul className="d-flex list-unstyled align-items-center">
            {difficultySelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.difficulty === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={(e) => {
                      dispatch({
                        type: 'difficulty',
                        payload: i,
                      })
                      Searchdispatch({
                        type: 'difficulty',
                        payload: v.value,
                      })
                    }}
                  >
                    {v.name}
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
          <p className="m-0 me-3">類型</p>
          <ul className="d-flex list-unstyled align-items-center flex-sm-wrap">
            {typeSelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.type === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={(e) => {
                      dispatch({
                        type: 'type',
                        payload: i,
                      })
                      Searchdispatch({
                        type: 'type',
                        payload: v.value,
                      })
                    }}
                  >
                    {v.name}
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
          <p className="m-0 me-3">金額</p>
          <ul className="d-flex list-unstyled align-items-center">
            {cashSelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.cash === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={() => {
                      dispatch({
                        type: 'cash',
                        payload: i,
                      })
                      Searchdispatch({
                        type: 'cash',
                        payload: v.value,
                      })
                    }}
                  >
                    {v.name}
                    <FaLongArrowAltDown />
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
          <p className="m-0 me-3">時間</p>
          <ul className="d-flex list-unstyled align-items-center">
            {timeSelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.time === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={() => {
                      console.log(v.payload)
                      dispatch({
                        type: 'time',
                        payload: i,
                      })
                      Searchdispatch({
                        type: 'time',
                        payload: v.value,
                      })
                    }}
                  >
                    {v.name}
                    {i > 0 ? '分' : ''}
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
          <p className="m-0 me-3">其他</p>
          <ul className="d-flex list-unstyled align-items-center">
            {otherSelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.other === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={() => {
                      dispatch({
                        type: 'other',
                        payload: i,
                      })
                      Searchdispatch({
                        type: 'other',
                        payload: v.value,
                      })
                    }}
                  >
                    {v.name}
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
          <p className="m-0 me-3">排序</p>
          <ul className="d-flex list-unstyled align-items-center">
            {orderSelect.current.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <li
                    className={
                      state.order === i
                        ? 'btn btn-outline-danger m-2'
                        : 'btn btn-outline-secondary m-2'
                    }
                    onClick={() => {
                      dispatch({
                        type: 'order',
                        payload: i,
                      })
                      dispatch({
                        type: 'searchSwitch',
                        payload: !state.searchSwitch,
                      })
                      Searchdispatch({
                        type: 'order',
                        payload: v.value,
                      })
                      Searchdispatch({
                        type: 'searchSwitch',
                        payload: state.searchSwitch ? 'ASC' : 'DESC',
                      })
                    }}
                  >
                    {v.name}
                    {state.order == i ? (
                      state.searchSwitch ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )
                    ) : (
                      ''
                    )}
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-sm-4 g-3" ref={cardbodyRef}>
            {gameData.map((v, i) => {
              if (state.currentPage * 20 < i) return
              return (
                <div className="col game-card px-2" key={v.gamesSid}>
                  <div className="position-relative">
                    <Link to={`/game/${v.gamesSid}`}>
                      <img
                        src={`/gamesImages/${v.gamesImages}`}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
