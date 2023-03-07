import { FaBook } from 'react-icons/fa'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill, RiEditBoxFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { checkToken, useContextValue } from './../../ContextDashbard'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
const MemberOrder = ({ orderSid }) => {
  const navigate = useNavigate()
  const getBackData = useContextValue()
  const [render, setRender] = useState(true)
  const [storeOrderList, setStoreOrderList] = useState([])
  const [orderData, setOrderData] = useState([])
  const [lgShow, setLgShow] = useState(false)
  return (
    <div>
      <FaBook
        style={{ cursor: 'pointer' }}
        onClick={() => {
          getBackData(
            `http://localhost:3005/storeOredrData/${orderSid}`,
            setOrderData
          )
          setLgShow(true)
        }}
      />
      {console.log(orderData)}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby={orderSid}
        style={{ padding: '0' }}
      >
        <Modal.Header className="bg-danger">
          <Modal.Title id={orderSid} style={{ color: '#000000' }}>
            訂單編號：{orderSid}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: '#000000', padding: '5px' }}>
          {orderData.map((v, i) => {
            console.log(v)
            return (
              <React.Fragment key={v.orderSid}>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'memberSid'} className="form-label">
                      會員編號：
                    </label>
                    <input
                      id={'memberSid'}
                      type={'text'}
                      className={`form-control`}
                      name={'memberSid'}
                      disabled={true}
                      value={v.memberSid}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'gamesName'} className="form-label">
                      遊戲名稱：
                    </label>
                    <input
                      id={'gamesName'}
                      type={'text'}
                      className={`form-control`}
                      name={'gamesName'}
                      disabled={true}
                      value={v.gamesName}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'orderDate'} className="form-label">
                      日期：
                    </label>
                    <input
                      id={'orderDate'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderDate'}
                      disabled={true}
                      value={v.orderDate}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'orderTime'} className="form-label">
                      時間：
                    </label>
                    <input
                      id={'orderTime'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderTime'}
                      disabled={true}
                      value={v.orderTime}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'orderUsername'} className="form-label">
                      訂購者名稱：
                    </label>
                    <input
                      id={'orderUsername'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderUsername'}
                      disabled={true}
                      value={v.orderUsername}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'orderPhone'} className="form-label">
                      訂購者手機：
                    </label>
                    <input
                      id={'orderPhone'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderPhone'}
                      disabled={true}
                      value={v.orderPhone}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'orderAdress'} className="form-label">
                      訂購者地址：
                    </label>
                    <input
                      id={'orderAdress'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderAdress'}
                      disabled={true}
                      value={v.orderAdress}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'orderEmail'} className="form-label">
                      訂購者email：
                    </label>
                    <input
                      id={'orderEmail'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderEmail'}
                      disabled={true}
                      value={v.orderEmail}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'checkQuantity'} className="form-label">
                      人數：
                    </label>
                    <input
                      id={'checkQuantity'}
                      type={'text'}
                      className={`form-control`}
                      name={'checkQuantity'}
                      disabled={true}
                      value={v.checkQuantity}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'discountPrice'} className="form-label">
                      優惠券折扣：
                    </label>
                    <input
                      id={'discountPrice'}
                      type={'text'}
                      className={`form-control`}
                      name={'discountPrice'}
                      disabled={true}
                      value={v.discountPrice}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="w-50">
                    <label htmlFor={'checkPrice'} className="form-label">
                      金額：
                    </label>
                    <input
                      id={'checkPrice'}
                      type={'text'}
                      className={`form-control`}
                      name={'checkPrice'}
                      disabled={true}
                      value={v.checkPrice}
                    />
                  </div>
                  <div className="w-50">
                    <label htmlFor={'orderState'} className="form-label">
                      狀態：
                    </label>
                    <input
                      id={'orderState'}
                      type={'text'}
                      className={`form-control`}
                      name={'orderState'}
                      disabled={true}
                      value={!!v.orderState ? '已完成' : '未完成'}
                    />
                  </div>
                </div>
                <div className="mb-3 ">
                  <div className="d-flex">
                    <label htmlFor={'orderState'} className="form-label">
                      訂購者備註：
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="50"
                      rows="3"
                      disabled={true}
                      value={v.orderRemark}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-dark ms-3 float-end mt-2"
                      onClick={() => {
                        setLgShow(false)
                      }}
                    >
                      關閉
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MemberOrder
