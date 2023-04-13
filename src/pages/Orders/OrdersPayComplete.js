import React, { useEffect, useState } from 'react'
import { Link, useOutletContext, useSearchParams } from 'react-router-dom'
import { useContextValue } from '../../ContextDashbard'

const OrdersPayComplete = () => {
  const { orderNum, setOrderNum } = useOutletContext()
  setOrderNum(4)
  const [searchParams, setSearchParams] = useSearchParams()
  const [completeData, setCompleteData] = useState([])
  const { getBackData } = useContextValue()
  useEffect(() => {
    console.log(searchParams.get('orderId'))
    getBackData(
      `http://localhost:3005/orders/ordercomplete?orderSid=${searchParams.get(
        'orderId'
      )}`,
      setCompleteData
    )
  }, [])
  return (
    <div className="mt-3 w-100 text-center">
      <p>成功預約，祝您玩得愉快!</p>
      {completeData.map((v, i) => {
        return (
          <div className="w-100 bg-dark" key={v.orderSid}>
            <h3 className="py-5">預約編號：{v.orderSid}</h3>
            <p>付費方式：Line Pay</p>
            <p>預約日期：{v.orderDate}</p>
            <p>訂單總額：NT$ {v.checkPrice}</p>
            <div className="py-3">
              <Link to="/index" className="mx-5 btn btn-outline-danger">
                回首頁
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OrdersPayComplete
