import { NavLink, useParams } from 'react-router-dom'
const MenuMemberVertical = () => {
  const { action } = useParams()
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-flex flex-xxl-column flex-row justify-content-evenly text-nowrap">
        <li>
          <NavLink to="/member" className={!action ? 'clicked' : ''}>
            訂單紀錄
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/collect"
            className={action == 'collect' ? 'clicked' : ''}
          >
            收藏
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/information"
            className={action == 'information' ? 'clicked' : ''}
          >
            個人資料
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuMemberVertical
