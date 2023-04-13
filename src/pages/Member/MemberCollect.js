import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment'
import { FaRunning } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'

import { checkToken, useContextValue } from './../../ContextDashbard'
const MemberCollect = () => {
  const { getBackData } = useContextValue()
  const [collectRender, setCollectRender] = useState(false)
  const [collectData, setCollectData] = useState([])
  useEffect(() => {
    getBackData(
      `http://localhost:3005/member/gameCollect/${checkToken()?.sid}`,
      setCollectData
    )
  }, [collectRender])
  const removeCollect = async (gameSid) => {
    const r = await axios.delete(
      `http://localhost:3005/member/gameCollect/${
        checkToken()?.sid
      }?gameSid=${gameSid}`
    )
    if (r.data.affectedRows) {
      setCollectRender(!collectRender)
    }
  }
  return (
    <div className="store-list-body text-center py-5 px-5 stores">
      <p className="store-subtitle">收藏</p>
      <table className="table mt-3 store-table text-nowrap">
        <thead>
          <tr>
            <th>遊戲名稱</th>
            <th className="phonehidden">新增日期</th>
            <th>預約</th>
            <th>移除收藏</th>
          </tr>
        </thead>
        <tbody>
          {collectData.map((v, i) => {
            return (
              <tr key={v.storeSid}>
                <td>{v.gamesName}</td>
                <td className="phonehidden">
                  {moment(v.create_at_c).format('YYYY-MM-DD')}
                </td>
                <td>
                  <Link to={`/game/${v.gameSid}/reserve`}>
                    <FaRunning
                      style={{ fontSize: '30px', cursor: 'pointer' }}
                    />
                  </Link>
                </td>
                <td>
                  <FiDelete
                    style={{ fontSize: '30px', cursor: 'pointer' }}
                    onClick={() => {
                      removeCollect(v.gameSid)
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MemberCollect
