import React from 'react'
import { IoIosArrowDropleft } from 'react-icons/io'
import { IoIosArrowDropright } from 'react-icons/io'
import gameData from './data/game.json'
import { useState } from 'react'
import { Transition } from 'react-transition-group'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// import { CSSTransition } from "react-transition-group";

const Page1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const clickNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= gameData.length) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(nextIndex)
    }
  }
  const clickPrev = () => {
    const prevIndex = currentIndex - 1
    if (prevIndex < 0) {
      setCurrentIndex(gameData.length - 1)
    } else {
      setCurrentIndex(prevIndex)
    }
  }
  const currentGameData = gameData[currentIndex]

  const defaultStyle = {
    transition: `opacity ${300}ms ease-in-out`,
    opacity: 1,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  }

  const nodeRef = useRef(null)
  return (
    <>
      <div className="body d-flex align-items-center justify-content-start ">
        <div id="leftBody">
          <div id="leftContent">
            <div>
              <div id="hint" className="row">
                熱門推薦
              </div>
            </div>
            <div
              id="name_blood"
              className="row align-items-start align-items-lg-center flex-column flex-lg-row"
            >
              <div className="col d-flex align-items-center">
                <div className="gameName h-100 my-3 row">
                  {currentGameData.name}
                </div>
              </div>
              <div id="blood" className=" align-items-center d-flex">
                {[...Array(5)].map((v, i) => {
                  return i <= currentGameData.level ? (
                    <img
                      key={i}
                      id="bloodRate"
                      src={`/Images/first_page/bloodRateRed.svg`}
                      alt=""
                    ></img>
                  ) : (
                    <img
                      key={i}
                      id="bloodRate"
                      src={`/Images/first_page/bloodRateWhite.svg`}
                      alt=""
                    ></img>
                  )
                })}
              </div>
            </div>

            <div
              className="gameContent row my-2"
              dangerouslySetInnerHTML={{ __html: currentGameData.content }}
            ></div>

            <div id="tags" className="row my-3">
              <div id="mytag" className="d-flex">
                {currentGameData.story}{' '}
              </div>
              <div id="mytag" className="d-flex">
                {currentGameData.player}{' '}
              </div>
              <div id="mytag" className="d-flex">
                {currentGameData.time}{' '}
              </div>
              <div id="mytag" className="d-flex">
                {currentGameData.address}{' '}
              </div>
            </div>
          </div>
        </div>

        <div id="rightBody" className="d-flex">
          <div className="d-flex flex-column align-items-center">
            <div className="right_box d-flex justify-content-center">
              <button
                id="next-arrow"
                className="mx-1 align-self-center icc"
                onClick={() => {
                  clickPrev()
                  setShow(!show)
                }}
              >
                <IoIosArrowDropleft size={40} />
                PREV
              </button>
              <Transition nodeRef={nodeRef} in={show} timeout={300}>
                {(state) => (
                  <div
                    ref={nodeRef}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                    id="right_img"
                    className="mask"
                  >
                    <img id="photo" src={currentGameData.img} alt="" />
                  </div>
                )}
              </Transition>

              <button
                className="align-self-center icc"
                onClick={() => {
                  clickNext()
                  setShow(!show)
                }}
              >
                <IoIosArrowDropright size={40} />
                NEXT
              </button>
            </div>
            <button
              id="btn-book"
              className="w-50"
              onClick={() => {
                navigate(`/game/${currentGameData.id}`)
                document.documentElement.scrollTop = 0
              }}
            >
              馬上預約
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page1
