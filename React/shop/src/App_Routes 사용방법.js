import {Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
//import bg from './bg.png'
// import 작명 from './data'   ** 변수가 1개일때 
//import {a, b} from './data'    /* 변수가 1개이상일때   작명 안됨 */
import data from './data'; 
import {Routes, Link, Route} from 'react-router-dom';
import Detail from './routes/detail';


function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Alex Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

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
      </Routes>

        


    </div>
  );
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
