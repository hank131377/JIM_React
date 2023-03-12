import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

import { useContextValue } from '../../ContextDashbard'
import Logo from '../../components/Logo/Logo'

const GameSinglePage = () => {
  const { getBackData } = useContextValue()
  const [gameInfoData, setGameInfoData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getBackData(
      `http://localhost:3005/games/gameSingle?sid=${id}`,
      setGameInfoData
    )
  }, [id])
  return (
    <>
      <div className="game-index">
        <div className="d-flex flex-xl-row flex-column justify-content-between">
          <Logo />
          <div className="mx-5 my-5 d-flex justify-content-center">
            {gameInfoData.map((v, i) => {
              return (
                <div className="game-single-img" key={v.gamesSid}>
                  <img
                    src={`${
                      v.gamesImages.length < 10
                        ? `/gamesImages/${v.gamesImages}`
                        : `${v.gamesImages}`
                    }`}
                    alt=""
                  />
                </div>
              )
            })}
          </div>
          <div className="game-comment-list">
            <div>
              <ul className="list-unstyled d-flex justify-content-around game-navlink flex-sm-row flex-column">
                <li className="me-3 mb-sm-0 mb-3">
                  <NavLink
                    className={!useParams().page ? 'checked' : ''}
                    to={`/game/${id}`}
                  >
                    遊戲說明
                  </NavLink>
                </li>
                <li className="me-3 mb-sm-0 mb-3">
                  <NavLink
                    className={useParams().page == 'reserve' ? 'checked' : ''}
                    to={`/game/${id}/reserve`}
                  >
                    預約
                  </NavLink>
                </li>
                <li className="me-3 mb-sm-0 mb-3">
                  <NavLink
                    className={useParams().page == 'comment' ? 'checked' : ''}
                    to={`/game/${id}/comment`}
                  >
                    評論
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet context={gameInfoData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameSinglePage
