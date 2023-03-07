import React from 'react'
import { useParams } from 'react-router-dom'
import Member from './Member'
import MemberCollect from './MemberCollect'
import MemberInformation from './MemberInformation'
const MemberMenuList = () => {
  console.log(useParams())
  const { action } = useParams()
  console.log(action)
  let currentPage = ''
  switch (action) {
    case 'collect': {
      currentPage = <MemberCollect />
      break
    }
    case 'information': {
      currentPage = <MemberInformation />
      break
    }
    default: {
      currentPage = <Member />
    }
  }
  return <>{currentPage}</>
}
export default MemberMenuList
