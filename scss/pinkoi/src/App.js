import logo_1 from './svg/logo_1.svg'
import logo_2 from './svg/logo_2.svg'
import logo_3 from './svg/logo_3.svg'
import './style/all.scss'

function App() {
  return (
    <div className="wrap">
      <header>
        <div className="d-flex justify-content-around align-items-center flex-wrap header__title">
          <div className="header__search">
            <div className="d-flex">
              <input
                type="text"
                placeholder="搜尋好設計、體驗活動"
                className="px-3 py-2"
              />
              <button className="px-3 py-2">搜尋</button>
            </div>
            <div>
              <a href="#" className="fs-13">
                換季家具
              </a>
              <a href="#" className="fs-13">
                大師球
              </a>
              <a href="#" className="fs-13">
                熱紅酒
              </a>
              <a href="#" className="fs-13">
                環保杯
              </a>
              <a href="#" className="fs-13">
                雨天救援
              </a>
              <a href="#" className="fs-13">
                家電7折起
              </a>
            </div>
          </div>
          <div className="header__login py-3">
            <a href="#">我想在 Pinkoi 上販售</a>
            <button>登入/註冊</button>
          </div>
        </div>
        <div className="header__menu mt-5">
          <ul className="d-flex justify-content-around flex-wrap">
            <li>
              <a href="#">主題企劃</a>
            </li>
            <li>
              <a href="#">配件飾品</a>
            </li>
            <li>
              <a href="#">包包提袋</a>
            </li>
            <li>
              <a href="#">居家生活</a>
            </li>
            <li>
              <a href="#">品味美食</a>
            </li>
            <li>
              <a href="#">廚房餐桌</a>
            </li>
            <li>
              <a href="#">創意科技</a>
            </li>
            <li>
              <a href="#">所有分類</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/c-pic-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-4.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-5.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-6.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-7.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-8.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-9.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./images/c-pic-10.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <section className="list">
        <div className="d-flex align-items-end py-2">
          <h2 className="m-0 fs-28">免運專區</h2>
          <a href="#" className="fs-14">
            看更多
          </a>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-1.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p className="m-0" title="【限時免運】摩艾圓滾滾 凸凸中指">
                  <span className="px-1 list__title--hot">Hot</span>
                  【限時免運】摩艾圓滾滾 凸凸中指
                </p>
                <div>
                  <a href="#" className="">
                    T-bone 工作室
                  </a>
                </div>
                <div>
                  <span className="">NT$ 395</span>
                  <span className="ps-1 list__cash--delete">NT$ 500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-2.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p className="m-0" title="方度乳酪－生乳酪熔岩舒芙蕾(4入)">
                  <span className="px-1 list__title--hot">Hot</span>
                  方度乳酪－生乳酪熔岩舒芙蕾(4入)
                </p>
                <div>
                  <a href="#" className="">
                    七見櫻堂 甜點專賣
                  </a>
                </div>
                <div>
                  <span className="">NT$ 280</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-3.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p
                  className="m-0"
                  title="Bag to Basics 韓國製 Vegan Leather 經典扣包"
                >
                  <span className="px-1 list__title--hot">Hot</span>
                  Bag to Basics 韓國製 Vegan Leather 經典扣包
                </p>
                <div>
                  <a href="#" className="">
                    Bag to basics
                  </a>
                </div>
                <div>
                  <span className="">NT$ 2,002</span>
                  <span className="ps-1 list__cash--delete">NT$ 500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-4.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p
                  className="m-0"
                  title="【限時免運】摩艾圓滾滾 手比愛心 愛你唷 禮物"
                >
                  <span className="px-1 list__title--hot">Hot</span>
                  【限時免運】摩艾圓滾滾 手比愛心 愛你唷 禮物
                </p>
                <div>
                  <a href="#" className="">
                    T-bone 工作室
                  </a>
                </div>
                <div>
                  <span className="">NT$ 395</span>
                  <span className="ps-1 list__cash--delete">NT$ 500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-5.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p
                  className="m-0"
                  title="【雙11限定】The Guardia 箭紋 皮革手環 (6色)"
                >
                  <span className="px-1 list__title--hot">Hot</span>
                  【雙11限定】The Guardia 箭紋 皮革手環 (6色)
                </p>
                <div>
                  <a href="#" className="">
                    Crudo Leather Craft
                  </a>
                </div>
                <div>
                  <span className="">NT$ 806</span>
                  <span className="ps-1 list__cash--delete">NT$ 3,645</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="list__box">
              <div className="list__img">
                <a href="#">
                  <img src="./images/s1-pic-6.jpg" alt="" className="w-100" />
                </a>
              </div>
              <div className="list__title">
                <p
                  className="m-0"
                  title="【雙 11 限時促銷】Tidy長皮夾 日本栃木皮革 皮包 系"
                >
                  <span className="px-1 list__title--hot">Hot</span>
                  【雙 11 限時促銷】Tidy長皮夾 日本栃木皮革 皮包 系
                </p>
                <div>
                  <a href="#" className="">
                    Leather Goods Shop
                  </a>
                </div>
                <div>
                  <span className="">NT$ 2,775</span>
                  <span className="ps-1 list__cash--delete">NT$ 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="list d-flex flex-column">
        <div className="d-flex align-items-end py-2">
          <h2 className="m-0 fs-28">品牌推廣</h2>
          <a href="#" className="fs-14">
            看更多
          </a>
        </div>
        <div className="row flex-wrap">
          <div className="col-12 col-md-6 col-xxl-3 p-0">
            <div>
              <div className=" p-0 list__card">
                <div className="d-flex">
                  <div className="list__overlapImg">
                    <img
                      src="./images/c1-pic-1-1.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="d-flex flex-column list__overlapImg">
                    <img src="./images/c1-pic-1-2.jpg" alt="" />
                    <img src="./images/c1-pic-1-3.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="list__logo">
                    <img
                      src="./images/c1-pic-1-4.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="py-1">FUNIKISKY</p>
                    <p className="py-1">評價5.0</p>
                    <p className="py-1">關注人數</p>
                    <p className="py-1">767</p>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark">即刻探索</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 p-0">
            <div>
              <div className="p-0 list__card">
                <div className="d-flex">
                  <div className="list__overlapImg">
                    <img
                      src="./images/c1-pic-2-1.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="d-flex flex-column list__overlapImg">
                    <img src="./images/c1-pic-2-2.jpg" alt="" />
                    <img src="./images/c1-pic-2-3.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="list__logo">
                    <img
                      src="./images/c1-pic-1-4.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="py-1">FUNIKISKY</p>
                    <p className="py-1">評價5.0</p>
                    <p className="py-1">關注人數</p>
                    <p className="py-1">767</p>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark">即刻探索</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 p-0">
            <div>
              <div className="p-0 list__card">
                <div className="d-flex">
                  <div className="list__overlapImg">
                    <img
                      src="./images/c1-pic-3-1.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="d-flex flex-column list__overlapImg">
                    <img src="./images/c1-pic-3-2.jpg" alt="" />
                    <img src="./images/c1-pic-3-3.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="list__logo">
                    <img
                      src="./images/c1-pic-1-4.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="py-1">FUNIKISKY</p>
                    <p className="py-1">評價5.0</p>
                    <p className="py-1">關注人數</p>
                    <p className="py-1">767</p>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark">即刻探索</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 p-0">
            <div>
              <div className="p-0 list__card">
                <div className="d-flex">
                  <div className="list__overlapImg">
                    <img
                      src="./images/c1-pic-3-1.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="d-flex flex-column list__overlapImg">
                    <img src="./images/c1-pic-3-2.jpg" alt="" />
                    <img src="./images/c1-pic-3-3.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="list__logo">
                    <img
                      src="./images/c1-pic-1-4.jpg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="py-1">FUNIKISKY</p>
                    <p className="py-1">評價5.0</p>
                    <p className="py-1">關注人數</p>
                    <p className="py-1">767</p>
                  </div>
                  <div>
                    <button className="btn btn-outline-dark">即刻探索</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg__gray">
        <div className="row justify-content-center py-5 m-0">
          <div className="col-12 text-center col-md-3">
            <img src={logo_1} alt="" />
            <h3 className="fs-28 py-2">集結全球好設計</h3>
            <p style={{ lineHeight: 1.5 }}>
              販售超過百萬件獨特商品，透過好設計實現心中的理想生活！
            </p>
          </div>
          <div className="col-12 text-center col-md-3">
            <img src={logo_2} alt="" />
            <h3 className="fs-28 py-2">優質獨立創作者</h3>
            <p style={{ lineHeight: 1.5 }}>
              串連全球優質設計師群，直接與他們溝通購買專屬你的設計品。
            </p>
          </div>
          <div className="col-12 text-center col-md-3">
            <img src={logo_3} alt="" />
            <h3 className="fs-28 py-2">安心消費有保障</h3>
            <p style={{ lineHeight: 1.5 }}>
              專業工程團隊時時把關，保障你的個資安全。
            </p>
          </div>
        </div>
      </section>
      <footer className="d-block d-md-flex justify-content-between">
        <div>
          <p className="px-2">探索好設計</p>
          <ul className="d-flex d-md-block flex-wrap">
            <li className="px-2">
              <a href="">所有商品分類</a>
            </li>
            <li className="px-2">
              <a href="">設計誌</a>
            </li>
            <li className="px-2">
              <a href="">跨館合併結帳專區</a>
            </li>
            <li className="px-2">
              <a href="">Pinkoi 禮物卡</a>
            </li>
            <li className="px-2">
              <a href="">Pinkoi 群眾募資</a>
            </li>
            <li className="px-2">
              <a href="">找靈感</a>
            </li>
            <li className="px-2">
              <a href="">逛櫥窗</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="px-2">販售</p>
          <ul className="d-flex d-md-block flex-wrap">
            <li className="px-2">
              <a href="">我想在 Pinkoi 上販售</a>
            </li>
            <li className="px-2">
              <a href="">我想提案群眾募資專案</a>
            </li>
            <li className="px-2">
              <a href="">設計館問與答</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="px-2">幫助/政策</p>
          <ul className="d-flex d-md-block flex-wrap">
            <li className="px-2">
              <a href="">問與答</a>
            </li>
            <li className="px-2">
              <a href="">大宗採購</a>
            </li>
            <li className="px-2">
              <a href="">訊息公告</a>
            </li>
            <li className="px-2">
              <a href="">服務條款</a>
            </li>
            <li className="px-2">
              <a href="">退貨政策</a>
            </li>
            <li className="px-2">
              <a href="">會員制度 & P Coins 回饋計畫</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="px-2">認識 Pinkoi</p>
          <ul className="d-flex d-md-block flex-wrap">
            <li className="px-2">
              <a href="">關於我們</a>
            </li>
            <li className="px-2">
              <a href="">媒體報導</a>
            </li>
            <li className="px-2">
              <a href="">全新 Pinkoi</a>
            </li>
            <li className="px-2">
              <a href="">人才招募</a>
            </li>
            <li className="px-2">
              <a href="">Pinkoi for Business</a>
            </li>
            <li className="px-2">
              <a href="">iichi.com</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
