import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'

const SigninIndex = () => {
  return (
    <div className="index" style={{ marginTop: '50px' }}>
      <LogoHorizontal />
      <Outlet />
    </div>
  )
}

export default SigninIndex
