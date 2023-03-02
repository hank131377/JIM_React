import { useParams } from 'react-router-dom'

import { GameComment, GameInfo, GameReserve } from './GameComponent'

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
