import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment'
import { FaRunning } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'

import { checkToken, useContextValue } from './../../ContextDashbard'
import { useForm, useWatch } from 'react-hook-form'
const MemberCoupon = () => {
  const { getBackData } = useContextValue()
  const [couponError, setCouponError] = useState()
  const [getCoupon, setGetCoupon] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onTouched',
  })
  const submit = async (data) => {
    const { coupon } = data
    const r = await axios.get(
      `http://localhost:3005/games/setcoupon?rand=${coupon}&sid=${
        checkToken().sid
      }`
    )
    setCouponError(r.data)
  }
  // const getCoupon = useMemo(async () => {
  //   const r = await axios.get(
  //     `http://localhost:3005/games/getcoupon?sid=${checkToken().sid}`
  //   )
  //   console.log(5648)
  //   return r.data
  // }, [couponError])
  useEffect(() => {
    getBackData(
      `http://localhost:3005/games/getcoupon?sid=${checkToken().sid}`,
      setGetCoupon
    )
  }, [couponError])

  return (
    <div className="store-list-body text-center py-5 px-5 stores">
      <p className="store-subtitle">優惠券</p>
      <form className="mt-3" onSubmit={handleSubmit(submit)}>
        <label style={{ color: '#FFFFFF' }} htmlFor="coupon">
          優惠券輸入：
        </label>
        <input
          type="text"
          className={`${errors['coupon'] && 'is-invalid'}`}
          name=""
          id="coupon"
          {...register('coupon', {
            required: { value: true, message: '請輸入優惠券碼' },
          })}
        />
        <button className="btn btn-danger ms-3">輸入</button>
        <div id="" className="" style={{ color: '#dc3545' }}>
          {couponError == '優惠券輸入錯誤或已被使用' ? couponError : ''}
        </div>

        {errors['coupon'] && (
          <div id="validationServer03Feedback" className="invalid-feedback">
            {errors['coupon']?.message}
          </div>
        )}
      </form>
      <table className="table mt-3 store-table text-nowrap">
        <thead>
          <tr>
            <th>優惠券名稱</th>
            <th>折扣價格</th>
            <th>使用狀態</th>
          </tr>
        </thead>
        <tbody>
          {getCoupon.map((v, i) => {
            console.log(v, i)
            return (
              <tr key={v.discountRand}>
                <td>{v.discountName}</td>
                <td>{v.discountPrice}</td>
                <td>{v.discountState}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MemberCoupon
