import React, { useState } from 'react'
import { SigninChange, SigninObjectIn, SigninRegister } from './SigninModel'

const SigninMember = () => {
  const [chceked, setChceked] = useState(true)
  return (
    <div className="d-flex justify-content-sm-center">
      <div className="w-50 signin-router-outbody">
        <SigninChange name="會員" chceked={chceked} setChceked={setChceked} />
        {chceked ? (
          <SigninObjectIn name="會員" />
        ) : (
          <SigninRegister name="會員" />
        )}
      </div>
    </div>
  )
}

export default SigninMember
