import React from 'react'
import { useRef } from 'react'
import { FaLongArrowAltDown, FaSortUp, FaSortDown } from 'react-icons/fa'
const GameBinarySearch = ({ state, dispatch, Searchdispatch }) => {
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
    </>
  )
}

export default GameBinarySearch
