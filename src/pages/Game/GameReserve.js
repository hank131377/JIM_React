import React, { useEffect, useMemo, useState } from 'react'
import Calendars from '../../components/Calendar/Calendars'
import { Link, useParams } from 'react-router-dom'
import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircle,
} from 'react-icons/md'
import moment from 'moment'
import { checkToken, useContextValue, swalAlert } from '../../ContextDashbard'

const GameReserve = () => {
  const { getBackData } = useContextValue()
  const { id } = useParams()
  const [gameReserve, setGameReserve] = useState([])
  const [timeGap, setTimeGap] = useState([])
  const [target, setTarget] = useState(-1)
  const [targetData, setTargetData] = useState('')
  const [headcount, setHeadcount] = useState(1)
  const [numState, setNumState] = useState(0)
  const now = new Date()
  const str = `${moment(now).get('year')}-${
    moment(now).get('month') + 1
  }-${moment(now).get('date')}`
  const [filterDate, setFilterDate] = useState(str)
  const [dateData, setDateData] = useState([])
  useEffect(() => {
    getBackData(
      `http://localhost:3005/games/filterDate?sid=${id}&date=${filterDate}`,
      setDateData
    )
  }, [filterDate])
  useEffect(() => {
    getBackData(
      `http://localhost:3005/games/gameSingle?sid=${id}`,
      setGameReserve
    )
  }, [])
  useEffect(() => {
    if (gameReserve[0]) {
      const { storeTime, Time } = gameReserve[0]
      const limitTime = storeTime.split('')
      if (limitTime[3] == 0) {
        limitTime[3] = ''
      }
      if (limitTime[9] == 0) {
        limitTime[9] = ''
      }
      const sh = `${limitTime[0]}${limitTime[1]}`
      const sm = `${limitTime[3]}${limitTime[4]}`
      const start = new Date(0, 0, 0, +sh, +sm, 0).getTime()
      const eh = `${limitTime[6]}${limitTime[7]}`
      const em = `${limitTime[9]}${limitTime[10]}`
      const end = new Date(0, 0, 0, +eh, +em, 0).getTime()
      const sessions = Math.floor((end - start) / (Time * 60000))

      const timeGap = [...Array(sessions)].map((v, i) => {
        const gap = start + Time * i * 60000
        let gh = new Date(gap).getHours()
        let gm = new Date(gap).getMinutes()
        if (gm == 0) {
          gm = '00'
        }
        const str = `${gh}:${gm}`
        return str
      })

      setTimeGap(timeGap)
      setHeadcount(gameReserve[0].gamesPeopleMin)
    }
  }, [gameReserve])

  return (
    <>
      <Calendars setFilterDate={setFilterDate} />
      <ul className="list-unstyled d-flex flex-wrap row-cols-2 flex-sm-wrap row-cols-sm-5">
        {timeGap.map((v, i) => {
          return (
            <li
              onClick={() => {
                setTargetData(v)
                setTarget(i)
              }}
              className={
                target == i
                  ? 'btn btn-danger m-sm-3 my-2'
                  : 'btn btn-outline-danger m-sm-3 my-2'
              }
              key={i}
            >
              {v}
            </li>
          )
        })}
      </ul>
      <div>
        <p>選擇數量</p>
        <div className="d-flex justify-content-between border-bottom mb-3">
          <p>人數</p>
          <p>
            <small className="mx-sm-2">
              NT$ {gameReserve[0]?.gamesPrice} /每人
            </small>
            <MdOutlineRemoveCircle
              style={{ fontSize: '30px', cursor: 'pointer' }}
              className={`mx-sm-2 ${numState == -1 ? 'text-danger' : ''}`}
              onClick={() => {
                setNumState(-1)
                if (headcount == gameReserve[0]?.gamesPeopleMin) return
                setHeadcount(headcount - 1)
              }}
            />
            <span className="mx-2">{headcount}</span>
            <MdOutlineAddCircleOutline
              style={{ fontSize: '30px', cursor: 'pointer' }}
              className={`mx-sm-2 ${numState == 1 ? 'text-danger' : ''}`}
              onClick={() => {
                setNumState(1)
                if (headcount == gameReserve[0]?.gamesPeopleMax) return
                setHeadcount(headcount + 1)
              }}
            />
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>總金額</p>
          <p>NT$ {headcount * gameReserve[0]?.gamesPrice}</p>
        </div>
        <Link
          to={`/orders?sid=${gameReserve[0]?.gamesSid}&cash=${
            headcount * gameReserve[0]?.gamesPrice
          }&people=${headcount}&date=${filterDate}&time=${targetData}&prod=${
            gameReserve[0]?.gamesName
          }`}
          className="btn btn-danger float-end"
          onClick={(e) => {
            if (checkToken()?.target !== 'member') {
              e.preventDefault()
              return swalAlert('請先登入會員', '', 'error', '確認')
            } else {
              if (target == -1) {
                e.preventDefault()
                swalAlert('請選擇時段', '', 'error', '確認')
              }
            }
          }}
        >
          前往預約
        </Link>
      </div>
    </>
  )
}

export default GameReserve
