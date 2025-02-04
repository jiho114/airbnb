import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
const Notice = () => {
  const notice = [
    {title: "에어비앤비는 무엇이며 어떻게 이용할 수 있나요?", desc: "에어비앤비는 전 세계 수백만 명의 호스트와 게스트가 쉽고 안전하고 즐겁게 여행 및 호스팅할 수 있도록 개인 프로필과 등록 숙소/체험을 확인합니다. 에어비앤비에 대해 자세히 알아보세요."},
    {title: "검색 필터는 어떻게 이용하나요?", desc: "에어비앤비 검색 필터를 사용하면 원하는 편의시설을 갖춘 체험이나 숙소만 표시할 수 있습니다. 검색 필터 사용법과 유연한 검색 방법에 대해 자세히 알아보세요."},
    {title: "호스트와 직접 만나야 하나요?", desc: "셀프 체크인을 이용하거나 집 전체 숙소를 예약하면 앱의 메시지 기능을 통해 호스트와 비대면으로 소통할 수 있으며, 문제가 생기면 언제든 호스트에게 메시지를 보낼 수 있습니다."},
    {title: "숙소나 호스트에 문제가 있어 예약을 취소해야 할 경우에는 어떻게 하나요?", desc: "대부분의 문제는 호스트에게 직접 메시지를 보내 해결할 수 있습니다. 호스트가 해결할 수 없는 문제라면, 문제를 발견한 후 24시간 이내에 에어비앤비에 연락해 주세요."},
    {title: "더 자세히 알아보고 싶으세요?", desc: "에어비앤비 도움말 센터에서 질문에 대한 더 상세한 답을 확인해 보세요."},
  ];

  // 개별적인 상태를 배열로 관리
  const [openIndexes, setOpenIndexes] = useState(Array(notice.length).fill(false));

  const handleOnClick = (idx) => {
    setOpenIndexes((prev) => {
      const newState = [...prev]; // 기존 상태 복사
      newState[idx] = !newState[idx]; // 클릭된 인덱스만 상태 변경
      return newState;
    });
  };

  return (
    <section className="main-section notice-section">
      <div className="notice-section-content-container">
        <div className="notice-section-content-text">
          <h1>자주 묻는 질문과 답변</h1>
        </div>
        <div className="notice-section-content-list">
          {notice.map((list, idx) => (
            <div className="notice-section-content-list-qna" key={idx} onClick={() => handleOnClick(idx)}>
              <p className="notice-title">{list.title} {openIndexes[idx] === false ? <FaCaretDown/> : <FaCaretUp/>}</p>
              <p className="notice-hidden-a" style={{ display: openIndexes[idx] ? "block" : "none" }}>
                {list.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notice;
