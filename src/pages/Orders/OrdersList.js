import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import {
  OrdersInfo,
  OrdersPersonal,
  OrdersPayInfo,
  OrdersPaycomplete,
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
      currentPage = <OrdersPersonal />
      break
    case 3:
      currentPage = <OrdersPayInfo />
      break
    case 4:
      currentPage = <OrdersPaycomplete />
      break
    default: {
      currentPage = <OrdersInfo />
    }
  }
  return (
    <>
      <div className="d-flex flex-xl-row flex-column justify-content-center justify-content-xxl-start">
        <Logo />
        <div className="d-flex flex-column align-items-center order-body">
          <div className="mx-5 d-flex flex-column align-items-center">
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
              className="mx-3 px-sm-5 btn btn-outline-danger"
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
              className="mx-3 px-sm-5 btn btn-outline-danger"
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
    </>
  )
}

export default OrdersList
