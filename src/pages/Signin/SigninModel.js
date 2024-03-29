import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Swal from 'sweetalert2'

import Geocode from 'react-geocode'
// 410

import { checkToken, useContextValue } from '../../ContextDashbard'
import moment from 'moment/moment'
const swalAlert = (title, text, icon, button) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: button,
  })
}
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
const SigninRouter = ({ name, nameen, url }) => {
  return (
    <div className="py-5 signin-outcard">
      <Link to={`/signin/${url}`}>
        <div className="text-center signin-card">
          <p className="signin-card-ch">{name}</p>
          <p className="signin-card-en">{nameen}</p>
        </div>
        <div className="text-center">
          <p>由此前往：{name}註冊/登入</p>
          <p>{nameen} SIGN UP/ SIGN IN FROM HERE</p>
        </div>
      </Link>
    </div>
  )
}

const MemberRouter = ({ name, nameen, url }) => {
  return (
    <div className="py-5 signin-outcard">
      <Link to={`/signin/member`}>
        <div className="text-center signin-card">
          <p className="signin-card-ch">{name}</p>
          <p className="signin-card-en">{nameen}</p>
        </div>
        <div className="text-center">
          <p>由此前往：{name}註冊/登入</p>
          <p>{nameen} SIGN UP/ SIGN IN FROM HERE</p>
        </div>
      </Link>
    </div>
  )
}
const SigninChange = ({ name, chceked, setChceked }) => {
  return (
    <div className="d-flex text-center justify-content-center signin-router">
      <div
        className="w-100"
        style={{
          background: chceked ? '#7f7f7f' : '',
          borderRadius: '20px 0 0 0',
        }}
      >
        <div
          className="signin-router-right"
          onClick={() => {
            setChceked(true)
          }}
        >
          <p className="">{name}登入</p>
        </div>
      </div>
      <div
        className="w-100"
        style={{
          background: chceked ? '' : '#7f7f7f',
          borderRadius: '0 20px 0 0',
        }}
      >
        <div
          className="signin-router-left"
          onClick={() => {
            setChceked(false)
          }}
        >
          <p className="">{name}註冊</p>
        </div>
      </div>
    </div>
  )
}

const SigninStortIn = ({ name }) => {
  const { setRender, render } = useContextValue()
  const navigate = useNavigate()
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
  // const watchForm = useWatch({
  //   control,
  // })
  // useEffect(() => {
  //   console.log('state', watch())
  //   console.log('errors', errors)
  // }, [watchForm])
  const submit = async (data) => {
    if (errors !== []) {
      console.log(data)
      const r = await axios.post('http://localhost:3005/signin/store', data)
      if (!!r.data.error) {
        swalAlert(r.data.error, '', 'error', '確認')
      }
      if (r.data.code === 200) {
        swalAlert('成功登入', '', 'success', '確認')

        // Swal.fire({
        //   title: '成功登入',
        //   text: `成功登入`,
        //   icon: 'success',
        //   confirmButtonText: '確認',
        // })
        localStorage.removeItem('memberAuth')
        localStorage.setItem('token', JSON.stringify(r.data))
        setRender(!render)
        navigate('/store')
      }
    }
  }
  const [eyeIcon, setEyeIcon] = useState(true)
  const ql = () => {
    setValue('account', 'jimjim6666')
    setValue('password', '12345678')
  }
  return (
    <div className="d-flex flex-column align-items-center signin-router-body text-center py-5">
      <div>
        <p
          onClick={() => {
            ql()
          }}
        >
          {name}登入
        </p>
        <span style={{ color: '#FFFFFF' }}>SIGN IN</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <input
            type="text"
            className={`signin-router-botton form-control ${
              errors['account'] && 'is-invalid'
            }`}
            placeholder="請輸入帳號"
            {...register('account', {
              required: {
                value: true,
                message: '請輸入帳號',
              },
            })}
          />
          {errors['account'] && (
            <div id="validationServer03Feedback" className="invalid-feedback">
              {errors['account']?.message}
            </div>
          )}
        </div>
        <div>
          <div className="position-relative">
            <input
              type={eyeIcon ? 'password' : 'text'}
              className={`signin-router-botton form-control ${
                errors['password'] && 'is-invalid'
              }`}
              placeholder="請輸入密碼"
              {...register('password', {
                required: {
                  value: true,
                  message: '請輸入密碼',
                },
              })}
            />
            {errors['password'] && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors['password']?.message}
              </div>
            )}
            <div
              className="position-absolute"
              style={{
                right: '50px',
                top: '0px',
                color: 'red',
                cursor: 'pointer',
                fontSize: '40px',
              }}
              onClick={() => {
                setEyeIcon(!eyeIcon)
              }}
            >
              {eyeIcon ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        <button className="w-75 m-registerSubmit mt-3">SIGN IN</button>
      </form>
    </div>
  )
}

