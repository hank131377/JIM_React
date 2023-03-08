import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useContextValue } from '../../ContextDashbard'
const OrdersList = () => {
  const [search, setSearch] = useSearchParams()
  const [orderListData, setOrderListData] = useState([])
  const getBackData = useContextValue()
  useEffect(() => {
    getBackData(
      `http://localhost:3005/orders?sid=${search.get('sid')}`,
      setOrderListData
    )
  }, [])
  return (
    <>
      {orderListData.map((v, i) => {
        return (
          <div
            className="d-flex justify-content-between flex-xl-row flex-column order-card"
            key={v.gamesSid}
          >
            <div>
              <h2 className="py-3">{v.gamesName}</h2>
              <p>工作室：{v.storeName}</p>
              <p>地址：{v.storeAddress}</p>
              <p>預約日期：{search.get('date')}</p>
              <p>遊玩時間：{search.get('time')}</p>
              <p>遊玩人數：{search.get('people')}人</p>
              <p className="text-danger">總金額：NT$ {search.get('cash')}</p>
            </div>
            <div>
              <img
                src={`${
                  v.gamesImages.length < 20
                    ? `/gamesImages/${v.gamesImages}`
                    : `${v.gamesImages}`
                }`}
                alt=""
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default OrdersList
