import React from "react";
import { lastitemData } from "../data/item";

import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Item = () => {
  return (
    <section className="main-section search-section">
      <div className="item-section-content">
        <div className="item-section-content-text">
          <h2>넓은 공간을 갖춘 숙소</h2>
          <p>꿈에 그리던 휴가를 위한 편안한 독채 숙소를 찾아보세요.</p>
        </div>
        <Swiper
          className="item-section-content-slide-container"
          modules={[A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 3000, // 3초마다 슬라이드 변경
            disableOnInteraction: false, // 유저가 터치해도 자동 재생 유지
          }}
          loop={true} // 무한 반복
          breakpoints={{
            320: { slidesPerView: 1 }, // 320px 이하: 1개
            768: { slidesPerView: 2 }, // 768px 이상: 2개
            1024: { slidesPerView: 3 }, // 1024px 이상: 3개
            1280: { slidesPerView: 4 }, // 1280px 이상: 4개
          }}

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {lastitemData.map((item, idx) => (
            <SwiperSlide key={idx} className="item-section-content-slide">
              <div className="itme-section-content-image">
                <img src={item.url} alt="에어비앤비 숙소" />
              </div>
              <div className="item-section-content-info">
                <h3>{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
                <span>지난주 {item.see}회 조회됨</span>
                <div className="item-section-content-price-box">
                  <p className="item-prevprice">{item.prevprice}</p>
                  <p className="item-price">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="item-section-content-btn">더 찾아보기</button>
      </div>
    </section>
  );
};

export default Item;
