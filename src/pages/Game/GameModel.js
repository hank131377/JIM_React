import { FaLongArrowAltDown } from 'react-icons/fa'

//Game
const reducer = (state, action) => {
  switch (action.type) {
    case 'searchKey': {
      return { ...state, searchKey: action.payload }
    }
    case 'city': {
      return { ...state, city: action.payload }
    }
    case 'minLimit': {
      return { ...state, minLimit: action.payload }
    }
    case 'difficulty': {
      return { ...state, difficulty: action.payload }
    }
    case 'type': {
      return { ...state, type: action.payload }
    }
    case 'cash': {
      return { ...state, cash: action.payload }
    }
    case 'time': {
      return { ...state, time: action.payload }
    }
    case 'other': {
      return { ...state, other: action.payload }
    }
    case 'order': {
      return { ...state, order: action.payload }
    }
    case 'currentPage': {
      return { ...state, currentPage: action.payload }
    }
    case 'searchSwitch': {
      return { ...state, searchSwitch: action.payload }
    }
    default:
      return state
  }
}

const Searchreducer = (state, action) => {
  switch (action.type) {
    case 'searchKey': {
      return { ...state, searchKey: action.payload }
    }
    case 'city': {
      return { ...state, city: action.payload }
    }
    case 'minLimit': {
      return { ...state, minLimit: action.payload }
    }
    case 'difficulty': {
      return { ...state, difficulty: action.payload }
    }
    case 'type': {
      return { ...state, type: action.payload }
    }
    case 'cash': {
      return { ...state, cash: action.payload }
    }
    case 'time': {
      return { ...state, time: action.payload }
    }
    case 'other': {
      return { ...state, other: action.payload }
    }
    case 'order': {
      return { ...state, order: action.payload }
    }
    case 'currentPage': {
      return { ...state, currentPage: action.payload }
    }
    case 'searchSwitch': {
      return { ...state, searchSwitch: action.payload }
    }
    default:
      return state
  }
}

const GameSearchModel = ({
  state,
  dispatch,
  Searchdispatch,
  typeText,
  typeName,
  typeData,
  typeSid,
  typeValue,
  Searchstate,
}) => {
  return (
    <div>
      <p className="m-0 me-3">{typeText}</p>
      <ul className="d-flex list-unstyled align-items-center flex-sm-wrap">
        <li
          className={
            state[typeName] === 0
              ? 'btn btn-outline-danger m-2'
              : 'btn btn-outline-secondary m-2'
          }
          onClick={() => {
            dispatch({
              type: typeName,
              payload: 0,
            })
            Searchdispatch({
              type: typeName,
              payload:
                typeName === 'cash' &&
                state[typeName] !== 0 &&
                Searchstate[typeName] !== 10000
                  ? 10000
                  : '',
            })
          }}
        >
          全部{typeText}
        </li>
        {typeData.map((v, i) => {
          return (
            <li
              key={v[typeSid]}
              className={
                state[typeName] === i + 1
                  ? 'btn btn-outline-danger m-2'
                  : 'btn btn-outline-secondary m-2'
              }
              onClick={() => {
                dispatch({
                  type: typeName,
                  payload: v[typeSid],
                })
                Searchdispatch({
                  type: typeName,
                  payload:
                    typeName === 'cash' &&
                    state[typeName] === 0 &&
                    Searchstate[typeName] !== 10000
                      ? 10000
                      : v[typeValue],
                })
              }}
            >
              {v[typeValue]}
              {typeName === 'cash' ? <FaLongArrowAltDown /> : ''}
              {typeName === 'time' && i >= 0 ? '分' : ''}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { reducer, Searchreducer, GameSearchModel }
