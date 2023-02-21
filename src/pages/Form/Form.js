import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const submit = async (data) => {
    try {
      const r = await axios.post('http://localhost:3005/login', data)
      console.log(r.data)
      if (r?.data?.success) {
        const { account, accountId, token } = r.data

        localStorage.setItem(
          'myAuth',
          JSON.stringify({
            account,
            accountId,
            token,
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [state, setState] = useState('')
  useEffect(() => {}, [])
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register('account')}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register('password')}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {state}
      {state ? <button>登出</button> : <button>登入</button>}
    </div>
  )
}

export default Form
