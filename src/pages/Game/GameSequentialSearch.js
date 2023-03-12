import { useRef, Fragment } from 'react'

const GameSequentialSearch = ({
  state,
  dispatch,
  searchbarRef,
  Searchdispatch,
  peopleMinNun,
}) => {
  const searchButtonRef = useRef(null)
  const citySelect = useRef([
    '台北市',
    '新北市',
    '桃園市',
    '新竹市',
    '台中市',
    '高雄市',
  ])

  return (
    <div className="container d-flex flex-xl-row flex-column align-items-center">
      <input
        type="search"
        className="game-search"
        placeholder="請輸入關鍵字"
        value={state.searchKey}
        onChange={(e) => {
          dispatch({
            type: 'searchKey',
            payload: e.target.value,
          })
          Searchdispatch({
            type: 'searchKey',
            payload: e.target.value,
          })
        }}
      />
      <div>
        <div className="d-flex">
          <select
            value={state.city}
            className="game-select mx-3 my-3"
            onChange={(e) => {
              dispatch({
                type: 'city',
                payload: e.target.value,
              })
              Searchdispatch({
                type: 'city',
                payload: e.target.value,
              })
            }}
          >
            <option value="">全部地區</option>
            {citySelect.current.map((v, i) => {
              return (
                <Fragment key={v}>
                  <option value={v}>{v}</option>
                </Fragment>
              )
            })}
          </select>
          <select
            value={state.minLimit}
            className="game-select mx-3 my-3"
            onChange={(e) => {
              dispatch({
                type: 'minLimit',
                payload: e.target.value,
              })
              Searchdispatch({
                type: 'minLimit',
                payload: e.target.value,
              })
            }}
          >
            <option value={100}>最少人數</option>
            {peopleMinNun.map((v, i) => {
              return (
                <Fragment key={i}>
                  <option value={v}>{v}人</option>
                </Fragment>
              )
            })}
          </select>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          searchbarRef.current.classList.toggle('close')
          searchButtonRef.current.classList.toggle('btn-danger')
        }}
        ref={searchButtonRef}
      >
        進階篩選
      </button>
    </div>
  )
}

export default GameSequentialSearch
