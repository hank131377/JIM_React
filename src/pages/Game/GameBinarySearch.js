import { useEffect, useState, useRef, Fragment } from 'react'
import { FaSortUp, FaSortDown } from 'react-icons/fa'

import { useContextValue } from '../../ContextDashbard'
import { GameSearchModel } from './GameModel'
const GameBinarySearch = ({
  state,
  dispatch,
  Searchdispatch,
  searchbarRef,
  Searchstate,
}) => {
  const { getBackData } = useContextValue()
  const [gamesdifficulty, setGamesdifficulty] = useState([])
  const [gamesfeature01, setGamesfeature01] = useState([])
  const [gamesprice, setGamesprice] = useState([])
  const [gamestime, setGamestime] = useState([])
  const [gamessort, setGamessort] = useState([])
  const listType = [
    {
      type: 'gamesdifficulty',
      method: setGamesdifficulty,
      typeText: '難度',
      typeName: 'difficulty',
      typeData: gamesdifficulty,
      typeSid: 'gamesDifficultySid',
      typeValue: 'difficulty',
    },
    {
      type: 'gamesfeature01',
      method: setGamesfeature01,
      typeText: '類型',
      typeName: 'type',
      typeData: gamesfeature01,
      typeSid: 'gamesFeatureSid',
      typeValue: 'feature01',
    },
    {
      type: 'gamesprice',
      method: setGamesprice,
      typeText: '價格',
      typeName: 'cash',
      typeData: gamesprice,
      typeSid: 'gamesPriceSid',
      typeValue: 'price',
    },
    {
      type: 'gamestime',
      method: setGamestime,
      typeText: '時間',
      typeName: 'time',
      typeData: gamestime,
      typeSid: 'gamesTimeSid',
      typeValue: 'Time',
    },
    {
      type: 'gamessort',
      method: setGamessort,
      typeText: '玩法',
      typeName: 'other',
      typeData: gamessort,
      typeSid: 'gamesSortSid',
      typeValue: 'Sort',
    },
  ]

  useEffect(() => {
    listType.forEach((v, i) => {
      getBackData(
        `http://localhost:3005/games/getGameSelect/${v.type}`,
        v.method
      )
    })
  }, [])

  const orderSelect = useRef([
    { value: 'gamesPrice', name: '金額' },
    { value: 'gamesOpen', name: '開幕日期' },
  ])

  return (
    <div
      className="container align-items-center mt-3 game-searchbar close"
      ref={searchbarRef}
    >
      {listType.map((v, i) => {
        return (
          <Fragment key={i}>
            <GameSearchModel
              Searchstate={Searchstate}
              state={state}
              dispatch={dispatch}
              Searchdispatch={Searchdispatch}
              typeText={v.typeText}
              typeName={v.typeName}
              typeData={v.typeData}
              typeSid={v.typeSid}
              typeValue={v.typeValue}
            />
          </Fragment>
        )
      })}
      <p className="m-0 me-3">排序</p>
      <ul className="d-flex list-unstyled align-items-center">
        {orderSelect.current.map((v, i) => {
          return (
            <Fragment key={i}>
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
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default GameBinarySearch
