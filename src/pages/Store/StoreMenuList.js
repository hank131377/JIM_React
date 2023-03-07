import React from 'react'
import { useParams } from 'react-router-dom'
import Store from './Store'
import StoreAdd from './StoreAdd'
import StoreGameList from './StoreGameList'
import StoreInformation from './StoreInformation'

const StoreMenuList = () => {
  console.log(useParams())
  const { action } = useParams()
  console.log(action)
  let currentPage = ''
  switch (action) {
    case 'add': {
      currentPage = <StoreAdd />
      break
    }
    case 'gamelist': {
      currentPage = <StoreGameList />
      break
    }
    case 'information': {
      currentPage = <StoreInformation />
      break
    }
    default: {
      currentPage = <Store />
    }
  }
  return <>{currentPage}</>
}

export default StoreMenuList
