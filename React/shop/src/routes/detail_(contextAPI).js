import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap';

import { Context1 } from './../App'


function Detail(props){

    let {재고} = useContext(Context1)  // 보관함 해체 함수 
    

    let [count, setCount] = useState(0);
    let [value, setValue ] = useState("")
    let [tab, setTab] = useState(0);
    
    useEffect(()=>{ 
        if(isNaN(value) == true){
            alert('숫자입력')
        }
        
    },[value])

    let {page} = useParams();
    page = parseInt(page)

    let findId = props.shoes.find((x)=>{  
        return x.id == page
    })

    return(
        <div className="container">

            <div>{재고}</div>

            {count}
            <button onClick={()=>{
                setCount(count + 1)
            }}>버튼 
            </button>

            <div className="row">
                <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${page+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <input type="text" onChange={(e)=>{
                        setValue(e.target.value)
                    }}/>
                    <h4 className="pt-5">{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <h3>탭만들기</h3>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item> 
                    <Nav.Link eventKey="link0" onClick={()=> setTab(0)}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=> setTab(1)} >버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=> setTab(2)}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <HandleTab tab={tab} tabShose={props.shoes}/>
        </div>
    )
}

function HandleTab({tab, tabShose}){

    let [fade, setFade] = useState("")

    let {재고} = useContext(Context1)  // 보관함 해체 함수 

    useEffect(()=>{

        let timer = setTimeout(()=>{
            setFade("end")
        }, 100)
        return()=>{
            clearTimeout(timer)
            setFade("")
        }
        
    },[tab])


    // if (tab == 0) {
    //     return <div>내용0</div>   
    // }else if(tab == 1){
    //     return <div>내용1</div>   
    // }else if(tab == 2){
    //     return <div>내용2</div>   
    // }

    return (
        <div className={`start ${fade}`}>
        {[<div>{tabShose[0].title}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
        {재고}
        </div>
    )

}


export default Detail


/* single page Application 단점 
    - 컴퍼넌트 간 state 공유 어려움 
        (부모 컨퍼넌트 -> 자식 컴퍼넌트 props 로 전송가능 )

    **  props 중첩 싫으면 **
    1. Context API (리액트 기본문법) 사용
    2. Redux 등 외부라이브러리 사용

    == 실전에는 Context API를 많이 사용 x (성능이슈, 컴퍼넌트 재활용 어려움)


*/