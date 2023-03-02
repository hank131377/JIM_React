import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaLine,
} from 'react-icons/fa'

import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title m-0 foot-context">J O I N M E</h2>
      <div className="d-flex justify-content-center">
        <ul className="pt-5 px-5 list-unstyled text-center foot-context">
          <li className="py-4 text-danger" style={{ cursor: 'default' }}>
            認識平台
          </li>
          <li>關於平台</li>
          <li>使用者條款</li>
          <li>常見問題與幫助</li>
        </ul>
        <ul className="pt-5 px-5 list-unstyled text-center foot-context">
          <li
            className="py-4 text-danger footer-sub"
            style={{ cursor: 'default' }}
          >
            給玩家
          </li>
          <li>合作夥伴</li>
          <li>會員好禮</li>
          <li>兌換商品</li>
        </ul>
        <ul className="pt-5 px-5 list-unstyled text-center foot-context">
          <li
            className="py-4 text-danger footer-sub"
            style={{ cursor: 'default' }}
          >
            合作夥伴
          </li>
          <li>註冊廠商</li>
          <li>廠商登入</li>
          <li>同業合作</li>
        </ul>
        <ul className="pt-5 px-5 list-unstyled text-center">
          <li
            className="py-4 text-danger footer-sub foot-context"
            style={{ cursor: 'default' }}
          >
            聯絡我們
          </li>
          <ul className="list-unstyled d-flex">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaLine />
            </li>
          </ul>
        </ul>
      </div>
      <h6 className="text-center">Copyright@2023JIM All Rights Reserved</h6>
    </div>
  )
}

export default Footer
