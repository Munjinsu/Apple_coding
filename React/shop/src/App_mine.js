import {Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
//import bg from './bg.png'
// import 작명 from './data'   ** 변수가 1개일때 
//import {a, b} from './data'    /* 변수가 1개이상일때   작명 안됨 */
import data from './data'; 

function App() {

  return (
    <div className="App">

      {/* {작명}  변수 1개일때 
      {a, b}   변수 2개일떄 */}

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Alex Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' /*style={{backgroundImage: 'url(' + bg +')'}}*/></div>

      <Container>
          <Row>
          {
            data.map((list, i)=>{
              return(
               <ShoesList title={list.title} content={list.content} price={list.price} index={i+1}/>
              )
            })
          }
          
          </Row>
      </Container>


    </div>
  );
}


function ShoesList(props){
  let [shoes] = useState(data);
  
  return(
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.index}.jpg`} width="80%"/>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <span>{props.price}</span>
    </Col>
  )
  
}

export default App;
