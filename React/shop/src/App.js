import {Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
//import bg from './bg.png'
// import 작명 from './data'   ** 변수가 1개일때 
//import {a, b} from './data'    /* 변수가 1개이상일때   작명 안됨 */
import data from './data'; 
import {Routes, Link, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/detail';
import axios from 'axios'


function App() {
  let [shoes , setShoes] = useState(data);  /* Hook = 유용한 함수가 들어는거   */
  let navigate = useNavigate();   /* useNavigate  페이지 이동을 도와주는 함수  */

  let [moreShoes, setMoreShoes] = useState();
  let [moreShow, setMoreShow] = useState(false);

  return (
    <div className="App">

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Alex Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>

            <button onClick={()=>{
              let copy = [...shoes];
              copy.sort((a,b)=>{
                if (a.title > b.title){
                  return 1
                }
                if (a.title < b.title){
                  return -1
                }
                return 0
              });
              setShoes(copy)
            }}>정렬
            </button>  
            
            <Container>
                <Row>
                  {
                    shoes.map((a,i)=>{
                      return (
                        <Card shoes={shoes[i]} i={i} navigate={navigate} />
                      )
                    })
                  }    
                </Row>


                 {

                 } 
                <Row>
                  {
                   moreShow? (
                    moreShoes.map((a,i)=>{
                      return (
                        <MoreCard moreShoes={moreShoes[i]} i={i} navigate={navigate} />
                      )
                    })
                   ) : null
                  }
                </Row>
            </Container>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                setMoreShoes(result.data)
                setMoreShow(true)
              })
              .catch(()=>{
                console.log('실패함')
              })

            }}>더보기</button>
            
          </>
        } />
        <Route path='/detail/:page' element={
          <Detail shoes={shoes}/>
        } />    {/* 페이지를 여러개 만들고 싶은면 URL파라미터를 쓴다. */}

        <Route path='*' element={<div> 없는 페이지 입니다. </div>}/> 

      </Routes>
    </div>
  );
}


function Card(props){
  return(
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%"/>
      <h4 onClick={()=>{props.navigate(`/detail/${props.shoes.id}`)}} style={{cursor:'pointer'}} >{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <span>{props.shoes.price}</span>
    </Col>
  )
}

function MoreCard(props){
  return(
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.moreShoes.id+1}.jpg`} width="80%"/>
      <h4 onClick={()=>{props.navigate(`/detail/${props.moreShoes.id}`)}} style={{cursor:'pointer'}} >{props.moreShoes.title}</h4>
      <p>{props.moreShoes.content}</p>
      <span>{props.moreShoes.price}</span>
    </Col>
  )
}

export default App;


/* 
1. 방법 (get = 데이터 가져올때 / post = 데이터 보낼때)
2. 어떤 자료 (URL)
*/

/*
  ajax 쓰려면 옵션 3가지 중 택1
    1. XMLHttpRequest
    2. fetch()
    3. axios같은거  <--라이브러리
*/