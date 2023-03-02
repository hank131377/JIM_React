import { useState } from 'react'
import { Link } from 'react-router-dom'

const SigninRouter = ({ name, nameen, url }) => {
  return (
    <div className="py-5 signin-outcard">
      <Link to={`/signin/${url}`}>
        <div className="text-center signin-card">
          <p className="signin-card-ch">{name}</p>
          <p className="signin-card-en">{nameen}</p>
        </div>
        <div className="text-center">
          <p>由此前往：{name}註冊/登入</p>
          <p>{nameen} SIGN UP/ SIGN IN FROM HERE</p>
        </div>
      </Link>
    </div>
  )
}

const SigninChange = ({ name, chceked, setChceked }) => {
  return (
    <div className="d-flex text-center justify-content-center signin-router">
      <div
        className="w-100"
        style={{ background: chceked ? 'red' : '', borderRadius: '20px 0 0 0' }}
      >
        <div
          className="signin-router-right"
          onClick={() => {
            setChceked(true)
          }}
        >
          <p className="">{name}登入</p>
        </div>
      </div>
      <div
        className="w-100"
        style={{ background: chceked ? '' : 'red', borderRadius: '0 20px 0 0' }}
      >
        <div
          className="signin-router-left"
          onClick={() => {
            setChceked(false)
          }}
        >
          <p className="">{name}註冊</p>
        </div>
      </div>
    </div>
  )
}

const SigninObjectIn = ({ name }) => {
  return (
    <div className="signin-router-body text-center py-5">
      <div>
        <p>{name}登入</p>
        <span>SIGN IN</span>
      </div>
      <form>
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入帳號"
        />
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入密碼"
        />
        <button className="w-75 signin-botton">SIGN IN</button>
      </form>
    </div>
  )
}

const SigninRegister = ({ name }) => {
  return (
    <div className="signin-router-body text-center py-5">
      <div>
        <p>{name}註冊</p>
        <span>SIGN UP</span>
      </div>
      <form>
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入名字"
        />
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入密碼"
        />
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入密碼"
        />
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入密碼"
        />
        <input
          type="text"
          className="w-75 signin-router-botton"
          placeholder="請輸入密碼"
        />
        <button className="w-75 signin-botton">SIGN UP</button>
      </form>
    </div>
  )
}

export { SigninRouter, SigninChange, SigninObjectIn, SigninRegister }
