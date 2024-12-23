///* eslint-disable*/  // Lint 끄는 기능 

import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']); 
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("")

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
                <h4 onClick={()=> 
                   {setModal(true); 
                    setTitle(i)
                   }}> { a }
                  <span onClick={(e)=>   /* 상위 html로 퍼지는 이벤트버블링을 막고 싶은면 e.stopPropagation() */
                    {
                      e.stopPropagation();
                      let copy = [...좋아요]
                      copy[i] = copy[i] + 1
                      좋아요변경(copy) 
                    }
                  }>👍
                  </span>
                  {좋아요[i]}
                   </h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let copy = [...글제목]
                  //copy = copy.filter((e) => (e) != copy[i]);  방법2
                  copy.splice(i,1)
                  글제목변경(copy)
                }}>삭제</button>
            </div>
          )
        })
       }

       <form onSubmit={(e)=>{
            e.preventDefault();
            let copy = [입력값,...글제목]
            글제목변경(copy)
        }}>
          <input onChange={(e)=> { 
            입력값변경(e.target.value)
          }} required/>
          <button> 글추가 </button>
       </form>
       
      { modal? <Modal 글제목={글제목} title={title} 글제목변경={글제목변경함수}/> : null } 
      <Modal2></Modal2>

    </div>

  );
}

 function Modal(props){
    return (
      <div className='modal'>
          <h4>{props.글제목[props.title]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={props.글제목변경}>글수정</button>
      </div>
    )
 }

 
 {/* 예전 방식  */}
 class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age} 
        <button onClick={()=>{
          this.setState({age : 21})
        }} >버튼</button>
      </div>
    )
  }
 } 

export default App;
