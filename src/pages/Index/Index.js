import { useEffect, useState } from 'react'

import { useContextValue } from '../../ContextDashbard'
import Logo from '../../components/Logo/Logo'
import { ShowPage, HotSelect } from './IndexPagition'

const Index = () => {
  const { getBackData } = useContextValue()
  const [indexData, setIndexData] = useState([])
  const [hotData, setHotData] = useState([])
  const [targetNum, setTargetNum] = useState(1)
  const [page, setPage] = useState(1)
  const limit = 12
  useEffect(() => {
    getBackData(`http://localhost:3005/index/?litim=${limit}`, setIndexData)
  }, [])

  const getHotData = () => {
    const singlePage = indexData?.slice((page - 1) * 4, page * 4)
    setHotData(singlePage)
  }

  useEffect(() => {
    getHotData()
  }, [indexData, targetNum, page])

  const changePage = (method) => {
    const once = indexData.length / 4
    if (method) {
      setPage((page % once) + 1)
    } else {
      page === 1 ? setPage(page * once) : setPage((page - 1) % once)
    }
  }

  return (
    <>
      <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
        <Logo />
        <ShowPage indexData={indexData} limit={limit} />
      </div>
      <HotSelect
        hotData={hotData}
        changePage={changePage}
        setTargetNum={setTargetNum}
      />
    </>
  )
}

export default Index
