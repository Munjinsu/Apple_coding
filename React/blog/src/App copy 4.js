///* eslint-disable*/  // Lint 끄는 기능 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState(0);

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
          <h4> { 글제목[2] } </h4>
          <p>2월 17일 발행</p>
       </div>
       <List/>

        <Modal />  {/* <Modal> <Modal />  */}
    </div>
  );
}

 function Modal(){
    return (            // return 소괄호 안에서 하나의 태그만 올 수 있음 
      <>       {/* ==   <div> 의미없는 div  =>   <>  이렇게 표현 가능   */}
      <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
      <div></div> 
      </>
    )
 } 

 /*  컴퍼넌트로 만들면 좋은점  */
 /*
      1. 반복적인 html 축약할때 
      2. 큰 페이지들 
      3. 자주변경되는 것들들
 */


function List(){
  return (
    <div className='list'>
        <h4> 글제목 </h4>
        <p>5월 17일 발행</p>
      </div>
  )
}




export default App;
