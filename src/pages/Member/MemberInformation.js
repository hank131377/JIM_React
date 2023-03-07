import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useContextValue, checkToken } from '../../ContextDashbard'
import moment from 'moment/moment'
const Input = ({
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

const Select = ({ register, errors, id, idText, rules, children }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {idText}
      </label>
      <select
        id={id}
        {...register(id, rules)}
        className={`form-select ${errors[id] ? 'is-invalid' : ''}`}
      >
        {children}
      </select>
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

const MemberInformation = ({ name }) => {
  console.log(checkToken(), 99999999999)
  const { sid } = checkToken()
  const getBackData = useContextValue()
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
  const watchForm = useWatch({
    control,
  })
  const navigate = useNavigate()
  useEffect(() => {
    console.log('state', watch())
    console.log('errors', errors)
  }, [watchForm])
  const submit = async (data) => {
    if (errors !== []) {
      console.log('準備更新')
      const r = await axios.post(
        `http://localhost:3005/memberInfo/${sid}`,
        data
      )
      if (r.data.affectedRows) {
        alert('更新成功')
        navigate('/member')
      }
    }
  }
  const [imgUrl, setImgUrl] = useState()
  const [eyeIcon, setEyeIcon] = useState(true)
  const [memberInfo, setMemberInfo] = useState([])
  useEffect(() => {
    getBackData(`http://localhost:3005/memberInfo/${sid}`, setMemberInfo)
  }, [])
  useEffect(() => {
    setImgUrl(memberInfo[0]?.memHeadshot)
    setValue('Logo', memberInfo[0]?.memHeadshot)
    setValue('account', memberInfo[0]?.memAccount)
    setValue('password', memberInfo[0]?.memPassword)
    setValue('user', memberInfo[0]?.memName)
    setValue('nick', memberInfo[0]?.memNickName)
    setValue('identity', memberInfo[0]?.memIdentity)
    setValue('gender', memberInfo[0]?.memGender)
    setValue('birther', moment(memberInfo[0]?.memBirth).format('Y-M-D'))
    setValue('phone', memberInfo[0]?.memMobile)
    setValue('email', memberInfo[0]?.memEmail)
  }, [memberInfo])
  const [countyList, setCountyList] = useState([
    '基隆市',
    '台北市',
    '新北市',
    '桃園縣',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '台中市',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '台南市',
    '高雄市',
    '屏東縣',
    '花蓮縣',
    '宜蘭縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
  ])
  return (
    <div className="signin-router-body text-center py-5">
      <div>
        <p>個人資料</p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="my-3 d-sm-flex justify-content-around align-items-center">
          <div>
            <label htmlFor={'Logo'} className="form-label btn btn-danger">
              {'更改會員大頭貼'}
            </label>
            <input
              style={{ opacity: 0 }}
              id={'Logo'}
              type={'file'}
              className={`form-control  ${errors['Logo'] && 'is-invalid'}`}
              name={'Logo'}
              {...register('Logo', {
                required: {
                  value: false,
                  message: '請上傳Logo圖片',
                },
                validate: {
                  checkUrl: async (v) => {
                    const formData = new FormData()
                    formData.append('photos', v[0])
                    if (!!v[0].name) {
                      const r = await axios.post(
                        'http://localhost:3005/post',
                        formData
                      )
                      if (!!r.data.length) {
                        const fileLoad = (e) => {
                          setImgUrl(e.target.result)
                        }
                        const file = v[0]
                        const fileReader = new FileReader()
                        fileReader.addEventListener('load', fileLoad)
                        fileReader.readAsDataURL(file)
                        setValue('LogoImg', r.data[0].filename)
                      }
                    }
                  },
                },
              })}
            />
            {errors['Logo'] && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors['Logo']?.message}
              </div>
            )}
          </div>
          <div className="mt-3 mt-sm-0">
            <img
              src={
                imgUrl?.length > 20
                  ? imgUrl
                  : `/storeimages/${memberInfo[0]?.memHeadshot}`
              }
              alt=""
              style={{
                width: '250px',
                aspectRatio: '1/1',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor={'account'} className="form-label">
            {'會員帳號'}
          </label>
          <input
            id={'account'}
            type={'text'}
            className={`form-control`}
            name={'account'}
            {...register('account')}
            disabled={true}
          />
          {/* <Input
            register={register}
            errors={errors}
            id={'account'}
            idText={'會員帳號'}
            type={'text'}
            placeholder={'請輸入至少8字元'}
            rules={{
              required: {
                value: true,
                message: '會員帳號為必填',
              },
              minLength: {
                value: 8,
                message: '帳號至少8個字元',
              },
              validate: {
                checkUrl: async (v) => {
                  const regex = new RegExp('^[a-zA-Z0-9 ]+$')
                  if (!regex.test(v)) return '請輸入正確格式'
                  if (parseInt(v.length) >= 8) {
                    const r = await axios.get(
                      `http://localhost:3005/memberformcheck/account/?search=${v}`
                    )
                    if (!!r.data[0]) {
                      return '此帳號已被使用請選擇其他帳號'
                    }
                  }
                },
              },
            }}
          /> */}
        </div>
        <div className="mb-3">
          <div className="position-relative">
            <Input
              register={register}
              errors={errors}
              id={'password'}
              idText={'密碼'}
              placeholder={'請輸入至少8字元'}
              type={eyeIcon ? 'password' : 'text'}
              rules={{
                required: {
                  value: true,
                  message: '密碼為必填',
                },
                minLength: {
                  value: 8,
                  message: '密碼至少8個字元',
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]+$/,
                  message: '請填寫正確格式',
                },
              }}
            />
            <div
              className="position-absolute"
              style={{
                right: '30px',
                top: '40px',
                color: '#000000',
                cursor: 'pointer',
              }}
              onClick={() => {
                setEyeIcon(!eyeIcon)
              }}
            >
              {eyeIcon ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Input
            register={register}
            errors={errors}
            id={'user'}
            idText={'使用者名字'}
            type={'text'}
            rules={{
              required: {
                value: true,
                message: '使用者名字為必填',
              },
            }}
          />
        </div>
        <div className="mb-3">
          <Input
            register={register}
            errors={errors}
            id={'nick'}
            idText={'英文名字'}
            type={'text'}
            rules={{
              required: {
                value: true,
                message: '英文名字為必填',
              },
            }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor={'identity'} className="form-label">
            {'身分證'}
          </label>
          <input
            id={'identity'}
            type={'text'}
            className={`form-control`}
            name={'identity'}
            {...register('identity')}
            disabled={true}
          />
          {/* <Input
            register={register}
            errors={errors}
            id={'identity'}
            idText={'身分證'}
            type={'text'}
            rules={{
              required: {
                value: true,
                message: '身分證為必填',
              },
              pattern: {
                value: /^[A-Za-z][12]\d{8}$/,
                message: '請填寫正確身分證格式',
              },
              validate: {
                checkUrl: async (v) => {
                  const regex = new RegExp('^[A-Za-z][12]d{8}$')
                  if (!!regex.test(v)) return '請填寫正確身分證格式'
                  if (!regex.test(v)) {
                    const r = await axios.get(
                      `http://localhost:3005/memberformcheck/identity/?search=${v}`
                    )
                    if (!!r.data[0]) {
                      return '此身分證已被使用'
                    }
                  }
                },
              },
            }}
          /> */}
        </div>
        <div className="mb-5 d-flex justify-content-evenly align-items-center">
          <div className="d-sm-flex">
            <div className="form-label pe-3">性別</div>
            <CheckboxRadio
              type="radio"
              name="gender"
              id="male"
              value={'男'}
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                },
              }}
              labelText="男"
            ></CheckboxRadio>
            <CheckboxRadio
              type="radio"
              name="gender"
              id="female"
              value={'女'}
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                },
              }}
              labelText="女"
            ></CheckboxRadio>
          </div>
          <div className="w-50">
            <Input
              register={register}
              errors={errors}
              id={'birther'}
              idText={'生日'}
              type={'text'}
              placeholder={'ex：1999-01-01'}
              rules={{
                required: {
                  value: true,
                  message: '生日為必填',
                },
                pattern: {
                  value: /^[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]$/,
                  message: '請填寫正確生日格式',
                },
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <Input
            register={register}
            errors={errors}
            id={'phone'}
            idText={'會員手機'}
            type={'tel'}
            rules={{
              required: {
                value: true,
                message: '會員手機為必填',
              },
              pattern: {
                value: /^09\d{8}$/,
                message: '請填寫正確手機格式',
              },
            }}
          />
        </div>
        <div className="mb-3">
          <Input
            register={register}
            errors={errors}
            id={'email'}
            idText={'Email'}
            type={'email'}
            rules={{
              required: {
                value: true,
                message: 'Email 為必填',
              },
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: '請輸入正確的Email格式',
              },
            }}
          />
        </div>
        <button className="w-75 signin-botton">修改資料</button>
      </form>
    </div>
  )
}

export default MemberInformation
