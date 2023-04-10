import { FaBook } from 'react-icons/fa'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPenAlt } from 'react-icons/fa'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { checkToken, useContextValue, swalAlert } from './../../ContextDashbard'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { useForm, useWatch } from 'react-hook-form'
const Input = ({
  editData,
  register,
  errors,
  id,
  idText,
  type,
  rules,
  placeholder = '',
}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {idText}
      </label>
      <input
        id={id}
        type={type}
        className={`form-control ${errors[id] && 'is-invalid'}`}
        name={id}
        {...register(id, rules)}
        placeholder={placeholder}
      />
      {errors[id] && (
        <div id="validationServer03Feedback" className="invalid-feedback">
          {errors[id]?.message}
        </div>
      )}
    </>
  )
}
const CheckboxRadio = ({
  id,
  labelText,
  register,
  type,
  errors,
  rules,
  value,
  name,
}) => {
  return (
    <>
      <div className="form-check pe-3">
        <input
          className={`form-check-input ${errors[name] && 'is-invalid'}`}
          type={type}
          name={name}
          id={id}
          value={value}
          {...register(name, rules)}
        />
        <label className="form-check-label" htmlFor={id}>
          {labelText}
        </label>
        {errors[name] && (
          <div className="invalid-feedback">{errors[name]?.message}</div>
        )}
      </div>
    </>
  )
}
const MemberComment = ({ orderSid }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    control,

    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  })
  const navigate = useNavigate()
  // const watchForm = useWatch({
  //   control,
  // })
  // useEffect(() => {
  //   console.log('state', watch())
  //   console.log('errors', errors)
  // }, [watchForm])
  const submit = async (data) => {
    if (errors !== []) {
      if (!!editData[0]?.sid) {
        const r = await axios.put(
          `http://localhost:3005/member/editMember/${orderSid}`,
          data
        )
        if (r.data.affectedRows) {
          swalAlert('更新成功', '', 'success', '確認')
          navigate('/member')
        }
      } else {
        const r = await axios.post(
          `http://localhost:3005/member/setMemberOrderData/${orderSid}`,
          data
        )

        if (r.data.affectedRows) {
          swalAlert('評價完成', '評價完成', 'success', '確認')
          navigate('/member')
        }
      }
    }
  }
  const { getBackData } = useContextValue()
  const [render, setRender] = useState(true)
  const [editData, setEditData] = useState([])
  const [orderData, setOrderData] = useState([])
  const [lgShow, setLgShow] = useState(false)
  const [num, setNum] = useState(0)
  useEffect(() => {
    getBackData(
      `http://localhost:3005/member/editMemberData/${orderSid}`,
      setEditData
    )
    if (!!editData[0]?.rate) {
      setNum(editData[0]?.rate)
      setValue('comment', editData[0]?.content)
    }
  }, [])
  return (
    <div>
      <FaPenAlt
        style={{ cursor: 'pointer' }}
        onClick={() => {
          getBackData(
            `http://localhost:3005/store/storeOredrData/${orderSid}`,
            setOrderData
          )
          setLgShow(true)
        }}
      />
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
            return (
              <React.Fragment key={v.orderSid}>
                <div className="bg-secondary" style={{ color: '#ffffff' }}>
                  <form onSubmit={handleSubmit(submit)}>
                    <div className="mb-3">
                      <label htmlFor={'gamesName'} className="form-label">
                        遊戲名稱
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
                    <div className="mb-3">
                      <Input
                        editData={editData}
                        register={register}
                        errors={errors}
                        id={'comment'}
                        idText={'遊戲評價'}
                        type={'text'}
                        rules={{
                          required: {
                            value: true,
                            message: '遊戲評價為必填',
                          },
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="">
                        <div className="mb-3">
                          <label className="form-label">評分</label>
                        </div>
                        <div className="diff">
                          {[...Array(5)].map((v, i) => {
                            return (
                              <React.Fragment key={i}>
                                <input
                                  type="radio"
                                  name="rate"
                                  className={`form-check-input ${
                                    errors['rate'] && 'is-invalid'
                                  }`}
                                  {...register('rate')}
                                  id={i}
                                  value={i + 1}
                                  defaultChecked={i == 0 ? true : false}
                                />
                                <label
                                  style={{ cursor: 'pointer' }}
                                  className="form-check-label px-1 px-sm-3"
                                  htmlFor={i}
                                  onClick={() => {
                                    setNum(i)
                                  }}
                                >
                                  {num >= i ? (
                                    <FaStar
                                      color="#D01B1B"
                                      className="mb-3"
                                      style={{ fontSize: '40px' }}
                                    />
                                  ) : (
                                    <FaRegStar
                                      style={{ fontSize: '40px' }}
                                      className="mb-3"
                                    />
                                  )}
                                </label>
                                {errors['rate'] && (
                                  <div className="invalid-feedback">
                                    {errors['rate']?.message}
                                  </div>
                                )}
                              </React.Fragment>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="float-end">
                      <button className="btn btn-danger mx-2">
                        {!!editData[0]?.sid ? '更新' : '新增'}
                      </button>
                      <button
                        className="btn btn-secondary mx-2"
                        type="button"
                        onClick={() => {
                          setLgShow(false)
                        }}
                      >
                        關閉
                      </button>
                    </div>
                  </form>
                </div>
              </React.Fragment>
            )
          })}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MemberComment
