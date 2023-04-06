import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import IndexGame from './IndexGame'
import Page1 from './Page1'
import Page2 from './Page2'
import GameOver from './GameOver'
const IndexList = () => {
  const { part } = useParams()
  const { sum, setSum } = useOutletContext()
  const [gameOver, setGameOver] = useState(false)
  let currentPage = ''
  switch (part) {
    case 'index':
      currentPage = (
        <>
          <Page1 />
          <Page2 />
        </>
      )
      break
    case 'result':
      currentPage = (
        <>
          <GameOver sum={sum} />
          {/* <Page1 sum={sum} /> */}
          {/* <Page2 /> */}
        </>
      )
      break
    default: {
      currentPage = (
        <IndexGame
          sum={sum}
          setSum={setSum}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      )
    }
  }

  return <>{currentPage}</>
}

export default IndexList
