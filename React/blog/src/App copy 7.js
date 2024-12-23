///* eslint-disable*/  // Lint 끄는 기능 

import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function 글제목변경함수(){
    let copy = [...글제목];
    copy[0] = "여자코트 추천"
    글제목변경(copy);
  }

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
      

      { modal? <Modal color={"yellow"} 글제목={글제목} 글제목변경={글제목변경함수}/> : null } 

      {/* 부모 -> 자식 state 전송방법
      1. 자식컴포턴트에서 작명={state이름}
      2. props파라미터 등룍 후 props.작명 사용
      */}

    </div>
  );
}

 function Modal(props){
    return (
      <div className='modal' style={{backgroundColor: props.color}}>
          <h4>{props.글제목[0]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={props.글제목변경}>글수정</button>  
      </div>
    )
 } 

export default App;
