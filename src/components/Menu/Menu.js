import { useRef } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { FaEquals } from 'react-icons/fa'

import './Menu.css'
import { useContextValue, checkToken } from '../../ContextDashbard'
const Menu = () => {
  const navigationRef = useRef(null)
  const menuModelRef = useRef(null)
  const navigate = useNavigate()
  return (
    <div
      style={{
        position: 'fixed',
        left: '0px',
        right: '0',
        top: '0',
        zIndex: '99999',
      }}
    >
      <div className="menu d-flex justify-content-between p-5">
        <ul className="navigation p-0" ref={navigationRef}>
          <li>
            <NavLink
              to="/"
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
          <li>
            <NavLink
              to="/5"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              評論
            </NavLink>
          </li>

          <span
            className="toggle-menu"
            onClick={() => {
              navigationRef.current.classList.toggle('active')
            }}
          ></span>
        </ul>
        <FaEquals
          className=" phone-navigation"
          style={{ fontSize: '30px' }}
          onClick={() => {
            console.log(menuModelRef.current)
            menuModelRef.current.style.display = 'block'
          }}
        />
        <div>
          {!!checkToken()?.token ? (
            checkToken()?.target == 'store' ? (
              <Link to="/store">
                <img
                  src={`${
                    checkToken()?.logo.length < 20
                      ? `/storeimages/${checkToken()?.logo}`
                      : `${checkToken()?.logo}`
                  }`}
                  alt=""
                  style={{
                    width: '70px',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    objectPosition: 'center center',
                    objectFit: 'cover',
                  }}
                />
              </Link>
            ) : (
              <Link to="/member">
                <img
                  src={`${
                    checkToken()?.logo.length < 20
                      ? `/storeimages/${checkToken()?.logo}`
                      : `${checkToken()?.logo}`
                  }`}
                  alt=""
                  style={{
                    width: '70px',
                    aspectRatio: '1/1',
                    borderRadius: '50%',
                    objectPosition: 'center center',
                    objectFit: 'cover',
                  }}
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
                alert('登出成功')
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
            console.log(menuModelRef.current)
            menuModelRef.current.style.display = 'none'
          }}
        ></button>
        <ul className="p-0 py-5 text-center phone-navigation">
          <li>
            <NavLink to="/">首頁</NavLink>
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
          <li>
            <NavLink to="/5">評論</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
