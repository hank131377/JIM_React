import axios from 'axios'
import { useEffect, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { useContextValue, checkToken } from '../../ContextDashbard'

const OrdersPayInfo = () => {
  const { personalInfo } = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const [orderList, setorderList] = useState({})
  const postLinePay = async () => {
    const orderId = parseInt(new Date().getTime() / 1000)
    const r = await axios.post(
      `http://localhost:3005/linepay/createOrder/${orderId}?sid=${searchParams.get(
        'sid'
      )}&member=${checkToken().sid}&gamesid=${searchParams.get(
        'sid'
      )}&people=3&cash=${searchParams.get('cash')}&prod=${searchParams.get(
        'prod'
      )}&time=${searchParams.get('time')}&date=${searchParams.get('date')}`,
      { data: personalInfo }
    )
    setorderList(r.data)
  }
  useEffect(() => {
    console.log(orderList.linePayUrl)
    if (orderList.linePayUrl) {
      window.location.href = orderList.linePayUrl
    } else {
    }
  }, [orderList])
  return (
    <div className="mt-sm-5 mt-3 text-center bg-dark w-sm-100 w-75">
      <p className="pt-5">總金額：NT$ {searchParams.get('cash')}</p>
      <button
        className="btn btn-success my-5"
        onClick={() => {
          postLinePay()
        }}
      >
        LINE PAY 付款
      </button>
    </div>
  )
}

export default OrdersPayInfo
