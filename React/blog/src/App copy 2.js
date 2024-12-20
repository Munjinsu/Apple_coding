import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  // 자료를 잠깐 저장 할땨 state 문법 
  let [글제목, b] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']);  // ['남자 코드 추천' , 함수수]
  // let [글제목2, b2] = useState('강남우동 맛집');  
  // let [글제목3, b3] = useState('파이썬 독학');  

  /* Destructuring 문법
      let num = [1, 2];
      let a = nunm[0];  1
      let b = nunm[1];  2

      --> let [a, b] = [1, 2]
  */

// state는 자동으로 재렌더링 된다. 


  return (
    <div className="App">
       <div>
           <h4 style={{fontSize:18}} className="black-nav">블로그</h4>
       </div>
       <div className='list'>
          <h4> { 글제목[0] } </h4>
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
