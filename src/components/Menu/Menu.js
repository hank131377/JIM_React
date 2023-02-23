import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLine,
  FaEquals,
} from 'react-icons/fa'

import './Menu.css'
const Menu = () => {
  const navigationRef = useRef(null)
  const menuModelRef = useRef(null)
  return (
    <>
      <div className="menu d-flex justify-content-between p-5">
        <h1
          className="m-0"
          style={{
            fontFamily: 'Jost, sans-serif',
          }}
        >
          J O I N M E
        </h1>
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
              分類
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/3"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              購買須知
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/4"
              className={({ isActive }) => {
                return isActive ? 'clicked' : ''
              }}
            >
              會員
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
            <NavLink href="/#">
              <FaFacebook />
            </NavLink>
            <NavLink href="/#">
              <FaInstagramSquare />
            </NavLink>
            <NavLink href="/#">
              <FaYoutube />
            </NavLink>
            <NavLink href="/#">
              <FaLine />
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
      </div>
      <div className="phone-navigation menu-model" ref={menuModelRef}>
        <button
          type="button"
          className="btn-close btn-close-white m-5"
          aria-label="Close"
          onClick={() => {
            console.log(menuModelRef.current)
            menuModelRef.current.style.display = 'none'
          }}
        ></button>
        <ul className="p-0 py-5 text-center">
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
            <NavLink to="/3">購買須知</NavLink>
          </li>
          <li>
            <NavLink to="/4">會員</NavLink>
          </li>
          <li>
            <NavLink to="/map">地圖</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
