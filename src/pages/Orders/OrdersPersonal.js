import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useOutletContext, useSearchParams } from 'react-router-dom'

import { useContextValue, checkToken } from '../../ContextDashbard'
import { Input, RadioBoxCheck, Select } from './OrdersModel'

const OrdersPersonal = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  })
  const { setPersonalInfo, orderNum, setOrderNum } = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const { getBackData } = useContextValue()
  const [discount, setDiscount] = useState([])
  const [discountPrice, setDiscountPrice] = useState(searchParams.get('cash'))
  const [discountId, setdiscountPriceId] = useState(0)
  const submit = (data) => {
    if (errors !== []) {
      const obj = {}
      ;[...searchParams.entries()].forEach((v, i) => {
        obj[v[0]] = v[1]
      })
      setPersonalInfo(data)
      setOrderNum(orderNum + 1)
      setSearchParams({
        ...obj,
        cash: discountPrice,
        discountId: discountId,
      })
    }
  }
  useEffect(() => {
    getBackData(
      `http://localhost:3005/orders/discount?sid=${checkToken().sid}`,
      setDiscount
    )
  }, [])

  // const watchForm = useWatch({
  //   control,
  // })
  // useEffect(() => {
  //   console.log(watch())
  //   console.log('errors', errors)
  // }, [watchForm])

  const ordersPersonalList = [
    {
      id: 'name',
      idText: '姓名',
      type: 'text',
      rules: {
        required: {
          value: true,
          message: '姓名為必填',
        },
      },
    },
    {
      id: 'tel',
      idText: '手機號碼',
      type: 'tel',
      rules: {
        required: {
          value: true,
          message: '手機號碼為必填',
        },
        pattern: {
          value: /^09[0-9]{8}$/,
          message: '請輸入正確手機格式',
        },
      },
    },
    {
      id: 'address',
      idText: '地址',
      type: 'text',
      rules: {
        required: {
          value: true,
          message: '地址為必填',
        },
      },
    },
    {
      id: 'email',
      idText: 'Email',
      type: 'email',
      rules: {
        required: {
          value: true,
          message: 'Email 為必填',
        },
        pattern: {
          value:
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          message: '請輸入正確的Email格式',
        },
      },
    },
  ]

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3 className="mt-3">填寫資料</h3>
        <form className="mt-3 w-100" onSubmit={handleSubmit(submit)}>
          {ordersPersonalList.map((v, i) => {
            return (
              <div className="mb-3" key={i}>
                <Input
                  register={register}
                  errors={errors}
                  id={v.id}
                  idText={v.idText}
                  type={v.type}
                  rules={v.rules}
                />
              </div>
            )
          })}
          <div className="mb-3">
            <label htmlFor="remark" className="form-label">
              備註
            </label>
            <textarea
              id="remark"
              rows="5"
              className="form-control"
              {...register('remark')}
            />
          </div>
          <div className="row row-cols-2">
            <div>
              <Select
                register={register}
                errors={errors}
                id={'discount'}
                idText={'優惠券'}
                disabled={false}
                setDiscountPrice={setDiscountPrice}
                searchParams={searchParams}
                discount={discount}
                setdiscountPriceId={setdiscountPriceId}
              >
                {discount.map((v, i) => {
                  return (
                    <option key={i} value={v.discountID}>
                      {v.discountName}
                    </option>
                  )
                })}
              </Select>
            </div>
            <div>
              <p>總金額</p>
              <p>${discountPrice}</p>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <RadioBoxCheck
                register={register}
                errors={errors}
                id={'checked'}
                idText={'請確認以下事項'}
                type={'checkbox'}
                name={'checked'}
                rules={{
                  required: {
                    value: true,
                  },
                }}
              />
            </div>
            <div className="order-peronsal-info">
              <ol>
                <li>
                  因交通、天氣等不可抗力因素所引起的時間延誤，造成部份行程景點取消時，請您主動聯絡客服，我們將會為您辦理部份退款。
                </li>
                <li>
                  不建議患有下列疾病或其他不宜受到過度刺激的旅客參加此項目：心臟病、高血壓、氣喘、癲癇、懷孕婦女
                </li>
                <li>
                  請務必於 10 分鐘前抵達指定地點，為避免耽誤之後行程，逾時不候。
                </li>
              </ol>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-danger w-100">
            送出
          </button>
        </form>
      </div>
    </div>
  )
}

export default OrdersPersonal
