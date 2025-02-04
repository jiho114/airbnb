import { useState } from 'react';

const Search = () => {
  const [inputValue, setInputValue] = useState("Seoul, Korea")
  const [peopleCount1, setPeopleCount1] = useState(0);
  const [peopleCount2, setPeopleCount2] = useState(0);

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleCountValue1 = (e) => {
    let newValue = e.target.value;

    if (!/^\d*$/.test(newValue)) return;
    
    newValue = Number(newValue);

    if(newValue < 0) newValue = 0;
    if(newValue > 10) newValue = 10;

    setPeopleCount1(newValue);
  }

  const handleCountValue2 = (e) => {
    let newValue = e.target.value;

    if (!/^\d*$/.test(newValue)) return;
    
    newValue = Number(newValue);

    if(newValue < 0) newValue = 0;
    if(newValue > 11) newValue = 10;

    setPeopleCount2(newValue);
  }
  
  return (
    <section className='main-section search-section'>
      <div className="search-section-content">
        <div className="search-section-content-bg"></div>
        <div className="search-section-content-bar">
          <div className="search-section-content-bar-inner">
            <div className="search-section-content-text">
              <h1>서울 숙소 찾기</h1>
              <p>통나무집이나 콘도, 캐슬을 찾고 계신가요? 에어비앤비에서 원하는 숙소를 검색해 보세요.</p>
            </div>
            <form className="search-section-content-input">
              <label htmlFor="" className='search-location'>
                <span className='search-section-content-location'>위치</span>
                {/* value 값 state로 초기값을 설정해줘야 함. 지금은 입력 안됨 */}
                <input type="text" className='search-section-content-location-input' onChange={handleInputValue} value={inputValue} placeholder='어디든지'/>
              </label>
              <fieldset className='search-section-check'>
                <label htmlFor="" className='search-check'>
                  <span className='search-section-content-check'>체크인</span>
                  <input type="date" />
                </label>
                <label htmlFor="" className='search-check'>
                  <span className='search-section-content-check'>체크아웃</span>
                  <input type="date" />
                </label>
              </fieldset>
              <fieldset className='search-section-people'>
                <label htmlFor="" className='search-people'>
                  <span className='search-section-content-people'>성인</span>
                  <input type="text" value={peopleCount1} onChange={handleCountValue1} />
                </label>
                <label htmlFor="" className='search-people'>
                  <span className='search-section-content-people'>어린이</span>
                  <input type="text" value={peopleCount2} onChange={handleCountValue2} />
                </label>
              </fieldset>
              <button type='submit'>검색하기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;