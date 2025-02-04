import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { PiUmbrellaSimpleLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";

const Topnotice = () => {
  const topnotice = [
    {id : 1, title : "유연한 일정 변경이 가능한 숙소", description : "환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다."},
    {id : 2, title : "원하는 편의시설을 갖춘 숙소", description : "온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요."},
    {id : 3, title : "실제 후기 읽기", description : "숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요."}
  ]
  return (
    <section className='main-section top-notice-section'>
      <div className="top-notice-section-content">
        <ul className="top-notice-section-content-list">
          {topnotice.map((list, idx) => (
            <li key={idx}>
              <div className="top-notice-icon">
                {list.id === 1 ? <CiCalendarDate className='icon'/> : list.id === 2 ? <PiUmbrellaSimpleLight className='icon'/> : list.id === 3 ? <CiStar className='icon'/> : null}
              </div>
              <div className="top-notice-text-title">
                <p>{list.title}</p>
              </div>
              <div className="top-notice-text-desc">
                <p>{list.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Topnotice;