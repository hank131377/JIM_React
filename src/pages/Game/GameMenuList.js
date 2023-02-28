import React from 'react'
import { useParams } from 'react-router-dom'
import GameComment from './GameComment'
import GameInfo from './GameInfo'
import GameReserve from './GameReserve'

const GameMenuList = () => {
  const { page } = useParams()

  let currentPage = ''
  switch (page) {
    case 'reserve':
      currentPage = <GameReserve />
      break
    case 'comment': {
      currentPage = <GameComment />
      break
    }
    default: {
      currentPage = <GameInfo />
    }
  }
  return <div>{currentPage}</div>
}

export default GameMenuList
