import { FaBook } from 'react-icons/fa'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { RiDeleteBin6Fill, RiEditBoxFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { checkToken, useContextValue } from './../../ContextDashbard'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import StroeEdit from './StroeEdit'
import Modal from 'react-bootstrap/Modal'
import StoreOrder from './StoreOrder'
const Store = () => {
  console.log(checkToken().sid)
  const navigate = useNavigate()
  const getBackData = useContextValue()
  const [render, setRender] = useState(true)
  const [storeOrderList, setStoreOrderList] = useState([])
  const [orderData, setOrderData] = useState([])
  useEffect(() => {
    getBackData(
      `  http://localhost:3005/getStoreOrderData/${checkToken()?.sid}`,
      setStoreOrderList
    )
  }, [render])
  const storeSwitch = async (orderSid, state) => {
    let str = !!state ? 0 : 1
    console.log(str, 55555555555)
    try {
      const r = await axios.put(
        `http://localhost:3005/storeOredrSwitch/${orderSid}?state=${str}`
      )
      setRender(!render)
    } catch (error) {}
  }
  const [state, setState] = useState(2)
  const [keyWord, setKeyWord] = useState('')
  const filterStateData = useMemo(() => {
    return storeOrderList
      .filter((v, i) => {
        if (state == 2) return v
        return v.orderState == state
      })
      .filter((v, i) => {
        return v.orderSid.toString().indexOf(keyWord) !== -1
      })
  }, [storeOrderList, state, keyWord])

  return (
    <>
      <div className="store-list-body text-center py-5">
        <p>訂單紀錄</p>
        <div className="my-3 float-end">
          <label>訂單編號：</label>
          <input
            className="me-3"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setKeyWord(e.target.value)
            }}
          />
          <label
            htmlFor="2"
            className={`${state == 2 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            全部顯示
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="2"
            value={2}
            defaultChecked={true}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
          <label
            htmlFor="1"
            className={`${state == 1 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            已完成
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="1"
            value={1}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
          <label
            htmlFor="0"
            className={`${state == 0 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            未完成
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="0"
            value={0}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
        </div>
        <table className="table mt-3 store-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>訂單編號</th>
              <th className="phonehidden">遊戲名稱</th>
              <th>訂單狀態</th>
              <th className="phonehidden">訂購人</th>
              <th>詳細資料</th>
            </tr>
          </thead>
          <tbody>
            {filterStateData.map((v, i) => {
              console.log(v)
              return (
                <tr key={v.orderSid}>
                  <td>{v.orderDate}</td>
                  <td>{v.orderSid}</td>
                  <td className="phonehidden">{v.gamesName}</td>
                  <td>
                    <div className="form-check form-switch pb-1 d-flex justify-content-center">
                      <input
                        style={{ cursor: 'pointer' }}
                        className="form-check-input "
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => {
                          storeSwitch(v.orderSid, v.orderState)
                        }}
                        checked={v.orderState == 1 ? true : false}
                      />
                    </div>
                  </td>
                  <td className="phonehidden">{v.orderUsername}</td>
                  <td>
                    <StoreOrder orderSid={v.orderSid} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Store
