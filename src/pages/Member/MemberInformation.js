import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import axios from 'axios'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useContextValue, checkToken, swalAlert } from '../../ContextDashbard'
import moment from 'moment/moment'
import { Input, CheckboxRadio } from './MemberModel'

const MemberInformation = () => {
  const { sid } = checkToken()
  const { getBackData, setRender, render } = useContextValue()
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
        `http://localhost:3005/member/memberInfo/${sid}`,
        data
      )
      if (r.data.affectedRows) {
        setRender(!render)
        swalAlert('更新成功', '更新成功', 'success', '確認')
        navigate('/member')
      }
    }
  }
  const [imgUrl, setImgUrl] = useState()
  const [eyeIcon, setEyeIcon] = useState(true)
  const [memberInfo, setMemberInfo] = useState([])

  useEffect(() => {
    getBackData(`http://localhost:3005/member/memberInfo/${sid}`, setMemberInfo)
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

  return (
    <div className="signin-router-body text-center py-5">
      <div>
        <p>個人資料</p>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="d-flex flex-column align-items-center"
      >
        <div className="my-3 d-flex flex-column justify-content-around align-items-center">
          <div className="mb-3 mt-sm-0">
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
          <div>
            <label htmlFor={'Logo'} className="form-label">
              {'會員照片'}
            </label>
            <input
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
                    if (!!v[0]?.name) {
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
        <div className="mb-3 w-75">
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
        </div>
        <div className="mb-3 w-75">
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
        <div className="mb-3 w-75">
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
        <div className="mb-3 w-75">
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
        <div className="mb-3 w-75">
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
        </div>
        <div className="mb-5 d-flex justify-content-evenly align-items-center w-75">
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
        <div className="mb-3 w-75">
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
        <div className="mb-3 w-75">
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
        <button className="w-75 registerSubmit">修改資料</button>
      </form>
    </div>
  )
}

export default MemberInformation
