import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import MenuMemberVertical from '../../components/MenuMemberVertical/MenuMemberVertical'

const MemberIndex = () => {
  return (
    <>
      {/* <LogoHorizontal /> */}
      <div className="d-flex flex-column flex-xxl-row justify-content-center align-items-center align-items-xxl-start">
        <MenuMemberVertical />
        <div className="store">
          <div className="store-title">
            <p>會員管理</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MemberIndex
