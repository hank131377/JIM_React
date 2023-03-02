import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useContextValue } from '../../ContextDashbard'
import Loading from '../../components/Loading/Loading'
import GotopButton from '../../components/GotopButton/GotopButton'
import './Game.css'
import {
  GameSequentialSearch,
  GameBinarySearch,
  GameList,
} from './GameComponent'

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
      const height =
        window.window.scrollY >
        cardbodyRef.current.offsetHeight +
          cardbodyRef.current.offsetTop -
          window.innerHeight
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

  return (
    <>
      <div className="index position-relative">
        <GotopButton />
        {isLoading ? <Loading /> : ''}
        <div className="container mt-5 d-block d-sm-flex">
          <GameSequentialSearch
            state={state}
            dispatch={dispatch}
            setSearchParam={setSearchParam}
            searchParam={searchParam}
            searchbarRef={searchbarRef}
          />
        </div>
        <div
          className="container align-items-center mt-3 game-searchbar close"
          ref={searchbarRef}
        >
          <GameBinarySearch
            state={state}
            dispatch={dispatch}
            Searchdispatch={Searchdispatch}
          />
        </div>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-sm-4 g-3" ref={cardbodyRef}>
            <GameList
              cardbodyRef={cardbodyRef}
              gameData={gameData}
              state={state}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Game
