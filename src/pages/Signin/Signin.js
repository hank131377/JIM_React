import './Signin.css'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import { Link } from 'react-router-dom'
import { SigninRouter } from './SigninModel'

const Signin = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-sm-3 justify-content-center flex-sm-row flex-column">
        <SigninRouter name="會員" nameen="MEMBER" url="member" />
        <SigninRouter name="工作室" nameen="SHOP KEEPER" url="shop" />
      </div>
    </div>
  )
}

export default Signin
