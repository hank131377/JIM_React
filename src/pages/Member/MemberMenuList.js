import React from 'react'
import { useParams } from 'react-router-dom'
import Member from './Member'
import { MemberCollect, MemberInformation } from './MemberComponent'
import MemberCoupon from './MemberCoupon'
const MemberMenuList = () => {
  const { action } = useParams()
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
    case 'coupon': {
      currentPage = <MemberCoupon />
      break
    }
    default: {
      currentPage = <Member />
    }
  }
  return <>{currentPage}</>
}
export default MemberMenuList
