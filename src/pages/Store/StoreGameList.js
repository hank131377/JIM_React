import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill, RiEditBoxFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { checkToken, useContextValue } from './../../ContextDashbard'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import StroeEdit from './StroeEdit'
const StoreGameList = () => {
  const navigate = useNavigate()
  const getBackData = useContextValue()
  console.log(checkToken()?.sid)
  const [render, setRender] = useState(true)
  const [gamelist, setGameList] = useState([])
  useEffect(() => {
    getBackData(
      `http://localhost:3005/getstoredata/${checkToken()?.sid}`,
      setGameList
    )
  }, [render])
  const delData = async (gameSid, gamesName) => {
    confirmAlert({
      title: `遊戲編號：${gameSid}`,
      message: `是否刪除遊戲名稱：${gamesName}`,
      buttons: [
        {
          label: '是',
          onClick: async () => {
            console.log('準備刪除')
            try {
              const r = await axios.delete(
                `http://localhost:3005/delstoredata/${gameSid}`
              )
              if (!!r.data.affectedRows) {
                alert('刪除成功')
                navigate('/store')
              }
            } catch (error) {}
          },
        },
        {
          label: '否',
          onClick: () => alert('已取消刪除'),
        },
      ],
    })
  }
  const storeSwitch = async (gameSid, close) => {
    let str = !!close ? 0 : 1
    console.log(str)
    try {
      const r = await axios.put(
        `http://localhost:3005/gameswitch/${gameSid}?close=${str}`
      )
      setRender(!render)
    } catch (error) {}
  }

  return (
    <div className="store-list-body text-center py-5">
      <p>遊戲管理</p>
      <table className="table mt-3 store-table">
        <thead>
          <tr>
            <th>
              <RiDeleteBin6Fill />
            </th>
            <th className="phonehidden">編號</th>
            <th>名稱</th>
            <th className="phonehidden">價格</th>
            <th>編輯</th>
            <th>是否上架</th>
          </tr>
        </thead>
        <tbody>
          {gamelist.map((v, i) => {
            return (
              <React.Fragment key={v.gamesSid}>
                <tr>
                  <td>
                    <RiDeleteBin6Fill
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        delData(v.gamesSid, v.gamesName)
                      }}
                    />
                  </td>
                  <td className="phonehidden">{v.gamesSid}</td>
                  <td>{v.gamesName}</td>
                  <td className="phonehidden">{v.gamesPrice}</td>
                  <td>
                    <StroeEdit sid={v.gamesSid} />
                    {/* <RiEditBoxFill /> */}
                  </td>
                  <td>
                    <div className="form-check form-switch pb-1 d-flex justify-content-center">
                      <input
                        style={{ cursor: 'pointer' }}
                        className="form-check-input "
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => {
                          storeSwitch(v.gamesSid, v.gamesColse)
                        }}
                        checked={v.gamesColse == 1 ? true : false}
                      />
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StoreGameList
