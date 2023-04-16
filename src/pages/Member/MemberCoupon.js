import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment'
import { FaRunning } from 'react-icons/fa'
import { FiDelete } from 'react-icons/fi'

import { checkToken, useContextValue } from './../../ContextDashbard'
const MemberCoupon = () => {
  return (
    <div className="store-list-body text-center py-5 px-5 stores">
      <p className="store-subtitle">優惠券</p>
      <div className="mt-3">
        <label style={{ color: '#FFFFFF' }} htmlFor="coupon">
          優惠券輸入：
        </label>
        <input type="text" name="" id="coupon" />
        <button className="btn btn-danger ms-3" onClick={() => {}}>
          輸入
        </button>
      </div>
      <table className="table mt-3 store-table text-nowrap">
        <thead>
          <tr>
            <th>優惠券名稱</th>
            <th className="phonehidden">新增日期</th>
            <th>折扣價格</th>
            <th>使用狀態</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}

export default MemberCoupon
