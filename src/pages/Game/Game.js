import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useContextValue } from '../../ContextDashbard'
import Loading from '../../components/Loading/Loading'
import GotopButton from '../../components/GotopButton/GotopButton'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import {
  GameSequentialSearch,
  GameBinarySearch,
  GameList,
} from './GameComponent'
import { reducer, Searchreducer } from './GameModel'

const Game = () => {
  const { getBackData } = useContextValue()
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
    minLimit: 12,
    difficulty: '',
    type: '',
    cash: 10000,
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

  // useEffect(() => {
  //   const clientMove = (e) => {
  //     const height =
  //       window.window.scrollY >
  //       cardbodyRef.current.offsetHeight +
  //         cardbodyRef.current.offsetTop -
  //         window.innerHeight
  //     if (
  //       cardbodyRef.current.offsetHeight < 11850 &&
  //       height &&
  //       gameData.length >= 200
  //     ) {
  //       setIsLoading(true)
  //       state.currentPage++
  //       dispatch({
  //         type: 'currentPage',
  //         value: state.currentPage,
  //       })
  //       setTimeout(() => {
  //         setIsLoading(false)
  //       }, 2000)
  //     }
  //   }
  //   window.addEventListener('scroll', clientMove, false)
  //   return () => window.removeEventListener('scroll', clientMove)
  // }, [gameData, searchParam, Searchstate])

  useEffect(() => {
    const body = document.querySelector('body')
    // if (isLoading) {
    //   body.style.overflow = 'hidden'
    // } else {
    //   body.style.overflow = 'auto'
    // }
    body.style.overflow = 'hidden'
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      body.style.overflow = 'auto'
    }, 2000)
  }, [])

  const peopleMinNun = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const gameDataSort = useMemo(() => {
    return gameData.sort((a, b) => {
      return state.searchSwitch ? a.rate - b.rate : b.rate - a.rate
    })
  }, [gameData, state.searchSwitch])

  return (
    <>
      <div className="game-index">
        {/* <LogoHorizontal /> */}
        <GotopButton />
        {isLoading ? <Loading /> : ''}
        <GameSequentialSearch
          state={state}
          dispatch={dispatch}
          Searchdispatch={Searchdispatch}
          searchParam={searchParam}
          searchbarRef={searchbarRef}
          peopleMinNun={peopleMinNun}
        />
        <GameBinarySearch
          state={state}
          dispatch={dispatch}
          Searchdispatch={Searchdispatch}
          searchbarRef={searchbarRef}
          Searchstate={Searchstate}
        />
        <GameList
          cardbodyRef={cardbodyRef}
          gameData={gameData}
          state={state}
          gameDataSort={gameDataSort}
        />
      </div>
    </>
  )
}

export default Game
