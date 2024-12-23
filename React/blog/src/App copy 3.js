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

        <button onClick={()=>{
          let copy = [...글제목]
          copy.sort()
          글제목변경(copy)
        }}>가나다순 정렬</button>


       <span onClick={()=>{
              //글제목변경(['여자코트 추천', '강남우동 맛집', '파이썬 독학'])

              /*
              let copy = 글제목;
              copy[0] = "여자코드 추천"
              글제목변경(copy);

              console.log(copy == 글제목) //true  copy와 기존 state가 같다고 생각 ==> 변하지 않음  == 화살표 안바뀜
              */

              let copy = [...글제목];  // ... 괄호를 벗겨주세요 ,[] 다시 씌어 주세요 == > 새로운 독립 생성  화살표도 바뀜
              copy[0] = "여자코드 추천"
              글제목변경(copy);


              //state 가 array 이나 오브젝트이면 독립적 카피본을 만들어서 수정해야됨 ~~~!!!
              
           }}> 버튼 
      </span>


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
    </div>
  );
}

export default App;
