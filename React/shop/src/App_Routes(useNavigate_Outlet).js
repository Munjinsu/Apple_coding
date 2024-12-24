import {Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
//import bg from './bg.png'
// import 작명 from './data'   ** 변수가 1개일때 
//import {a, b} from './data'    /* 변수가 1개이상일때   작명 안됨 */
import data from './data'; 
import {Routes, Link, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/detail';
import EventPage from './routes/EventPage';
import EventOne from './components/EventOne';


function App() {
  let [shoes] = useState(data);  /* Hook = 유용한 함수가 들어는거   */
  let navigate = useNavigate();   /* useNavigate  페이지 이동을 도와주는 함수  */

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
      

      {/* Link 시 a 태그가 생성됨 부스트트랩 적용 안됨  */}
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      {/* 
      eact-router-dom v6부터는,

      Switch 대신 Routes를 사용
      Route 안에 component 대신 element 사용
      <Routes> 자식으로는 <Route>만 가능하다.

      <Route path="/" element={ <LandingPage /> } />       
       */}

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container>
                <Row>
                  {
                    shoes.map((a,i)=>{
                      return (
                        <Card shoes={shoes[i]} i={i}/>
                      )
                    })
                  }    
                </Row>
            </Container>
          </>
        } />
        <Route path='/detail' element={<Detail />}/>    {/*  페이지 = /detail로 접속하면 상세페이지를 보여줌 */}
        <Route path='*' element={<div> 없는 페이지 입니다. </div>}/>  {/*  나머지 제외한 페이지 (404 페이지 등 ) */}
        <Route path='/about' element={<About />}>        {/*  about/member 페이지 / about/location  페이지 */}
          <Route path='member' element={<div>멤버쉽 페이지</div>}/>    {/*  nested routes  */}
          <Route path='location' element={<div>로케이션 페이지</div>}/>
        </Route>

         {/* 
          <Route path='/about/member' element={<About />}/>
          <Route path='/about/location' element={<About />}/>
         */} 

          <Route path='/event' element={<EventPage/>}>
            <Route path='one' element={<EventOne/>} />
            <Route path='two' element={<div> 생일 기념 쿠폰받기</div>} />
          </Route>
      </Routes>

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4> 
      <Outlet></Outlet>   {/*  nested routes 이 보여질 구멍  */}
    </div>
  )
}



function Card(props){
  return(
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <span>{props.shoes.price}</span>
    </Col>
  )
  
}

export default App;
