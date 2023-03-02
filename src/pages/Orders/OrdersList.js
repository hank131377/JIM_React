import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import './Orders.css'
import {
  OrdersInfo,
  OrderPersonal,
  OrderPayInfo,
  OrderPaycomplete,
} from './OrdersComponent'
const OrdersList = () => {
  const { orderNum, setOrderNum } = useOutletContext()
  const navigator = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  if (searchParams.get('orderId')) {
    setOrderNum(4)
  }
  let currentPage = ''
  switch (orderNum) {
    case 1:
      currentPage = <OrdersInfo />
      break
    case 2:
      currentPage = <OrderPersonal />
      break
    case 3:
      currentPage = <OrderPayInfo />
      break
    case 4:
      currentPage = <OrderPaycomplete />
      break
    default: {
      currentPage = <OrdersInfo />
    }
  }
  return (
    <div className="index">
      <div className="d-flex">
        <Logo />
        <div className="d-flex flex-column align-items-center order-body">
          <div className="mx-5 w-100 d-flex flex-column align-items-center">
            <ul className="d-flex list-unstyled justify-content-sm-evenly justify-content-between process">
              <li className={orderNum == 1 ? 'clicked' : ''}>1</li>
              <li className={orderNum == 2 ? 'clicked' : ''}>2</li>
              <li className={orderNum == 3 ? 'clicked' : ''}>3</li>
              <li className={orderNum == 4 ? 'clicked' : ''}>4</li>
            </ul>
            <ul className="d-flex list-unstyled justify-content-sm-evenly justify-content-between process-text">
              <li>訂單清單</li>
              <li>填寫資料</li>
              <li>付款資訊</li>
              <li>完成資訊</li>
            </ul>
          </div>
          <div className="mt-sm-5 d-sm-block d-flex">
            <button
              className="mx-sm-5 px-sm-5 btn btn-outline-danger mx-3"
              style={{ display: orderNum == 4 ? 'none' : '' }}
              onClick={() => {
                {
                  orderNum == 1 ? navigator(-1) : setOrderNum(orderNum - 1)
                }
              }}
            >
              上一步
            </button>
            <button
              disabled={orderNum == 4 ? true : false}
              className="mx-sm-5 px-sm-5 btn btn-outline-danger mx-3"
              style={{ display: orderNum > 1 ? 'none' : '' }}
              onClick={() => {
                setOrderNum(orderNum + 1)
              }}
            >
              下一步
            </button>
          </div>
          {currentPage}
        </div>
      </div>
    </div>
  )
}

export default OrdersList
