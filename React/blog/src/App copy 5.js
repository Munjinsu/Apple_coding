///* eslint-disable*/  // Lint 끄는 기능 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
       <div>
           <h4 style={{fontSize:18}} className="black-nav">블로그</h4>
       </div>
       <div className='list'>
          <h4> { 글제목[0] } <span onClick={()=>{
            좋아요변경(좋아요 + 1)
          }}>👍</span> {좋아요} </h4>
          <p>2월 17일 발행</p>
       </div>
       <div className='list'>
          <h4> { 글제목[1] } </h4>
          <p>2월 17일 발행</p>
       </div>
       <div className='list'>
          <h4 onClick={()=>{
              setModal(!modal)
          }}> { 글제목[2] } </h4>
          <p>2월 17일 발행</p>
       </div>


          {/* if문이 안되기때문에 삼항연산자 사용 */}

          {/*
            조건식? 참일때 실행코드 : 거짓일때 실행코드 
          */}

       { modal? <Modal /> : null } 

    </div>
  );
}

 function Modal(){
    return (
      <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
    )
 } 


 /* 동적 ui 만드는 법 (모달창, 탭 메뉴, 햄버거 메뉴, 툴팁 등)*/
 /*
      1. HTML, CSS 로 미리 디자인 완성
      2. UI의 현재 상태를 state 로 작성
      3. state에 따라 ui가 어떻게 보일지 작성
 */
export default App;
