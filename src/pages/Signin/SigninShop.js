import React, { useState } from 'react'
import { SigninChange, SigninStortIn, SigninStoreRegister } from './SigninModel'

const SigninShop = () => {
  const [chceked, setChceked] = useState(true)
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 signin-router-outbody">
        <SigninChange name="廠商" chceked={chceked} setChceked={setChceked} />
        {chceked ? (
          <SigninStortIn name="廠商" />
        ) : (
          <SigninStoreRegister name="廠商" />
        )}
      </div>
    </div>
  )
}

export default SigninShop
