import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { FaEquals } from 'react-icons/fa'

import { checkToken, useContextValue, swalAlert } from '../../ContextDashbard'
import './Menu.css'
const Menu = () => {
  const { getBackData, render } = useContextValue()
  const navigationRef = useRef(null)
  const menuModelRef = useRef(null)
  const menuButtonRef = useRef(null)
  const navigate = useNavigate()
  const [logoData, setLogoData] = useState([])
  useEffect(() => {
    if (!checkToken()?.token) return
    if (checkToken().target == 'store') {
      getBackData(
        `http://localhost:3005/store/storeInfo/${checkToken()?.sid}`,
        setLogoData
      )
    } else {
      getBackData(
        `http://localhost:3005/member/memberInfo/${checkToken()?.sid}`,
        setLogoData
      )
    }
  }, [render])
  return (
    <div className="menu">
      <div className=" d-flex justify-content-between p-5 pb-0">
        <ul className="navigation p-0" ref={navigationRef}>
          <li>
            <NavLink
              to="/index"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              首頁
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              遊戲總覽
            </NavLink>
          </li>
          {!!checkToken()?.token ? (
            checkToken().target === 'store' ? (
              <li>
                <NavLink
                  to="/store"
                  className={({ isActive }) => {
                    return isActive ? 'clicked' : ''
                  }}
                >
                  工作室
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/member"
                  className={({ isActive }) => {
                    return isActive ? 'clicked' : ''
                  }}
                >
                  會員中心
                </NavLink>
              </li>
            )
          ) : (
            ''
          )}

          <li>
            <NavLink
              to="/map"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              地圖
            </NavLink>
          </li>

          <span
            className="toggle-menu"
            onClick={() => {
              navigationRef.current.classList.toggle('active')
            }}
          ></span>
        </ul>
        <div ref={menuButtonRef}>
          <FaEquals
            className="phone-navigation"
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={() => {
              menuModelRef.current.style.display = 'block'
              menuButtonRef.current.style.color = 'black'
            }}
          />
        </div>

        <div>
          {!!checkToken()?.token ? (
            checkToken()?.target == 'store' ? (
              <Link to="/store">
                <img
                  // src={`${
                  //   checkToken()?.logo.length < 20
                  //     ? `/storeimages/${checkToken()?.logo}`
                  //     : logoData[0]?.storeLogo
                  // }`}
                  src={`/storeimages/${logoData[0]?.storeLogo}`}
                  alt=""
                />
              </Link>
            ) : (
              <Link to="/member">
                <img
                  // src={`${
                  //   checkToken()?.logo.length < 20
                  //     ? `/storeimages/${checkToken()?.logo}`
                  //     : logoData[0]?.memHeadshot
                  // }`}
                  src={`/storeimages/${logoData[0]?.memHeadshot}`}
                  alt=""
                />
              </Link>
            )
          ) : (
            ''
          )}
          {!!checkToken()?.token ? (
            <button
              className="btn btn-outline-danger mx-3"
              onClick={() => {
                localStorage.removeItem('token')
                swalAlert('登出成功', '登出成功', 'success', '確認')
                navigate('/')
              }}
            >
              登出
            </button>
          ) : (
            <Link to="/signin" className="btn btn-outline-danger mx-3">
              登入
            </Link>
          )}
        </div>
      </div>
      <div className="phone-navigation menu-model" ref={menuModelRef}>
        <button
          type="button"
          className="btn-close btn-close-white m-5 phone-navigation"
          aria-label="Close"
          onClick={() => {
            menuModelRef.current.style.display = 'none'
            menuButtonRef.current.style.color = 'white'
          }}
        ></button>
        <ul className="p-0 py-5 text-center phone-navigation h-100">
          <li>
            <NavLink to="/index">首頁</NavLink>
          </li>
          <li>
            <NavLink to="/game">遊戲總覽</NavLink>
          </li>
          <li>
            <NavLink to="/signin">工作室</NavLink>
          </li>
          <li>
            <NavLink to="/map">地圖</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
