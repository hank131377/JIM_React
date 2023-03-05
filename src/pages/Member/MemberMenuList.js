import React from 'react'
import { useParams } from 'react-router-dom'
const MemberMenuList = () => {
  console.log(useParams())
  const { action } = useParams()
  console.log(action)
  return <div>MemberMenuList</div>
}

export default MemberMenuList
