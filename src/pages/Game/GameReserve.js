import React, { useState } from 'react'
import Calendars from '../../components/Calendar/Calendars'
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom'
import moment from 'moment/moment'
const GameReserve = () => {
  const data = useOutletContext()
  console.log(data)
  const [target, setTarget] = useState(-1)
  const { storeTime, Time } = data[0]
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
  console.log(+eh, +em)
  const end = new Date(0, 0, 0, +eh, +em, 0).getTime()
  console.log(end)
  const sessions = Math.floor((end - start) / (Time * 60000))
  console.log(sessions)

  const timeGap = [...Array(sessions)].map((v, i) => {
    const gap = start + Time * i * 60000
    let gh = new Date(gap).getHours()
    let gm = new Date(gap).getMinutes()
    if (gm == 0) {
      gm = '00'
    }
    const str = `${gh}-${gm}`
    return str
  })
  console.log(timeGap)
  return (
    <>
      <Calendars />
      <ul className="list-unstyled d-flex flex-wrap row-cols-5">
        {timeGap.map((v, i) => {
          return (
            <li
              onClick={() => {
                setTarget(i)
              }}
              className={
                target == i
                  ? 'btn btn-danger m-3'
                  : 'btn btn-outline-danger m-3'
              }
              key={i}
            >
              {v}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GameReserve