const SigninMemberIn = ({ name }) => {
  const { setRender, render } = useContextValue()
  const navigate = useNavigate()
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
  // const watchForm = useWatch({
  //   control,
  // })
  // useEffect(() => {
  //   console.log('state', watch())
  //   console.log('errors', errors)
  // }, [watchForm])
  const submit = async (data) => {
    if (errors !== []) {
      const r = await axios.post('http://localhost:3005/signin/member', data)
      if (!!r.data.error) {
        swalAlert('帳號或密碼錯誤', '', 'error', '確認')
      }
      if (r.data.code === 200) {
        localStorage.setItem('token', JSON.stringify(r.data))
        setRender(!render)
        swalAlert('登入成功', '', 'success', '確認')
        navigate('/index')
      }
    }
  }
  const [eyeIcon, setEyeIcon] = useState(true)
  return (
    <div className="d-flex flex-column align-items-center signin-router-body text-center py-5">
      <div>
        <p>{name}登入</p>
        <span>SIGN IN</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <input
            type="text"
            className={`signin-router-botton form-control ${
              errors['account'] && 'is-invalid'
            }`}
            placeholder="請輸入帳號"
            {...register('account', {
              required: {
                value: true,
                message: '請輸入帳號',
              },
            })}
          />
          {errors['account'] && (
            <div id="validationServer03Feedback" className="invalid-feedback">
              {errors['account']?.message}
            </div>
          )}
        </div>
        <div>
          <div className="position-relative">
            <input
              type={eyeIcon ? 'password' : 'text'}
              className={`signin-router-botton form-control ${
                errors['password'] && 'is-invalid'
              }`}
              placeholder="請輸入密碼"
              {...register('password', {
                required: {
                  value: true,
                  message: '請輸入密碼',
                },
              })}
            />
            {errors['password'] && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors['password']?.message}
              </div>
            )}
            <div
              className="position-absolute"
              style={{
                right: '50px',
                top: '0px',
                color: 'red',
                cursor: 'pointer',
                fontSize: '40px',
              }}
              onClick={() => {
                setEyeIcon(!eyeIcon)
              }}
            >
              {eyeIcon ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        <button className="w-75 m-registerSubmit mt-3">SIGN IN</button>
      </form>
    </div>
  )
}

