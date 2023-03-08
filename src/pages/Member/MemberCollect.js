import React from 'react'
import { FaRunning } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'
const MemberCollect = () => {
  return (
    <div className="store-list-body text-center py-5">
      {' '}
      <table className="table mt-3 store-table">
        <thead>
          <tr>
            <th>新增時間</th>
            <th>遊戲名字</th>
            <th>預約</th>
            <th>移除收藏</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>新增時間</td>
            <td>遊戲名字</td>
            <td>
              <FaRunning style={{ fontSize: '30px', cursor: 'pointer' }} />
            </td>
            <td>
              <FiDelete style={{ fontSize: '30px', cursor: 'pointer' }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MemberCollect
