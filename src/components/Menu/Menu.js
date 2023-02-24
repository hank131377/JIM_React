import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLine,
  FaEquals,
} from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'

import './Menu.css'
const Menu = () => {
  const navigationRef = useRef(null)
  const menuModelRef = useRef(null)
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
              to="/1"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              遊戲總覽
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/2"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              工作室
            </NavLink>
          </li>
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
              to="/4"
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

        {/* <h1
          className="m-0"
          style={{
            fontFamily: 'Jost, sans-serif',
          }}
        >
          J O I N M E
        </h1> */}
        <FaEquals
          className=" phone-navigation"
          style={{ fontSize: '30px' }}
          onClick={() => {
            console.log(menuModelRef.current)
            menuModelRef.current.style.display = 'block'
          }}
        />
        <div>
          {/* <BsFillPeopleFill style={{ fontSize: '30px', cursor: 'pointer' }} /> */}
          <img
            src="/storeimages/Logo02.jpg"
            alt=""
            style={{ width: '45px', borderRadius: '50%', cursor: 'pointer' }}
          />
          <button className="btn btn-outline-danger mx-3">登出</button>
          {/* <button className="btn btn-outline-danger mx-3">登入</button> */}
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
            <NavLink to="/1">遊戲總覽</NavLink>
          </li>
          <li>
            <NavLink to="/2">分類</NavLink>
          </li>
          <li>
            <NavLink to="/map">地圖</NavLink>
          </li>
          <li>
            <NavLink to="/3">評論</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
