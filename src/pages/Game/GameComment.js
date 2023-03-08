import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useParams, useSearchParams } from 'react-router-dom'
import { checkToken, useContextValue } from './../../ContextDashbard'
const GameComment = () => {
  const getBackData = useContextValue()
  const [gameCommentData, setGameCommentData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getBackData(
      `http://localhost:3005/getGameComment/${id}`,
      setGameCommentData
    )
    setImgUrl(gameCommentData[0]?.memHeadshot)
  }, [])
  const [imgUrl, setImgUrl] = useState()
  return (
    <div className="w-100">
      {gameCommentData.map((v, i) => {
        return (
          <div className="d-flex" key={v.gameSid}>
            <div className="me-3">
              <img
                src={
                  imgUrl?.length > 20
                    ? imgUrl
                    : `/storeimages/${gameCommentData[0]?.memHeadshot}`
                }
                alt=""
                style={{
                  borderRadius: '50%',
                  width: '60px',
                  aspectRatio: '1/1',
                }}
              />
            </div>
            <div
              className="game-comment-list"
              style={{ borderBottom: '1px solid red' }}
            >
              <p className="m-0">{v.memName}</p>
              {[...Array(5)].map((q, j) => {
                return (
                  <React.Fragment key={j}>
                    {v?.rate > i ? (
                      <FaStar
                        color="#D01B1B"
                        className="px-1"
                        style={{ fontSize: '40px' }}
                      />
                    ) : (
                      <FaRegStar
                        color="#D01B1B"
                        className="px-1"
                        style={{ fontSize: '40px' }}
                      />
                    )}
                  </React.Fragment>
                )
              })}
              <span className="float-end">
                {moment(v.create_at).format('yyyy年d月m日')}
              </span>
              <p>{v.content}</p>
              {console.log(v)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GameComment
