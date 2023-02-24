import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const LinePay = () => {
  const [produsts, setProdusts] = useState([])
  const [nowOrder, setnowOrder] = useState({})
  const [orderList, setorderList] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get('transactionId'), searchParams.get('orderId'))
  useEffect(() => {
    ;(async () => {
      const r = await axios('http://localhost:3005/linepay')
      let data = []
      for (let i in r.data) {
        data = [...data, r.data[i]]
      }
      console.log(data)

      setProdusts(data)
    })()
  }, [])
  const getOrderId = async (prodId) => {
    const r = await axios(`http://localhost:3005/linepay/${prodId}`)
    const { orderId } = r.data
    const { id } = r.data.packages[0]
    setnowOrder({ orderId, id })
  }

  const createOrder = async (orderId) => {
    console.log(orderId)
    const r = await axios.post(
      `http://localhost:3005/linepay/createOrder/${orderId}`
    )
    console.log(r.data)
    setorderList(r.data)
  }

  useEffect(() => {
    console.log(orderList.linePayUrl)
    if (orderList.linePayUrl) {
      console.log('準備跳網址')
      window.location.href = orderList.linePayUrl
    } else {
      console.log('驗證失敗')
    }
  }, [orderList])

  return (
    <div className="container">
      <h1>LinePay</h1>
      {produsts.map((v, i) => {
        const { packages } = v
        return (
          <div key={i}>
            <p>{packages[0].id}</p>
            <button
              onClick={(e) => {
                getOrderId(packages[0].id)
              }}
            >
              產生orderid
            </button>
          </div>
        )
      })}
      <hr />
      <p>現在的產品名稱： {nowOrder.id}</p>
      <p>現在的訂單編號： {nowOrder.orderId}</p>
      <button
        onClick={(e) => {
          createOrder(nowOrder.id)
        }}
      >
        送出表單
      </button>
      <hr />
      <pre>送出的資訊： {JSON.stringify(orderList, null, 3)}</pre>
    </div>
  )
}

export default LinePay
