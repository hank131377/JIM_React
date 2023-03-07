import { FaBook } from 'react-icons/fa'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { RiDeleteBin6Fill, RiEditBoxFill } from 'react-icons/ri'
import { FaPenAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { checkToken, useContextValue } from './../../ContextDashbard'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from 'react-bootstrap/Modal'
import StoreOrder from './../Store/StoreOrder'
import MemberOrder from './MemberOrder'
import MemberComment from './MemberComment'
const Member = () => {
  console.log(checkToken().sid)
  const navigate = useNavigate()
  const getBackData = useContextValue()
  const [render, setRender] = useState(true)
  const [memberOrderList, setMemberOrderList] = useState([])
  const [orderData, setOrderData] = useState([])
  useEffect(() => {
    getBackData(
      `  http://localhost:3005/getMemberOrderData/${checkToken()?.sid}`,
      setMemberOrderList
    )
  }, [render])
  // const storeSwitch = async (orderSid, state) => {
  //   let str = !!state ? 0 : 1
  //   try {
  //     const r = await axios.put(
  //       `http://localhost:3005/storeOredrSwitch/${orderSid}?state=${str}`
  //     )
  //     setRender(!render)
  //   } catch (error) {}
  // }
  const [state, setState] = useState(2)
  const [keyWord, setKeyWord] = useState('')
  const filterStateData = useMemo(() => {
    return memberOrderList
      .filter((v, i) => {
        if (state == 2) return v
        return v.orderState == state
      })
      .filter((v, i) => {
        return v.orderSid.toString().indexOf(keyWord) !== -1
      })
  }, [memberOrderList, state, keyWord])

  return (
    <>
      <div className="store-list-body text-center py-5">
        <p>訂單紀錄</p>
        <div className="my-3 float-end">
          <label>訂單編號：</label>
          <input
            className="me-3 mb-3"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setKeyWord(e.target.value)
            }}
          />
          <label
            htmlFor="a"
            className={`${state == 2 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            全部顯示
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="a"
            value={2}
            defaultChecked={true}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
          <label
            htmlFor="b"
            className={`${state == 1 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            已完成
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="b"
            value={1}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
          <label
            htmlFor="c"
            className={`${state == 0 ? 'store-search-target' : ''} px-2`}
            style={{ cursor: 'pointer' }}
          >
            未完成
          </label>
          <input
            className="store-search"
            type="radio"
            name="state"
            id="c"
            value={0}
            onClick={(e) => {
              setState(e.target.value)
            }}
          />
        </div>
        <table className="table mt-3 store-table text-nowrap">
          <thead>
            <tr>
              <th>日期</th>
              <th className="phonehidden">訂單編號</th>
              <th className="phonehidden">遊戲名稱</th>
              <th>訂單狀態</th>
              <th>新增評論</th>
              <th>詳細資料</th>
            </tr>
          </thead>
          <tbody>
            {filterStateData.map((v, i) => {
              return (
                <tr key={v.orderSid}>
                  <td>{v.orderDate}</td>
                  <td className="phonehidden">{v.orderSid}</td>
                  <td className="phonehidden">{v.gamesName}</td>
                  <td>{v.orderState ? '已完成' : '未完成'}</td>
                  <td>
                    <MemberComment orderSid={v.orderSid} />
                  </td>
                  <td>
                    {' '}
                    <MemberOrder orderSid={v.orderSid} />
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

export default Member
