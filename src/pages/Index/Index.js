import React, { useEffect, useState } from 'react'

import { useContextValue } from '../../ContextDashbard'
import Logo from '../../components/Logo/Logo'
import { ShowPage, HotSelect } from './IndexComponent'

const Index = () => {
  const getBackData = useContextValue()
  const [indexData, setIndexData] = useState()
  const [nowData, setNowData] = useState([])
  const [hotData, setHotData] = useState([])
  const [targetNum, setTargetNum] = useState(1)
  const [page, setPage] = useState(1)
  useEffect(() => {
    getBackData('http://localhost:3005/index/?litim=12', setIndexData)
  }, [])

  const getNowData = () => {
    setNowData(
      indexData?.filter((v, i) => {
        return i + 1 == targetNum
      })
    )
  }
  const getHotData = () => {
    const singlePage = indexData?.slice((page - 1) * 4, page * 4)
    setHotData(singlePage)
  }

  useEffect(() => {
    getNowData()
    getHotData()
  }, [indexData, targetNum, page])

  const changePage = (method) => {
    const limit = indexData.length / 4
    if (method) {
      setPage((page % limit) + 1)
    } else {
      page === 1 ? setPage(page * limit) : setPage((page - 1) % limit)
    }
  }

  return (
    <>
      <div className="index">
        <div className="d-flex align-items-center">
          <Logo />
          <div className="mx-5">
            <ShowPage nowData={nowData} />
          </div>
        </div>
        <p className="index-hot-select">熱門推薦</p>
        <div className="index-cards">
          <HotSelect
            hotData={hotData}
            changePage={changePage}
            setTargetNum={setTargetNum}
          />
        </div>
      </div>
    </>
  )
}

export default Index
