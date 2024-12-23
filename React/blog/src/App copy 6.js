///* eslint-disable*/  // Lint 끄는 기능 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  /*
  [1,2,3].map(function(a){
    console.log(a)
  })
    */

  /* map */
  /* 1. array 갯수만큼 함수안의 코드를 실행 
     2. 함수안의 파라미터는 array 안에 있던자료임
     3. return에 뭐 적으면 array로 담아줌 
  */


  return (
    <div className="App">
       <div>
           <h4 style={{fontSize:18}} className="black-nav">블로그</h4>
       </div>

       {/* <div className='list'>
          <h4> { 글제목[0] } <span onClick={()=>{
            좋아요변경(좋아요 + 1)
          }}>👍</span> {좋아요} </h4>
          <p>2월 17일 발행</p>
       </div> */}

       {
        글제목.map((a, i)=>{
          return (
            <div className='list' key={i}>
                <h4 onClick={()=> setModal(!modal)}> { a }
                  <span onClick={()=>
                    {
                      let copy = [...좋아요]
                      copy[i] = copy[i] + 1
                      좋아요변경(copy) 
                    }
                  }>👍
                  </span>
                  {좋아요[i]}
                   </h4>
                <p>2월 17일 발행</p>
            </div>
          )
        })
       }

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

export default App;
