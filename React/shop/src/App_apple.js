import {Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
//import bg from './bg.png'
// import 작명 from './data'   ** 변수가 1개일때 
//import {a, b} from './data'    /* 변수가 1개이상일때   작명 안됨 */
import data from './data'; 
import {Routes, Rout, Link, Route} from 'react-router-dom';


function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<div>메인페이지</div>} />
          <Route path='/detail' element={<div>상세페이지</div>} />  {/*  페이지 = /detail로 접속하면 상세페이지를 보여줌 */}
        </Routes>



      {/* {작명}  변수 1개일때 
      {a, b}   변수 2개일떄 */}

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
      <div className='main-bg' /*style={{backgroundImage: 'url(' + bg +')'}}*/></div>

      <Container>
          <Row>
            {/* <Card shoes={shoes[0]} i={1}/>
            <Card shoes={shoes[1]} i={2}/>
            <Card shoes={shoes[2]} i={3}/> */}

            {
              shoes.map((a,i)=>{
                return (
                  <Card shoes={shoes[i]} i={i}/>
                )
              })
            }    
          </Row>
      </Container>
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
