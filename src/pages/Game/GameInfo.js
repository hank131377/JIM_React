import { useOutletContext, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { checkToken } from '../../ContextDashbard'
const GameInfo = () => {
  const data = useOutletContext()
  const [target, setTarget] = useState()
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      try {
        const r = await axios.get(
          `http://localhost:3005/games/getCollect/${id}?sid=${checkToken().sid}`
        )
        setTarget(!!r.data.length)
      } catch (error) {}
    })()
  }, [target])
  const addCollect = async () => {
    if (checkToken().target !== 'member') return
    if (target) {
      const r = await axios.delete(
        `http://localhost:3005/games/delCollect/${id}?sid=${checkToken().sid}`
      )
      if (!r.data.affectedRows) return
      setTarget(false)
    } else {
      const r = await axios.get(
        `http://localhost:3005/games/addCollect/${id}?sid=${checkToken().sid}`
      )
      if (!r.data.affectedRows) return
      setTarget(true)
    }
  }
  return (
    <>
      {data.map((v, i) => {
        console.log(v)
        return (
          <div key={v.gamesSid} className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <p style={{ fontSize: '40px' }}>{v.gamesName}</p>
              {checkToken()?.target == 'member' ? (
                <span
                  onClick={addCollect}
                  className={
                    target ? 'btn btn-danger' : 'btn btn-outline-danger'
                  }
                >
                  加入收藏
                </span>
              ) : (
                ''
              )}
            </div>
            <p>
              特色：
              {v.feature01} {v.feature02}
            </p>
            <p>
              遊戲人數：{v.gamesPeopleMin}-{v.gamesPeopleMax}人
            </p>
            <p>遊戲時間：{v.Time}分</p>
            <p>
              難度：
              {[...Array(5)].map((n, i) => {
                return (
                  <span className="me-3 mb-3 index-carousel-card" key={i}>
                    {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                  </span>
                )
              })}
            </p>
            <p>
              評價：
              {!!v.rate
                ? [...Array(Math.floor(v.rate))].map((q, j) => {
                    return (
                      <span key={j} className="me-1">
                        <FaStar
                          style={{
                            fill: 'rgb(223, 223, 0)',
                            fontSize: '35px',
                          }}
                        />
                      </span>
                    )
                  })
                : '暫無評價'}
              {!!v.rate ? `(${parseInt(v.rate * 10) / 10})` : ''}
            </p>
            <p className="mt-3 game-info-content">
              遊戲介紹：
              <br />
              {v.gamesContent}
            </p>
            <ul className="list-unstyled">
              <li>場館名稱：{v.storeName}</li>
              <li>場館地址：{v.storeAddress}</li>
              <li>營業時間：{v.storeTime}</li>
              <li>場館電話：{v.storeMobile}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default GameInfo