const SigninStoreRegister = ({ name }) => {
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
  const watchForm = useWatch({
    control,
  })
  useEffect(() => {
    // console.log('state', watch())
    // console.log('errors', errors)
  }, [watchForm])
  const submit = async (data) => {
    if (errors !== []) {
      const r = await axios.post(
        'http://localhost:3005/signin/setmemberinfo/store',
        data
      )
      if (r.data.affectedRows) {
        swalAlert('註冊成功', '', 'success', '確認')
        navigate('/signin')
      }
    }
  }
  const [imgUrl, setImgUrl] = useState()
  const [eyeIcon, setEyeIcon] = useState(true)
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
  const StoreRegisterList = [
    {
      id: 'account',
      idText: '工作室帳號',
      type: 'text',
      placeholder: '請輸入至少8字元',
      rules: {
        required: {
          value: true,
          message: '工作室帳號為必填',
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
                `http://localhost:3005/signin/storeformcheck/account/?search=${v}`
              )
              if (!!r.data[0]) {
                return '此帳號已被使用請選擇其他帳號'
              }
            }
          },
        },
      },
    },
    {
      id: 'password',
    },
    {
      id: 'store',
      idText: '工作室名稱',
      type: 'text',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '工作室名稱為必填',
        },
        validate: {
          checkUrl: async (v) => {
            const regex = new RegExp(
              "[`~!@#$%^&*()_\\-+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]"
            )
            if (!!regex.test(v)) return '請輸入正確格式'
            if (parseInt(v.length) >= 0) {
              const r = await axios.get(
                `http://localhost:3005/signin/storeformcheck/store/?search=${v}`
              )
              if (!!r.data[0]) {
                return '此工作室名稱已被使用請選擇其他名稱'
              }
            }
          },
        },
      },
    },
    {
      id: 'mobile',
      idText: '工作室電話',
      type: 'tel',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '工作室電話為必填',
        },
        pattern: {
          value: /(\(?\d{2}\)?[\s\-]?\d{4}\-?\d{4})/,
          message: '請填寫正確電話格式',
        },
      },
    },
    {
      id: 'leader',
      idText: '負責人名字',
      type: 'text',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '負責人名字為必填',
        },
      },
    },
    {
      id: 'identity',
      idText: '身分證',
      type: 'text',
      placeholder: '',
      rules: {
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
                `http://localhost:3005/signin/storeformcheck/identity/?search=${v}`
              )
              if (!!r.data[0]) {
                return '此身分證已被使用'
              }
            }
          },
        },
      },
    },
    {
      id: 'email',
      idText: 'Email',
      type: 'email',
      placeholder: '',
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
    // {
    //   id: 'time',
    //   idText: '營業時間',
    //   type: 'text',
    //   placeholder: 'ex：10:00-21:00',
    //   rules: {
    //     required: {
    //       value: true,
    //       message: '營業時間為必填',
    //     },
    //     pattern: {
    //       value:
    //         /([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]/,
    //       message: '請輸入正確的營業時間格式',
    //     },
    //   },
    // },
    {
      id: 'website',
      idText: '官網',
      type: 'text',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '官網為必填',
        },
        pattern: {
          value:
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,
          message: '請輸入有效網址',
        },
      },
    },
  ]

  const quickRegistration = () => {
    setValue('account', 'jimjim6666', { shouldValidate: true })
    setValue('password', '12345678', { shouldValidate: true })
    setValue('store', '笨蛋工作室密室逃脫澎湖店', { shouldValidate: true })
    setValue('mobile', '06-12345678', { shouldValidate: true })
    setValue('leader', '店長', { shouldValidate: true })
    setValue('identity', 'A123456789', { shouldValidate: true })
    setValue('email', 'hahaha999@gmail.com', { shouldValidate: true })
    setValue(
      'website',
      'https://www.stupidparticle.com/?utm_source=EscapeBar&utm_medium=referral&utm_campaign=EscapeBarFirmPage',
      { shouldValidate: true }
    )
    setValue('email', 'hahaha999@gmail.com', { shouldValidate: true })
    setValue('county', '澎湖縣', { shouldValidate: true })
    setValue('address', '澎湖縣西嶼鄉98號', { shouldValidate: true })
    setValue('timeStart', '07:00', { shouldValidate: true })
    setValue('timeEnd', '15:00', { shouldValidate: true })
    setValue('lat', '23.564590', { shouldValidate: true })
    setValue('lon', '119.482186', { shouldValidate: true })
    setValue(
      'remark',
      '我們致力於將腦中的故事情境，無論是歡樂、溫馨或是驚悚、刺激，還是糾結、痛心的劇情，都能夠以電影般的特效呈現，在設計中不斷挑戰自己，期待能夠在每一款遊戲中創造出更多種不同的可能性。也期望每一位玩家不僅是因為遊戲體驗能夠笑著離開，更會因為智慧獵人每一位獨特的說書者「透明人」感到記憶深刻。',
      { shouldValidate: true }
    )
  }
  return (
    <div className="signin-router-body text-center py-5">
      <div
        onClick={() => {
          quickRegistration()
        }}
      >
        <p>{name}註冊</p>
        <span style={{ color: '#FFFFFF' }}>SIGN UP</span>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="d-flex flex-column align-items-center"
      >
        <input type="text" name="" id="" hidden {...register('lat')} />
        <input type="text" name="" id="" hidden {...register('lon')} />
        <div className="my-3 d-flex flex-column justify-content-center align-items-center">
          <div className="mt-3 w-75 h-50">
            <img
              src={imgUrl}
              alt=""
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
          <div className="d-flex flex-column align-items-center">
            <label htmlFor={'Logo'} className="form-label">
              {'Logo'}
            </label>
            <input
              id={'Logo'}
              type={'file'}
              className={`form-control w-75  ${errors['Logo'] && 'is-invalid'}`}
              name={'Logo'}
              {...register('Logo', {
                required: {
                  value: true,
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
        </div>
        {StoreRegisterList.map((v, i) => {
          return v.id !== 'password' ? (
            <div className="mb-3 w-75" key={v.id}>
              <Input
                register={register}
                errors={errors}
                id={v.id}
                idText={v.idText}
                type={v.type}
                placeholder={v.placeholder}
                rules={v.rules}
              />
            </div>
          ) : (
            <div className="mb-3 w-75" key={v.id}>
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
          )
        })}
        <div className="mb-3 d-flex justify-content-evenly w-75">
          <div className="w-50">
            <Select
              register={register}
              errors={errors}
              id={'county'}
              idText={'縣市'}
              disabled={false}
              rules={{
                required: {
                  value: true,
                  message: '請選擇縣市',
                },
              }}
            >
              <option value="">請選擇縣市</option>
              {countyList.map((v, i) => {
                return <option key={v}>{v}</option>
              })}
            </Select>
          </div>
          <div className="w-50">
            <Input
              register={register}
              errors={errors}
              id={'address'}
              idText={'地址'}
              type={'text'}
              rules={{
                required: {
                  value: true,
                  message: '地址為必填',
                },
              }}
            />
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-evenly w-75">
          <div className="w-50">
            <Input
              register={register}
              errors={errors}
              id={'timeStart'}
              idText={'開始時間'}
              type={'time'}
              rules={{
                required: {
                  value: true,
                  message: '請選擇營業開始時間',
                },
              }}
            ></Input>
          </div>
          <div className="w-50">
            <Input
              register={register}
              errors={errors}
              id={'timeEnd'}
              idText={'結束時間'}
              type={'time'}
              rules={{
                required: {
                  value: true,
                  message: '請選擇營業結束時間',
                },
              }}
            />
          </div>
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="remark" className="form-label">
            資訊
          </label>
          <textarea
            id="remark"
            rows="5"
            className={`form-control ${errors['remark'] && 'is-invalid'}`}
            {...register('remark', {
              required: {
                value: true,
                message: '請輸入工作室資訊',
              },
            })}
          />
          {errors['remark'] && (
            <div id="validationServer03Feedback" className="invalid-feedback">
              {errors['remark']?.message}
            </div>
          )}
        </div>

        <button className="w-75 m-registerSubmit">SIGN UP</button>
      </form>
    </div>
  )
}

const SigninMemberRegister = ({ name }) => {
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
      const r = await axios.post(
        'http://localhost:3005/signin/setmemberinfo/member',
        data
      )
      if (r.data.affectedRows) {
        swalAlert('新增成功', '', 'success', '確認')
        navigate('/signin')
      }
    }
  }
  const [imgUrl, setImgUrl] = useState()
  const [eyeIcon, setEyeIcon] = useState(true)
  const StoreRegisterList = [
    {
      id: 'account',
      idText: '會員帳號',
      type: 'text',
      placeholder: '請輸入至少8字元',
      rules: {
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
                `http://localhost:3005/signin/memberformcheck/account/?search=${v}`
              )
              if (!!r.data[0]) {
                return '此帳號已被使用請選擇其他帳號'
              }
            }
          },
        },
      },
    },
    {
      id: 'password',
    },
    {
      id: 'user',
      idText: '使用者名字',
      type: 'text',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '使用者名字為必填',
        },
      },
    },
    {
      id: 'nick',
      idText: '英文名字',
      type: 'text',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '英文名字為必填',
        },
      },
    },
    {
      id: 'identity',
      idText: '身分證',
      type: 'text',
      placeholder: '',
      rules: {
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
                `http://localhost:3005/signin/memberformcheck/identity/?search=${v}`
              )
              if (!!r.data[0]) {
                return '此身分證已被使用'
              }
            }
          },
        },
      },
    },
    {
      id: 'phone',
      idText: '會員手機',
      type: 'tel',
      placeholder: '',
      rules: {
        required: {
          value: true,
          message: '會員手機為必填',
        },
        pattern: {
          value: /^09\d{8}$/,
          message: '請填寫正確手機格式',
        },
      },
    },
    {
      id: 'email',
      idText: 'Email',
      type: 'email',
      placeholder: '',
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
    <div className="signin-router-body text-center py-5">
      <div>
        <p>{name}註冊</p>
        <span>SIGN UP</span>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="d-flex flex-column align-items-center"
      >
        <div className="my-3 d-sm-flex flex-column justify-content-center align-items-center">
          <div className="mt-3 w-75 h-50">
            <img
              src={imgUrl}
              alt=""
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
          <div>
            <label htmlFor={'Logo'} className="form-label">
              {'Logo'}
            </label>
            <input
              id={'Logo'}
              type={'file'}
              className={`form-control  ${errors['Logo'] && 'is-invalid'}`}
              name={'Logo'}
              {...register('Logo', {
                required: {
                  value: true,
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
        </div>
        {StoreRegisterList.map((v, i) => {
          return v.id !== 'password' ? (
            <div className="mb-3 w-75" key={v.id}>
              <Input
                register={register}
                errors={errors}
                id={v.id}
                idText={v.idText}
                type={v.type}
                placeholder={v.placeholder}
                rules={v.rules}
              />
            </div>
          ) : (
            <div className="mb-3 w-75" key={v.id}>
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
          )
        })}
        <div className="mb-5 d-flex justify-content-evenly align-items-center w-75">
          <div>
            <div className="form-label pe-3">性別</div>
            <div className="d-sm-flex">
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
          </div>

          <div className="w-50">
            <label htmlFor={'birther'} className="form-label">
              {'生日'}
            </label>
            <input
              id={'birther'}
              type={'date'}
              max={moment().format('YYYY-MM-DD')}
              className={`form-control ${errors['birther'] && 'is-invalid'}`}
              name={'birther'}
              {...register('birther', {
                required: { value: true, message: '生日為必填' },
              })}
            />
            {errors['birther'] && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                {errors['birther']?.message}
              </div>
            )}
          </div>
        </div>
        <button className="w-75 m-registerSubmit">SIGN UP</button>
      </form>
    </div>
  )
}

export {
  SigninRouter,
  SigninChange,
  SigninStortIn,
  SigninMemberIn,
  SigninStoreRegister,
  SigninMemberRegister,
  MemberRouter,
}
