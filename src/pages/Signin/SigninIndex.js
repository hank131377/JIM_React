import React from 'react'
import { Outlet } from 'react-router-dom'
// import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
const SigninIndex = () => {
  return (
    <div className="singinAndMap">
      {/* <LogoHorizontal /> */}
      <Outlet />
    </div>
  )
}

export default SigninIndex
