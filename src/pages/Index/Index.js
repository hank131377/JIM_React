import React from 'react'
import Logo from '../../components/Logo/Logo'
import './Index.css'

const Index = () => {
  return (
    <>
      <div className="index">
        <div className="d-flex align-items-center justify-content-around index-header">
          <Logo />
          <div className="mx-5 index-hot">
            <div>
              <p style={{ fontSize: '30px', color: '#7F7F7F' }}>熱門推薦</p>
              <h3 style={{ fontSize: '60px' }}>
                紅衣女孩<span>star</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                facere saepe vitae deserunt nemo voluptates obcaecati, tempora
                aspernatur qui accusantium ducimus? Aut eaque, harum commodi
                dolorem quibusdam alias consequuntur tempora!
              </p>
              <ul className="d-flex list-unstyled">
                <li className="px-3 mx-2 btn btn-outline-danger">恐怖</li>
                <li className="px-3 mx-2 btn btn-outline-danger">5-8人</li>
                <li className="px-3 mx-2 btn btn-outline-danger">90分鐘</li>
              </ul>
              <p className=" mx-2 btn btn-outline-danger">
                台北市大同區延平北路202號3樓
              </p>
            </div>
          </div>
          <div className="text-center">
            <img className="w-100" src="gamesImages/1.jpg" alt="" />
            <button
              className="btn btn-danger px-5 py-2 my-4 rounded-pill"
              style={{ fontSize: '25px' }}
            >
              馬上預約
            </button>
          </div>
        </div>
        <p style={{ fontSize: '32px' }}>熱門推薦</p>
        <div className="index-carousel">
          <div className="img-scroll">
            <div>
              <img src="gamesImages/1.jpg" alt="" />
              <img src="gamesImages/2.jpg" alt="" />
              <img src="gamesImages/3.jpg" alt="" />
              <img src="gamesImages/4.jpg" alt="" />
              <img src="gamesImages/5.jpg" alt="" />
              <img src="gamesImages/6.jpg" alt="" />
            </div>
            <div>
              <img src="gamesImages/1.jpg" alt="" />
              <img src="gamesImages/2.jpg" alt="" />
              <img src="gamesImages/3.jpg" alt="" />
              <img src="gamesImages/4.jpg" alt="" />
              <img src="gamesImages/5.jpg" alt="" />
              <img src="gamesImages/6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
