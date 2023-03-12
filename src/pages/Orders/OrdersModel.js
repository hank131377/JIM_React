const RadioBoxCheck = ({
  register,
  errors,
  id,
  idText,
  type,
  name,
  value = '',
  rules,
}) => {
  return (
    <>
      <input
        className={`form-check-input ${errors[id] ? 'is-invalid' : ''}`}
        type={type}
        name={name}
        id={id}
        value={value}
        {...register(name, rules)}
      />
      <label className="form-check-label" htmlFor={id}>
        {idText}
      </label>
      {errors[id] && (
        <div className="invalid-feedback">{errors[id]?.message}</div>
      )}
    </>
  )
}

const Input = ({ register, errors, id, idText, type, rules }) => {
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
      />
      {errors[id] && (
        <div id="validationServer03Feedback" className="invalid-feedback">
          {errors[id]?.message}
        </div>
      )}
    </>
  )
}

const Select = ({
  register,
  errors,
  id,
  idText,
  rules,
  children,
  disabled = false,
  setDiscountPrice,
  searchParams,
  discount,
  setdiscountPriceId,
}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {idText}
      </label>
      <select
        id={id}
        {...register(id, rules)}
        className={`form-select ${errors[id] ? 'is-invalid' : ''}`}
        disabled={disabled}
        onChange={(e) => {
          const discountChecked = discount.filter((v, i) => {
            return v.discountID == e.target.value
          })
          let price = 0
          if (discountChecked[0]?.discountPrice) {
            price = discountChecked[0]?.discountPrice
          }
          setDiscountPrice(searchParams.get('cash') - price)
          setdiscountPriceId(e.target.value)
        }}
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

export { Input, Select, RadioBoxCheck }
